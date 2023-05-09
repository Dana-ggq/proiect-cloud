// js/components/InsertPage.jsx
import { useState } from "react";
import CityDropdown from "./CityDropdown";
import Link from "next/link";


export default function InsertPage() {
    const [selectedCity, setSelectedCity] = useState({
        value: "All over the world",
        label: "All over the world",
      });

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        recommendation: "",
        city: "",
    });

    const insertRecord = (event) => {
        event.preventDefault();
        const { title, author, recommendation } = formData;
        const city = selectedCity.value
        
        console.log(formData)
        console.log(selectedCity)
        
        
        if (!title || !author || !recommendation || !city || city === 'All over the world') {
            alert("Please fill out all fields.");
            return;
        }

        //post    
        const date = new Date().toISOString();
        fetch("/api/records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, author, date, recommendation, city }),
        })
            .then(() => {
                console.log("New record inserted");
                alert("Thanks for your recommendation. Go back to the main page to see it or give another one.");

                setFormData({
                    title: "",
                    author: "",
                    recommendation: "",
                    city: "",
                });
            })
            .catch((error) => {
                console.error("Error inserting record:", error);
            });
    };
      

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };  

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
            <h1 className="w-[500px] mx-auto text-center text-6xl font-bold">Your Travel Buddy</h1>
                <p className="w-[1000px] mx-auto text-center mt-4 text-3xl">
                    Share your recommendations with others
                </p>

                <br/>
				<div className="w-full mx-auto bg-gray-100 shadow-lg rounded-lg p-6">

                <form onSubmit={insertRecord}>
                    <div className="mb-6">
                        <label
                            htmlFor="title"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter a sugestive title for your recommendation"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="author"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="recommendation"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Recommendation
                        </label>
                        <textarea
                            id="recommendation"
                            name="recommendation"
                            value={formData.recommendation}
                            onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-[200px] resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your recommendation"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="city"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            City
                        </label>
                        <CityDropdown
                        setSelectedCity={setSelectedCity}
                        selectedCity={selectedCity}
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        />
                    
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
                </div>
                <br/>
				<Link href="/" passHref>
				<div className="px-6 py-2 mx-auto max-w-md rounded-md text-lg font-medium text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-center">
						Go back to main page
					</div>
				</Link>
            </div>
        </section>
    )
}