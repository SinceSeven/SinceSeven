import { Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t px-4 py-3">
      <div className="mx-auto max-w-screen-xl text-center flex flex-col items-center gap-2 relative z-10">
        <p className="text-muted-foreground text-xs font-medium">
          &copy; {new Date().getFullYear()} SinceSeven. Всички права запазени.
        </p>
        <Link href="https://www.instagram.com/sincesevenbg/">
          <Instagram className="text-muted-foreground h-4 w-4 hover:text-primary transition-colors" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
