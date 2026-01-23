import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Impressum</h1>

        <div className="prose prose-neutral max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-muted-foreground">
              Kölbel Kehr GmbH i.Gr.
              <br />
              GF Josua Kölbel
              <br />
              Mergenthalerallee 73-75
              <br />
              65760 Eschborn
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Kontakt</h2>
            <p className="text-muted-foreground">
              Telefon: +4915567029482
              <br />
              E-Mail: info@koelbel-kehr.de
            </p>
          </section>

            {/*
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p className="text-muted-foreground">
              Berufsbezeichnung: Schornsteinfegermeister
              <br />
              Zuständige Kammer: Handwerkskammer Musterstadt
              <br />
              Verliehen in: Deutschland
            </p>
            <p className="text-muted-foreground mt-4">Es gelten folgende berufsrechtliche Regelungen:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
              <li>Schornsteinfeger-Handwerksgesetz (SchfHwG)</li>
              <li>Handwerksordnung (HwO)</li>
              <li>Kehr- und Überprüfungsordnung (KÜO)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Aufsichtsbehörde</h2>
            <p className="text-muted-foreground">
              Regierungspräsidium Darmstadt
              <br />
              Luisenplatz 2
              <br />
              64283 Darmstadt
            </p>
          </section>

          */}

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Umsatzsteuer-ID</h2>
            <p className="text-muted-foreground">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              beantragt
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Streitschlichtung</h2>
            <p className="text-muted-foreground">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="text-muted-foreground mt-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Haftung für Inhalte</h2>
            <p className="text-muted-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Haftung für Links</h2>
            <p className="text-muted-foreground">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Urheberrecht</h2>
            <p className="text-muted-foreground">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
