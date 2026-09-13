import { FormEvent, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleAlert,
  Clock3,
  FileCheck2,
  Fingerprint,
  LockKeyhole,
  Menu,
  SearchCheck,
  ShieldCheck,
  WalletCards,
  X,
} from "lucide-react";

const walletOptions = [
  "Phantom",
  "Trust Wallet",
  "MetaMask",
  "Coinbase Wallet",
  "Binance Web3 Wallet",
  "Ledger",
  "Trezor",
  "Other",
];

const networkOptions = [
  "Ethereum",
  "Bitcoin",
  "Solana",
  "BNB Smart Chain",
  "Polygon",
  "Arbitrum",
  "Base",
  "Other / not sure",
];

const caseNeeds = [
  "Trace a transaction",
  "Identify a recipient wallet",
  "Prepare evidence",
  "Understand recovery options",
  "I am not sure yet",
];

const steps = [
  {
    number: "01",
    title: "Initial analysis / triage",
    meta: "FREE · WITHIN 5 HOURS",
    description:
      "Our investigation team reviews the information you provide, checks the visible on-chain trail, and flags the most useful next steps.",
    icon: SearchCheck,
  },
  {
    number: "02",
    title: "Case estimation",
    meta: "FREE · WITHIN 24 HOURS",
    description:
      "You receive an initial case assessment with key findings and a clear view of what further investigation could involve.",
    icon: Fingerprint,
  },
  {
    number: "03",
    title: "Blockchain investigation",
    meta: "AVERAGE · 3 WORKING DAYS",
    description:
      "A dedicated investigator follows the movement of funds, maps counterparties, and identifies relevant exchange or freeze points.",
    icon: WalletCards,
  },
  {
    number: "04",
    title: "Court-ready report",
    meta: "DOCUMENTATION · ON REQUEST",
    description:
      "Receive an integrity statement and evidence-backed report you can share with law enforcement, counsel, or a court.",
    icon: FileCheck2,
  },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#top" aria-label="Cryptlab home">
      <span className="brand-mark" aria-hidden="true">
        <span>C</span>
        <i />
      </span>
      <span className="brand-word">cryptlab</span>
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="section-label">
      <span className="section-label__line" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);

  const toggleNeed = (need: string) => {
    setSelectedNeeds((current) =>
      current.includes(need) ? current.filter((item) => item !== need) : [...current, need],
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="page-width header-inner">
          <Logo />
          <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Primary navigation">
            <a href="#how-it-works" onClick={closeMenu}>How it works</a>
            <a href="#standards" onClick={closeMenu}>Our standards</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a className="nav-cta" href="#case-intake" onClick={closeMenu}>Start a case <ArrowUpRight size={15} /></a>
          </nav>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero page-width">
          <div className="hero-copy reveal-up">
            <div className="eyebrow"><span className="live-dot" /> DECENTRALIZED CRYPTO RECOVERY &amp; TRACKING</div>
            <h1>Clarity for the<br /><em>lost trail.</em></h1>
            <p className="hero-lede">We trace lost crypto assets and build verified evidence to help you understand what happened and prepare the documentation required for lawful recovery.</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#case-intake">Begin a case review <ArrowUpRight size={16} /></a>
              <a className="text-link" href="#how-it-works">Explore the process <ArrowDownRight size={16} /></a>
            </div>
            <div className="hero-note"><LockKeyhole size={14} /> Your wallet credentials are never required.</div>
          </div>

          <div className="hero-visual reveal-up" style={{ animationDelay: "100ms" }} aria-label="Illustration of an on-chain transaction trace">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="trace-card trace-card--top"><span className="trace-card__dot trace-card__dot--lime" /><span>TRACE ENGINE</span><strong>ACTIVE</strong></div>
            <div className="trace-card trace-card--bottom"><span className="trace-card__dot trace-card__dot--orange" /><span>CASE STATUS</span><strong>READY TO REVIEW</strong></div>
            <div className="trace-core">
              <div className="core-ring core-ring--outer" />
              <div className="core-ring core-ring--inner" />
              <div className="core-symbol">C</div>
            </div>
            <svg className="trace-lines" viewBox="0 0 600 540" fill="none" aria-hidden="true">
              <path d="M90 170 C145 148 164 92 226 113 C286 133 292 211 350 215 C420 220 421 98 505 112" />
              <path d="M102 416 C170 405 175 335 244 342 C316 350 310 438 387 418 C450 401 466 342 531 360" />
              <path d="M255 55 C265 127 225 154 245 220 C265 292 354 292 361 354 C368 409 331 447 350 495" />
              <circle cx="90" cy="170" r="5" /><circle cx="505" cy="112" r="5" />
              <circle cx="102" cy="416" r="5" /><circle cx="531" cy="360" r="5" />
              <circle cx="255" cy="55" r="5" /><circle cx="350" cy="495" r="5" />
            </svg>
            <div className="visual-caption"><span>01</span><span>FOLLOW THE<br />MOVEMENT</span><span className="caption-arrow">↗</span></div>
          </div>
        </section>

        <section className="ticker" aria-label="Cryptlab service highlights">
          <div className="ticker-track page-width">
            <span><i /> NON-CUSTODIAL</span><span><i /> EVIDENCE-FIRST</span><span><i /> HUMAN-LED</span><span><i /> LAW-ALIGNED</span><span><i /> NON-CUSTODIAL</span>
          </div>
        </section>

        <section className="intake-section page-width" id="case-intake">
          <div className="intake-intro">
            <SectionLabel>START HERE</SectionLabel>
            <h2>Give us the<br /><em>coordinates.</em></h2>
            <p>Share the details you have. Even incomplete information can help us establish a starting point for your review.</p>
            <div className="intake-assurance"><ShieldCheck size={20} /><span><strong>Private by design.</strong><br />This intake is for investigation context only. Never share seed phrases, private keys, or passwords.</span></div>
          </div>

          <div className="intake-card">
            {submitted ? (
              <div className="success-state" role="status">
                <div className="success-icon"><Check size={26} /></div>
                <div className="success-kicker">CASE INTAKE RECEIVED</div>
                <h3>Your coordinates are<br /><em>on the board.</em></h3>
                <p>Thank you. We’ll review the information you shared and outline the next best step for your case.</p>
                <button type="button" className="button button--dark" onClick={() => setSubmitted(false)}>Submit another case <ArrowUpRight size={16} /></button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-topline"><span>CASE INTAKE</span><span>01 / 05</span></div>
                <h3>Tell us what<br />you know.</h3>
                <p className="form-helper">No account needed. We only need enough detail to assess the visible trail.</p>

                <div className="form-grid">
                  <label className="field field--full">Email address <span>*</span>
                    <input name="email" type="email" placeholder="you@example.com" required />
                  </label>
                  <label className="field field--full">Wallet address <span>*</span>
                    <input name="walletAddress" type="text" placeholder="Paste a public address (0x…, bc1…, …)" required />
                  </label>
                  <label className="field field--full field--important">Mode key <span>*</span>
                    <input name="modeKey" type="text" placeholder="Enter your case reference" required />
                    <small>Required for case matching. This is not a wallet private key.</small>
                  </label>
                  <label className="field">Wallet <span>*</span>
                    <span className="select-wrap"><select name="wallet" defaultValue="" required><option value="" disabled>Select wallet</option>{walletOptions.map((wallet) => <option key={wallet}>{wallet}</option>)}</select><ChevronDown size={16} /></span>
                  </label>
                  <label className="field">Network / chain <span>*</span>
                    <span className="select-wrap"><select name="network" defaultValue="" required><option value="" disabled>Select network</option>{networkOptions.map((network) => <option key={network}>{network}</option>)}</select><ChevronDown size={16} /></span>
                  </label>
                  <label className="field field--full">Estimated amount lost
                    <span className="amount-input"><input name="amount" type="text" inputMode="decimal" placeholder="0.00" /><select name="currency" defaultValue="USD"><option>USD</option><option>EUR</option><option>GBP</option><option>USDT</option></select></span>
                  </label>
                </div>

                <fieldset className="needs-fieldset"><legend>What do you need help with?</legend><div className="need-options">{caseNeeds.map((need) => <button type="button" key={need} className={`need-chip ${selectedNeeds.includes(need) ? "need-chip--selected" : ""}`} onClick={() => toggleNeed(need)}>{selectedNeeds.includes(need) && <Check size={13} />}{need}</button>)}</div></fieldset>
                <label className="safe-check"><input type="checkbox" required /><span>I understand Cryptlab will never ask for my recovery phrase, private key, or wallet password. <b>*</b></span></label>
                <button className="button button--submit" type="submit">Submit case details <ArrowUpRight size={17} /></button>
                <p className="form-footnote"><LockKeyhole size={13} /> Front-end demo: submissions are not transmitted or stored.</p>
              </form>
            )}
          </div>
        </section>

        <section className="process-section" id="how-it-works">
          <div className="page-width">
            <div className="process-header">
              <div><SectionLabel>THE METHOD</SectionLabel><h2>Evidence before<br /><em>assumptions.</em></h2></div>
              <div className="process-summary"><span className="summary-number">04</span><p>clear stages<br />from first signal<br />to final file</p></div>
            </div>
            <div className="steps-grid">{steps.map(({ number, title, meta, description, icon: Icon }) => <article className="step-card" key={number}><div className="step-card__top"><span className="step-number">{number}</span><Icon size={22} strokeWidth={1.5} /></div><h3>{title}</h3><div className="step-meta">{meta}</div><p>{description}</p><div className="step-arrow">↗</div></article>)}</div>
          </div>
        </section>

        <section className="standards-section page-width" id="standards">
          <div className="standards-art"><div className="standard-stamp"><span>CL</span><small>VERIFIED<br />EVIDENCE</small></div><div className="standard-line line-a" /><div className="standard-line line-b" /><div className="standard-line line-c" /><div className="standards-orb" /></div>
          <div className="standards-copy"><SectionLabel>OUR STANDARDS</SectionLabel><h2>Forensic work.<br /><em>Human context.</em></h2><p>Blockchain data is permanent. Understanding what it means requires care, context, and a method you can explain to someone else.</p><div className="standard-list"><div><span>01</span><strong>Public trails only</strong><p>We work from information you can lawfully share and verify.</p></div><div><span>02</span><strong>No recovery guarantees</strong><p>Our job is to surface facts and options, never to overpromise.</p></div><div><span>03</span><strong>Built for handoff</strong><p>Findings are structured for investigators, counsel, and authorities.</p></div></div></div>
        </section>

        <section className="faq-section page-width" id="faq">
          <div><SectionLabel>COMMON QUESTIONS</SectionLabel><h2>Start with<br /><em>what’s certain.</em></h2></div>
          <div className="faq-list"><details open><summary>What information should I prepare? <span>+</span></summary><p>A public wallet address, the network or chain if you know it, approximate amount, dates, transaction hashes, screenshots, and any context about how the loss happened. Do not send credentials.</p></details><details><summary>Do I need to know the transaction hash? <span>+</span></summary><p>No. A public wallet address and a clear description of the incident can be enough to establish a starting point.</p></details><details><summary>Can Cryptlab recover my assets directly? <span>+</span></summary><p>Cryptlab is designed to trace activity and organize evidence. We do not take custody of assets, ask for remote wallet access, or guarantee recovery.</p></details></div>
        </section>

        <section className="final-cta page-width"><div className="final-cta__inner"><div><SectionLabel>THE FIRST SIGNAL</SectionLabel><h2>One address can<br /><em>change the picture.</em></h2></div><a className="button button--lime" href="#case-intake">Start your case review <ArrowUpRight size={17} /></a></div></section>
      </main>

      <footer className="site-footer"><div className="page-width footer-inner"><div><Logo compact /><p>Decentralized crypto recovery<br />&amp; tracking.</p></div><div className="footer-disclaimer"><CircleAlert size={16} /><p>Cryptlab provides investigative and documentation support. It does not provide legal advice, custody services, or a guarantee of recovery.</p></div><div className="footer-meta"><span>© 2026 CRYPTLAB</span><a href="#top">Back to top ↑</a></div></div></footer>
    </div>
  );
}
