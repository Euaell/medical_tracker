import Pagination from "@/components/Pagination";

export default function VitalSign(){

    return (
        <div>

            <div className="w-1/2 mx-2 my-4 flex">
                <div>
                    <input type="text" placeholder="Search..."
                           className="w-full border border-gray-300 rounded-md py-1 px-2"/>
                </div>
                <p className="mx-4 border py-1 px-2 rounded-md shadow">10:50 AM today, 12/11/2024</p>

            </div>

            <div className="flex justify-between items-center px-4 my-8">
                <p className="text-2xl">Urine Output</p>
                <div className="pr-8">
                    <select name="cars" id="cars" className="mx-4 border border-gray-500 px-2 py-1 rounded-md">
                        <option value="volvo">Date</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <button className="bg-cyan-500 border rounded-md px-4 py-1 ">Apply</button>
                </div>
            </div>
            <div className="w-4/6">
                <div className="border rounded-md border-gray-200 shadow ">
                    <table className="w-full  ">
                        <thead>
                        <tr>
                            <th className="p-2">#</th>
                            <th className="p-2">Urine Output</th>
                            <th className="p-2">Time</th>
                            <th className="p-2">Date</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <td className="font-thin p-2">1</td>
                            <td className="font-thin p-2">300 ml</td>
                            <td className="font-thin p-2">4 PM</td>
                            <td className="font-thin p-2">December 11, 2024</td>
                        </tr>

                        <tr>
                            <td className="font-thin p-2">2</td>
                            <td className="font-thin p-2">225 ml</td>
                            <td className="font-thin p-2">4 PM</td>
                            <td className="font-thin p-2">December 11, 2024</td>
                        </tr>

                        <tr className="p-14">
                            <td className="font-thin p-2">3</td>
                            <td className="font-thin p-2">450 ml</td>
                            <td className="font-thin p-2">6 PM</td>
                            <td className="font-thin p-2">December 11, 2024</td>
                        </tr>
                        </tbody>
                    </table>


                </div>
                < Pagination pageSize={10} offset={10}/>
            </div>

        </div>
    )

}