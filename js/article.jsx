const {Kicker,Tag,Button,Callout,Icon,PulseRule,Badge}=window.MHLDesignSystem_73e19c;

function currentSlug(){
  return new URLSearchParams(window.location.search).get('slug');
}

function ArticlePage(){
  const {ARTICLES,articleBySlug,ArticleRow,Newsletter,A}=window.MHLKit;
  const a=articleBySlug(currentSlug());
  const others=ARTICLES.filter(x=>x.slug!==a.slug).slice(0,2);
  React.useEffect(()=>{document.title=a.title+' — My Healthy Longevity';},[a]);

  return <main id="main">
    <article style={{padding:'var(--space-7) 0 var(--section-y-sm)'}}>
      <div className="container" style={{maxWidth:'var(--container-narrow)'}}>
        <Button variant="ghost" size="sm" as="a" href="index.html" iconLeft={<Icon name="arrow-left" size={14} tone="muted"/>} style={{marginLeft:'calc(var(--space-5) * -1)',marginBottom:'var(--space-6)'}}>Journal</Button>
        <Kicker style={{marginBottom:'var(--space-4)'}}>{a.kicker}</Kicker>
        <h1 style={{margin:'0 0 var(--space-5)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-display-2)',lineHeight:'var(--lh-snug)',letterSpacing:'var(--track-display)',color:'var(--text-heading)'}}>{a.title}</h1>
        <div style={{display:'flex',alignItems:'center',gap:'var(--space-4)',paddingBottom:'var(--space-6)',borderBottom:'var(--border-hairline)',fontSize:'var(--text-caption)',color:'var(--text-muted)',flexWrap:'wrap'}}>
          <img src={A+'/avatar-ink.png'} alt="" style={{width:32,borderRadius:999}}/>
          <span>MHL Redaktion</span><span aria-hidden="true">·</span><span>{a.date}</span><span aria-hidden="true">·</span><span>{a.read} Lesezeit</span>
        </div>
        <p style={{margin:'var(--space-6) 0 var(--space-5)',fontSize:'var(--text-body-lg)',lineHeight:'var(--lh-body)',color:'var(--text-heading)',textWrap:'pretty'}}>{a.lead}</p>
        {a.body.intro.map((p,i)=><p key={i} style={{margin:'0 0 var(--space-5)',fontSize:'var(--text-body)',lineHeight:'var(--lh-body)'}}>{p}</p>)}
        <Callout title="Kurz gesagt" icon={<Icon name="info" size={14} tone="ink"/>} style={{margin:'0 0 var(--space-5)'}}>{a.body.callout}</Callout>
        <h2 style={{margin:'var(--space-7) 0 var(--space-4)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h2)',letterSpacing:'var(--track-heading)',color:'var(--text-heading)'}}>{a.body.subhead}</h2>
        <p style={{margin:'0 0 var(--space-5)',fontSize:'var(--text-body)',lineHeight:'var(--lh-body)'}}>{a.body.subtext}</p>
        <ol style={{margin:'0 0 var(--space-6)',paddingLeft:'1.2em',fontSize:'var(--text-body)',lineHeight:'var(--lh-loose)'}}>
          {a.body.list.map((li,i)=><li key={i}>{li}</li>)}
        </ol>
        <div style={{display:'flex',gap:'var(--space-2)',flexWrap:'wrap',paddingTop:'var(--space-5)',borderTop:'var(--border-hairline)'}}>
          {a.tags.map(t=><a key={t} href={'index.html?tag='+encodeURIComponent(t)} style={{textDecoration:'none'}}><Tag onClick={()=>{}}>{t}</Tag></a>)}
        </div>
        <PulseRule width={160} assetBase={A} style={{margin:'var(--space-7) 0 0'}}/>
      </div>
    </article>
    <section style={{borderTop:'var(--border-hairline)',padding:'var(--space-7) 0'}}>
      <div className="container">
        <Kicker tone="muted" style={{marginBottom:'var(--space-2)'}}>Weiterlesen</Kicker>
        {others.map(o=><ArticleRow key={o.slug} a={o}/>)}
      </div>
    </section>
    <Newsletter/>
  </main>;
}
