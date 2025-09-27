import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="font-semibold">meko</p>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link className="hover:text-foreground" href="/privacy">Privacy</Link>
            <Link className="hover:text-foreground" href="/terms">Terms</Link>
            <Link className="hover:text-foreground" href="/contact">Contact</Link>
            <Link className="hover:text-foreground" href="/status">Status</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


