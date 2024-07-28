import Illustration from "@/app/_components/Illustration";
import URLShorteningForm from "@/app/_components/URLShorteningForm";
import Statistics from "@/app/_components/Statistics";
import BoostLink from "@/app/_components/BoostLink";

export default function Home() {
  return (
    <main>
      <Illustration />
      <div className="mt-32 bg-neutral-2 bg-opacity-10">
        <URLShorteningForm />
        <Statistics />
      </div>
      <BoostLink />
    </main>
  );
}
