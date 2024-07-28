import Image from "next/image";

function Statistics() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-4">
      <div className="mx-auto mb-20 max-w-md text-center">
        <h3 className="mb-2 text-xl font-bold">Advanced Statistics</h3>
        <p className="text-sm text-neutral-2">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="relative mb-10 flex flex-col items-center justify-center gap-20 sm:min-h-[300px] sm:flex-row sm:justify-between">
        <div className="absolute h-full w-2 bg-primary-1 sm:h-2 sm:w-full"></div>
        <div className="relative w-80 rounded-lg bg-white px-5 pb-5 pt-14 text-center sm:self-start sm:text-left">
          <div className="absolute -top-7 left-1/2 w-max -translate-x-1/2 rounded-full bg-primary-2 p-3 sm:left-7 sm:translate-x-0">
            <Image
              src="/icon-brand-recognition.svg"
              alt="Brand Recognition"
              width={30}
              height={30}
            />
          </div>
          <h4 className="mb-4 text-xl font-bold text-neutral-4">
            Brand Recognition
          </h4>
          <p className="text-sm text-neutral-2">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="relative w-80 rounded-lg bg-white px-5 pb-5 pt-14 text-center sm:self-center sm:text-left">
          <div className="absolute -top-7 left-1/2 w-max -translate-x-1/2 rounded-full bg-primary-2 p-3 sm:left-7 sm:translate-x-0">
            <Image
              src="/icon-detailed-records.svg"
              alt="Detailed Records"
              width={35}
              height={35}
            />
          </div>
          <h4 className="mb-4 text-xl font-bold text-neutral-4">
            Detailed Records
          </h4>
          <p className="text-sm text-neutral-2">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="relative w-80 rounded-lg bg-white px-5 pb-5 pt-14 text-center sm:self-end sm:text-left">
          <div className="absolute -top-7 left-1/2 w-max -translate-x-1/2 rounded-full bg-primary-2 p-3 sm:left-7 sm:translate-x-0">
            <Image
              src="/icon-fully-customizable.svg"
              alt="Fully Customizable"
              width={35}
              height={35}
            />
          </div>
          <h4 className="mb-4 text-xl font-bold text-neutral-4">
            Fully Customizable
          </h4>
          <p className="text-sm text-neutral-2">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
