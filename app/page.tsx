import { JapaneseCourseLandingPage } from "@/components/japanese-course-landing-page"
import { Announcements } from "@/components/announcements"
import { ShoppingCart } from "@/components/shopping-cart"
import { DocumentMenu } from "@/components/document-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-8">
        <JapaneseCourseLandingPage />
        
        <div className="mt-8">
          <Tabs defaultValue="updates" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="updates">Course Updates</TabsTrigger>
              <TabsTrigger value="cart">Course Cart</TabsTrigger>
              <TabsTrigger value="documents">Learning Materials</TabsTrigger>
            </TabsList>
            <TabsContent value="updates" className="mt-6">
              <div className="rounded-lg border bg-card p-6">
                <Announcements />
              </div>
            </TabsContent>
            <TabsContent value="cart" className="mt-6">
              <div className="rounded-lg border bg-card p-6">
                <ShoppingCart />
              </div>
            </TabsContent>
            <TabsContent value="documents" className="mt-6">
              <div className="rounded-lg border bg-card p-6">
                <DocumentMenu />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}