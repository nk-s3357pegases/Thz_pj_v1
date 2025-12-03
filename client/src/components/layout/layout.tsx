import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-body bg-background text-foreground">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
