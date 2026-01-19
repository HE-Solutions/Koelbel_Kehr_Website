"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Lightbulb, Thermometer, FileText, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const beratungItems = [
  {
    icon: Lightbulb,
    title: "Energieberatung",
    description:
      "Die Kölbel Kehr GmbH ist zertifizierter Energieberater des Handwerks und Energieeffizienz-Experte.\n" +
        "Wir bieten professionelle Energieberatung – von der individuellen Sanierungsplanung bis hin zur umfassenden Fördermittelberatung.",
  },
  {
    icon: Thermometer,
    title: "Heizungstausch",
    description:
      "Die Kölbel Kehr GmbH bietet eine umfassende Beratung zur Steigerung der Effizienz Ihrer Heizungsanlage an.\n" +
        "Durch fachkundige Analyse helfen wir, Energieverbrauch und Kosten nachhaltig zu senken.\n" +
        "So leisten Sie einen Beitrag zum Umweltschutz und erhöhen gleichzeitig den Wohnkomfort.",
  },
  {
    icon: FileText,
    title: "Energieausweise",
    description:
      "Die Kölbel Kehr GmbH bietet als Energieeffizienz-Experte die Erstellung von Energieausweisen an.\n" +
        "Ob Verbrauchs- oder Bedarfsausweis – wir beraten Sie fachgerecht und zuverlässig.\n" +
        "Ein Energieausweis ist erforderlich, wenn Sie eine Immobilie verkaufen oder vermieten möchten.",
  },
]

export function BeratungSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beratungItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beratungItems.length) % beratungItems.length)
  }

  return (
    <section
      id="beratung"
      className="py-20 md:py-32 bg-gradient-to-br from-innung-green/10 via-innung-green/5 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-innung-green/20 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="h-4 w-4" />
            Beratung
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Beratung & Service</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Kompetente Beratung für ein energieeffizientes und sicheres Zuhause
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {beratungItems.map((item) => (
            <Card
              key={item.title}
              className="bg-card border-innung-green/20 hover:border-innung-green/40 hover:shadow-lg hover:shadow-innung-green/10 transition-all group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-innung-green/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-innung-green/30 transition-colors">
                  <item.icon className="h-6 w-6 text-green-700" />
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
              {beratungItems.map((item) => (
                <div key={item.title} className="w-full flex-shrink-0 px-2">
                  <Card className="bg-card border-innung-green/20">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-innung-green/20 rounded-xl flex items-center justify-center mb-4">
                        <item.icon className="h-6 w-6 text-green-700" />
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
              className="border-innung-green/30 hover:bg-innung-green/10 bg-transparent"
              aria-label="Vorheriger Eintrag"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {beratungItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-colors",
                    index === currentIndex ? "bg-innung-green" : "bg-innung-green/30",
                  )}
                  aria-label={`Gehe zu Eintrag ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-innung-green/30 hover:bg-innung-green/10 bg-transparent"
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
