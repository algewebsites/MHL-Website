const {Kicker}=window.MHLDesignSystem_73e19c;

function LegalSection({title,children}){
  return <section style={{marginBottom:'var(--space-7)'}}>
    <h2 style={{margin:'0 0 var(--space-3)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h3)',letterSpacing:'var(--track-heading)',color:'var(--text-heading)'}}>{title}</h2>
    <div style={{fontSize:'var(--text-body)',lineHeight:'var(--lh-body)',color:'var(--text-body)'}}>{children}</div>
  </section>;
}

function DatenschutzPage(){
  return <main id="main">
    <article style={{padding:'var(--space-7) 0 var(--section-y-sm)'}}>
      <div className="container" style={{maxWidth:'var(--container-narrow)'}}>
        <Kicker style={{marginBottom:'var(--space-4)'}}>Rechtliches</Kicker>
        <h1 style={{margin:'0 0 var(--space-7)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-display-2)',lineHeight:'var(--lh-snug)',letterSpacing:'var(--track-display)',color:'var(--text-heading)'}}>Datenschutzerklärung</h1>

        <LegalSection title="Verantwortlicher">
          <p style={{margin:0}}>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
          <p style={{margin:'var(--space-3) 0 0'}}>Innomazed OÜ<br/>Sakala tn 7-2<br/>10141 Tallinn, Estland<br/>E-Mail: <a href="mailto:mygreataibusiness@gmail.com">mygreataibusiness@gmail.com</a></p>
        </LegalSection>

        <LegalSection title="Hosting">
          <p style={{margin:0}}>Diese Website wird bei Netlify, Inc. (San Francisco, USA) gehostet. Beim Aufruf der Seite verarbeitet Netlify automatisch technische Server-Logdaten, u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, übertragene Datenmenge und verwendeter Browser. Diese Daten dienen der technischen Bereitstellung, Stabilität und Sicherheit der Website und werden nicht mit anderen Datenquellen zusammengeführt.</p>
          <p style={{margin:'var(--space-4) 0 0'}}>Da Netlify in den USA ansässig ist, findet dabei eine Datenübermittlung in ein Drittland statt. Netlify ist Teilnehmer des EU-US Data Privacy Framework und stellt einen Auftragsverarbeitungsvertrag nach Art. 28 DSGVO unter Einbeziehung der EU-Standardvertragsklauseln bereit. Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer technisch fehlerfreien und sicheren Bereitstellung der Website).</p>
        </LegalSection>

        <LegalSection title="Schriftarten">
          <p style={{margin:0}}>Die auf dieser Website verwendeten Schriftarten (Jost, Public Sans) werden lokal von unserem eigenen Server ausgeliefert. Es findet keine Verbindung zu Servern von Google oder anderen Schriftarten-Anbietern statt, und es werden dabei keine Daten an Dritte übertragen.</p>
        </LegalSection>

        <LegalSection title="Technische Bibliotheken (CDN)">
          <p style={{margin:0}}>Zur Darstellung der Seite lädt dein Browser einzelne technische JavaScript-Bibliotheken (React, ReactDOM, Babel) sowie die auf der Seite verwendeten Icon-Grafiken vom Dienst unpkg.com, der über das Content-Delivery-Network von Cloudflare, Inc. (USA) ausgeliefert wird. Dabei wird deine IP-Adresse technisch bedingt an Cloudflare übertragen, um die Dateien ausliefern zu können. Eine darüberhinausgehende Auswertung ist uns nicht bekannt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer funktionsfähigen Darstellung der Website).</p>
          <p style={{margin:'var(--space-4) 0 0'}}>Wir arbeiten daran, diese Abhängigkeit langfristig durch eine lokale Einbindung zu ersetzen.</p>
        </LegalSection>

        <LegalSection title="Cookies und Analyse-Tools">
          <p style={{margin:0}}>Diese Website setzt aktuell keine Cookies und keine Analyse- oder Tracking-Tools (z. B. Google Analytics) ein. Es findet keine Auswertung deines Nutzungsverhaltens statt.</p>
        </LegalSection>

        <LegalSection title="Kontaktaufnahme per E-Mail">
          <p style={{margin:0}}>Wenn du uns per E-Mail kontaktierst, werden deine Angaben (E-Mail-Adresse, ggf. Name und Nachrichteninhalt) zum Zweck der Bearbeitung deiner Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen) bzw. Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage der Anbahnung eines Vertrags dient. Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind, spätestens nach Ablauf gesetzlicher Aufbewahrungsfristen.</p>
        </LegalSection>

        <LegalSection title="Newsletter-Anmeldeformular">
          <p style={{margin:0}}>Das auf dieser Seite sichtbare Newsletter-Anmeldeformular ist derzeit nicht aktiv geschaltet: Eingegebene E-Mail-Adressen werden aktuell nicht übertragen, gespeichert oder an einen Versanddienstleister weitergegeben. Sobald ein echter Newsletter-Versand eingerichtet wird, aktualisieren wir diesen Abschnitt entsprechend und holen — sofern erforderlich — deine Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO, Double-Opt-in-Verfahren).</p>
        </LegalSection>

        <LegalSection title="Deine Rechte als betroffene Person">
          <p style={{margin:'0 0 var(--space-4)'}}>Du hast im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung, Löschung oder Einschränkung der Verarbeitung dieser Daten (Art. 15–18 DSGVO). Ebenso steht dir ein Recht auf Datenübertragbarkeit (Art. 20 DSGVO) sowie ein Widerspruchsrecht gegen die Verarbeitung deiner Daten aus Gründen, die sich aus deiner besonderen Situation ergeben (Art. 21 DSGVO), zu.</p>
          <p style={{margin:0}}>Erteilte Einwilligungen kannst du jederzeit mit Wirkung für die Zukunft widerrufen. Wende dich dazu einfach an die oben genannte Kontakt-E-Mail-Adresse.</p>
        </LegalSection>

        <LegalSection title="Beschwerderecht bei einer Aufsichtsbehörde">
          <p style={{margin:0}}>Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung deiner personenbezogenen Daten durch uns zu beschweren. Zuständig ist grundsätzlich die estnische Datenschutzbehörde (Andmekaitse Inspektsioon, Tallinn). Du kannst dich als betroffene Person aber auch an die Aufsichtsbehörde deines gewöhnlichen Aufenthaltsorts wenden.</p>
        </LegalSection>

        <LegalSection title="Aktualität und Änderung dieser Datenschutzerklärung">
          <p style={{margin:0}}>Diese Datenschutzerklärung ist aktuell gültig (Stand: {new Date().toLocaleDateString('de-DE',{month:'long',year:'numeric'})}). Durch die Weiterentwicklung der Website oder geänderte gesetzliche Vorgaben kann es notwendig werden, diese Erklärung anzupassen.</p>
        </LegalSection>
      </div>
    </article>
  </main>;
}
