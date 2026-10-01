import Link from "next/link";

import { brand } from "@/lib/brand";

export function BrandLockup({
  as: Tag = "p",
}: {
  as?: "p" | "h1";
}) {
  return (
    <Tag className="gold-name">
      <Link href="/" aria-label={brand.name}>
        <img
          className="house-nav-logo"
          src={brand.logo}
          alt=""
          width={698}
          height={290}
        />
      </Link>
    </Tag>
  );
}
