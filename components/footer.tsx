import Link from "next/link"
import {Mail, Phone} from "lucide-react";

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

export function Footer() {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="images/koelbelkehr.png"
                alt="Kölbel Kehr GmbH"
                className="h-25 w-auto invert"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Ihr zuverlässiger Partner für Brandschutz, Sicherheit, Beratung und Umweltschutz in der Region.
            </p>
              <div className="flex items-start gap-3 bg-white/10 px-4 py-2 rounded-lg w-fit">

              <div className="flex flex-col gap-2">

                  {/*
                  <span className="text-primary-foreground/70 text-xs pt-1">
                    Kontakt:
                  </span>
                  */}

                      {contactInfo.map((item) => (
                          <div key={item.label} className="flex flex-col leading-tight">
                    <span className="text-primary-foreground/60 text-[10px] uppercase tracking-wide">
                      {item.label}
                    </span>

                      {item.href ? (
                          <a
                              href={item.href}
                              className="text-muted-foreground hover:text-innung-red transition-colors text-sm"
                          >
                              {item.value}
                          </a>
                      ) : (
                          <p className="text-muted-foreground text-sm">
                              {item.value}
                          </p>
                      )}
                      </div>
                      ))}
                  </div>
              </div>


              <br />

              <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full w-fit">
                  <img
                      src="images/schornsteinfeger-logo.png"
                      alt="Schornsteinfeger Innung"
                      className="w-10 h-10 rounded-full"
                  />
                  <span className="text-primary-foreground/70 text-xs">Innungsbetrieb</span>
              </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-6">Schnellzugriff</h3>
            <ul className="space-y-3">
              {[
                { name: "Kontakt", href: "#kontakt" },
                { name: "Brandschutz", href: "#brandschutz", color: "text-innung-red" },
                { name: "Sicherheit", href: "#sicherheit", color: "text-innung-yellow" },
                { name: "Beratung", href: "#beratung", color: "text-innung-green" },
                { name: "Umwelt", href: "#umwelt", color: "text-innung-blue" },
                { name: "Team", href: "#team" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm ${item.color || ""}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-6">Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/impressum"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Kölbel Kehr GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
