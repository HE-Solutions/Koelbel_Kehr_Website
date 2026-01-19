"use client"

import { useState } from "react"
import {ChevronLeft, ChevronRight, Shield, AlertTriangle, Home, Flame, DropletIcon} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const brandschutzItems = [
    {
        icon: AlertTriangle,
        title: "CO-Warnmelder",
        description: "Kohlenmonoxid (CO) ist ein geruch- und farbloses Gas, das lebensgefährlich sein kann und oft unbemerkt austritt. Ein CO-Melder warnt frühzeitig vor dieser unsichtbaren Gefahr und kann Leben retten. Die Kölbel Kehr GmbH bietet Ihnen kompetente Beratung sowie die fachgerechte Installation von CO-Meldern an.",
    },
    {
        icon: Flame,
        title: "Rauchwarnmelder",
        description: "In Deutschland ist die Pflicht zur Ausstattung von Wohnungen mit Rauchwarnmeldern in den Landesbauordnungen geregelt, in Hessen durch die Hessische Bauordnung (HBO § 14 Abs. 2). Diese schreibt vor, dass Schlafräume, Kinderzimmer und Flure als Rettungswege sowie bestimmte Aufenthaltsräume mindestens mit einem Rauchwarnmelder auszustatten sind. Die Geräte müssen so installiert und betrieben werden, dass Brandrauch frühzeitig erkannt wird. Die Kölbel Kehr GmbH bietet hierzu eine umfassende Beratung, die fachgerechte Installation sowie die regelmäßige Überprüfung gemäß DIN 14676 an und trägt damit maßgeblich zur Erhöhung der Sicherheit von Bewohnern und Gebäuden bei.",
    },
    {
        icon: DropletIcon,
        title: "Löschmittelkonzept",
        description: "Löschmittelkonzepte sind ein zentraler Bestandteil des vorbeugenden Brandschutzes und stellen sicher, dass Art und Anzahl der erforderlichen Feuerlöscher den Vorgaben der ASR A2.2 entsprechen. Sie dienen der Rechtssicherheit und ermöglichen im Brandfall einen wirksamen Ersteinsatz.\n" +
            "Die Kölbel Kehr GmbH erstellt fachgerechte Löschmittelkonzepte gemäß ASR A2.2, abgestimmt auf die individuellen Gegebenheiten und Brandgefährdungen Ihrer Arbeitsstätte.",
    },
]

export function BrandschutzSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % brandschutzItems.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + brandschutzItems.length) % brandschutzItems.length)
    }

    return (
        <section
            id="brandschutz"
            className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-innung-red/5 via-background to-background"
        >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-innung-red/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-innung-red/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-innung-red/20 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Shield className="h-4 w-4" />
                        Brandschutz
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Brandschutz</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
                        Wir brennen für Ihre Sicherheit!
                    </p>
                </div>

                {/* Desktop Grid */}

                <div className="flex justify-center mb-12">
                    <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {brandschutzItems.map((item) => (
                            <Card
                                key={item.title}
                                className="bg-card border-innung-red/20 hover:border-innung-red/40 hover:shadow-lg hover:shadow-innung-red/10 transition-all group"
                            >
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 bg-innung-red/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-innung-red/30 transition-colors">
                                        <item.icon className="h-6 w-6 text-red-700" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden">
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {brandschutzItems.map((item) => (
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
                            {brandschutzItems.map((_, index) => (
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
