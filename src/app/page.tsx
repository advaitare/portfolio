import ScrollyCanvas from "@/components/ScrollyCanvas";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="w-full bg-[#121212]">
      <ScrollyCanvas key="v3-remount" />
      <Resume />
    </main>
  );
}
