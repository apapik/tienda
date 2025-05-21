"use client"

import { useState } from "react"
import { FileText, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Document data structure
interface Document {
  id: string
  title: string
  description: string
  filePath: string
  category: string
}

// Actual documents from assets/documents
const documents: Document[] = [
  {
    id: "doc-1",
    title: "Actividad 3. U3. Tercera fase de desarrollo",
    description: "Documento sobre la tercera fase de desarrollo",
    filePath: "/documents/Actividad 3. U3. Tercera fase de desarrollo.docx",
    category: "Desarrollo",
  },
  {
    id: "doc-2",
    title: "Actividad integradora 2. U2. El backlog y el spring Schedule",
    description: "Documento sobre el backlog y el spring Schedule",
    filePath: "/documents/Actividad integradora 2. U2. El backlog y el spring Schedule.docx",
    category: "Planificación",
  },
  {
    id: "doc-3",
    title: "Actividad preliminar. U3. Retomando mi primer sprint",
    description: "Documento sobre el primer sprint",
    filePath: "/documents/Actividad preliminar. U3. Retomando mi primer sprint.docx",
    category: "Sprint",
  },
  {
    id: "doc-4",
    title: "Actividad 2. U4. Reunión de revisión de modificaciones",
    description: "Documento sobre la reunión de revisión de modificaciones",
    filePath: "/documents/Actividad 2. U4. Reunión de revisión de modificaciones.docx",
    category: "Revisión",
  },
  {
    id: "doc-5",
    title: "Actividad 2. El sprint Shedule",
    description: "Documento sobre el sprint Schedule",
    filePath: "/documents/Actividad 2. El sprint Shedule.docx",
    category: "Planificación",
  },
  {
    id: "doc-6",
    title: "Actividad integradora Unidad 1",
    description: "Documento de la actividad integradora de la unidad 1",
    filePath: "/documents/Actividad integradora Unidad 1.docx",
    category: "Integración",
  },
  {
    id: "doc-7",
    title: "Actividad 2. U3. Segunda fase de desarrollo",
    description: "Documento sobre la segunda fase de desarrollo",
    filePath: "/documents/Actividad 2. U3. Segunda fase de desarrollo.docx",
    category: "Desarrollo",
  },
  {
    id: "doc-8",
    title: "Actividad 1. U4. Reunión de revisión inicial",
    description: "Documento sobre la reunión de revisión inicial",
    filePath: "/documents/Actividad 1. U4. Reunión de revisión inicial.docx",
    category: "Revisión",
  },
  {
    id: "doc-9",
    title: "Actividad 1. U3. Primera fase de desarrollo",
    description: "Documento sobre la primera fase de desarrollo",
    filePath: "/documents/Actividad 1. U3. Primera fase de desarrollo, revisión y ajuste de los Sprints.docx",
    category: "Desarrollo",
  },
]

export function DocumentMenu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(documents.map((doc) => doc.category)))

  const filteredDocuments = selectedCategory
    ? documents.filter((doc) => doc.category === selectedCategory)
    : documents

  const handleDownload = (filePath: string) => {
    // Create a link element
    const link = document.createElement("a")
    link.href = filePath
    link.download = filePath.split("/").pop() || "document"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-[200px] justify-between">
              {selectedCategory || "Todas las categorías"}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedCategory(null)}>
              Todas las categorías
            </DropdownMenuItem>
            {categories.map((category) => (
              <DropdownMenuItem
                key={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDocuments.map((doc) => (
          <div
            key={doc.id}
            className="flex items-start space-x-4 rounded-lg border p-4"
          >
            <FileText className="h-6 w-6 text-muted-foreground" />
            <div className="flex-1 space-y-1">
              <h3 className="font-medium">{doc.title}</h3>
              <p className="text-sm text-muted-foreground">{doc.description}</p>
              <Button
                variant="link"
                className="h-auto p-0 text-sm"
                onClick={() => handleDownload(doc.filePath)}
              >
                Descargar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 