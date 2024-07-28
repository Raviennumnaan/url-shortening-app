import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="Logo" height={150} width={150} />
    </Link>
  );
}

export default Logo;
