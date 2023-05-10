// js/components/MainPage.jsx
import { useEffect, useState } from "react";
import CityDropdown from "./CityDropdown";
import Link from "next/link";

export default function MainPage() {
	const [records, setRecords] = useState([]);
	const [selectedCity, setSelectedCity] = useState({value: "All over the world", label: "All over the world"});


	useEffect(() => {
		try {
			let url = '/api/records';
			if (selectedCity && selectedCity.value !== "All over the world") {
				url += `?city=${selectedCity.value}`;
			}
			fetch(url, {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, [selectedCity]);



	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="w-[500px] mx-auto text-center text-6xl font-bold">Your Travel Buddy</h1>
				<p className="w-[1000px] mx-auto text-center mt-4 text-3xl font-normal">Recommendations from Your Fellow Travelers</p>

				<br/>

				<br/>
				<Link href="/insert" passHref>
				<div className="px-6 py-2 mx-auto max-w-md rounded-md text-lg font-medium text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-center">
						Give us your recommendations
					</div>
				</Link>

				<br />

				<div className="w-full mx-auto bg-gray-100 shadow-lg rounded-lg p-6">

				<CityDropdown setSelectedCity={setSelectedCity} />

				<br/>
				<Link href = {`/news?city=${selectedCity.value}`} passHref>
				<div className="px-6 py-2 mx-auto rounded-md text-lg font-medium text-white bg-gray-300 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-center">
				 see news concerning the selected city				
				</div>
				</Link>

				
			
				{records.length > 0 ? (
					<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
						{records.map((record, index) => (
							<div
								key={record._id}
								className={`block max-w-sm p-6 border border-gray-200 rounded-lg shadow 
          ${index % 2 === 0 ? 'bg-blue-100 dark:bg-blue-700' : 'bg-green-100 dark:bg-green-700'}
        `}
							>
								<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									{record.title}
								</h2>
								<h3 className="mb-2 text-lg font-medium tracking-tight text-gray-500 dark:text-gray-400">
									{record.city}
								</h3>
								<p className="mb-2 text-sm font-medium tracking-tight text-gray-400 dark:text-gray-400">
									{record.author} - {record.date}
								</p>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									{record.recommendation}
								</p>
							</div>
						))}
					</div>
				) : (
					<div style={{ height: "calc(100vh - 300px)", display: "flex", justifyContent: "center", alignItems: "center" }}>
						<p className="text-2xl text-center mt-8 text-black text-lg">
							{selectedCity
								? `We are sorry but it looks like there are no recommendations for ${selectedCity.label}.You make sure to write some when you come back!`
								: 'Select a city from the dropdown to see recommendations.'}
						</p>

					</div>
				)}

			</div>
			</div>
		</section>
	)
}