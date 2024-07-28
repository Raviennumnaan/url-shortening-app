import Image from "next/image";

function Illustration() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col-reverse items-center justify-between gap-4 px-6 py-4 sm:flex-row sm:gap-0">
      <div className="max-w-96 text-center sm:text-left">
        <h2 className="mb-1 text-4xl font-bold text-neutral-4 sm:text-5xl">
          More than just shorter links
        </h2>
        <p className="mb-5 text-sm text-neutral-2">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="mx-auto block rounded-full bg-primary-1 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-opacity-70 sm:mx-0">
          Get Started
        </button>
      </div>
      <Image
        src="/illustration-working.svg"
        alt="Illustration working"
        width={450}
        height={450}
      />
    </div>
  );
}

export default Illustration;
