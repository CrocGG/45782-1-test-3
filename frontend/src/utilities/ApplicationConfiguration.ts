class ApplicationConfiguration {
	public readonly basisUrl = import.meta.env.VITE_REST_SERVER_URL;
}

export const applicationConfiguration = new ApplicationConfiguration();