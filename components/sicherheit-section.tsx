"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Shield, AlertTriangle, Home, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const sicherheitItems = [
    {
        icon: Flame,
        title: "Rauchabzüge",
        description: "Regelmäßige Prüfung und Reinigung von Rauchabzügen und Lüftungsanlagen für eine sichere Abgasführung.",
    },
    {
        icon: Home,
        title: "Überprüfung nach KÜO",
        description: "Zweimalige Überprüfung Ihrer Feuerstätten im 7-Jahres-Zeitraum nach gesetzlicher Vorgabe.",
    },
    {
        icon: Shield,
        title: "Gashausschau",
        description: "Umfassende Überprüfung aller brandschutzrelevanten Einrichtungen in Wohn- und Gewerbegebäuden.",
    },
    {
        icon: Shield,
        title: "Überprüfung nach DAAV",
        description: "Umfassende Überprüfung aller brandschutzrelevanten Einrichtungen in Wohn- und Gewerbegebäuden.",
    },
]

export function SicherheitSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sicherheitItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sicherheitItems.length) % sicherheitItems.length)
  }

  return (
    <section
      id="sicherheit"
      className="py-20 md:py-32 bg-gradient-to-br from-innung-yellow/10 via-innung-yellow/5 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-innung-yellow/20 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Sicherheit
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Ihre Sicherheit</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Umfassende Sicherheitsleistungen für ein sorgenfreies Zuhause
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sicherheitItems.map((item) => (
            <Card
              key={item.title}
              className="bg-card border-innung-yellow/20 hover:border-innung-yellow/40 hover:shadow-lg hover:shadow-innung-yellow/10 transition-all group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-innung-yellow/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-innung-yellow/30 transition-colors">
                  <item.icon className="h-6 w-6 text-yellow-700" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {sicherheitItems.map((item) => (
                <div key={item.title} className="w-full flex-shrink-0 px-2">
                  <Card className="bg-card border-innung-yellow/20">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-innung-yellow/20 rounded-xl flex items-center justify-center mb-4">
                        <item.icon className="h-6 w-6 text-yellow-700" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-innung-yellow/30 hover:bg-innung-yellow/10 bg-transparent"
              aria-label="Vorheriger Eintrag"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {sicherheitItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-colors",
                    index === currentIndex ? "bg-innung-yellow" : "bg-innung-yellow/30",
                  )}
                  aria-label={`Gehe zu Eintrag ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-innung-yellow/30 hover:bg-innung-yellow/10 bg-transparent"
              aria-label="Nächster Eintrag"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
