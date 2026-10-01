import Link from "next/link";
import { brand } from "@/lib/brand";

export function HouseNav({ children }: { children?: React.ReactNode }) {
  return (
    <header className="house-nav">
      <Link className="house-nav-mark" href="/" aria-label={brand.name}>
        <img
          className="house-nav-logo"
          src={brand.logo}
          alt=""
          width={698}
          height={290}
        />
      </Link>
      {children}
    </header>
  );
}
