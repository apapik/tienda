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
    title: "New JLPT N5 Course Available",
    description: "Start your Japanese language journey with our comprehensive JLPT N5 preparation course.",
    date: "2024-03-01",
    image: "/placeholder.svg?height=200&width=400",
    type: "new-course",
    featured: true,
  },
  {
    id: "ann-2",
    title: "Summer Intensive Program",
    description: "Join our 8-week intensive Japanese program with native speakers and cultural activities.",
    date: "2024-02-15",
    image: "/placeholder.svg?height=200&width=400",
    type: "event",
    featured: true,
  },
  {
    id: "ann-3",
    title: "Free Hiragana Workshop",
    description: "Learn the basics of Hiragana writing system in our free weekend workshop.",
    date: "2024-02-10",
    image: "/placeholder.svg?height=200&width=400",
    type: "workshop",
    featured: false,
  },
  {
    id: "ann-4",
    title: "Japanese Culture Day",
    description: "Experience traditional Japanese culture with tea ceremony and calligraphy workshops.",
    date: "2024-03-20",
    image: "/placeholder.svg?height=200&width=400",
    type: "event",
    featured: false,
  },
  {
    id: "ann-5",
    title: "Study Group Sessions",
    description: "Join our weekly study groups to practice Japanese conversation with other learners.",
    date: "2024-02-05",
    image: "/placeholder.svg?height=200&width=400",
    type: "news",
    featured: false,
  },
  {
    id: "ann-6",
    title: "New Learning Materials",
    description: "Access our updated collection of Japanese learning resources and practice materials.",
    date: "2024-02-01",
    image: "/placeholder.svg?height=200&width=400",
    type: "news",
    featured: false,
  },
]

export function Announcements() {
  const [filter, setFilter] = useState("all")

  const filteredAnnouncements =
    filter === "all"
      ? announcementsData
      : announcementsData.filter((announcement) =>
          filter === "featured" ? announcement.featured : announcement.type === filter,
        )

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "new-course":
        return <Badge className="bg-green-500">New Course</Badge>
      case "workshop":
        return <Badge className="bg-blue-500">Workshop</Badge>
      case "event":
        return <Badge className="bg-purple-500">Event</Badge>
      case "news":
        return <Badge className="bg-amber-500">News</Badge>
      default:
        return <Badge>{type}</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "new-course":
        return <Star className="h-4 w-4" />
      case "workshop":
        return <Tag className="h-4 w-4" />
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
        <h2 className="text-2xl font-bold">Course Updates</h2>
      </div>

      <Tabs defaultValue="all" value={filter} onValueChange={setFilter}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="new-course">New Courses</TabsTrigger>
          <TabsTrigger value="workshop">Workshops</TabsTrigger>
          <TabsTrigger value="event">Events</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
        </TabsList>

        <TabsContent value={filter} className="mt-0">
          {filter === "all" && (
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold">Featured Updates</h3>
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
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
          )}

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
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredAnnouncements.length === 0 && (
            <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
              <p className="text-muted-foreground">No updates available for the selected filter.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
} 