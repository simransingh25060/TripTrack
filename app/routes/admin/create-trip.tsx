import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import { Header } from "../../../components";
import type { Route } from "./+types/create-trip";

type Country = {
  name: string;
  coordinates: [number, number];
  value: string;
  openStreetMap?: string;
};

export const loader = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      throw new Error(`Failed to fetch countries: ${response.statusText}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      console.error("Unexpected response structure:", data);
      throw new Error("Countries API did not return an array.");
    }

    const countries: Country[] = data.map((country: any): Country => ({
      name: `${country.flag ?? ""} ${country.name?.common ?? "Unknown"}`,
      coordinates: country.latlng ?? [0, 0],
      value: country.name?.common ?? "Unknown",
      openStreetMap: country.maps?.openStreetMap,
    }));

    return countries;
  } catch (error) {
    console.error("Error loading countries:", error);
    return []; // return empty array to avoid crash
  }
};




const CreateTrip = ({ loaderData}: Route.ComponentProps) => {

    const handleSubmit = async () => {};
     const handleChange = (key: keyof TripFormData, value: string | number)  => {
   
     }
    const countries = loaderData as Country[];

     const countryData = countries.map((country) => ({
        text: country.name,
        value: country.value,
    }))


   

    return (
        <main className="flex flex-col gap-10 pb-20 wrapper">
            <Header title="Add a New Trip" description="View and edit AI Generated travel plans" />

            <section className="mt-2.5 wrapper-md">
                <form className="trip-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="country">
                            Country
                        </label>
                        <ComboBoxComponent
                        id="country"
                        dataSource={countryData}
                        fields={{ text: 'text', value: 'value' }}
                        placeholder="Select a Country"
                        className="combo-box"
                        change={(e: { value: string | undefined }) => {
                            if(e.value) {
                                handleChange('country', e.value)
                            }
                        }}
                        allowFiltering
                        filtering={(e) => {
                           const query = e.text.toLowerCase();

                           e.updateData(
                            countries.filter((country) => 
                                country.name.toLowerCase().includes(query)).map(((country) => ({
                                    text: country.name,
                                    value: country.value
                                })))
                        )
                            
                        }}
                        />
                    </div>
                </form>
               </section>
               </main>

    )
}
export default CreateTrip