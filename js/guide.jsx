const {Kicker,Tabs,MetricCard,ProgressBar,Card,Badge,Button,Checkbox,Switch,Icon,Callout,Dialog,Field,Input,Select}=window.MHLDesignSystem_73e19c;

function GuidePage(){
  const [tab,setTab]=React.useState('Übersicht');
  const [steps,setSteps]=React.useState({a:true,b:true,c:false,d:false});
  const [remind,setRemind]=React.useState(true);
  const [open,setOpen]=React.useState(false);
  const done=Object.values(steps).filter(Boolean).length;
  return <main id="main" style={{padding:'var(--space-8) 0 var(--section-y-sm)'}}>
    <div className="container">
      <Kicker style={{marginBottom:'var(--space-3)'}}>Guide · Woche 3 von 6</Kicker>
      <h1 style={{margin:'0 0 var(--space-6)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-display-2)',lineHeight:'var(--lh-snug)',letterSpacing:'var(--track-display)',color:'var(--text-heading)'}}>Deine Ausgangswerte.</h1>
      <Tabs items={['Übersicht','Schlaf','Bewegung','Ernährung']} active={tab} onChange={setTab} style={{marginBottom:'var(--space-7)'}}/>

      <div className="metric-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--space-4)'}}>
        <MetricCard label="Tiefschlaf" value="1:24" unit="h" delta="+11 min" status="good" icon={<Icon name="moon" size={15} tone="muted"/>} note="Über deinem 30-Tage-Schnitt."/>
        <MetricCard label="VO₂max" value="46.2" delta="+0.4" icon={<Icon name="activity" size={15} tone="muted"/>} note="Gut für dein Alter, Ziel 48."/>
        <MetricCard label="Ruhepuls" value="58" unit="bpm" delta="-2" status="watch" icon={<Icon name="heart-pulse" size={15}/>} note="Zwei Nächte mit Alkohol."/>
        <MetricCard label="ApoB" value="82" unit="mg/dL" status="good" icon={<Icon name="droplet" size={15} tone="muted"/>} note="Letzte Messung im Juni."/>
      </div>

      <div className="guide-columns" style={{display:'grid',gridTemplateColumns:'1.4fr .6fr',gap:'var(--space-5)',marginTop:'var(--space-5)',alignItems:'start'}}>
        <Card surface="paper" header="Wochenziele" footer={done+' von 4 erledigt'} padding="var(--space-6)">
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
            <ProgressBar label="Bewegung" valueLabel="142 / 180 min" value={142} max={180}/>
            <ProgressBar label="Krafttraining" valueLabel="1 / 2 Einheiten" value={1} max={2} tone="watch"/>
            <ProgressBar label="Protein" valueLabel="88 / 120 g" value={88} max={120} tone="ink"/>
            <div style={{height:1,background:'var(--line-hairline)'}}/>
            <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
              <Checkbox checked={steps.a} onChange={e=>setSteps({...steps,a:e.target.checked})} label="Aufstehzeit zwei Wochen konstant halten"/>
              <Checkbox checked={steps.b} onChange={e=>setSteps({...steps,b:e.target.checked})} label="Letzte Mahlzeit drei Stunden vor dem Schlafen"/>
              <Checkbox checked={steps.c} onChange={e=>setSteps({...steps,c:e.target.checked})} label="Zweite Krafteinheit einplanen"/>
              <Checkbox checked={steps.d} onChange={e=>setSteps({...steps,d:e.target.checked})} label="Labortermin für ApoB buchen"/>
            </div>
          </div>
        </Card>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
          <Card surface="peach" padding="var(--space-5)">
            <Kicker style={{marginBottom:'var(--space-3)'}}>Nächster Schritt</Kicker>
            <p style={{margin:'0 0 var(--space-4)',fontSize:'var(--text-body-sm)',lineHeight:'var(--lh-body)',color:'var(--warm-700)'}}>Die zweite Krafteinheit ist der größte offene Hebel dieser Woche.</p>
            <Button variant="accent" size="sm" fullWidth onClick={()=>setOpen(true)}>Einheit planen</Button>
          </Card>
          <Card surface="paper" header="Einstellungen" padding="var(--space-5)">
            <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
              <Switch checked={remind} onChange={e=>setRemind(e.target.checked)} label="Erinnerungen"/>
              <Field label="Wochenstart"><Select options={['Montag','Sonntag']}/></Field>
            </div>
          </Card>
          <Callout tone="muted" title="Messhinweis">Werte aus Wearables schwanken um 5–10 %. Trends zählen, Einzeltage nicht.</Callout>
        </div>
      </div>
    </div>
    <Dialog open={open} title="Krafteinheit planen" description="Wir legen sie auf einen Tag ohne harte Ausdauereinheit."
      confirmLabel="Eintragen" onClose={()=>setOpen(false)} onConfirm={()=>{setSteps(s=>({...s,c:true}));setOpen(false)}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-4)'}}>
        <Field label="Tag"><Select options={['Donnerstag','Freitag','Samstag']}/></Field>
        <Field label="Dauer"><Input defaultValue="45 min"/></Field>
      </div>
    </Dialog>
  </main>;
}
