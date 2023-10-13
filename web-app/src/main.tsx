import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Auth0Provider
			domain='dev-kfzt5ckjgpkskdnb.us.auth0.com'
			clientId='WDBvrP4i3equv9zBFWqwggo5GcG2LLfW'
			authorizationParams={{
				redirect_uri: window.location.origin,
				audience: "https://test-api.com/",
				scope: "read:things",
			}}>
			<App />
		</Auth0Provider>
	</React.StrictMode>
);
