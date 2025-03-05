import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//{`red-light ${setClicked == "red" ? "light-on" : ""}`}

//create your first component
const Home = () => {
	const[cliecked, setClicked] = useState("red-light")

	const changeColor = (color) => {
		setClicked (color)
	}

	return (
		<div className="main">
			<div className="box-light">
				<div 
					className={`red-light ${cliecked == "red-light" ? "light-on" : ""}`}
					onClick={()=>changeColor("red-light")}
				></div>
				<div 
				className={`yellow-light ${cliecked == "yellow-light" ? "light-on" : ""}`}
				onClick={()=>changeColor("yellow-light")}
				></div>
				<div 
				className={`green-light ${cliecked == "green-light" ? "light-on" : ""}`}
				onClick={()=>changeColor("green-light")}
				></div>
			</div>
			<div className="box-pole"></div>
		</div>
	);
};

export default Home;