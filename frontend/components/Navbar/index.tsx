import Link from "next/link";
import NavItem from "./NavItem";


export default function Navbar() {
	return (
		<nav className="flex flex-col min-h-full mr-8 gap-6 p-6 min-w-fit border-r-2 border-slate-100 transition-all duration-200">

			<div className="flex justify-end cursor-pointer text-slate-600 hover:text-slate-500">
				<i className="ri-side-bar-line ri-xl"></i>
			</div>
			<div className="flex flex-row items-center gap-4">
				{/* Logo */}
				<h1 className="text-cyan-700 text-5xl p-4 font-extrabold">Medi-Track</h1>
			</div>
			
			<ul className="flex flex-col h-full gap-4">
				<NavItem href="/">
					<i className="ri-home-2-line ri-lg"></i>
					Home
				</NavItem>
				<NavItem href="/medications">
					<i className="ri-medicine-bottle-line ri-lg"></i>
					Medications
				</NavItem>
				<NavItem href="/vitals">
					<i className="ri-heart-pulse-line ri-lg"></i>
					Vitals
				</NavItem>
				
				<li className="mt-auto ml-auto">
					<Link href="/settings">
						<span className="sr-only">Settings</span>
						<i className="ri-settings-5-line ri-2x"></i>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
