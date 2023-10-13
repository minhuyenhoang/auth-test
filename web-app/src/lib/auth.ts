/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const auth = axios.create();

auth.interceptors.request.use(
	async (config: any) => {
		return config;
	},
	(e: any) => Promise.reject(e)
);

auth.interceptors.response.use(
	(response: any) => response,
	(e) => Promise.reject(e)
);

export default auth;
