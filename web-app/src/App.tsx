import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useState } from "react";

function App() {
	const {
		user,
		isAuthenticated,
		isLoading,
		loginWithRedirect,
		logout,
		getAccessTokenSilently,
	} = useAuth0();

	const [test, setTest] = useState<string>();

	const click = async () => {
		const token = await getAccessTokenSilently();
		console.log(token);
		axios
			.get("http://localhost:3000/", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				console.log(res.data);
				console.log(user);
				setTest(res.data);
			})
			.catch((err) => console.log(err));
	};

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isAuthenticated && user)
		return (
			<>
				<h1>Hello! Welcome to Test!</h1>
				<h2>Test is a project which is in development phase!</h2>

				<p>You're {user.name}</p>
				<p>Your email is {user.email}</p>
				<p>{test}</p>

				<button style={{ marginRight: "10px" }} onClick={click}>
					Click here!
				</button>

				<button
					onClick={() =>
						logout({ logoutParams: { returnTo: window.location.origin } })
					}>
					Logout
				</button>
			</>
		);

	return (
		<>
			<h1>Hello! Welcome to Test!</h1>
			<h2>Test is a project which is in development phase!</h2>

			<p>Please login to proceed</p>
			<button onClick={() => loginWithRedirect()}>Login</button>
		</>
	);
}

export default App;
