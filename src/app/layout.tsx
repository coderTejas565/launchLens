import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAFC] text-[#64748B] antialiased min-h-screen selection:bg-[#FF6B35]/20 selection:text-[#FF6B35]">
           <Navbar />
          <main>
          {children}
        </main>
      </body>
    </html>
  );
}