"use client"

import { useState } from "react"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"

// Mock data for shopping cart
const initialCartItems = [
  {
    id: "item-1",
    name: "Smartphone XYZ",
    price: 12999.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "item-2",
    name: "Auriculares Bluetooth",
    price: 1499.99,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // Fixed shipping cost
  const shipping = 150

  // Calculate total
  const total = subtotal + shipping

  // Update item quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Carrito de Compras</h2>

      {cartItems.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-[1fr_300px]">
          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Producto</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead>Precio</TableHead>
                  <TableHead>Cantidad</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="w-[70px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="h-16 w-16 rounded-md object-cover"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>${item.price.toLocaleString("es-MX")}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      ${(item.price * item.quantity).toLocaleString("es-MX")}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div>
            <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">Resumen de Compra</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toLocaleString("es-MX")}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Envío</span>
                  <span>${shipping.toLocaleString("es-MX")}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toLocaleString("es-MX")}</span>
                </div>
                <Button className="w-full">Proceder al Pago</Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-60 flex-col items-center justify-center gap-4 rounded-md border border-dashed">
          <p className="text-muted-foreground">Tu carrito está vacío</p>
          <Button>Explorar Productos</Button>
        </div>
      )}
    </div>
  )
}


