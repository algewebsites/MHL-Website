/* @ds-bundle: {"format":4,"namespace":"MHLDesignSystem_73e19c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"PulseRule","sourcePath":"components/data/PulseRule.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"1349d0259031","components/core/Button.jsx":"b6cb6c25a1f0","components/core/Card.jsx":"30bbe6e40a8d","components/core/Icon.jsx":"0791fe1f911f","components/core/Kicker.jsx":"9bd2eaf5f23b","components/core/Logo.jsx":"1265db5f201c","components/core/Tag.jsx":"8edd48d158c0","components/data/MetricCard.jsx":"fcd4984aeade","components/data/ProgressBar.jsx":"dc079246e305","components/data/PulseRule.jsx":"eb719276b5ed","components/feedback/Callout.jsx":"ec9ef11c854e","components/feedback/Dialog.jsx":"844214da38a8","components/forms/Checkbox.jsx":"bfb627600c4f","components/forms/Field.jsx":"28f275048bfd","components/forms/Input.jsx":"32f1574b74ae","components/forms/Radio.jsx":"a67a924f2dbd","components/forms/Select.jsx":"d78850ab836b","components/forms/Switch.jsx":"b3f0318b8095","components/navigation/NavBar.jsx":"66edd3783aa8","components/navigation/Tabs.jsx":"b09bd632f6f8","ui_kits/mhl_web/Article.jsx":"dbdf3ae4519e","ui_kits/mhl_web/Guide.jsx":"d573fa8d641f","ui_kits/mhl_web/Home.jsx":"a185d91494cf","ui_kits/mhl_web/Journal.jsx":"1273c949c5d0","ui_kits/mhl_web/Shared.jsx":"0575f58fcc14"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MHLDesignSystem_73e19c = window.MHLDesignSystem_73e19c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'var(--surface-muted)',
    color: 'var(--text-body)'
  },
  accent: {
    background: 'var(--koralle)',
    color: 'var(--text-on-accent)'
  },
  soft: {
    background: 'var(--pfirsich)',
    color: 'var(--warm-700)'
  },
  ink: {
    background: 'var(--tinte)',
    color: 'var(--text-on-ink)'
  },
  good: {
    background: 'var(--status-good-soft)',
    color: 'var(--status-good)'
  },
  watch: {
    background: 'var(--status-watch-soft)',
    color: 'var(--status-watch)'
  },
  risk: {
    background: 'var(--koralle-100)',
    color: 'var(--status-risk)'
  }
};
function Badge({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...TONES[tone],
      fontFamily: 'var(--font-brand)',
      fontWeight: 'var(--weight-medium)',
      fontSize: '11px',
      letterSpacing: 'var(--track-kicker)',
      textTransform: 'uppercase',
      padding: '4px var(--space-2) 3px',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-block',
      lineHeight: 1.3,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  fontFamily: 'var(--font-brand)',
  fontWeight: 'var(--weight-medium)',
  letterSpacing: 'var(--track-kicker)',
  textTransform: 'uppercase',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  textDecoration: 'none',
  transition: 'background-color var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard),transform var(--dur-instant) var(--ease-standard)',
  whiteSpace: 'nowrap'
};
const SIZES = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 var(--space-4)',
    fontSize: '11px'
  },
  md: {
    height: 'var(--control-h)',
    padding: '0 var(--space-5)',
    fontSize: 'var(--text-kicker)'
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 var(--space-6)',
    fontSize: '13px'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--text-on-ink)'
  },
  accent: {
    background: 'var(--action-accent)',
    color: 'var(--text-on-accent)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-heading)',
    borderColor: 'var(--line-ink)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-heading)'
  },
  onInk: {
    background: 'var(--papier)',
    color: 'var(--tinte)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--action-primary-hover)'
  },
  accent: {
    background: 'var(--action-accent-hover)'
  },
  secondary: {
    background: 'var(--tinte)',
    color: 'var(--text-on-ink)'
  },
  ghost: {
    background: 'var(--surface-muted)'
  },
  onInk: {
    background: 'var(--pfirsich)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  as = 'button',
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      ...BASE,
      ...SIZES[size],
      ...VARIANTS[variant],
      ...(hover && !disabled ? HOVER[variant] : null),
      transform: down && !disabled ? 'scale(var(--press-scale))' : 'none',
      width: fullWidth ? '100%' : undefined,
      opacity: disabled ? .4 : 1,
      pointerEvents: disabled ? 'none' : undefined,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  paper: {
    background: 'var(--surface-card)',
    border: 'var(--border-hairline)',
    color: 'var(--text-body)'
  },
  muted: {
    background: 'var(--surface-muted)',
    border: '1px solid transparent',
    color: 'var(--text-body)'
  },
  ink: {
    background: 'var(--surface-ink)',
    border: '1px solid transparent',
    color: 'var(--text-on-ink-muted)'
  },
  peach: {
    background: 'var(--surface-accent-soft)',
    border: '1px solid transparent',
    color: 'var(--warm-700)'
  },
  outline: {
    background: 'transparent',
    border: 'var(--border-strong)',
    color: 'var(--text-body)'
  }
};
function Card({
  surface = 'paper',
  padding = 'var(--space-5)',
  interactive = false,
  header,
  footer,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...SURFACES[surface],
      borderRadius: 'var(--radius-card)',
      boxShadow: interactive && hover ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      transform: interactive && hover ? 'translateY(var(--hover-lift))' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-5)',
      borderBottom: surface === 'paper' || surface === 'outline' ? 'var(--border-hairline)' : '1px solid rgba(255,255,255,.08)',
      fontFamily: 'var(--font-brand)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-kicker)',
      letterSpacing: 'var(--track-kicker)',
      textTransform: 'uppercase',
      color: surface === 'ink' ? 'var(--text-on-ink-muted)' : 'var(--text-muted)'
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-3) var(--space-5)',
      borderTop: surface === 'paper' || surface === 'outline' ? 'var(--border-hairline)' : '1px solid rgba(255,255,255,.08)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide outline icons are loaded as <img> from the lucide-static CDN.
   They are rendered as images (not CSS masks) so they survive html-to-image
   capture — @dsCard thumbnails, PNG snapshots and PPTX/PDF export.
   Consequence: the glyph keeps Lucide's own stroke colour (near-black) and
   tone is expressed through opacity / inversion rather than a brand hue.
   Drop MHL's own SVGs into assets/icons/ and set `src` to vendor them locally. */

const CDN = 'https://unpkg.com/lucide-static@0.451.0/icons/';
const TONES = {
  ink: {
    opacity: 1
  },
  body: {
    opacity: .82
  },
  muted: {
    opacity: .5
  },
  accent: {
    opacity: 1
  },
  onInk: {
    opacity: .85,
    filter: 'invert(1)'
  },
  onAccent: {
    opacity: 1,
    filter: 'invert(1)'
  }
};
function Icon({
  name,
  size = 18,
  tone = 'ink',
  src,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.ink;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src || CDN + name + '.svg',
    alt: "",
    "aria-hidden": "true",
    width: size,
    height: size,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      verticalAlign: 'middle',
      ...t,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Kicker({
  tone = 'accent',
  as = 'div',
  children,
  style,
  ...rest
}) {
  const Tag = as;
  const colors = {
    accent: 'var(--text-accent)',
    muted: 'var(--text-muted)',
    ink: 'var(--text-heading)',
    onInk: 'var(--text-on-ink-muted)'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-brand)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-kicker)',
      letterSpacing: 'var(--track-kicker)',
      textTransform: 'uppercase',
      color: colors[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ASSETS = {
  paper: 'logo-lockup-paper.png',
  ink: 'logo-lockup-ink.png',
  pfirsich: 'logo-mhl-pfirsich.png',
  pulse: 'pulse-mark-koralle.png',
  avatar: 'avatar-ink.png'
};
function Logo({
  variant = 'paper',
  width = 200,
  assetBase = 'assets',
  alt = 'MHL — My Healthy Longevity',
  style,
  ...rest
}) {
  const src = assetBase.replace(/\/$/, '') + '/' + (ASSETS[variant] || ASSETS.paper);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width,
      height: 'auto',
      minWidth: variant === 'paper' || variant === 'ink' ? 'var(--logo-min-width)' : undefined,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  active = false,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      padding: '5px var(--space-3)',
      borderRadius: 'var(--radius-pill)',
      cursor: rest.onClick ? 'pointer' : 'default',
      border: '1px solid ' + (active ? 'var(--tinte)' : 'var(--line-strong)'),
      background: active ? 'var(--tinte)' : hover ? 'var(--surface-muted)' : 'transparent',
      color: active ? 'var(--text-on-ink)' : 'var(--text-body)',
      transition: 'all var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "entfernen",
    style: {
      all: 'unset',
      cursor: 'pointer',
      lineHeight: 1,
      opacity: .6
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetricCard({
  label,
  value,
  unit,
  delta,
  status,
  note,
  icon,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    surface: "paper",
    padding: "var(--space-5)",
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      marginBottom: 'var(--space-4)'
    }
  }, icon, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-brand)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-kicker)',
      letterSpacing: 'var(--track-kicker)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), status && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: status
  }, status === 'good' ? 'Gut' : status === 'watch' ? 'Beobachten' : 'Achtung'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-brand)',
      fontSize: '40px',
      lineHeight: 1,
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-heading)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, unit), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      color: delta.startsWith('-') ? 'var(--status-risk)' : 'var(--status-good)'
    }
  }, delta)), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, note));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressBar({
  value = 0,
  max = 100,
  label,
  valueLabel,
  tone = 'accent',
  height = 6,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = {
    accent: 'var(--koralle)',
    ink: 'var(--tinte)',
    good: 'var(--status-good)',
    watch: 'var(--status-watch)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), (label || valueLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, valueLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: 'var(--warm-200)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data/PulseRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PulseRule({
  width = 280,
  assetBase = 'assets',
  onInk = false,
  style,
  ...rest
}) {
  const src = assetBase.replace(/\/$/, '') + '/' + (onInk ? 'logo-lockup-ink.png' : 'pulse-line-koralle.png');
  if (onInk) return /*#__PURE__*/React.createElement("img", _extends({
    src: assetBase.replace(/\/$/, '') + '/pulse-mark-koralle.png',
    alt: "",
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: width * 0.35,
      height: 'auto',
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "",
    "aria-hidden": "true",
    style: {
      display: 'block',
      width,
      height: 'auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { PulseRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/PulseRule.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Callout({
  tone = 'soft',
  title,
  children,
  icon,
  style,
  ...rest
}) {
  const tones = {
    soft: {
      background: 'var(--pfirsich)',
      color: 'var(--warm-700)'
    },
    muted: {
      background: 'var(--surface-muted)',
      color: 'var(--text-body)'
    },
    ink: {
      background: 'var(--tinte)',
      color: 'var(--text-on-ink-muted)'
    },
    good: {
      background: 'var(--status-good-soft)',
      color: 'var(--status-good)'
    }
  };
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      ...tones[tone],
      padding: 'var(--space-5)',
      borderLeft: '2px solid ' + (tone === 'ink' ? 'var(--koralle-hell)' : 'var(--koralle)'),
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-body)',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-brand)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-kicker)',
      letterSpacing: 'var(--track-kicker)',
      textTransform: 'uppercase',
      marginBottom: 'var(--space-2)',
      color: tone === 'ink' ? 'var(--papier)' : 'var(--text-heading)'
    }
  }, icon, title), children);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  description,
  onClose,
  confirmLabel = 'Bestätigen',
  onConfirm,
  cancelLabel = 'Abbrechen',
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      background: 'var(--scrim-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      animation: 'mhl-fade-up var(--dur-base) var(--ease-out)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-overlay)',
      borderRadius: 'var(--radius-card)',
      width: 'min(440px,100%)',
      padding: 'var(--space-6)',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-3)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-brand)',
      fontSize: 'var(--text-h3)',
      letterSpacing: 'var(--track-heading)',
      color: 'var(--text-heading)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-5)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, description), children, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    onClick: onClose
  }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onConfirm
  }, confirmLabel))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (checked ? 'var(--tinte)' : 'var(--line-strong)'),
      background: checked ? 'var(--tinte)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 5,
      borderLeft: '1.6px solid var(--papier)',
      borderBottom: '1.6px solid var(--papier)',
      transform: 'rotate(-45deg) translate(1px,-1px)'
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-brand)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-kicker)',
      letterSpacing: 'var(--track-kicker)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--status-risk)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid = false,
  iconLeft,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const base = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-body-sm)',
    color: 'var(--text-heading)',
    background: 'var(--surface-card)',
    border: '1px solid var(--line-strong)',
    borderRadius: 'var(--radius-sm)',
    height: 'var(--control-h)',
    padding: '0 var(--space-3)',
    width: '100%',
    outline: 'none',
    transition: 'border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard)'
  };
  const input = /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...base,
      paddingLeft: iconLeft ? '38px' : base.padding.split(' ')[1],
      borderColor: invalid ? 'var(--status-risk)' : focus ? 'var(--tinte)' : 'var(--line-strong)',
      boxShadow: focus ? '0 0 0 3px var(--koralle-100)' : 'none',
      ...style
    }
  }, rest));
  if (!iconLeft) return input;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 'var(--space-3)',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'inline-flex',
      pointerEvents: 'none'
    }
  }, iconLeft), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked,
  onChange,
  label,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (checked ? 'var(--koralle)' : 'var(--line-strong)'),
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--koralle)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-heading)',
        background: 'var(--surface-card)',
        border: '1px solid var(--line-strong)',
        borderRadius: 'var(--radius-sm)',
        height: 'var(--control-h)',
        padding: '0 var(--space-3)',
        width: '100%',
        outline: 'none',
        transition: 'border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard)'
      },
      appearance: 'none',
      paddingRight: 'var(--space-7)',
      cursor: 'pointer',
      borderColor: invalid ? 'var(--status-risk)' : focus ? 'var(--tinte)' : 'var(--line-strong)',
      boxShadow: focus ? '0 0 0 3px var(--koralle-100)' : 'none',
      ...style
    }
  }, rest), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 'var(--space-3)',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: '11px'
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 22,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--koralle)' : 'var(--warm-300)',
      position: 'relative',
      transition: 'background-color var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 16,
      height: 16,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--papier)',
      transition: 'left var(--dur-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  items = [],
  active,
  onNavigate,
  cta,
  assetBase = 'assets',
  sticky = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 20,
      background: 'color-mix(in srgb,var(--papier) 88%,transparent)',
      backdropFilter: 'var(--scrim-blur)',
      borderBottom: 'var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("nav", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-4) var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0]);
    },
    style: {
      display: 'flex',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "paper",
    width: 148,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      marginLeft: 'auto'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(it);
    },
    style: {
      fontFamily: 'var(--font-brand)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-kicker)',
      letterSpacing: 'var(--track-kicker)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: active === it ? 'var(--text-heading)' : 'var(--text-muted)',
      borderBottom: '1px solid ' + (active === it ? 'var(--koralle)' : 'transparent'),
      paddingBottom: 2,
      transition: 'color var(--dur-fast) var(--ease-standard)'
    }
  }, it)), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "primary",
    onClick: cta.onClick
  }, cta.label))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  active,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: 'var(--border-hairline)',
      ...style
    }
  }, rest), items.map(it => {
    const on = active === it;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it),
      style: {
        all: 'unset',
        cursor: 'pointer',
        fontFamily: 'var(--font-brand)',
        fontWeight: 'var(--weight-medium)',
        fontSize: 'var(--text-kicker)',
        letterSpacing: 'var(--track-kicker)',
        textTransform: 'uppercase',
        color: on ? 'var(--text-heading)' : 'var(--text-muted)',
        padding: '0 0 var(--space-3)',
        marginBottom: -1,
        borderBottom: '2px solid ' + (on ? 'var(--koralle)' : 'transparent'),
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mhl_web/Article.jsx
try { (() => {
const {
  Kicker,
  Tag,
  Button,
  Callout,
  Icon,
  PulseRule,
  Badge
} = window.MHLDesignSystem_73e19c;
function Article({
  article,
  onBack
}) {
  const {
    ARTICLES,
    ArticleRow,
    Newsletter,
    A
  } = window.MHLKit;
  const a = article || ARTICLES[0];
  const others = ARTICLES.filter(x => x !== a).slice(0, 2);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("article", {
    style: {
      padding: 'var(--space-7) 0 var(--section-y-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 'var(--container-narrow)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onBack,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 14,
      tone: "muted"
    }),
    style: {
      marginLeft: 'calc(var(--space-5) * -1)',
      marginBottom: 'var(--space-6)'
    }
  }, "Journal"), /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, a.kicker), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 var(--space-5)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-display-2)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-heading)'
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      paddingBottom: 'var(--space-6)',
      borderBottom: 'var(--border-hairline)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/avatar-ink.png',
    alt: "MHL Redaktion",
    style: {
      width: 32,
      borderRadius: 999
    }
  }), /*#__PURE__*/React.createElement("span", null, "MHL Redaktion"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, a.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, a.read, " Lesezeit")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) 0 var(--space-5)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-heading)',
      textWrap: 'pretty'
    }
  }, a.lead), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-5)',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, "Der K\xF6rper verteilt Erholung nicht gleichm\xE4\xDFig \xFCber die Nacht. In den ersten drei Stunden nach dem Einschlafen f\xE4llt der gr\xF6\xDFte Anteil des Tiefschlafs an \u2014 die Phase, in der Wachstumshormon ausgesch\xFCttet und das Ged\xE4chtnis konsolidiert wird. Wer sp\xE4t ins Bett geht und zur gleichen Zeit aufsteht, verliert also \xFCberproportional viel davon."), /*#__PURE__*/React.createElement(Callout, {
    title: "Kurz gesagt",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 14,
      tone: "ink"
    }),
    style: {
      margin: '0 0 var(--space-5)'
    }
  }, "Eine halbe Stunde fr\xFCher schlafen wirkt st\xE4rker als eine halbe Stunde sp\xE4ter aufstehen."), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-7) 0 var(--space-4)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h2)',
      letterSpacing: 'var(--track-heading)',
      color: 'var(--text-heading)'
    }
  }, "Was das praktisch hei\xDFt"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-5)',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, "Halte die Aufstehzeit fest und verschiebe nur den Abend. Zwei Wochen gen\xFCgen, um im eigenen Tracking einen Unterschied zu sehen; alles darunter ist Rauschen."), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: '0 0 var(--space-6)',
      paddingLeft: '1.2em',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--lh-loose)'
    }
  }, /*#__PURE__*/React.createElement("li", null, "Letzte Mahlzeit drei Stunden vor dem Schlafen."), /*#__PURE__*/React.createElement("li", null, "Schlafzimmer unter 19 \xB0C."), /*#__PURE__*/React.createElement("li", null, "Kein Alkohol an Tagen vor einer harten Trainingseinheit.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      paddingTop: 'var(--space-5)',
      borderTop: 'var(--border-hairline)'
    }
  }, a.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement(PulseRule, {
    width: 160,
    assetBase: A,
    style: {
      margin: 'var(--space-7) 0 0'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: 'var(--border-hairline)',
      padding: 'var(--space-7) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "muted",
    style: {
      marginBottom: 'var(--space-2)'
    }
  }, "Weiterlesen"), others.map(o => /*#__PURE__*/React.createElement(ArticleRow, {
    key: o.title,
    a: o,
    onOpen: () => window.scrollTo(0, 0)
  })))), /*#__PURE__*/React.createElement(Newsletter, null));
}
window.MHLKit = Object.assign(window.MHLKit || {}, {
  Article
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mhl_web/Article.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mhl_web/Guide.jsx
try { (() => {
const {
  Kicker,
  Tabs,
  MetricCard,
  ProgressBar,
  Card,
  Badge,
  Button,
  Checkbox,
  Switch,
  Icon,
  Callout,
  Dialog,
  Field,
  Input,
  Select
} = window.MHLDesignSystem_73e19c;
function Guide() {
  const {
    SectionHead,
    A
  } = window.MHLKit;
  const [tab, setTab] = React.useState('Übersicht');
  const [steps, setSteps] = React.useState({
    a: true,
    b: true,
    c: false,
    d: false
  });
  const [remind, setRemind] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const done = Object.values(steps).filter(Boolean).length;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 'var(--space-8) 0 var(--section-y-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, "Guide \xB7 Woche 3 von 6"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 var(--space-6)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-display-2)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-heading)'
    }
  }, "Deine Ausgangswerte."), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Übersicht', 'Schlaf', 'Bewegung', 'Ernährung'],
    active: tab,
    onChange: setTab,
    style: {
      marginBottom: 'var(--space-7)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Tiefschlaf",
    value: "1:24",
    unit: "h",
    delta: "+11 min",
    status: "good",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "moon",
      size: 15,
      tone: "muted"
    }),
    note: "\xDCber deinem 30-Tage-Schnitt."
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "VO\u2082max",
    value: "46.2",
    delta: "+0.4",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "activity",
      size: 15,
      tone: "muted"
    }),
    note: "Gut f\xFCr dein Alter, Ziel 48."
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Ruhepuls",
    value: "58",
    unit: "bpm",
    delta: "-2",
    status: "watch",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "heart-pulse",
      size: 15
    }),
    note: "Zwei N\xE4chte mit Alkohol."
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "ApoB",
    value: "82",
    unit: "mg/dL",
    status: "good",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "droplet",
      size: 15,
      tone: "muted"
    }),
    note: "Letzte Messung im Juni."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr .6fr',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "paper",
    header: "Wochenziele",
    footer: done + ' von 4 erledigt',
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Bewegung",
    valueLabel: "142 / 180 min",
    value: 142,
    max: 180
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Krafttraining",
    valueLabel: "1 / 2 Einheiten",
    value: 1,
    max: 2,
    tone: "watch"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Protein",
    valueLabel: "88 / 120 g",
    value: 88,
    max: 120,
    tone: "ink"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--line-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: steps.a,
    onChange: e => setSteps({
      ...steps,
      a: e.target.checked
    }),
    label: "Aufstehzeit zwei Wochen konstant halten"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: steps.b,
    onChange: e => setSteps({
      ...steps,
      b: e.target.checked
    }),
    label: "Letzte Mahlzeit drei Stunden vor dem Schlafen"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: steps.c,
    onChange: e => setSteps({
      ...steps,
      c: e.target.checked
    }),
    label: "Zweite Krafteinheit einplanen"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: steps.d,
    onChange: e => setSteps({
      ...steps,
      d: e.target.checked
    }),
    label: "Labortermin f\xFCr ApoB buchen"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "peach",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, "N\xE4chster Schritt"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-4)',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--warm-700)'
    }
  }, "Die zweite Krafteinheit ist der gr\xF6\xDFte offene Hebel dieser Woche."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    fullWidth: true,
    onClick: () => setOpen(true)
  }, "Einheit planen")), /*#__PURE__*/React.createElement(Card, {
    surface: "paper",
    header: "Einstellungen",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: remind,
    onChange: e => setRemind(e.target.checked),
    label: "Erinnerungen"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Wochenstart"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Montag', 'Sonntag']
  })))), /*#__PURE__*/React.createElement(Callout, {
    tone: "muted",
    title: "Messhinweis"
  }, "Werte aus Wearables schwanken um 5\u201310 %. Trends z\xE4hlen, Einzeltage nicht.")))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Krafteinheit planen",
    description: "Wir legen sie auf einen Tag ohne harte Ausdauereinheit.",
    confirmLabel: "Eintragen",
    onClose: () => setOpen(false),
    onConfirm: () => {
      setSteps(s => ({
        ...s,
        c: true
      }));
      setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Tag"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Donnerstag', 'Freitag', 'Samstag']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Dauer"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "45 min"
  })))));
}
window.MHLKit = Object.assign(window.MHLKit || {}, {
  Guide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mhl_web/Guide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mhl_web/Home.jsx
try { (() => {
const {
  Logo,
  Kicker,
  Button,
  Card,
  Badge,
  Icon,
  PulseRule
} = window.MHLDesignSystem_73e19c;
function Home({
  onOpen,
  onGuide
}) {
  const {
    ARTICLES,
    SectionHead,
    Newsletter,
    A
  } = window.MHLKit;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, "My Healthy Longevity"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 var(--space-5)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-display-1)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-heading)'
    }
  }, "Gesunde Jahre statt blo\xDFer Jahre."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-6)',
      maxWidth: '52ch',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, "Wir lesen die Studien, pr\xFCfen die Messwerte und \xFCbersetzen beides in Schritte, die in einen normalen Alltag passen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onGuide
  }, "Guide starten"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onOpen(ARTICLES[0])
  }, "Journal lesen")), /*#__PURE__*/React.createElement(PulseRule, {
    width: 220,
    assetBase: A,
    style: {
      marginTop: 'var(--space-7)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--papier)',
      border: 'var(--border-hairline)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "muted",
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, "Was wir messen"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, [['activity', 'VO₂max', 'Kardiorespiratorische Fitness'], ['moon', 'Tiefschlaf', 'Erholung und Gedächtnis'], ['droplet', 'ApoB', 'Kardiovaskuläres Risiko'], ['dumbbell', 'Kraft', 'Muskelmasse und Sturzrisiko']].map(([ic, t, s]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      paddingBottom: 'var(--space-4)',
      borderBottom: 'var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h4)',
      color: 'var(--text-heading)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, s)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Haltung",
    title: "Longevity ist keine Kur."
  }, "Es ist eine Reihe kleiner Entscheidungen, die sich \xFCber Jahrzehnte summieren. Wir behandeln jede davon als Handwerk: messbar, wiederholbar, \xFCberpr\xFCfbar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, [['Belege statt Versprechen', 'Jede Empfehlung nennt ihre Quelle und ihre Grenzen. Wo die Daten dünn sind, steht das dort.'], ['Vier Hebel', 'Schlaf, Bewegung, Ernährung, Messen. Alles andere ist Detail.'], ['Alltagstauglich', 'Wenn ein Schritt nicht in eine normale Woche passt, ist es kein Schritt.']].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    surface: "paper",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-3)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h3)',
      letterSpacing: 'var(--track-heading)',
      color: 'var(--text-heading)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-accent-soft)',
      padding: 'var(--section-y-sm) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, "Guide"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-3)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h2)',
      letterSpacing: 'var(--track-heading)',
      color: 'var(--text-heading)'
    }
  }, "Sechs Wochen, vier Hebel, ein Plan."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '50ch',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--warm-700)'
    }
  }, "Der MHL-Guide f\xFChrt dich Schritt f\xFCr Schritt durch Ausgangsmessung, Zielwerte und Wochenroutine.")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onGuide,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16,
      tone: "onAccent"
    })
  }, "Guide \xF6ffnen"))), /*#__PURE__*/React.createElement(Newsletter, null));
}
window.MHLKit = Object.assign(window.MHLKit || {}, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mhl_web/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mhl_web/Journal.jsx
try { (() => {
const {
  Kicker,
  Tag,
  Select,
  Icon,
  Card,
  Button
} = window.MHLDesignSystem_73e19c;
function Journal({
  onOpen
}) {
  const {
    ARTICLES,
    ArticleRow,
    Newsletter
  } = window.MHLKit;
  const [tag, setTag] = React.useState('Alle');
  const tags = ['Alle', 'Schlaf', 'Bewegung', 'Ernährung', 'Messen'];
  const list = ARTICLES.filter(a => tag === 'Alle' || a.kicker === tag);
  const lead = ARTICLES[0];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) 0 var(--space-7)',
      borderBottom: 'var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, "Journal"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 var(--space-5)',
      maxWidth: '22ch',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-display-2)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-heading)'
    }
  }, "Was die Daten hergeben."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    active: tag === t,
    onClick: () => setTag(t)
  }, t)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Neueste zuerst', 'Meistgelesen']
  }))))), tag === 'Alle' && /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-7) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "ink",
    padding: "var(--space-8)",
    interactive: true,
    onClick: () => onOpen(lead),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "onInk",
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, "Diese Woche \xB7 ", lead.kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-4)',
      maxWidth: '26ch',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h1)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--papier)'
    }
  }, lead.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-6)',
      maxWidth: '54ch',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-on-ink-muted)'
    }
  }, lead.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onInk",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14,
      tone: "ink"
    })
  }, "Weiterlesen"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--warm-500)'
    }
  }, lead.date, " \xB7 ", lead.read, " Lesezeit"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-7) 0 var(--section-y-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-hairline)'
    }
  }, list.map(a => /*#__PURE__*/React.createElement(ArticleRow, {
    key: a.title,
    a: a,
    onOpen: onOpen
  }))), !list.length && /*#__PURE__*/React.createElement("p", {
    style: {
      padding: 'var(--space-7) 0',
      color: 'var(--text-muted)'
    }
  }, "Noch keine Beitr\xE4ge in diesem Thema."))), /*#__PURE__*/React.createElement(Newsletter, null));
}
window.MHLKit = Object.assign(window.MHLKit || {}, {
  Journal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mhl_web/Journal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mhl_web/Shared.jsx
try { (() => {
const {
  Logo,
  Kicker,
  Button,
  PulseRule,
  Icon,
  Input,
  Field
} = window.MHLDesignSystem_73e19c;
const A = '../../assets';
const ARTICLES = [{
  kicker: 'Schlaf',
  title: 'Warum Tiefschlaf über den nächsten Tag entscheidet',
  lead: 'Die ersten drei Stunden tragen den größten Teil der Erholung. Was das für deine Zubettgehzeit bedeutet.',
  read: '6 Min.',
  date: '24. August 2026',
  tags: ['Schlaf', 'Regeneration']
}, {
  kicker: 'Bewegung',
  title: 'VO₂max ist der beste Einzelwert für Lebenserwartung',
  lead: 'Kein anderer Messwert korreliert so deutlich. Und keiner lässt sich so verlässlich verbessern.',
  read: '9 Min.',
  date: '17. August 2026',
  tags: ['Bewegung', 'Herz']
}, {
  kicker: 'Ernährung',
  title: 'Protein: wie viel wirklich nötig ist',
  lead: 'Ab 40 steigt der Bedarf, nicht der Appetit. Eine praktische Rechnung pro Mahlzeit.',
  read: '7 Min.',
  date: '10. August 2026',
  tags: ['Ernährung', 'Muskel']
}, {
  kicker: 'Messen',
  title: 'Vier Blutwerte, die einmal im Jahr genügen',
  lead: 'ApoB, HbA1c, hs-CRP, Lp(a) — was sie zeigen und was sie nicht zeigen.',
  read: '11 Min.',
  date: '3. August 2026',
  tags: ['Messen', 'Labor']
}];
function SectionHead({
  kicker,
  title,
  children,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure)',
      textAlign: align,
      margin: align === 'center' ? '0 auto' : undefined
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-4)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-display-2)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-heading)'
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, children));
}
function ArticleRow({
  a,
  onOpen
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(a);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '150px 1fr 90px',
      gap: 'var(--space-6)',
      padding: 'var(--space-6) 0',
      borderBottom: 'var(--border-hairline)',
      textDecoration: 'none',
      alignItems: 'start',
      background: hover ? 'var(--surface-muted)' : 'transparent',
      transition: 'background-color var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    tone: hover ? 'accent' : 'muted'
  }, a.kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, a.date)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-2)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h3)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--track-heading)',
      color: 'var(--text-heading)'
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--measure)',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, a.lead)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      justifyContent: 'flex-end',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, a.read, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14,
    tone: hover ? 'accent' : 'muted'
  })));
}
function Newsletter() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-ink)',
      padding: 'var(--section-y-sm) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    tone: "onInk",
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, "Journal per Mail"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-3)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h2)',
      letterSpacing: 'var(--track-heading)',
      color: 'var(--papier)'
    }
  }, "Einmal pro Woche, ein Thema."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '46ch',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-on-ink-muted)'
    }
  }, "Wir fassen zusammen, was neu ist \u2014 mit Quelle und einer Handlung, die daraus folgt.")), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      color: 'var(--pfirsich)',
      fontSize: 'var(--text-body-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    tone: "var(--pfirsich)"
  }), "Danke \u2014 bitte best\xE4tige die Mail in deinem Postfach.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "name@mail.de",
    required: true,
    style: {
      background: 'transparent',
      borderColor: 'var(--warm-600)',
      color: 'var(--papier)'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "onInk",
    type: "submit"
  }, "Abonnieren"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: 'var(--border-hairline)',
      padding: 'var(--space-7) 0 var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "paper",
    width: 148,
    assetBase: A
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      maxWidth: '34ch',
      fontSize: 'var(--text-caption)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, "Gesunde Jahre statt blo\xDFer Jahre. Studienlage, \xFCbersetzt in Schritte.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 'var(--space-8)'
    }
  }, [['Inhalt', ['Journal', 'Guide', 'Messwerte']], ['Marke', ['About', 'Kontakt', 'Presse']], ['Rechtliches', ['Impressum', 'Datenschutz']]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "muted",
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      marginTop: 'var(--space-7)',
      paddingTop: 'var(--space-4)',
      borderTop: 'var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 My Healthy Longevity"), /*#__PURE__*/React.createElement(PulseRule, {
    width: 140,
    assetBase: A
  })));
}
window.MHLKit = Object.assign(window.MHLKit || {}, {
  ARTICLES,
  SectionHead,
  ArticleRow,
  Newsletter,
  Footer,
  A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mhl_web/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.PulseRule = __ds_scope.PulseRule;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
