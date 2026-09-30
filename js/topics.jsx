const {Kicker,Icon}=window.MHLDesignSystem_73e19c;

function Byline(){
  return <span style={{fontSize:'var(--text-caption)',color:'var(--text-muted)'}}>Von MHL Redaktion</span>;
}

/* Sidebar list item — title + byline only (no per-item kicker, the
   section heading already carries the topic), mirrors a "further
   reading" list next to a feature story. */
function ListItem({a}){
  const [hover,setHover]=React.useState(false);
  return <a href={'artikel.html?slug='+a.slug} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{display:'block',padding:'var(--space-4) 0',borderBottom:'var(--border-hairline)',textDecoration:'none',color:hover?'var(--text-accent)':'var(--text-heading)',transition:'color var(--dur-fast) var(--ease-standard)'}}>
    <div style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h4)',lineHeight:'var(--lh-heading)',letterSpacing:'var(--track-heading)',marginBottom:'var(--space-1)'}}>{a.title}</div>
    <Byline/>
  </a>;
}

/* Thumbnail row — small reserved image + kicker/title/byline, used for
   the secondary grid under a topic's lead feature. */
function ThumbRow({a}){
  const {ImagePlaceholder}=window.MHLKit;
  return <a href={'artikel.html?slug='+a.slug} style={{display:'grid',gridTemplateColumns:'96px 1fr',gap:'var(--space-4)',textDecoration:'none',color:'inherit',alignItems:'start'}}>
    <ImagePlaceholder ratio="1/1" style={{width:96}}/>
    <div>
      <Kicker tone="muted" style={{marginBottom:'var(--space-2)'}}>{a.kicker}</Kicker>
      <h4 style={{margin:'0 0 var(--space-2)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h4)',lineHeight:'var(--lh-heading)',letterSpacing:'var(--track-heading)',color:'var(--text-heading)'}}>{a.title}</h4>
      <Byline/>
    </div>
  </a>;
}

function MovementSection(){
  const {ARTICLES,articleBySlug,ImagePlaceholder,TopicHeading}=window.MHLKit;
  const feature=articleBySlug('vo2max');
  const sidebar=['krafttraining-frequenz','schrittzahl','zone2'].map(articleBySlug);
  const grid=['beweglichkeit','ruhetage'].map(articleBySlug);
  return <section style={{padding:'var(--space-8) 0 0'}}>
    <div className="container">
      <TopicHeading>Bewegung</TopicHeading>
      <div className="topic-split" style={{display:'grid',gridTemplateColumns:'1.5fr 1fr',gap:'var(--space-7)'}}>
        <div>
          <ImagePlaceholder ratio="16/10" style={{marginBottom:'var(--space-5)'}}/>
          <a href={'artikel.html?slug='+feature.slug} style={{textDecoration:'none',color:'inherit'}}>
            <Kicker style={{marginBottom:'var(--space-3)'}}>{feature.kicker}</Kicker>
            <h3 style={{margin:'0 0 var(--space-3)',maxWidth:'26ch',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h1)',lineHeight:'var(--lh-snug)',letterSpacing:'var(--track-heading)',color:'var(--text-heading)'}}>{feature.title}</h3>
          </a>
          <Byline/>
          <p style={{margin:'var(--space-3) 0 0',maxWidth:'54ch',fontSize:'var(--text-body)',lineHeight:'var(--lh-body)',color:'var(--text-body)'}}>{feature.lead}</p>
        </div>
        <div>
          <Kicker tone="muted" style={{marginBottom:'var(--space-1)'}}>Weitere Themen</Kicker>
          <div>{sidebar.map(a=><ListItem key={a.slug} a={a}/>)}</div>
        </div>
      </div>
      <div className="topic-grid-2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-7)',marginTop:'var(--space-7)',paddingTop:'var(--space-6)',borderTop:'var(--border-hairline)'}}>
        {grid.map(a=><ThumbRow key={a.slug} a={a}/>)}
      </div>
    </div>
  </section>;
}

function NumberedItem({n,a}){
  return <a href={'artikel.html?slug='+a.slug} style={{display:'flex',gap:'var(--space-4)',alignItems:'baseline',textDecoration:'none',color:'inherit'}}>
    <span style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h2)',color:'var(--koralle-hell)',flex:'0 0 auto'}}>{n}</span>
    <div>
      <Kicker tone="onInk" style={{marginBottom:'var(--space-2)'}}>{a.kicker}</Kicker>
      <div style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h3)',lineHeight:'var(--lh-heading)',letterSpacing:'var(--track-heading)',color:'var(--papier)'}}>{a.title}</div>
    </div>
  </a>;
}

function NutritionSection(){
  const {articleBySlug,ImagePlaceholder,TopicHeading}=window.MHLKit;
  const items=['protein','ballaststoffe','intervallfasten'].map(articleBySlug);
  return <section style={{padding:'var(--space-8) 0 0'}}>
    <div className="container">
      <TopicHeading>Ernährung</TopicHeading>
      <div className="topic-numbered" style={{display:'grid',gridTemplateColumns:'1fr 1fr',background:'var(--surface-ink)'}}>
        <div style={{padding:'var(--space-8)',display:'flex',flexDirection:'column',justifyContent:'center',gap:'var(--space-6)'}}>
          {items.map((a,i)=><NumberedItem key={a.slug} n={'0'+(i+1)} a={a}/>)}
        </div>
        <ImagePlaceholder ratio="auto" tone="ink" style={{height:'100%',minHeight:320}}/>
      </div>
    </div>
  </section>;
}

window.MHLKit=Object.assign(window.MHLKit||{},{MovementSection,NutritionSection});
