import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAFC] text-[#64748B] antialiased min-h-screen selection:bg-[#FF6B35]/20 selection:text-[#FF6B35]">
        {children}
      </body>
    </html>
  );
}