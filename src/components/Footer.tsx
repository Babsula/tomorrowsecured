import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/20 py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-primary" />
        <span className="font-semibold">Tomorrow Secured</span>
      </div>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
        <a href="#" className="hover:text-primary transition-colors">Terms</a>
        <a href="#" className="hover:text-primary transition-colors">Contact</a>
      </div>
      <p className="text-sm text-muted-foreground">© 2026 Tomorrow Secured. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
