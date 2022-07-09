import Image from "next/image";
import Link from "next/link";

export default function Thanks() {
  return (
    <section className="flex content-center wrap text-medium space-24 align-center p-24 font-medium">
      <Link
        href={"https://www.flaticon.com/free-icons/cute"}
        title="Cute icons created by Freepik - Flaticon"
      >
        <a target={"_blank"}>
          <Image
            src={"https://i.ibb.co/74PY8Gb/teddy.png"}
            alt="cute-teddy"
            height={70}
            width={70}
            layout="fixed"
            objectFit="contain"
          />
        </a>
      </Link>
      <span>
        Thank
        <Link
          href="https://symu.co/freebies/templates-4/nft-market/"
          className="text-purple-1000"
        >
          <a className="text-purple-1000 h7 text-heading"> &quot;Symu&quot; </a>
        </Link>
        for the design and resources
      </span>
      <Link
        href={"https://www.flaticon.com/free-icons/octopus"}
        title="Octopus icons created by Whitevector - Flaticon
        "
      >
        <a target={"_blank"}>
          <Image
            src={"https://i.ibb.co/vZFBWZD/octopus.png"}
            alt="cute-teddy"
            height={70}
            width={70}
            layout="fixed"
            objectFit="contain"
          />
        </a>
      </Link>
    </section>
  );
}
