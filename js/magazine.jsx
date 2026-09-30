const {Kicker,Tag,Select,Icon,Card,Button}=window.MHLDesignSystem_73e19c;

function readParams(){
  const p=new URLSearchParams(window.location.search);
  return {tag:p.get('tag')||'Alle',q:p.get('q')||''};
}

function matches(a,q){
  const hay=(a.title+' '+a.lead+' '+a.kicker+' '+a.tags.join(' ')).toLowerCase();
  return hay.includes(q.toLowerCase());
}

function Magazine(){
  const {ARTICLES,ArticleRow,SidebarStory,TrendingStrip,MovementSection,NutritionSection,Newsletter}=window.MHLKit;
  const init=readParams();
  const [tag,setTag]=React.useState(init.tag);
  const [q]=React.useState(init.q);
  const tags=['Alle','Schlaf','Bewegung','Ernährung','Messen'];
  const setAndSync=t=>{
    setTag(t);
    const url=new URL(window.location);
    url.searchParams.delete('q');
    if(t==='Alle'){url.searchParams.delete('tag')}else{url.searchParams.set('tag',t)}
    window.history.replaceState({},'',url);
  };

  const searching=q.length>0;
  const lead=ARTICLES[0];
  const sidebar=ARTICLES.slice(1,3);
  const list=searching
    ? ARTICLES.filter(a=>matches(a,q))
    : ARTICLES.filter(a=>tag==='Alle'||a.kicker===tag||a.tags.includes(tag));
  const showHero=!searching&&tag==='Alle';

  return <main id="main">
    <section style={{padding:'var(--space-8) 0 var(--space-7)',borderBottom:'var(--border-hairline)'}}>
      <div className="container">
        <Kicker style={{marginBottom:'var(--space-3)'}}>Journal</Kicker>
        <h1 style={{margin:'0 0 var(--space-5)',maxWidth:'26ch',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-display-2)',lineHeight:'var(--lh-snug)',letterSpacing:'var(--track-display)',color:'var(--text-heading)'}}>{searching?'Suchergebnisse für „'+q+'".':'Was die Daten hergeben.'}</h1>
        {searching
          ? <a href="index.html" style={{fontSize:'var(--text-body-sm)',color:'var(--text-accent)'}}>← Zur Übersicht</a>
          : <div role="group" aria-label="Nach Thema filtern" style={{display:'flex',alignItems:'center',gap:'var(--space-2)',flexWrap:'wrap'}}>
              {tags.map(t=><Tag key={t} active={tag===t} onClick={()=>setAndSync(t)} aria-pressed={tag===t}>{t}</Tag>)}
              <div style={{marginLeft:'auto',width:180}}><Select options={['Neueste zuerst','Meistgelesen']} aria-label="Sortierung"/></div>
            </div>}
      </div>
    </section>

    {showHero&&<section style={{padding:'var(--space-7) 0 0'}}>
      <div className="container hero-split" style={{display:'grid',gridTemplateColumns:'1.6fr 1fr',gap:'var(--space-6)',alignItems:'stretch'}}>
        <a href={'artikel.html?slug='+lead.slug} style={{display:'block',color:'inherit',textDecoration:'none'}}>
          <Card surface="ink" padding="var(--space-8)" interactive style={{height:'100%',cursor:'pointer'}}>
            <Kicker tone="onInk" style={{marginBottom:'var(--space-4)'}}>Diese Woche · {lead.kicker}</Kicker>
            <h2 style={{margin:'0 0 var(--space-4)',maxWidth:'26ch',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h1)',lineHeight:'var(--lh-snug)',letterSpacing:'var(--track-display)',color:'var(--papier)'}}>{lead.title}</h2>
            <p style={{margin:'0 0 var(--space-6)',maxWidth:'54ch',fontSize:'var(--text-body-lg)',lineHeight:'var(--lh-body)',color:'var(--text-on-ink-muted)'}}>{lead.lead}</p>
            <div style={{display:'flex',alignItems:'center',gap:'var(--space-4)'}}>
              <Button variant="onInk" size="sm" iconRight={<Icon name="arrow-right" size={14} tone="ink"/>} as="span">Weiterlesen</Button>
              <span style={{fontSize:'var(--text-caption)',color:'var(--warm-500)'}}>{lead.date} · {lead.read} Lesezeit</span>
            </div>
          </Card>
        </a>
        <div style={{display:'flex',flexDirection:'column'}}>
          <Kicker tone="muted" style={{marginBottom:'var(--space-2)'}}>Im Fokus</Kicker>
          <div style={{display:'flex',flexDirection:'column'}}>
            {sidebar.map(a=><SidebarStory key={a.slug} a={a}/>)}
          </div>
        </div>
      </div>
    </section>}

    {showHero&&<TrendingStrip items={ARTICLES}/>}
    {showHero&&<MovementSection/>}
    {showHero&&<NutritionSection/>}

    <section style={{padding:'var(--space-7) 0 var(--section-y-sm)'}}>
      <div className="container">
        <Kicker tone="muted" style={{marginBottom:'var(--space-2)'}}>{searching?list.length+' Treffer':(tag==='Alle'?'Alle Beiträge':tag)}</Kicker>
        <div style={{borderTop:'var(--border-hairline)'}}>
          {list.map(a=><ArticleRow key={a.slug} a={a}/>)}
        </div>
        {!list.length&&<p style={{padding:'var(--space-7) 0',color:'var(--text-muted)'}}>{searching?'Keine Beiträge zu „'+q+'" gefunden.':'Noch keine Beiträge in diesem Thema.'}</p>}
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
