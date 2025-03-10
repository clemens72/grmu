import TopBar from "@/components/TopBar"
import { SanityLive } from "@/sanity/lib/live";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-white min-h-screen">
      <TopBar />
      {children}
      <SanityLive />
    </section>
  );
}