import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 (0) 155 67029482",
    href: "tel:+4915567029482",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@kölbel-kehr.de",
    href: "mailto:info@kölbel-kehr.de",
  },
]

export function ContactSection() {
  return (
    <section id="kontakt" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4" />
            Kontakt
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Kontaktieren Sie uns</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Wir sind für Sie da – vereinbaren Sie noch heute einen Termin für Ihre Feuerstättenprüfung oder eine
            persönliche Beratung.
          </p>
        </div>
      <div className="flex justify-center mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
              {contactInfo.map((item) => (
                <Card
                  key={item.label}
                  className="bg-card border-border hover:shadow-xl hover:border-innung-red/20 transition-all group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-innung-red/10 to-innung-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-innung-red/20 group-hover:to-innung-yellow/20 transition-all">
                      <item.icon className="h-6 w-6 text-innung-red" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground hover:text-innung-red transition-colors text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-innung-red text-white hover:bg-innung-red/90 rounded-full px-8 py-6 shadow-lg shadow-innung-red/25 transition-all hover:scale-105"
            asChild
          >
            <a href="tel:+49123456789">
              <Phone className="mr-2 h-5 w-5" />
              Jetzt anrufen
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
