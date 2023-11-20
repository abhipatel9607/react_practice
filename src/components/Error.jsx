import { useRouteError } from "react-router-dom";

const Error = () => {
	const err = useRouteError();
	console.log(err);
	return (
		<div>
			<h1>Error</h1>
			<p>Opppsss..... Something went wrong. </p>
			<h3>
				Status:{err.status}, Reason: {err.data}
			</h3>
		</div>
	);
};

export default Error;
