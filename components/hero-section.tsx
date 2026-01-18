import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Flame, Shield, Leaf, MessageCircle, Users } from "lucide-react"

const serviceLinks = [
  {
    name: "Brandschutz",
    href: "#brandschutz",
    color: "bg-innung-red",
    hoverColor: "hover:bg-innung-red/90",
    icon: Flame,
  },
  {
    name: "Sicherheit",
    href: "#sicherheit",
    color: "bg-innung-yellow",
    hoverColor: "hover:bg-innung-yellow/90",
    icon: Shield,
    textDark: true,
  },
  {
    name: "Beratung",
    href: "#beratung",
    color: "bg-innung-green",
    hoverColor: "hover:bg-innung-green/90",
    icon: MessageCircle,
  },
  { name: "Umwelt", href: "#umwelt", color: "bg-innung-blue", hoverColor: "hover:bg-innung-blue/90", icon: Leaf },
  { name: "Team", href: "#team", color: "bg-primary", hoverColor: "hover:bg-primary/90", icon: Users },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-primary" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center gap-8">
            <img
              src="images/koelbelkehr.png"
              alt="Kölbel Kehr GmbH"
              className="w-55 md:w-[350px] h-auto invert"
            />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
              Meisterbetrieb für
              <span className="block mt-2 text-primary-foreground">Sicherheit & Effizienz</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl text-pretty leading-relaxed">
              We kehr for you!
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 w-full max-w-4xl mt-4">
              {serviceLinks.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className={`${service.color} ${service.hoverColor} ${service.textDark ? "text-primary" : "text-white"} rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 md:w-10 md:h-10" />
                  <span className="font-semibold text-sm md:text-base">{service.name}</span>
                </a>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-innung-red text-white hover:bg-innung-red/90 text-lg px-8 py-6 rounded-full shadow-lg shadow-innung-red/25 transition-all hover:scale-105 mt-4 md:gap-4"
              asChild
            >
              <a href="#kontakt">
                <Phone className="mr-2 h-5 w-5" />
                Jetzt Termin vereinbaren
              </a>
            </Button>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl text-pretty leading-relaxed"></p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/*<div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
      */}

    </section>
  )
}
