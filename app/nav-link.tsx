import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  path: string;
  children: React.ReactNode;
};

export default function NavLink({ path, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link href={path} className={pathname === path ? "text-orange-500" : ""}>
      {children}
    </Link>
  );
}
