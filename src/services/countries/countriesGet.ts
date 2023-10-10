import { useQuery } from "@tanstack/react-query";

const apiUrl = import.meta.env.BACKEND_API_URL;

const fetchAllCountries = async () => {
    return await fetch("https://boxinator2.azurewebsites.net/api/v1/Countries")
    .then(data => data.json())
}
const fetchCountriesById = async (id: number) => {
    return await fetch("https://boxinator2.azurewebsites.net/api/v1/Countries/"+id)
    .then(data => data.json())
}


export const useGetAllCountries = () => {
    return useQuery({
        queryKey: ["getAllCountries"], 
        queryFn: fetchAllCountries
    })
}
export const useGetCountriesById = (id: number) => {
    return useQuery(
        ["getCountriesById", id], 
        () => fetchCountriesById(id)
    )
} 