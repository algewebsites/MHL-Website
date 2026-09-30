const {Kicker}=window.MHLDesignSystem_73e19c;

function LegalSection({title,children}){
  return <section style={{marginBottom:'var(--space-7)'}}>
    <h2 style={{margin:'0 0 var(--space-3)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h3)',letterSpacing:'var(--track-heading)',color:'var(--text-heading)'}}>{title}</h2>
    <div style={{fontSize:'var(--text-body)',lineHeight:'var(--lh-body)',color:'var(--text-body)'}}>{children}</div>
  </section>;
}

function ImpressumPage(){
  return <main id="main">
    <article style={{padding:'var(--space-7) 0 var(--section-y-sm)'}}>
      <div className="container" style={{maxWidth:'var(--container-narrow)'}}>
        <Kicker style={{marginBottom:'var(--space-4)'}}>Rechtliches</Kicker>
        <h1 style={{margin:'0 0 var(--space-7)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-display-2)',lineHeight:'var(--lh-snug)',letterSpacing:'var(--track-display)',color:'var(--text-heading)'}}>Impressum</h1>

        <LegalSection title="Angaben gemäß § 5 DDG bzw. entsprechender Vorschriften der estnischen Rechtsordnung">
          <p style={{margin:0}}>Innomazed OÜ<br/>Sakala tn 7-2<br/>10141 Tallinn<br/>Estland</p>
        </LegalSection>

        <LegalSection title="Vertreten durch">
          <p style={{margin:0}}>Alissa Gehrig</p>
        </LegalSection>

        <LegalSection title="Kontakt">
          <p style={{margin:0}}>E-Mail: <a href="mailto:mygreataibusiness@gmail.com">mygreataibusiness@gmail.com</a></p>
        </LegalSection>

        <LegalSection title="Registereintrag">
          <p style={{margin:0}}>Eingetragen im estnischen Handelsregister (e-Business Register / Äriregister).<br/>Registrikood (Registrierungsnummer): 14809419</p>
        </LegalSection>

        <LegalSection title="Umsatzsteuer-Identifikationsnummer">
          <p style={{margin:0}}>EE102210002</p>
        </LegalSection>

        <LegalSection title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
          <p style={{margin:0}}>Alissa Gehrig<br/>Sakala tn 7-2, 10141 Tallinn, Estland</p>
        </LegalSection>

        <LegalSection title="Verbraucherstreitbeilegung">
          <p style={{margin:0}}>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </LegalSection>

        <LegalSection title="Haftung für Inhalte">
          <p style={{margin:'0 0 var(--space-4)'}}>Die Inhalte dieser Seite wurden mit Sorgfalt erstellt und werden regelmäßig aktualisiert. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir dennoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Vorschriften verantwortlich, jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
          <p style={{margin:0}}>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir die betroffenen Inhalte umgehend entfernen.</p>
        </LegalSection>

        <LegalSection title="Haftung für Links">
          <p style={{margin:0}}>Diese Seite kann Links zu externen Webseiten Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir daher keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Verlinkte Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; eine permanente inhaltliche Kontrolle ohne konkrete Anhaltspunkte ist jedoch nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Links umgehend entfernt.</p>
        </LegalSection>

        <LegalSection title="Urheberrecht">
          <p style={{margin:0}}>Die durch die Betreiberin erstellten Inhalte und Werke auf dieser Seite unterliegen dem Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der jeweiligen Autorin bzw. des jeweiligen Autors. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
        </LegalSection>

        <LegalSection title="Hinweis zu Gesundheitsthemen">
          <p style={{margin:0}}>Die Inhalte des Journals dienen ausschließlich der allgemeinen Information und ersetzen keine individuelle medizinische Beratung, Diagnose oder Behandlung. Bei gesundheitlichen Fragen oder Beschwerden wende dich bitte an eine Ärztin, einen Arzt oder eine andere qualifizierte Fachperson.</p>
        </LegalSection>
      </div>
    </article>
  </main>;
}
