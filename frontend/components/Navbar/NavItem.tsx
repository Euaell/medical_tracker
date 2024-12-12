'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";


export default function NavItem({ children, href }: Readonly<{ children: React.ReactNode, href: string }>) {
    const pathname = usePathname();

    const isSelected = pathname === href;

	return (
		<li className={twMerge(
				"rounded-lg hover:bg-slate-200 focus:bg-slate-300",
				isSelected && "bg-slate-300"
			)}>
                <Link href={href} className="flex flex-row gap-2 py-2 items-center px-4">
			        {children}
                </Link>
		</li>
	)
}
