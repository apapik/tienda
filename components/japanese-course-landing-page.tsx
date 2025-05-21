'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"

export function JapaneseCourseLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-purple-600">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link className="flex items-center space-x-2" href="/">
              <span className="font-bold text-purple-600">日本語 Basic</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-purple-600 text-gray-600" href="#home">Home</Link>
              <Link className="transition-colors hover:text-purple-600 text-gray-600" href="#learn">Learn</Link>
              <Link className="transition-colors hover:text-purple-600 text-gray-600" href="#contact">Contact</Link>
              <Link className="transition-colors hover:text-purple-600 text-gray-600" href="#about">About</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-100">
              Login
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Register
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-purple-900">
                  Learn Japanese the Easy Way
                </h1>
                <p className="mx-auto max-w-[700px] text-purple-800 md:text-xl">
                  Start your journey to mastering Japanese with our comprehensive basic course.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="#learn">Get Started</Link>
                </Button>
                <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-100">
                  <Link href="#about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="learn" className="w-full py-12 md:py-24 lg:py-32 bg-white/80">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-purple-800">
              Learn Japanese Basic
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-white/90">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-purple-700">Hiragana & Katakana</h3>
                  <p className="text-purple-600">Master the basic Japanese writing systems.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/90">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-purple-700">Basic Grammar</h3>
                  <p className="text-purple-600">Learn the fundamental structures of Japanese sentences.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/90">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-purple-700">Essential Vocabulary</h3>
                  <p className="text-purple-600">Build your Japanese vocabulary with common words and phrases.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
              Contact Us
            </h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input placeholder="Your Name" className="bg-white/90" />
              <Input type="email" placeholder="Your Email" className="bg-white/90" />
              <Textarea placeholder="Your Message" className="bg-white/90" />
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">Send Message</Button>
            </form>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white/80">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-purple-800">
              About Our Course
            </h2>
            <p className="mx-auto max-w-[700px] text-purple-700 md:text-xl text-center">
              Our Japanese Basic Course is designed to give you a strong foundation in the Japanese language. 
              With experienced instructors and a proven curriculum, we'll help you start your Japanese learning journey with confidence.
            </p>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-purple-600">© 2023 Japanese Basic Course. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-purple-600" href="#home">
            Home
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-purple-600" href="#learn">
            Learn
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-purple-600" href="#contact">
            Contact
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-purple-600" href="#about">
            About
          </Link>
        </nav>
      </footer>
    </div>
  )
}