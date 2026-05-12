import { Link } from "@tanstack/react-router";

export function Footer() {
  const cols = [
    {
      title: "Protocol",
      links: [
        { label: "Overview", href: "/protocol#overview" },
        { label: "Architecture", href: "/protocol#architecture" },
        { label: "Cryptographic Handshake", href: "/protocol#cryptography" },
        { label: "Solana State", href: "/protocol#pda-layout" },
      ],
    },
    {
      title: "Build",
      links: [
        { label: "Installation", href: "/docs#installation" },
        { label: "Quickstart", href: "/docs#quickstart" },
        { label: "SDK Guide", href: "/docs#integration" },
        { label: "CLI Reference", href: "/docs#cli" },
      ],
    },
    {
      title: "Demo",
      links: [
        { label: "Negotiation Board", href: "/demo" },
        { label: "Apex Capital Dashboard", href: "/agent-a" },
        { label: "Meridian Trading Dashboard", href: "/agent-b" },
        { label: "Repository Source", href: "https://github.com/abdushakurob/synapse", isExternal: true },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rotate-45 bg-primary" />
              <span className="text-sm font-semibold tracking-tight text-foreground">Synapse</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              No servers. No middlemen. Just agents.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 border border-border px-3 py-1.5">
              <span className="status-dot" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Devnet · operational
              </span>
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-foreground/85 transition hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href.split("#")[0]}
                        hash={link.href.includes("#") ? link.href.split("#")[1] : undefined}
                        className="text-sm text-foreground/85 transition hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[11px] tracking-wide text-muted-foreground">
            © 2026 Synapse · Open protocol · Built on Solana
          </p>
          <div className="flex gap-6">
            <Link
              to="/protocol"
              hash="whitepaper"
              className="font-mono text-[11px] text-muted-foreground transition hover:text-foreground"
            >
              License
            </Link>
            <a
              href="https://github.com/abdushakurob/synapse"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] text-muted-foreground transition hover:text-foreground"
            >
              GitHub Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
