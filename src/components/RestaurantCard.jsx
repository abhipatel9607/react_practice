import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
		props.resData;
	return (
		<div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
			<img
				className="res-logo"
				alt="res-logo"
				src={CDN_URL + cloudinaryImageId}
			/>
			<h3>{name}</h3>
			<h4>{cuisines.slice(0, 2).join(", ")}</h4>
			<h4>{avgRating} Stars</h4>
			<h4>{costForTwo}</h4>
			<h4>{sla.deliveryTime} Minutes</h4>
		</div>
	);
};

export default RestaurantCard;
