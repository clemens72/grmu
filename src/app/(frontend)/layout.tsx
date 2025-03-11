import TopBar from "@/components/TopBar"

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-white min-h-screen">
      <TopBar />
      {children}
    </section>
  );
}