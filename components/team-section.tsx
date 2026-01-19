import {Card, CardContent} from "@/components/ui/card"
import { DownloadIcon, Users} from "lucide-react"

const newspaperArticles = [
    {
        name: "HNA: Meisterbetrieb hat neuen Gesellen",
        link: "https://www.hna.de/lokales/wolfhagen/zierenberg-ort78080/zierenberger-meisterbetrieb-hat-neuen-gesellen-und-bezirksschornsteinfeger-93215595.html",
        pdf_link: "newspaper/meisterbetrieb_hat_neuen_gesellen.pdf"
    },
    /*
    {
        name: "Test: Test",
        link: "about:blank",
        pdf_link: "newspaper/meisterbetrieb_hat_neuen_gesellen.pdf"
    }
     */
];

const teamMembers = [
  {
    name: "Anna Schmidt",
    role: "Energieberaterin",
    image: "professional-woman-energy-consultant-portrait-frie.jpg",
    description: "Zertifizierte Energieberaterin mit Schwerpunkt auf nachhaltige Heizsysteme und Fördermittelberatung.",
  },
  {
    name: "Michael Weber",
    role: "Schornsteinfegergeselle",
    image: "young-professional-craftsman-portrait-german-frien.jpg",
    description: "Spezialist für Feuerstättenprüfung und moderne Heizsysteme. Seit 8 Jahren im Team.",
  },
  {
    name: "Lisa Braun",
    role: "Büroorganisation",
    image: "professional-woman-office-administrator-portrait-f.jpg",
    description: "Ihre erste Ansprechpartnerin für Terminvereinbarungen und alle administrativen Fragen.",
  }
]

export function TeamSection() {
    return (
        <section id="team" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Users className="h-4 w-4"/>
                        Unser Team
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Das Kölbel Kehr Team</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
                        Lernen Sie die Menschen kennen, die für Ihre Sicherheit und Ihren Komfort arbeiten.
                    </p>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                                Josua Kölbel
                            </h2>
                            <p className="text-muted-foreground mb-8 text-lg leading-relaxed text-pretty">
                                Ich, <b>Josua Kölbel</b>, bin Schornsteinfegermeister und Geschäftsführer der <b>Kölbel Kehr GmbH</b>. Meine Gesellenprüfung legte ich nach mehrfacher Verkürzung der Regellehrzeit auf unter zwei Jahre im Juli 2024 als Innungsbester ab und erreichte im anschließenden Leistungswettbewerb der Bestgesellen auf Landesebene den ersten Platz. Den Meistertitel erlangte ich nach erfolgreichem Ablegen der Meisterprüfung im Dezember des darauffolgenden Jahres; der Meisterbrief wurde mir am 24. Januar 2026 feierlich überreicht. Durch meine aktuelle und praxisnahe Ausbildung bin ich fachlich auf dem neuesten Stand der Technik und stehe für <b>Qualität</b>, <b>Kompetenz</b> und moderne Lösungen im <b>Schornsteinfegerhandwerk</b>.
                            </p>
                            <ul className="space-y-4">
                                {newspaperArticles.map((article) => (
                                    <li key={article.name} className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-innung-red/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                            <a href={article.pdf_link}><DownloadIcon className="h-4 w-4 text-innung-red" /></a>
                                        </div>
                                        <a className="text-foreground" href={article.link}>{article.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative">
                            <div
                                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-innung-red/10">
                                <img
                                    src="josua_koelbel.jpg"
                                    alt="Josua Kölbel"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/*
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed text-pretty"></p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                    Restliches Team:
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member) => (
                        <Card
                            key={member.name}
                            className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all"
                        >
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-foreground text-lg">{member.name}</h3>
                                <p className="bg-gradient-to-r from-innung-red via-innung-yellow to-innung-green bg-clip-text text-transparent text-sm font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                */}
            </div>
        </section>
    )
}
