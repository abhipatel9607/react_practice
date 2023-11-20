import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {
	const [btnName, setBtnName] = useState("Login");
	console.log("Header Rendered");

	useEffect(() => {
		console.log("UseEffectCalled");
	}, [btnName]);

	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} />
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
					<button
						onClick={() => {
							setBtnName(btnName == "Login" ? "Logout" : "Login");
						}}
						className="login"
					>
						{btnName}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
