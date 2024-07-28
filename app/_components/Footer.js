import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-neutral-4">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 px-6 py-10 text-center sm:flex-row sm:items-start sm:text-left">
        <h3 className="text-2xl font-bold text-white">Shortly</h3>
        <div className="space-y-5 text-sm">
          <h4 className="font-bold text-white">Features</h4>
          <ul className="space-y-2 text-neutral-1">
            <li>
              <Link href="#">Link Shortening</Link>
            </li>
            <li>
              <Link href="#">Branded Links</Link>
            </li>
            <li>
              <Link href="#">Analytics</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-5 text-sm">
          <h4 className="font-bold text-white">Resources</h4>
          <ul className="space-y-2 text-neutral-1">
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Developers</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-5 text-sm">
          <h4 className="font-bold text-white">Company</h4>
          <ul className="space-y-2 text-neutral-1">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Our Team</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="my-4 flex items-center gap-6 sm:mt-0 sm:gap-4">
          <Link
            href="#"
            className="relative h-5 w-5 transition-transform hover:scale-125"
          >
            <Image
              className="object-cover"
              src="/icon-facebook.svg"
              alt="Facebook Link"
              fill
            />
          </Link>
          <Link
            href="#"
            className="relative h-5 w-5 transition-transform hover:scale-125"
          >
            <Image
              className="object-cover"
              src="/icon-twitter.svg"
              alt="Twitter Link"
              fill
            />
          </Link>
          <Link
            href="#"
            className="relative h-5 w-5 transition-transform hover:scale-125"
          >
            <Image
              className="object-cover"
              src="/icon-pinterest.svg"
              alt="Pinterest Link"
              fill
            />
          </Link>
          <Link
            href="#"
            className="relative h-5 w-5 transition-transform hover:scale-125"
          >
            <Image
              className="object-cover"
              src="/icon-instagram.svg"
              alt="Instagram Link"
              fill
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
