"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Shield, BrickWall, Home, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const sicherheitItems = [
    {
        icon: BrickWall,
        title: "Schornstein und Zuluftreinigung",
        description: "Die Schornsteinreinigung ist eine zentrale Aufgabe des Schornsteinfegerhandwerks und dient der Brandschutzvorsorgesowie der sicheren Nutzung von Feuerungsanlagen. Gemäß der Kehr- und Überprüfungsordnung (KÜO) ist die regelmäßige Reinigung von Feuerstätten, Schornsteinen, Abgas- und Zuluftleitungen verpflichtend. Sie sorgt zudem für den sicheren Abzug von Rauch, Abgasen und Abluft. Zusätzlich informieren Schornsteinfeger über die sichere Nutzung von Feuerungsanlagen, Brennstoffen, Verbrennungsluftversorgung, Brandschutz und aktuelle gesetzliche Vorgaben. Die Kölbel Kehr GmbH bietet diese Leistungen für Schornsteine, Zuluftöffnungen, Abgasleitungen, Kanäle, Verbindungsstücke, Kamin- und Kachelöfen an und erhöht damit die Sicherheit Ihrer Anlagen.",
    },
    {
        icon: Home,
        title: "Abgaswegeüberprüfung - CO Messung (KÜO)",
        description: "Regelmäßige Überprüfung, Wartung und Abgasanalyse von Feuerstätten stellen sicher, dass Abgase sicher ins Freie abgeführt werden. Diese Kontrollen sind gemäß der Kehr- und Überprüfungsordnung (KÜO) gesetzlich vorgeschrieben und dienen sowohl Ihrer Sicherheit als auch einem energieeffizienten und kostensparenden Betrieb. Die Kölbel Kehr GmbH bietet diese Leistungen fachgerecht an, übernimmt die erforderlichen Prüfungen und stellt die notwendigen Nachweise sicher, wodurch Effizienz und Sicherheit Ihrer Anlagen nachhaltig erhalten werden.",
    },
    {
        icon: Flame,
        title: "Gashausschau",
        description: "Gemäß der TRGI 2018 und der daraus resultierenden Verkehrssicherungspflicht sind Eigentümer und Betreiber von Gasfeuerstätten verpflichtet, den sicheren Zustand ihrer Gasanlagen zu gewährleisten und die frei verlegten Gasleitungen regelmäßig zu überprüfen. Diese Verantwortung kann an die Kölbel Kehr GmbH übertragen werden, die die Gasinstallation fachkundig kontrolliert und mögliche Undichtigkeiten frühzeitig erkennt. Dadurch erhöhen sich Sicherheit und Betriebssicherheit, zugleich entsteht eine rechtliche Entlastung durch den Nachweis einer sachgerechten Prüfung.",
    },
    {
        icon: Shield,
        title: "Überprüfung nach DAAV",
        description: "Die Kölbel Kehr GmbH bietet Überprüfungen und Kontrollen gemäß DAAV an.\n" +
            "So wird die Betriebs- und Brandsicherheit Ihrer gewerblich genutzten Dunstabzugsanlage dauerhaft gewährleistet.\n" +
            "Durch fachgerechte Prüfungen helfen wir, Risiken zu minimieren und gesetzliche Vorgaben einzuhalten.",
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
