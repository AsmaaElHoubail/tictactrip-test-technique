import axios from "axios";

const API_ENDPOINT = "https://api.comparatrip.eu";

export const getCitiesAutocomplete = async (query: string) => {
	try {
		const response = await axios.get(`${API_ENDPOINT}/cities/autocomplete`, {
			params: {
				q: query,
			},
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getPopularCities = async () => {
	const response = await axios.get(`${API_ENDPOINT}/cities/popular/5`);

	return response.data;
};

export const getPopularCitiesFrom = async (city: string) => {
	const response = await axios.get(`${API_ENDPOINT}/cities/popular/from/${city}/5`, {
		params: {
			locale: "fr-FR",
			currency: "EUR",
		},
	});

	return response.data;
};
