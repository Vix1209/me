"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Sustainability from "@/components/sustainability"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import FloatingElements from "@/components/floating-elements"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <FloatingElements />
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Sustainability />
      <Contact />
    </div>
  )
}
