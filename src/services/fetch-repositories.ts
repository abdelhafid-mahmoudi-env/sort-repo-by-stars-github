import axios from "axios";
import configs from "../configs";

export const fetchRepositories = async (page: number, Last30Days: string) => {
	try {
		// console.log(Last30Days);
		const { data } = await axios.get(`${configs.BASE_GITHUB_API_URL}/${configs.GITHUB_API_SEARCH_QUERY}?q=created:>${Last30Days}&sort=stars&order=desc&per_page=8&page=${page}`);
		return data.items;
	} catch (error) {
        // handle the errors here
		// console.log(error);
	}
}