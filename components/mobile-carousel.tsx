"use client"

import { useState, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MobileCarouselProps {
    /** One node per slide. */
    slides: ReactNode[]
    /** Show the prev/next arrow buttons (defaults to true). */
    showButtons?: boolean
    /** Tailwind classes used to colour the controls. */
    activeDotClassName?: string
    inactiveDotClassName?: string
    buttonClassName?: string
}

const SWIPE_THRESHOLD = 50

/**
 * Mobile-only, swipeable carousel. Renders one slide at a time, supports touch
 * swiping, dot navigation and optional prev/next arrows.
 */
export function MobileCarousel({
    slides,
    showButtons = true,
    activeDotClassName = "bg-innung-red",
    inactiveDotClassName = "bg-muted-foreground/30",
    buttonClassName = "border-innung-red/30 hover:bg-innung-red/10 bg-transparent",
}: MobileCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState<number | null>(null)

    const count = slides.length

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % count)
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + count) % count)

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart === null) return
        const delta = touchStart - e.changedTouches[0].clientX
        if (delta > SWIPE_THRESHOLD) nextSlide()
        else if (delta < -SWIPE_THRESHOLD) prevSlide()
        setTouchStart(null)
    }

    return (
        <div className="md:hidden">
            <div
                className="relative overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-2">
                            {slide}
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
                {showButtons && (
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={prevSlide}
                        className={buttonClassName}
                        aria-label="Vorheriger Eintrag"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                )}
                <div className="flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={cn(
                                "w-2.5 h-2.5 rounded-full transition-colors",
                                index === currentIndex ? activeDotClassName : inactiveDotClassName,
                            )}
                            aria-label={`Gehe zu Eintrag ${index + 1}`}
                        />
                    ))}
                </div>
                {showButtons && (
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={nextSlide}
                        className={buttonClassName}
                        aria-label="Nächster Eintrag"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                )}
            </div>
        </div>
    )
}
