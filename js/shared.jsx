const {Logo,Kicker,Button,PulseRule,Icon,Input,Field,Card,Dialog}=window.MHLDesignSystem_73e19c;
const A='design-system/assets';

/* --- Content --------------------------------------------------------- */

const ARTICLES=[
  {
    slug:'tiefschlaf',kicker:'Schlaf',
    title:'Warum Tiefschlaf über den nächsten Tag entscheidet',
    lead:'Die ersten drei Stunden tragen den größten Teil der Erholung. Was das für deine Zubettgehzeit bedeutet.',
    read:'6 Min.',date:'24. August 2026',tags:['Schlaf','Regeneration'],
    body:{
      intro:[
        'Der Körper verteilt Erholung nicht gleichmäßig über die Nacht. In den ersten drei Stunden nach dem Einschlafen fällt der größte Anteil des Tiefschlafs an — die Phase, in der Wachstumshormon ausgeschüttet und das Gedächtnis konsolidiert wird. Wer spät ins Bett geht und zur gleichen Zeit aufsteht, verliert also überproportional viel davon.'
      ],
      callout:'Eine halbe Stunde früher schlafen wirkt stärker als eine halbe Stunde später aufstehen.',
      subhead:'Was das praktisch heißt',
      subtext:'Halte die Aufstehzeit fest und verschiebe nur den Abend. Zwei Wochen genügen, um im eigenen Tracking einen Unterschied zu sehen; alles darunter ist Rauschen.',
      list:['Letzte Mahlzeit drei Stunden vor dem Schlafen.','Schlafzimmer unter 19 °C.','Kein Alkohol an Tagen vor einer harten Trainingseinheit.']
    }
  },
  {
    slug:'vo2max',kicker:'Bewegung',
    title:'VO₂max ist der beste Einzelwert für Lebenserwartung',
    lead:'Kein anderer Messwert korreliert so deutlich. Und keiner lässt sich so verlässlich verbessern.',
    read:'9 Min.',date:'17. August 2026',tags:['Bewegung','Herz'],
    body:{
      intro:[
        'VO₂max misst, wie viel Sauerstoff dein Körper unter maximaler Anstrengung pro Minute verwerten kann. In großen Kohortenstudien trennt dieser eine Wert die niedrigste von der höchsten Fitnessgruppe stärker als Rauchen, Bluthochdruck oder Diabetes — die Spanne im Sterberisiko liegt beim Vierfachen.',
        'Anders als viele Risikofaktoren ist VO₂max in jedem Alter trainierbar. Sechs bis acht Wochen strukturiertes Ausdauertraining reichen für eine messbare Verbesserung, unabhängig vom Ausgangswert.'
      ],
      callout:'Zwei Intervalleinheiten pro Woche heben VO₂max zuverlässiger als reines Grundlagentraining.',
      subhead:'Was das praktisch heißt',
      subtext:'Ein Test alle drei bis vier Monate reicht, um den Trend zu sehen. Einzelne Trainingseinheiten verändern den Wert nicht sichtbar — die Kurve über Wochen zählt.',
      list:['Einmal wöchentlich vier Intervalle à vier Minuten, nahe Maximalpuls.','Grundlagenausdauer an zwei weiteren Tagen, Gespräch noch möglich.','VO₂max-Schätzung alle drei Monate erneut messen, gleiche Testbedingungen.']
    }
  },
  {
    slug:'protein',kicker:'Ernährung',
    title:'Protein: wie viel wirklich nötig ist',
    lead:'Ab 40 steigt der Bedarf, nicht der Appetit. Eine praktische Rechnung pro Mahlzeit.',
    read:'7 Min.',date:'10. August 2026',tags:['Ernährung','Muskel'],
    body:{
      intro:[
        'Der Proteinbedarf steigt mit dem Alter, weil die Muskelproteinsynthese pro Gramm Zufuhr träger anspringt — ein Effekt, der ab Mitte dreißig messbar einsetzt. Gleichzeitig sinkt bei vielen der Appetit nicht mit, was zu einer stillen Lücke zwischen Bedarf und Zufuhr führt.',
        'Die gängige Faustregel von 0,8 g pro Kilogramm Körpergewicht stammt aus Studien zur Vermeidung von Mangel, nicht zum Erhalt von Muskelmasse im Alter. Für Menschen über 40 mit Krafttraining liegt der praktikable Zielwert deutlich höher.'
      ],
      callout:'1,6 g Protein pro Kilogramm Körpergewicht und Tag, verteilt auf drei bis vier Mahlzeiten, ist ein robuster Zielwert ab 40.',
      subhead:'Was das praktisch heißt',
      subtext:'Rechne pro Mahlzeit statt pro Tag — 25 bis 35 g reichen aus, um die Proteinsynthese jeweils neu anzustoßen.',
      list:['Frühstück: griechischer Joghurt oder Rührei, 25–30 g.','Hauptmahlzeiten: handtellergroße Portion Fleisch, Fisch oder Hülsenfrüchte.','Nach dem Krafttraining: eine Extra-Portion, wenn die nächste Mahlzeit erst in zwei Stunden folgt.']
    }
  },
  {
    slug:'blutwerte',kicker:'Messen',
    title:'Vier Blutwerte, die einmal im Jahr genügen',
    lead:'ApoB, HbA1c, hs-CRP, Lp(a) — was sie zeigen und was sie nicht zeigen.',
    read:'11 Min.',date:'3. August 2026',tags:['Messen','Labor'],
    body:{
      intro:[
        'Die meisten Vorsorge-Panels messen viel und sagen wenig. Vier Werte liefern den größten Teil der relevanten Information für kardiovaskuläres und metabolisches Risiko — der Rest ist meist Wiederholung oder Rauschen.',
        'ApoB zählt die risikotragenden Partikel direkt und ist LDL-Cholesterin als Vorhersagewert überlegen. HbA1c zeigt den Blutzuckerschnitt der letzten drei Monate. hs-CRP erfasst stille Entzündung. Lp(a) ist genetisch fixiert und muss nur einmal im Leben bestimmt werden.'
      ],
      callout:'Lp(a) ändert sich durch Lebensstil praktisch nicht — einmal messen genügt für immer.',
      subhead:'Was das praktisch heißt',
      subtext:'Ein Jahresrhythmus reicht für ApoB, HbA1c und hs-CRP. Werte einzeln zu bewerten ist wenig aussagekräftig — der Trend über mehrere Messungen zählt.',
      list:['ApoB und HbA1c einmal jährlich, nüchtern gemessen.','hs-CRP nicht während einer akuten Erkältung oder Verletzung messen.','Lp(a) einmalig bestimmen, danach nur bei familiärer Vorbelastung wiederholen.']
    }
  },
  {
    slug:'krafttraining-frequenz',kicker:'Bewegung',
    title:'Zweimal pro Woche reicht für Muskelerhalt',
    lead:'Mehr Wiederholungen bringen wenig, wenn die Frequenz nicht stimmt. Was die Studienlage zur Trainingshäufigkeit sagt.',
    read:'5 Min.',date:'27. Juli 2026',tags:['Bewegung','Kraft'],
    body:{
      intro:[
        'Muskelmasse zu erhalten braucht weniger Volumen als sie aufzubauen — der Reiz, der den Abbau bremst, ist deutlich kleiner als der, der Wachstum auslöst. Zwei kurze Krafteinheiten pro Woche, die jede große Muskelgruppe einmal ansprechen, reichen aus, um den altersbedingten Verlust ab Mitte dreißig weitgehend zu stoppen.',
        'Wer mehr Zeit hat, gewinnt vor allem durch mehr Sätze pro Einheit dazu, nicht durch mehr Trainingstage. Die Frequenz ist der Hebel, der zuerst gesetzt werden sollte.'
      ],
      callout:'Ein Satz nahe des Muskelversagens pro Übung reicht als unterer Schwellenwert für Erhalt.',
      subhead:'Was das praktisch heißt',
      subtext:'Zwei Einheiten mit je sechs bis acht Übungen decken die wichtigsten Muskelgruppen ab. Die dritte Einheit ist ein Plus, kein Muss.',
      list:['Beine, Rücken, Brust, Schultern je einmal pro Woche direkt ansprechen.','Letzten zwei bis drei Wiederholungen jedes Satzes spürbar schwer.','Nach acht Wochen Gewicht oder Wiederholungen steigern, nicht die Tage.']
    }
  },
  {
    slug:'schrittzahl',kicker:'Bewegung',
    title:'Warum 7000 Schritte oft genug sind',
    lead:'Die 10.000-Schritte-Regel hat keine wissenschaftliche Basis. Ab wann der Nutzen tatsächlich abflacht.',
    read:'4 Min.',date:'20. Juli 2026',tags:['Bewegung','Herz'],
    body:{
      intro:[
        'Die Zahl 10.000 stammt aus einer japanischen Marketingkampagne der 1960er-Jahre, nicht aus einer Studie. Kohortendaten zeigen, dass das Sterberisiko zwischen 6000 und 8000 Schritten pro Tag deutlich sinkt und danach nur noch flach weiter abnimmt.',
        'Das macht mehr Schritte nicht falsch, aber es senkt die Einstiegshürde für alle, die aktuell bei 3000 oder 4000 liegen — der größte Sprung im Nutzen passiert genau dort.'
      ],
      callout:'Der Sprung von 4000 auf 7000 Schritte bringt mehr als der von 7000 auf 12000.',
      subhead:'Was das praktisch heißt',
      subtext:'Ein Spaziergang von 20 Minuten morgens und abends deckt bei den meisten schon die Hälfte der Strecke ab.',
      list:['Aktuellen Schnitt zwei Wochen lang ehrlich messen.','Ziel in Schritten von 1000 pro Woche anheben.','Ab 7000 zählt Konsistenz mehr als weitere Steigerung.']
    }
  },
  {
    slug:'zone2',kicker:'Bewegung',
    title:'Zone 2: das unterschätzte Grundlagentraining',
    lead:'Langsam laufen fühlt sich nutzlos an — und ist es nicht. Warum die meisten zu hart trainieren.',
    read:'6 Min.',date:'13. Juli 2026',tags:['Bewegung','Herz'],
    body:{
      intro:[
        'Zone 2 ist die Intensität, bei der sich noch ein Satz sprechen lässt, ohne nach Luft zu schnappen — meist 60 bis 70 % der maximalen Herzfrequenz. Bei dieser Belastung verbessert der Körper vor allem die Fähigkeit der Mitochondrien, Fett als Energiequelle zu nutzen, was die Grundlagenausdauer über Wochen anhebt.',
        'Die meisten Freizeitsportler trainieren systematisch zu hart für ihre Grundlageneinheiten und zu leicht für ihre Intervalle — das Ergebnis ist ein mittleres Tempo, das für keines der beiden Ziele optimal ist.'
      ],
      callout:'Wer beim Laufen nicht mehr sprechen kann, ist aus der Zone-2-Belastung heraus.',
      subhead:'Was das praktisch heißt',
      subtext:'Drei von vier Ausdauereinheiten pro Woche sollten in Zone 2 liegen, nur eine als echtes Intervalltraining.',
      list:['Herzfrequenz oder das Sprechtempo als Grenze nutzen, nicht das Tempo auf der Uhr.','Einheiten dürfen dafür länger sein, 45 bis 75 Minuten.','Ungeduld ist normal — die Wirkung zeigt sich erst nach vier bis sechs Wochen.']
    }
  },
  {
    slug:'beweglichkeit',kicker:'Bewegung',
    title:'Beweglichkeit verliert sich leiser als Kraft',
    lead:'Zehn Minuten Mobility am Tag verhindern, was du erst mit 60 bemerkst.',
    read:'5 Min.',date:'6. Juli 2026',tags:['Bewegung','Regeneration'],
    body:{
      intro:[
        'Kraftverlust lässt sich am Gewicht auf der Hantel ablesen. Beweglichkeitsverlust nicht — er zeigt sich erst, wenn eine Alltagsbewegung plötzlich nicht mehr geht, oft Jahrzehnte nach dem eigentlichen Rückgang. Hüfte und Schultern verlieren am schnellsten, weil sie am seltensten in vollem Bewegungsumfang belastet werden.',
      ],
      callout:'Volle Beweglichkeit erhält sich nur, wenn ihr regelmäßig der volle Bewegungsumfang abverlangt wird.',
      subhead:'Was das praktisch heißt',
      subtext:'Zehn Minuten am Tag reichen, wenn sie gezielt die Bereiche treffen, die im Alltag selten bewegt werden.',
      list:['Tiefe Kniebeuge und Ausfallschritt täglich je eine Minute halten.','Schulterrotation mit Stab oder Handtuch, zwei Minuten.','Beweglichkeit vor dem Training testen, nicht nur danach dehnen.']
    }
  },
  {
    slug:'ruhetage',kicker:'Bewegung',
    title:'Ruhetage sind Teil des Trainingsplans',
    lead:'Wer nie pausiert, baut langsamer auf. Wie viel Erholung wirklich nötig ist.',
    read:'4 Min.',date:'29. Juni 2026',tags:['Bewegung','Regeneration'],
    body:{
      intro:[
        'Anpassung passiert nicht während des Trainings, sondern danach — der Trainingsreiz setzt lediglich den Prozess in Gang. Ohne ausreichend Erholung zwischen harten Einheiten bleibt der Körper im Reparaturmodus stecken, bevor der nächste Reiz überhaupt sinnvoll verarbeitet werden kann.'
      ],
      callout:'Zwei harte Einheiten direkt hintereinander bringen selten mehr als eine harte Einheit mit einem Tag Abstand.',
      subhead:'Was das praktisch heißt',
      subtext:'Mindestens ein vollständig freier oder sehr leichter Tag pro Woche gehört in jeden Trainingsplan, unabhängig vom Ziel.',
      list:['Auf harte Beineinheit folgt kein hartes Ausdauertraining am nächsten Tag.','Schlafqualität ist der zuverlässigste Hinweis auf Erholungsbedarf.','Leichte Bewegung an Ruhetagen ist erlaubt, hartes Training nicht.']
    }
  },
  {
    slug:'ballaststoffe',kicker:'Ernährung',
    title:'30 Gramm Ballaststoffe, die kaum jemand erreicht',
    lead:'Der Zielwert ist bekannt, die Lücke trotzdem groß. Eine realistische Herangehensweise für den Tag.',
    read:'5 Min.',date:'23. Juli 2026',tags:['Ernährung','Darm'],
    body:{
      intro:[
        'Die empfohlenen 30 Gramm Ballaststoffe pro Tag erreichen die meisten Menschen um mehr als die Hälfte nicht. Ballaststoffe senken nachweislich das Risiko für Herz-Kreislauf-Erkrankungen und Typ-2-Diabetes und ernähren die Darmbakterien, die wiederum kurzkettige Fettsäuren mit entzündungshemmender Wirkung produzieren.',
        'Das Problem ist selten Unwissen, sondern die praktische Umsetzung: 30 Gramm bedeuten deutlich mehr Gemüse, Hülsenfrüchte und Vollkorn, als die meisten Teller aktuell zeigen.'
      ],
      callout:'Jede Mahlzeit mit einer Hülsenfrucht- oder Gemüseportion schließt einen Großteil der Lücke.',
      subhead:'Was das praktisch heißt',
      subtext:'Ballaststoffe langsam steigern, sonst reagiert der Darm mit Blähungen — eine Woche Eingewöhnung ist normal.',
      list:['Eine Portion Hülsenfrüchte an mindestens vier Tagen pro Woche.','Vollkorn statt Weißmehl bei Brot, Nudeln und Reis.','Obst mit Schale essen, wo möglich.']
    }
  },
  {
    slug:'intervallfasten',kicker:'Ernährung',
    title:'Intervallfasten wirkt vor allem durch weniger Kalorien',
    lead:'Der Effekt ist real, der Mechanismus banaler als gedacht. Was das für die Wahl der Methode bedeutet.',
    read:'6 Min.',date:'16. Juli 2026',tags:['Ernährung','Gewicht'],
    body:{
      intro:[
        'Studien, die die Kalorienzufuhr zwischen Intervallfasten und klassischer Kalorienreduktion gleichhalten, finden kaum Unterschiede bei Gewichtsverlust oder Stoffwechselmarkern. Der Hauptmechanismus hinter den beobachteten Effekten ist ein kürzeres Essensfenster, das bei vielen automatisch zu weniger Kalorien führt.',
        'Das macht die Methode nicht wertlos — für manche ist ein festes Fenster leichter durchzuhalten als striktes Kalorienzählen. Es bedeutet nur, dass kein Stoffwechsel-Bonus über die reine Kalorienbilanz hinaus zu erwarten ist.'
      ],
      callout:'Ein 8-Stunden-Essensfenster ersetzt kein Kaloriendefizit — es kann nur helfen, eines zu erreichen.',
      subhead:'Was das praktisch heißt',
      subtext:'Die beste Methode ist die, die sich über Monate durchhalten lässt, nicht die mit dem größten kurzfristigen Effekt.',
      list:['Essensfenster an den eigenen Tagesrhythmus anpassen, nicht umgekehrt.','Proteinzufuhr im Fenster priorisieren, um Muskelmasse zu erhalten.','Bei Krafttraining das Fenster um die Trainingszeit legen.']
    }
  }
];

function articleBySlug(slug){return ARTICLES.find(a=>a.slug===slug)||ARTICLES[0];}

/* --- Navigation -------------------------------------------------------
   Custom masthead built from MHL primitives (Logo, Icon, Button) rather
   than the compiled NavBar — that component has no room for search or a
   menu toggle, and its links always preventDefault() on href="#" instead
   of navigating. This composes real <a> links plus an accessible
   disclosure menu, following the same brand rules NavBar itself uses
   (sticky, 88% Papier + blur, hairline border, Koralle active underline). */

const NAV_PAGES={Journal:'index.html',About:'ueber-uns.html',Guide:'guide.html'};

function todayLong(){
  return new Date().toLocaleDateString('de-DE',{day:'numeric',month:'long',year:'numeric'});
}

function SubscribeDialog({open,onClose}){
  const [email,setEmail]=React.useState('');
  const [sent,setSent]=React.useState(false);
  React.useEffect(()=>{if(!open){setEmail('');setSent(false)}},[open]);
  return <Dialog open={open} onClose={onClose}
    title="Journal per Mail" description={sent?undefined:'Einmal pro Woche, ein Thema — mit Quelle und einer Handlung, die daraus folgt.'}
    confirmLabel={sent?'Schließen':'Abonnieren'} cancelLabel="Abbrechen"
    onConfirm={()=>sent?onClose():(email&&setSent(true))}>
    {sent
      ? <div role="status" style={{display:'flex',alignItems:'center',gap:'var(--space-3)',color:'var(--koralle-600)',fontSize:'var(--text-body-sm)'}}><Icon name="check" size={18} tone="accent"/>Danke — bitte bestätige die Mail in deinem Postfach.</div>
      : <Field label="E-Mail-Adresse"><Input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="name@mail.de" required autoFocus/></Field>}
  </Dialog>;
}

function Masthead({active}){
  const [menuOpen,setMenuOpen]=React.useState(false);
  const [searchOpen,setSearchOpen]=React.useState(false);
  const [subscribeOpen,setSubscribeOpen]=React.useState(false);
  const [query,setQuery]=React.useState('');
  const menuBtn=React.useRef(null),searchBtn=React.useRef(null),firstLink=React.useRef(null);

  const openMenu=()=>{setSearchOpen(false);setMenuOpen(true)};
  const openSearch=()=>{setMenuOpen(false);setSearchOpen(true)};
  const closeAll=()=>{setMenuOpen(false);setSearchOpen(false)};

  React.useEffect(()=>{if(menuOpen&&firstLink.current)firstLink.current.focus()},[menuOpen]);
  React.useEffect(()=>{
    const onKey=e=>{
      if(e.key!=='Escape')return;
      if(menuOpen){setMenuOpen(false);menuBtn.current&&menuBtn.current.focus()}
      if(searchOpen){setSearchOpen(false);searchBtn.current&&searchBtn.current.focus()}
    };
    window.addEventListener('keydown',onKey);
    return ()=>window.removeEventListener('keydown',onKey);
  },[menuOpen,searchOpen]);

  const submitSearch=e=>{
    e.preventDefault();
    if(query.trim())window.location.href='index.html?q='+encodeURIComponent(query.trim());
  };

  return <header style={{position:'sticky',top:0,zIndex:30,background:'color-mix(in srgb,var(--papier) 88%,transparent)',backdropFilter:'var(--scrim-blur)',borderBottom:'var(--border-hairline)'}}>
    <div className="container" style={{display:'flex',alignItems:'center',gap:'var(--space-5)',padding:'var(--space-4) var(--gutter)'}}>
      <a href="index.html" style={{display:'flex',flex:'0 0 auto'}}><Logo variant="paper" width={148} assetBase={A}/></a>
      <span className="masthead-date" style={{fontSize:'var(--text-caption)',color:'var(--text-muted)',paddingLeft:'var(--space-4)',borderLeft:'var(--border-hairline)',whiteSpace:'nowrap'}}>{todayLong()}</span>
      <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:'var(--space-2)'}}>
        <button ref={searchBtn} className="icon-btn" aria-label={searchOpen?'Suche schließen':'Suche öffnen'} aria-expanded={searchOpen} aria-controls="site-search" onClick={()=>searchOpen?closeAll():openSearch()}>
          <Icon name={searchOpen?'x':'search'} size={18}/>
        </button>
        <button ref={menuBtn} className="icon-btn" aria-label={menuOpen?'Menü schließen':'Menü öffnen'} aria-expanded={menuOpen} aria-controls="site-menu" onClick={()=>menuOpen?closeAll():openMenu()}>
          <Icon name={menuOpen?'x':'menu'} size={18}/>
        </button>
        <Button className="header-subscribe" variant="primary" size="sm" onClick={()=>setSubscribeOpen(true)} style={{marginLeft:'var(--space-2)'}}>Abonnieren</Button>
      </div>
    </div>

    {searchOpen&&<div id="site-search" style={{borderTop:'var(--border-hairline)',padding:'var(--space-4) 0'}}>
      <form onSubmit={submitSearch} role="search" className="container" style={{display:'flex',gap:'var(--space-3)'}}>
        <label htmlFor="masthead-q" style={{position:'absolute',width:1,height:1,overflow:'hidden',clip:'rect(0 0 0 0)'}}>Journal durchsuchen</label>
        <Input autoFocus id="masthead-q" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Journal durchsuchen — z. B. Protein, Schlaf, VO₂max" style={{flex:1}}/>
        <Button type="submit" variant="secondary" size="sm">Suchen</Button>
      </form>
    </div>}

    {menuOpen&&<nav id="site-menu" aria-label="Hauptnavigation" style={{borderTop:'var(--border-hairline)',padding:'var(--space-5) 0'}}>
      <div className="container" style={{display:'flex',flexDirection:'column',gap:'var(--space-1)'}}>
        {['Journal','About','Guide'].map((it,i)=>
          <a key={it} ref={i===0?firstLink:undefined} href={NAV_PAGES[it]} onClick={closeAll}
            style={{padding:'var(--space-3) 0',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h3)',letterSpacing:'var(--track-heading)',textDecoration:'none',
              color:active===it?'var(--text-heading)':'var(--text-muted)',borderBottom:'var(--border-hairline)'}}>{it}
            {active===it&&<span style={{display:'inline-block',width:6,height:6,borderRadius:999,background:'var(--koralle)',marginLeft:'var(--space-3)',verticalAlign:'middle'}}/>}
          </a>)}
        <Button className="menu-subscribe" variant="primary" fullWidth onClick={()=>{closeAll();setSubscribeOpen(true)}} style={{marginTop:'var(--space-4)'}}>Abonnieren</Button>
      </div>
    </nav>}
    <SubscribeDialog open={subscribeOpen} onClose={()=>setSubscribeOpen(false)}/>
  </header>;
}

/* --- Shared pieces ------------------------------------------------------ */

function SectionHead({kicker,title,children,align='left'}){
  return <div style={{maxWidth:'var(--measure)',textAlign:align,margin:align==='center'?'0 auto':undefined}}>
    <Kicker style={{marginBottom:'var(--space-3)'}}>{kicker}</Kicker>
    <h2 style={{margin:'0 0 var(--space-4)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-display-2)',lineHeight:'var(--lh-snug)',letterSpacing:'var(--track-display)',color:'var(--text-heading)'}}>{title}</h2>
    {children&&<p style={{margin:0,fontSize:'var(--text-body-lg)',lineHeight:'var(--lh-body)',color:'var(--text-body)',textWrap:'pretty'}}>{children}</p>}
  </div>;
}

/* Honest stand-in for missing photography: the brand deck names no photo
   set ("no photography supplied... layouts use type and flat colour and
   say so"), so this reserves the space in the right aspect ratio and
   says plainly that a photo belongs there, instead of faking one. */
function ImagePlaceholder({ratio='4/3',tone='muted',style}){
  const bg=tone==='ink'?'var(--surface-ink)':'var(--surface-muted)';
  const fg=tone==='ink'?'var(--text-on-ink-muted)':'var(--text-muted)';
  return <div style={{aspectRatio:ratio,background:bg,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'var(--space-2)',...style}}>
    <Icon name="image" size={20} tone={tone==='ink'?'onInk':'muted'}/>
    <span style={{fontSize:'var(--text-caption)',color:fg,textTransform:'uppercase',letterSpacing:'var(--track-kicker)'}}>Foto folgt</span>
  </div>;
}

/* Section header used above the topic showcases — a hairline rule then
   a large display title, matching the weight NavBar/Kicker already use
   for editorial section breaks. */
function TopicHeading({children}){
  return <div style={{borderTop:'var(--border-ink)',paddingTop:'var(--space-5)',marginBottom:'var(--space-6)'}}>
    <h2 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-display-1)',letterSpacing:'var(--track-display)',color:'var(--text-heading)'}}>{children}</h2>
  </div>;
}

function ArticleRow({a}){
  const [hover,setHover]=React.useState(false);
  return <a href={'artikel.html?slug='+a.slug} className="article-row" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{display:'grid',gridTemplateColumns:'150px 1fr 90px',gap:'var(--space-6)',padding:'var(--space-6) 0',borderBottom:'var(--border-hairline)',textDecoration:'none',alignItems:'start',minWidth:0,background:hover?'var(--surface-muted)':'transparent',transition:'background-color var(--dur-fast) var(--ease-standard)'}}>
    <div><Kicker tone={hover?'accent':'muted'}>{a.kicker}</Kicker><div style={{marginTop:6,fontSize:'var(--text-caption)',color:'var(--text-muted)'}}>{a.date}</div></div>
    <div style={{minWidth:0}}>
      <h3 style={{margin:'0 0 var(--space-2)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h3)',lineHeight:'var(--lh-heading)',letterSpacing:'var(--track-heading)',color:'var(--text-heading)'}}>{a.title}</h3>
      <p style={{margin:0,maxWidth:'var(--measure)',fontSize:'var(--text-body-sm)',lineHeight:'var(--lh-body)',color:'var(--text-body)'}}>{a.lead}</p>
    </div>
    <div style={{display:'flex',alignItems:'center',gap:6,justifyContent:'flex-end',fontSize:'var(--text-caption)',color:'var(--text-muted)'}}>{a.read}<Icon name="arrow-right" size={14} tone={hover?'accent':'muted'}/></div>
  </a>;
}

/* Magazine grid item — a real link wrapping a Card, used for the
   "Im Fokus" feature grid on the homepage. */
function FeatureCard({a}){
  return <a href={'artikel.html?slug='+a.slug} style={{display:'block',color:'inherit',textDecoration:'none'}}>
    <Card surface="paper" interactive padding="var(--space-6)" style={{height:'100%'}}>
      <Kicker style={{marginBottom:'var(--space-3)'}}>{a.kicker}</Kicker>
      <h3 style={{margin:'0 0 var(--space-3)',maxWidth:'26ch',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h2)',lineHeight:'var(--lh-snug)',letterSpacing:'var(--track-heading)',color:'var(--text-heading)'}}>{a.title}</h3>
      <p style={{margin:'0 0 var(--space-5)',fontSize:'var(--text-body-sm)',lineHeight:'var(--lh-body)',color:'var(--text-body)'}}>{a.lead}</p>
      <div style={{marginTop:'auto',display:'flex',alignItems:'center',gap:6,fontSize:'var(--text-caption)',color:'var(--text-muted)'}}>{a.date} · {a.read}<Icon name="arrow-right" size={14} tone="muted"/></div>
    </Card>
  </a>;
}

/* Compact sidebar row — used next to the hero story. MHL has no
   photography yet ("layouts use type and flat colour and say so"), so
   this stays typographic rather than faking a thumbnail. */
function SidebarStory({a}){
  const [hover,setHover]=React.useState(false);
  return <a href={'artikel.html?slug='+a.slug} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{display:'block',padding:'var(--space-5) 0',borderBottom:'var(--border-hairline)',textDecoration:'none',color:'inherit',background:hover?'var(--surface-muted)':'transparent',transition:'background-color var(--dur-fast) var(--ease-standard)'}}>
    <Kicker tone={hover?'accent':'muted'} style={{marginBottom:'var(--space-2)'}}>{a.kicker}</Kicker>
    <h4 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h4)',lineHeight:'var(--lh-heading)',letterSpacing:'var(--track-heading)',color:'var(--text-heading)'}}>{a.title}</h4>
  </a>;
}

/* Horizontally-scrolling "Trending" strip with prev/next controls.
   Stays on Papier (no full-bleed colour band) — the brand rule caps
   full-bleed coloured/dark sections at two per page (Newsletter's Tinte
   band and the Guide CTA's Pfirsich band already use that budget). */
function TrendItem({a}){
  return <a href={'artikel.html?slug='+a.slug} className="trend-item"
    style={{flex:'0 0 240px',scrollSnapAlign:'start',display:'block',padding:'var(--space-5)',border:'var(--border-hairline)',textDecoration:'none',color:'inherit'}}>
    <Kicker style={{marginBottom:'var(--space-3)'}}>{a.kicker}</Kicker>
    <h4 style={{margin:'0 0 var(--space-2)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h4)',lineHeight:'var(--lh-heading)',letterSpacing:'var(--track-heading)',color:'var(--text-heading)'}}>{a.title}</h4>
    <div style={{fontSize:'var(--text-caption)',color:'var(--text-muted)'}}>{a.read}</div>
  </a>;
}

function TrendingStrip({items}){
  const row=React.useRef(null);
  const reduced=typeof window!=='undefined'&&window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scroll=dir=>{if(row.current)row.current.scrollBy({left:dir*260,behavior:reduced?'auto':'smooth'})};
  return <section style={{padding:'var(--space-7) 0 0'}}>
    <div className="container">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:'var(--border-hairline)',paddingTop:'var(--space-5)',marginBottom:'var(--space-4)'}}>
        <Kicker tone="accent">Trending</Kicker>
        <div style={{display:'flex',gap:'var(--space-1)'}}>
          <button className="icon-btn" aria-label="Zurück" onClick={()=>scroll(-1)}><Icon name="arrow-left" size={16}/></button>
          <button className="icon-btn" aria-label="Weiter" onClick={()=>scroll(1)}><Icon name="arrow-right" size={16}/></button>
        </div>
      </div>
      <div ref={row} className="trend-row" style={{display:'flex',gap:'var(--space-4)',overflowX:'auto',scrollSnapType:'x proximity',paddingBottom:'var(--space-2)'}}>
        {items.map(a=><TrendItem key={a.slug} a={a}/>)}
      </div>
    </div>
  </section>;
}

function Newsletter(){
  const [sent,setSent]=React.useState(false);
  return <section style={{background:'var(--surface-ink)',padding:'var(--section-y-sm) 0'}}>
    <div className="container newsletter-grid" style={{display:'grid',gridTemplateColumns:'1fr 380px',gap:'var(--space-8)',alignItems:'center'}}>
      <div>
        <Kicker tone="onInk" style={{marginBottom:'var(--space-3)'}}>Journal per Mail</Kicker>
        <h2 style={{margin:'0 0 var(--space-3)',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h2)',letterSpacing:'var(--track-heading)',color:'var(--papier)'}}>Einmal pro Woche, ein Thema.</h2>
        <p style={{margin:0,maxWidth:'46ch',fontSize:'var(--text-body-sm)',lineHeight:'var(--lh-body)',color:'var(--text-on-ink-muted)'}}>Wir fassen zusammen, was neu ist — mit Quelle und einer Handlung, die daraus folgt.</p>
      </div>
      {sent
        ? <div role="status" style={{display:'flex',alignItems:'center',gap:'var(--space-3)',color:'var(--pfirsich)',fontSize:'var(--text-body-sm)'}}><Icon name="check" size={18} tone="var(--pfirsich)"/>Danke — bitte bestätige die Mail in deinem Postfach.</div>
        : <form onSubmit={e=>{e.preventDefault();setSent(true)}} style={{display:'flex',gap:'var(--space-3)'}}>
            <label htmlFor="nl-email" style={{position:'absolute',width:1,height:1,overflow:'hidden',clip:'rect(0 0 0 0)'}}>E-Mail-Adresse</label>
            <Input id="nl-email" type="email" name="email" placeholder="name@mail.de" required style={{background:'transparent',borderColor:'var(--warm-600)',color:'var(--papier)'}}/>
            <Button variant="onInk" type="submit">Abonnieren</Button>
          </form>}
    </div>
  </section>;
}

function Footer(){
  return <footer style={{borderTop:'var(--border-hairline)',padding:'var(--space-7) 0 var(--space-8)'}}>
    <div className="container" style={{display:'flex',gap:'var(--space-8)',alignItems:'flex-start',flexWrap:'wrap'}}>
      <div style={{flex:'0 0 auto'}}><Logo variant="paper" width={148} assetBase={A}/>
        <p style={{margin:'var(--space-4) 0 0',maxWidth:'34ch',fontSize:'var(--text-caption)',lineHeight:'var(--lh-body)',color:'var(--text-muted)'}}>Gesunde Jahre statt bloßer Jahre. Studienlage, übersetzt in Schritte.</p></div>
      <div style={{marginLeft:'auto',display:'flex',gap:'var(--space-8)',flexWrap:'wrap'}}>
        {[['Inhalt',[['Journal','index.html'],['Guide','guide.html']]],['Marke',[['About','ueber-uns.html']]],['Rechtliches',[['Impressum','#'],['Datenschutz','#']]]].map(([h,items])=>
          <div key={h}><Kicker tone="muted" style={{marginBottom:'var(--space-3)'}}>{h}</Kicker>
            <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>{items.map(([label,href])=><a key={label} href={href} style={{fontSize:'var(--text-body-sm)',color:'var(--text-body)',textDecoration:'none'}}>{label}</a>)}</div></div>)}
      </div>
    </div>
    <div className="container" style={{marginTop:'var(--space-7)',paddingTop:'var(--space-4)',borderTop:'var(--border-hairline)',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'var(--space-3)'}}>
      <span style={{fontSize:'var(--text-caption)',color:'var(--text-muted)'}}>© {new Date().getFullYear()} My Healthy Longevity</span>
      <PulseRule width={140} assetBase={A}/>
    </div>
  </footer>;
}

window.MHLKit=Object.assign(window.MHLKit||{},{ARTICLES,articleBySlug,Masthead,SectionHead,TopicHeading,ImagePlaceholder,ArticleRow,FeatureCard,SidebarStory,TrendingStrip,Newsletter,Footer,A});
