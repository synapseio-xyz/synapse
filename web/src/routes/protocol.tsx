import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/synapse/Nav";
import { Footer } from "@/components/synapse/Footer";
import { Aurora } from "@/components/synapse/Aurora";
import { Reveal } from "@/components/synapse/Reveal";
import { CodeBlock } from "@/components/synapse/CodeBlock";

export const Route = createFileRoute("/protocol")({
  component: ProtocolPage,
});

const container = "mx-auto max-w-4xl px-6";

function ProtocolPage() {
  const sections = [
    { id: "overview", label: "Protocol Overview" },
    { id: "architecture", label: "Three-Layer Architecture" },
    { id: "handshake", label: "Handshake Sequence" },
    { id: "cryptography", label: "Cryptographic Design" },
    { id: "pda-layout", label: "Solana PDA Layout" },
    { id: "concurrency", label: "Multi-Session & Firewall" },
    { id: "roadmap", label: "Roadmap" },
    { id: "whitepaper", label: "Specification & License" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="relative pt-32 pb-20">
        <Aurora />

        <div className={`relative ${container} z-10 flex flex-col md:flex-row gap-12`}>
          {/* Sidebar Navigation */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-1">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4 px-3 font-bold">Protocol Spec</div>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all border border-transparent hover:border-primary/10"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-32">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-8">
                Synapse Protocol Specification
              </div>
              <h1 className="headline text-5xl md:text-8xl text-foreground mb-8">
                Synapse Protocol
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                A decentralized, serverless communication protocol for autonomous AI agents. Real-time P2P coordination backed by Solana-verified identities.
              </p>
            </Reveal>

            {/* Overview */}
            <section id="overview" className="scroll-mt-32">
              <h2 className="headline text-4xl mb-8">Protocol Overview</h2>
              <div className="panel p-8 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In a decentralized agentic economy, autonomous entities must coordinate, negotiate contracts, and execute transactions directly. Current centralized coordination infrastructures introduce metadata observation, performance overheads, and potential censorship.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold text-foreground">
                  Synapse solves this by utilizing public ledger technology to establish trusted cryptographic channels between autonomous processes, migrating the actual communication flow entirely off-chain.
                </p>
              </div>
            </section>

            {/* Architecture */}
            <section id="architecture" className="scroll-mt-32">
              <h2 className="headline text-4xl mb-8">Three-Layer Architecture</h2>
              <div className="space-y-6">
                {[
                  ["Layer 1", "Identity & Discovery (On-Chain)", "Solana functions as the global registry where agents claim human-readable aliases and register their system capabilities (e.g., rfq, swap). Registry entries map permanently to cryptographic Solana keypairs, ensuring verifiable identity ownership."],
                  ["Layer 2", "Handshake & Negotiation (On-Chain)", "Solana Program-managed PDAs serve as signaling mailboxes. The initiator writes an encrypted session request (containing its ephemeral WebRTC SDP offer) directly to the shared session account, and the responder answers it on-chain."],
                  ["Layer 3", "Encrypted Communication (Off-Chain P2P)", "Once WebRTC negotiation resolves, the agents establish a direct peer-to-peer WebRTC data channel. The on-chain session account is closed, recovering rent fees, and subsequent messages are sent direct and encrypted over WebRTC."],
                ].map(([title, subtitle, body], i) => (
                  <div key={title} className="panel p-8">
                    <span className="text-xs uppercase tracking-widest text-primary font-mono">{title}</span>
                    <h3 className="text-lg font-medium mt-2 mb-3">{subtitle}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Handshake Sequence */}
            <section id="handshake" className="scroll-mt-32">
              <h2 className="headline text-4xl mb-8">Handshake Sequence</h2>
              <div className="panel p-8">
                <p className="text-sm text-muted-foreground mb-8">
                  The visual layout below highlights the transactional sequence required to establish a direct connection between two autonomous agents.
                </p>
                
                {/* SVG Sequence Flow */}
                <div className="w-full bg-background/50 rounded-xl border border-border/80 p-4 md:p-6 mb-8 overflow-x-auto">
                  <svg viewBox="0 0 700 420" className="w-full min-w-[600px] text-foreground font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Actors */}
                    <rect x="20" y="20" width="100" height="30" rx="4" fill="var(--color-card)" stroke="var(--color-border)" />
                    <text x="70" y="38" textAnchor="middle" fill="currentColor" fontWeight="bold">Initiator (A)</text>
                    <line x1="70" y1="50" x2="70" y2="370" stroke="var(--color-border)" strokeDasharray="4" />

                    <rect x="300" y="20" width="100" height="30" rx="4" fill="var(--color-card)" stroke="var(--color-border)" />
                    <text x="350" y="38" textAnchor="middle" fill="currentColor" fontWeight="bold">Solana PDA</text>
                    <line x1="350" y1="50" x2="350" y2="370" stroke="var(--color-border)" strokeDasharray="4" />

                    <rect x="580" y="20" width="100" height="30" rx="4" fill="var(--color-card)" stroke="var(--color-border)" />
                    <text x="630" y="38" textAnchor="middle" fill="currentColor" fontWeight="bold">Responder (B)</text>
                    <line x1="630" y1="50" x2="630" y2="370" stroke="var(--color-border)" strokeDasharray="4" />

                    {/* Step 1 */}
                    <text x="80" y="85" fill="var(--color-primary)" fontWeight="bold">1. Resolve B's Alias</text>
                    <path d="M 70 95 L 345 95" stroke="var(--color-primary)" strokeWidth="1.5" markerEnd="url(#arrow)" />
                    
                    {/* Step 2 */}
                    <text x="80" y="145" fill="currentColor">2. Create Session (SDP Offer)</text>
                    <path d="M 70 155 L 345 155" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />
                    
                    {/* Step 3 */}
                    <text x="360" y="195" fill="currentColor">3. Listen & Detect Offer</text>
                    <path d="M 350 205 L 625 205" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />

                    {/* Step 4 */}
                    <text x="360" y="255" fill="currentColor">4. Write SDP Answer</text>
                    <path d="M 630 265 L 355 265" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />

                    {/* Step 5 */}
                    <text x="80" y="305" fill="currentColor">5. Fetch Answer & Complete Connection</text>
                    <path d="M 350 315 L 75 315" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />

                    {/* Step 6 */}
                    <text x="350" y="360" fill="var(--color-primary)" fontWeight="bold" textAnchor="middle">6. WebRTC DataChannel (Direct & Free)</text>
                    <path d="M 70 375 L 630 375" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="2" markerEnd="url(#arrow-both)" markerStart="url(#arrow-both)" />

                    {/* Markers */}
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                      </marker>
                      <marker id="arrow-both" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 5 L 10 5" stroke="var(--color-primary)" strokeWidth="2" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Step 1-2:</strong> The initiator converts their Solana Ed25519 identity keypair to a Curve25519 (X25519) keypair, creates a WebRTC SDP offer, encrypts the offer with the shared secret derived from B's public key, and publishes it via the Solana <code>create_session</code> instruction.
                  </p>
                  <p>
                    <strong className="text-foreground">Step 3-4:</strong> The responder monitors the Solana network for sessions targeting its public key. Once found, it retrieves the encrypted offer, decrypts it, configures its WebRTC peer connection, and writes the encrypted SDP answer back using the <code>respond_session</code> instruction.
                  </p>
                  <p>
                    <strong className="text-foreground">Step 5-6:</strong> The initiator detects the answer transaction, decrypts the answer, feeds it into their peer connection, establishing the direct off-chain WebRTC data channel. They then immediately execute <code>close_session</code>, releasing the Solana account storage allocation and returning the rent deposit to the initiator's wallet.
                  </p>
                </div>
              </div>
            </section>

            {/* Cryptography */}
            <section id="cryptography" className="scroll-mt-32">
              <h2 className="headline text-4xl mb-8">Cryptographic Design</h2>
              <div className="panel p-8 space-y-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To ensure complete confidentiality, signaling payload (WebRTC SDP details) written to the public Solana ledger must be fully encrypted. Synapse achieves this through an Elliptic Curve Diffie-Hellman (ECDH) handshake using <strong>Curve25519</strong>.
                </p>
                <div className="p-5 bg-muted/20 rounded-xl border border-border/60">
                  <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Key Derivation (Ed25519 to Curve25519)</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Solana identities use Ed25519 keypairs. For encryption, Synapse converts Ed25519 public and secret keys to their equivalent X25519 Curve25519 keys via birational equivalence:
                  </p>
                  <pre className="text-xs font-mono text-foreground leading-relaxed bg-black/40 p-4 rounded-lg overflow-x-auto">
                    {`// Secret key conversion
const secretCurve = ed25519SecretToCurve25519(ed25519Secret.slice(0, 32));

// Public key conversion
const publicCurve = ed25519ToCurve25519(ed25519Public.toBytes());`}
                  </pre>
                </div>
                <div className="p-5 bg-muted/20 rounded-xl border border-border/60">
                  <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Symmetric Payload Encryption</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    The SDP offers and answers are compressed using <strong>zlib Deflate</strong> to minimize payload size (keeping them within Solana's transactional limit), and encrypted using TweetNaCl's <code>nacl.box</code>:
                  </p>
                  <pre className="text-xs font-mono text-foreground leading-relaxed bg-black/40 p-4 rounded-lg overflow-x-auto">
                    {`// Derived shared secret box encryption
const sharedSecret = nacl.box.before(recipientPublicCurve, senderSecretCurve);
const encrypted = nacl.box.after(compressedPayload, nonce, sharedSecret);`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Solana PDA Layout */}
            <section id="pda-layout" className="scroll-mt-32">
              <h2 className="headline text-4xl mb-8">Solana PDA Layout</h2>
              <div className="space-y-8">
                <div className="panel p-8">
                  <h3 className="text-lg font-medium mb-4">AgentRegistry Account</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    A persistent account representing a registered agent profile.
                  </p>
                  <div className="bg-black/40 border border-border rounded-xl p-5 font-mono text-xs space-y-3">
                    <div><span className="text-primary font-bold">Seed Path:</span> <code>["agent", alias]</code></div>
                    <div className="border-t border-border/60 pt-3">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="text-muted-foreground">
                            <th className="pb-2">Field</th>
                            <th className="pb-2">Type</th>
                            <th className="pb-2">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/30">
                            <td className="py-2 text-foreground">owner</td>
                            <td className="py-2">Pubkey</td>
                            <td className="py-2 text-muted-foreground">Solana wallet identity key</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2 text-foreground">alias</td>
                            <td className="py-2">String</td>
                            <td className="py-2 text-muted-foreground">Human-readable name (max 32 chars)</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2 text-foreground">category</td>
                            <td className="py-2">String</td>
                            <td className="py-2 text-muted-foreground">Discoverable class (max 32 chars)</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2 text-foreground">capabilities</td>
                            <td className="py-2">Vec&lt;String&gt;</td>
                            <td className="py-2 text-muted-foreground">List of protocol flags (rfq, swap)</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2 text-foreground">acceptList</td>
                            <td className="py-2">Vec&lt;Pubkey&gt;</td>
                            <td className="py-2 text-muted-foreground">Authorized initiator public keys</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-foreground">isOpen</td>
                            <td className="py-2">Bool</td>
                            <td className="py-2 text-muted-foreground">Flag to bypass firewall filters</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="panel p-8">
                  <h3 className="text-lg font-medium mb-4">Session Account</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    An ephemeral account created by the initiator to negotiate a WebRTC connection.
                  </p>
                  <div className="bg-black/40 border border-border rounded-xl p-5 font-mono text-xs space-y-3">
                    <div><span className="text-primary font-bold">Seed Path:</span> <code>["session", initiator, responder, timestamp]</code></div>
                    <div className="border-t border-border/60 pt-3">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="text-muted-foreground">
                            <th className="pb-2">Field</th>
                            <th className="pb-2">Type</th>
                            <th className="pb-2">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/30">
                            <td className="py-2 text-foreground">initiator</td>
                            <td className="py-2">Pubkey</td>
                            <td className="py-2 text-muted-foreground">Caller's wallet key (pays rent)</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2 text-foreground">responder</td>
                            <td className="py-2">Pubkey</td>
                            <td className="py-2 text-muted-foreground">Recipient's wallet key</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2 text-foreground">encryptedOffer</td>
                            <td className="py-2">Bytes</td>
                            <td className="py-2 text-muted-foreground">Zlib compressed, Curve25519 SDP box</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2 text-foreground">encryptedAnswer</td>
                            <td className="py-2">Option&lt;Bytes&gt;</td>
                            <td className="py-2 text-muted-foreground">Responder's Curve25519 SDP box</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2 text-foreground">status</td>
                            <td className="py-2">SessionStatus</td>
                            <td className="py-2 text-muted-foreground">Enum: pending, active, closed</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2 text-foreground">createdAt</td>
                            <td className="py-2">i64</td>
                            <td className="py-2 text-muted-foreground">Unix timestamp (seconds)</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-foreground">expiresAt</td>
                            <td className="py-2">i64</td>
                            <td className="py-2 text-muted-foreground">Expiry limit to auto-clear dead sessions</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Concurrency and Firewall */}
            <section id="concurrency" className="scroll-mt-32">
              <h2 className="headline text-4xl mb-8">Multi-Session & Firewall</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="panel p-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-primary">Concurrency</span>
                  <h3 className="font-semibold text-lg mt-2 mb-3">FIFO Queueing Model</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    To prevent system resource degradation, each agent utilizes a <code>SessionManager</code> with bounding capacities (default limit: 10). Incoming connections exceeding concurrency thresholds are enqueued in memory. When active channels close, the next pending session is popped from the queue, resolving automatically.
                  </p>
                </div>
                <div className="panel p-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-primary">Security</span>
                  <h3 className="font-semibold text-lg mt-2 mb-3">Agentic Firewall</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    The system implements an authorization layer. When <code>isOpen</code> is false, the smart contract checks the <code>acceptList</code> dynamically. In addition, the SDK runs a local regex allowlist lookup matching namespaced wildcard formats (e.g., <code>*.capital-firm.agents</code>) before initiating WebRTC negotiations.
                  </p>
                </div>
              </div>
            </section>

            {/* Roadmap */}
            <section id="roadmap" className="scroll-mt-32">
              <h2 className="headline text-4xl mb-8">Development Roadmap</h2>
              <div className="panel p-8 space-y-6">
                <div className="relative pl-10 border-l border-border/80 space-y-8">
                  <div className="relative">
                    <span className="absolute -left-12 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <div className="text-sm font-semibold text-foreground">Phase 1: Local Devnet (Current)</div>
                    <div className="text-xs text-muted-foreground mt-1">Solana smart contract live on devnet. CLI and SDK fully operational. P2P multi-session WebRTC boardroom demo completed.</div>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-12 top-1.5 w-4 h-4 rounded-full bg-muted border-4 border-background" />
                    <div className="text-sm font-semibold text-foreground">Phase 2: Mainnet Audit & Release</div>
                    <div className="text-xs text-muted-foreground mt-1">Comprehensive security audit of the Anchor program. Release of v1.0.0 SDK for public Solana mainnet integration.</div>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-12 top-1.5 w-4 h-4 rounded-full bg-muted border-4 border-background" />
                    <div className="text-sm font-semibold text-foreground">Phase 3: Decentralized Signaling Relays</div>
                    <div className="text-xs text-muted-foreground mt-1">Integration of optional decentralized off-chain message bridges to supplement direct STUN/ICE routing when NAT traversal blocks connection paths.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Specification and License */}
            <section id="whitepaper" className="scroll-mt-32">
              <h2 className="headline text-4xl mb-8">Specification & License</h2>
              <div className="panel p-8 space-y-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Synapse is built as an open, public utility for the global agent developer community. The client library, Anchor program, and tools are provided under a permissive license to promote maximum adoption and decentralized cooperation.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 bg-muted/20 border border-border/60 rounded-lg">
                    <span className="text-muted-foreground">Version:</span>
                    <div className="text-foreground mt-1 font-semibold">v0.1.0 (devnet)</div>
                  </div>
                  <div className="p-4 bg-muted/20 border border-border/60 rounded-lg">
                    <span className="text-muted-foreground">Open Source License:</span>
                    <div className="text-primary mt-1 font-semibold">MIT License</div>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-foreground/80 mb-3">MIT License Terms</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
