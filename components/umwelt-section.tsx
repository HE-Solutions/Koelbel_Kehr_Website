import { Leaf, Wind, Droplets, Sun } from "lucide-react"

const umweltItems = [
  {
    icon: Wind,
    title: "BimschV",
    description:
        "Die Kölbel Kehr GmbH bietet umfassende Dienstleistungen nach der Ersten Bundesemissionsschutzverordnung (1. BImSchV) an. Wir bieten passende Beratungen zu Brennstoffen, alle wiederkehrenden Tätigkeiten gemäß §15 der 1. BImSchV bis hin zum Nachweis der Vermeidung der schädlichen Umwelteinflüsse/Ableitbedingungen gemäß §19 der 1. BImSchV. So bieten wir eine ganzheitliche und Beratung und Umsetzung aller Emissionsschutzanforderungen.",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {umweltItems.map((item) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
