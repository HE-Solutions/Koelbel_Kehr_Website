"use client"

import { useState } from "react"
import { Leaf, Wind, SproutIcon, Trees, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const umweltItems = [
    {
        icon: Wind,
        title: "BimschV",
        description:
            "Die Kölbel Kehr GmbH bietet umfassende Dienstleistungen nach der Ersten Bundesemissionsschutzverordnung (1. BImSchV) an. Wir bieten passende Beratungen zu Brennstoffen, alle wiederkehrenden Tätigkeiten gemäß §15 der 1. BImSchV bis hin zum Nachweis der Vermeidung der schädlichen Umwelteinflüsse/Ableitbedingungen gemäß §19 der 1. BImSchV. So bieten wir eine ganzheitliche und Beratung und Umsetzung aller Emissionsschutzanforderungen.",
    },
    {
        icon: SproutIcon,
        title: "Umweltschonend Heizen",
        description:
            "Die Kölbel Kehr GmbH steht Ihnen beratend zur Seite, um die Energieeffizienz Ihrer Liegenschaft nachhaltig zu steigern.\n" +
            "Dabei unterstützen wir Sie bei der Auswahl des geeigneten Energieträgers sowie der passenden Träger- und Anlagentechnologie.\n" +
            "So lassen sich Emissionen gezielt reduzieren und ein aktiver Beitrag zum Schutz der Umwelt leisten.",
    },
    {
        icon: Trees,
        title: "Beratung feste Brennstoffe",
        description: "Die Kölbel Kehr GmbH bietet fachkundige Beratung zum sicheren und effizienten Betrieb handbeschickter Holz- und Feststoff-Feuerstätten.\n" +
            "Die Beratung ist gemäß 1. BImSchV §4 Abs. 8 Pflicht bei der Neuerrichtung von Feuerstätten und sorgt dafür, dass Effizienz und Sicherheit Ihrer Anlage optimal gewährleistet sind."
    },

    /*
  {
    icon: Leaf,
    title: "Nachhaltige Lösungen",
    description: "Beratung zu umweltfreundlichen Heizalternativen wie Pellet- und Holzöfen.",
  },
  {
    icon: Droplets,
    title: "Ressourcenschonung",
    description: "Optimierung Ihrer Anlage für einen geringeren Brennstoffverbrauch und mehr Effizienz.",
  },
  {
    icon: Sun,
    title: "Erneuerbare Energien",
    description: "Beratung zur Integration von Solarthermie und anderen erneuerbaren Energiequellen.",
  },
     */
]

export function UmweltSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % umweltItems.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + umweltItems.length) % umweltItems.length)
    }

    return (
        <section id="umwelt" className="py-20 md:py-32 relative overflow-hidden">
            {/* Blue gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-innung-blue via-innung-blue/90 to-innung-blue/80" />
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Leaf className="h-4 w-4" />
                        Umweltschutz
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Umweltschutz</h2>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg text-pretty">
                        Gemeinsam für eine saubere Zukunft – wir setzen auf nachhaltige Lösungen und umweltfreundliche Technologien.
                    </p>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {umweltItems.map((item) => (
                        <Card
                            key={item.title}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all group"
                        >
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                                    <item.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
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
                            {umweltItems.map((item) => (
                                <div key={item.title} className="w-full flex-shrink-0 px-2">
                                    <Card className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                                        <CardContent className="p-6">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                                <item.icon className="h-6 w-6 text-white" />
                                            </div>
                                            <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                                            <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
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
                            className="border-white/30 hover:bg-white/10 bg-transparent text-white"
                            aria-label="Vorheriger Eintrag"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <div className="flex gap-2">
                            {umweltItems.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={cn(
                                        "w-2.5 h-2.5 rounded-full transition-colors",
                                        index === currentIndex ? "bg-white" : "bg-white/40",
                                    )}
                                    aria-label={`Gehe zu Eintrag ${index + 1}`}
                                />
                            ))}
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextSlide}
                            className="border-white/30 hover:bg-white/10 bg-transparent text-white"
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