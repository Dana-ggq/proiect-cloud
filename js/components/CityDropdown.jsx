import React from "react";
import AsyncSelect from "react-select/async";

export default function CityDropdown({ setSelectedCity }) {
  const loadOptions = async (inputValue, callback) => {

    try {
      const response = await fetch(`https://countriesnow.space/api/v0.1/countries`);
      const data = await response.json();
      const options = data.data.flatMap((country) => {
        return country.cities.map((city) => ({
          value: city,
          label: city,
        }));
      });

      const allOption = { value: "All over the world", label: "All over the world" };

      //callback([allOption, ...options.filter((option) => option.label.includes(inputValue))]);
      callback([allOption, ...options.filter((option) => option.label.toLowerCase().startsWith(inputValue.toLowerCase()))]);


    } catch (error) {
      console.error(error);
      callback([]);
    }
  };

  const handleChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  return (
    <div className="flex items-center">
      <label className="text-xl font-semibold mr-4" htmlFor="city-select">
        Where To?
      </label>
      <AsyncSelect
        loadOptions={loadOptions}
        placeholder="Select a city"
        noOptionsMessage={() => "No options found"}
        onChange={handleChange}

        className="flex-grow"


        defaultValue={{ value: "All over the world", label: "All over the world" }}
        isClearable={false}
        formatOptionLabel={({ label }) => <div>{label}</div>}
        menuPlacement="auto"
        menuPosition="fixed"
        controlShouldRenderValue={true}
        openMenuOnClick={true}
        blurInputOnSelect={true}
      />
    </div>
  );
}
