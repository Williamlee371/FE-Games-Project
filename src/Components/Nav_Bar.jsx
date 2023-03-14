import { Link } from "react-router-dom";

function NavBar() {
	return (
		<form className="NavBar">
			<h2>Nav Bar</h2>
			<Link to="/">All Reviews</Link>	
		</form>
	);
}

export default NavBar;
