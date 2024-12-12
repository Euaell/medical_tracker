import Loading from "@/components/Loading";
import { twJoin } from "tailwind-merge";

export default function Medications() {
	return (
		<div className="flex flex-row flex-1 w-full h-full pr-8 my-8 bg-slate-50 justify-around">
			<div className="flex flex-col min-w-fit w-[45%]">
				<div className="flex flex-row justify-between m-4 border-slate-300 border-b text-slate-800">
					<h3 className="text-lg font-semibold">{new Date().toDateString()}</h3>
					<div className="flex gap-1">
						<button className="btn btn-primary hover:bg-slate-200 rounded-full px-1">
							<i className="ri-arrow-left-s-line"></i>
						</button>
						<button className="btn btn-primary hover:bg-slate-200 rounded-full px-1">
							<i className="ri-arrow-right-s-line"></i>
						</button>
					</div>
				</div>

				<div className="flex flex-col gap-4 m-4">
					<Card />
					<MealCard />
				</div>
			</div>
			<div className="flex flex-col min-w-fit w-[45%]">

			</div>
		</div>
	);
}


function Card() {
	return (
		<div className={twJoin(
			"flex flex-row justify-between p-2 border-slate-400 border-l-8 gap-4 rounded-md shadow-md transition-colors duration-300",
			"border-t-2 border-t-gray-200 hover:shadow-xl"
		)}>
			<div className="flex flex-col gap-2 min-w-fit">
				<div className="flex flex-row gap-2">
					<i className="ri-capsule-fill text-gray-600"></i>
					<h4 className="font-semibold">Medication Name</h4>
				</div>
				<div className="text-sm text-slate-500">
					Medication Description
				</div>
			</div>
			<div className="flex flex-row gap-2">
				<button className="flex justify-center rounded-full bg-green-400 w-6 h-6 items-center hover:drop-shadow-lg hover:bg-green-600">
					<i className="ri-check-fill"></i>
				</button>
				<button className="flex justify-center rounded-full bg-red-400 w-6 h-6 items-center hover:drop-shadow-lg hover:bg-red-600">
					<i className="ri-close-line"></i>
				</button>
			</div>
		</div>
	);
}

function MealCard() {
	return (
		<div className={twJoin(
			"flex flex-row justify-between p-2 border-slate-400 border-l-8 gap-4 rounded-md shadow-md transition-colors duration-300",
			"border-t-2 border-t-gray-200"
		)}>
			<div className="flex flex-col gap-2 min-w-fit">
				<div className="flex flex-row gap-2">
					<i className="ri-restaurant-line text-gray-600"></i>
					<h4 className="font-semibold">Meal Name</h4>
				</div>
				<div className="text-sm text-slate-500">
					Meal Description
				</div>
			</div>
			<div className="flex flex-row gap-2">
				<button className="flex justify-center rounded-full bg-green-400 w-6 h-6 items-center hover:drop-shadow-lg hover:bg-green-600">
					<i className="ri-check-fill"></i>
				</button>
				<button className="flex justify-center rounded-full bg-red-400 w-6 h-6 items-center hover:drop-shadow-lg hover:bg-red-600">
					<i className="ri-close-line"></i>
				</button>
			</div>
		</div>
	)
}
