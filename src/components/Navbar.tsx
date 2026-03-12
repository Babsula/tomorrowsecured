import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold tracking-tight">Tomorrow Secured</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#programs" className="hover:text-primary transition-colors">Programs</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Enroll Now
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <a href="#programs" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">Programs</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">About</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">Testimonials</a>
          <a href="#contact" onClick={() => setOpen(false)} className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-center">Enroll Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
