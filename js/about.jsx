const {Logo,Kicker,Button,Card,Badge,Icon,PulseRule}=window.MHLDesignSystem_73e19c;

function AboutPage(){
  const {ARTICLES,SectionHead,Newsletter,A}=window.MHLKit;
  return <main id="main">
    <section style={{background:'var(--surface-sunken)',padding:'var(--section-y) 0'}}>
      <div className="container hero-grid" style={{display:'grid',gridTemplateColumns:'1.15fr .85fr',gap:'var(--space-8)',alignItems:'center'}}>
        <div>
          <Kicker style={{marginBottom:'var(--space-4)'}}>My Healthy Longevity</Kicker>
          <h1 style={{margin:'0 0 var(--space-5)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-display-1)',lineHeight:'var(--lh-tight)',letterSpacing:'var(--track-display)',color:'var(--text-heading)'}}>Gesunde Jahre statt bloßer Jahre.</h1>
          <p style={{margin:'0 0 var(--space-6)',maxWidth:'52ch',fontSize:'var(--text-body-lg)',lineHeight:'var(--lh-body)',color:'var(--text-body)',textWrap:'pretty'}}>Wir lesen die Studien, prüfen die Messwerte und übersetzen beides in Schritte, die in einen normalen Alltag passen.</p>
          <div style={{display:'flex',gap:'var(--space-3)',flexWrap:'wrap'}}>
            <Button variant="primary" size="lg" as="a" href="guide.html">Guide starten</Button>
            <Button variant="secondary" size="lg" as="a" href="index.html">Journal lesen</Button>
          </div>
          <PulseRule width={220} assetBase={A} style={{marginTop:'var(--space-7)'}}/>
        </div>
        <div style={{background:'var(--papier)',border:'var(--border-hairline)',padding:'var(--space-6)'}}>
          <Kicker tone="muted" style={{marginBottom:'var(--space-4)'}}>Was wir messen</Kicker>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
            {[['activity','VO₂max','Kardiorespiratorische Fitness'],['moon','Tiefschlaf','Erholung und Gedächtnis'],['droplet','ApoB','Kardiovaskuläres Risiko'],['dumbbell','Kraft','Muskelmasse und Sturzrisiko']].map(([ic,t,s])=>
              <div key={t} style={{display:'flex',gap:'var(--space-3)',alignItems:'flex-start',paddingBottom:'var(--space-4)',borderBottom:'var(--border-hairline)'}}>
                <Icon name={ic} size={18} style={{marginTop:2}}/>
                <div><div style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h4)',color:'var(--text-heading)'}}>{t}</div>
                <div style={{fontSize:'var(--text-body-sm)',color:'var(--text-muted)'}}>{s}</div></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>

    <section style={{padding:'var(--section-y) 0'}}>
      <div className="container">
        <SectionHead kicker="Haltung" title="Longevity ist keine Kur.">Es ist eine Reihe kleiner Entscheidungen, die sich über Jahrzehnte summieren. Wir behandeln jede davon als Handwerk: messbar, wiederholbar, überprüfbar.</SectionHead>
        <div className="value-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)',marginTop:'var(--space-7)'}}>
          {[['Belege statt Versprechen','Jede Empfehlung nennt ihre Quelle und ihre Grenzen. Wo die Daten dünn sind, steht das dort.'],
            ['Vier Hebel','Schlaf, Bewegung, Ernährung, Messen. Alles andere ist Detail.'],
            ['Alltagstauglich','Wenn ein Schritt nicht in eine normale Woche passt, ist es kein Schritt.']].map(([t,d])=>
            <Card key={t} surface="paper" padding="var(--space-6)">
              <h3 style={{margin:'0 0 var(--space-3)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h3)',letterSpacing:'var(--track-heading)',color:'var(--text-heading)'}}>{t}</h3>
              <p style={{margin:0,fontSize:'var(--text-body-sm)',lineHeight:'var(--lh-body)',color:'var(--text-body)'}}>{d}</p>
            </Card>)}
        </div>
      </div>
    </section>

    <section style={{background:'var(--surface-accent-soft)',padding:'var(--section-y-sm) 0'}}>
      <div className="container" style={{display:'flex',alignItems:'center',gap:'var(--space-8)',flexWrap:'wrap'}}>
        <div style={{flex:'1 1 320px'}}>
          <Kicker style={{marginBottom:'var(--space-3)'}}>Guide</Kicker>
          <h2 style={{margin:'0 0 var(--space-3)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h2)',letterSpacing:'var(--track-heading)',color:'var(--text-heading)'}}>Sechs Wochen, vier Hebel, ein Plan.</h2>
          <p style={{margin:0,maxWidth:'50ch',fontSize:'var(--text-body-sm)',lineHeight:'var(--lh-body)',color:'var(--warm-700)'}}>Der MHL-Guide führt dich Schritt für Schritt durch Ausgangsmessung, Zielwerte und Wochenroutine.</p>
        </div>
        <Button variant="accent" size="lg" as="a" href="guide.html" iconRight={<Icon name="arrow-right" size={16} tone="onAccent"/>}>Guide öffnen</Button>
      </div>
    </section>
    <Newsletter/>
  </main>;
}
