"use client"

import { useState } from "react"
import { Calendar, Tag, Megaphone, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for announcements
const announcementsData = [
  {
    id: "ann-1",
    title: "Gran Venta de Verano",
    description: "Aprovecha descuentos de hasta 50% en productos seleccionados durante todo el mes de julio.",
    date: "2023-07-01",
    image: "/placeholder.svg?height=200&width=400",
    type: "promotion",
    featured: true,
  },
  {
    id: "ann-2",
    title: "Nuevos Smartphones 2023",
    description: "Descubre la nueva línea de smartphones con tecnología de punta y características innovadoras.",
    date: "2023-06-15",
    image: "/placeholder.svg?height=200&width=400",
    type: "new-product",
    featured: true,
  },
  {
    id: "ann-3",
    title: "Envío Gratis en Compras Mayores a $1,500",
    description: "Por tiempo limitado, todas las compras superiores a $1,500 tienen envío gratis a todo el país.",
    date: "2023-06-10",
    image: "/placeholder.svg?height=200&width=400",
    type: "promotion",
    featured: false,
  },
  {
    id: "ann-4",
    title: "Evento de Lanzamiento: Gadgets 2023",
    description: "Te invitamos a nuestro evento virtual donde presentaremos los gadgets más innovadores del año.",
    date: "2023-07-20",
    image: "/placeholder.svg?height=200&width=400",
    type: "event",
    featured: false,
  },
  {
    id: "ann-5",
    title: "Programa de Lealtad",
    description: "Únete a nuestro programa de lealtad y obtén puntos por cada compra que realices.",
    date: "2023-06-05",
    image: "/placeholder.svg?height=200&width=400",
    type: "news",
    featured: false,
  },
  {
    id: "ann-6",
    title: "Nueva Política de Devoluciones",
    description: "Hemos actualizado nuestra política de devoluciones para brindarte una mejor experiencia de compra.",
    date: "2023-06-01",
    image: "/placeholder.svg?height=200&width=400",
    type: "news",
    featured: false,
  },
]

export function Announcements() {
  const [filter, setFilter] = useState("all")

  // Filter announcements based on selected tab
  const filteredAnnouncements =
    filter === "all"
      ? announcementsData
      : announcementsData.filter((announcement) =>
          filter === "featured" ? announcement.featured : announcement.type === filter,
        )

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("es-ES", options)
  }

  // Get badge for announcement type
  const getTypeBadge = (type: string) => {
    switch (type) {
      case "promotion":
        return <Badge className="bg-green-500">Promoción</Badge>
      case "new-product":
        return <Badge className="bg-blue-500">Nuevo Producto</Badge>
      case "event":
        return <Badge className="bg-purple-500">Evento</Badge>
      case "news":
        return <Badge className="bg-amber-500">Noticia</Badge>
      default:
        return <Badge>{type}</Badge>
    }
  }

  // Get icon for announcement type
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "promotion":
        return <Tag className="h-4 w-4" />
      case "new-product":
        return <Star className="h-4 w-4" />
      case "event":
        return <Calendar className="h-4 w-4" />
      case "news":
        return <Megaphone className="h-4 w-4" />
      default:
        return <Megaphone className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Anuncios y Novedades</h2>
      </div>

      <Tabs defaultValue="all" value={filter} onValueChange={setFilter}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="featured">Destacados</TabsTrigger>
          <TabsTrigger value="promotion">Promociones</TabsTrigger>
          <TabsTrigger value="new-product">Nuevos Productos</TabsTrigger>
          <TabsTrigger value="event">Eventos</TabsTrigger>
          <TabsTrigger value="news">Noticias</TabsTrigger>
        </TabsList>

        <TabsContent value={filter} className="mt-0">
          {/* Featured announcements (larger cards) */}
          {filter === "all" && (
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold">Destacados</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {announcementsData
                  .filter((announcement) => announcement.featured)
                  .map((announcement) => (
                    <Card key={announcement.id} className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={announcement.image || "/placeholder.svg"}
                          alt={announcement.title}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {getTypeIcon(announcement.type)}
                            {getTypeBadge(announcement.type)}
                          </div>
                          <span className="text-sm text-muted-foreground">{formatDate(announcement.date)}</span>
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">{announcement.title}</h3>
                        <p className="text-muted-foreground">{announcement.description}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="link" className="px-0">
                          Ver más <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
          )}

          {/* All announcements */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAnnouncements.map((announcement) => (
              <Card key={announcement.id} className={filter === "all" && announcement.featured ? "hidden" : ""}>
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={announcement.image || "/placeholder.svg"}
                    alt={announcement.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(announcement.type)}
                      {getTypeBadge(announcement.type)}
                    </div>
                    <span className="text-sm text-muted-foreground">{formatDate(announcement.date)}</span>
                  </div>
                  <h3 className="mb-2 font-semibold">{announcement.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{announcement.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="link" className="px-0">
                    Ver más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredAnnouncements.length === 0 && (
            <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
              <p className="text-muted-foreground">No hay anuncios disponibles con el filtro seleccionado.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

