import React from "react";
import { Link, useLocation } from "react-router-dom";

function Home() {
	let location = useLocation();
	return (
		<div>
			Home
			<Link
				to={{
					pathname: "/add",
					state: { background: location },
				}}
			>
				Add Expense
			</Link>
		</div>
	);
}

export default Home;
