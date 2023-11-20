import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
	let [filteredResList, setFilteredResList] = useState([]);
	let [restList, setRestList] = useState([]);
	let [searchText, setSearchText] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999"
		);
		const json = await data.json();
		setRestList(
			json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
				?.restaurants
		);
		setFilteredResList(
			json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
				?.restaurants
		);
		console.log(
			json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	return restList.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search">
					<input
						type="text"
						className="search-box"
						onChange={(e) => setSearchText(e.target.value)}
						value={searchText}
					/>
					<button
						onClick={() => {
							setFilteredResList(
								restList.filter((rest) =>
									rest.info.name
										.toLocaleLowerCase()
										.includes(searchText.toLocaleLowerCase())
								)
							);

							setSearchText("");
						}}
					>
						Search
					</button>
				</div>
				<button
					className="filter-btn"
					onClick={() => {
						filteredResList = restList.filter(
							(rest) => rest.info.avgRating >= 4
						);
						setRestList(filteredResList);
					}}
				>
					Top Rated Restaurant
				</button>
			</div>
			<div className="res-container">
				{filteredResList.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
				))}
			</div>
		</div>
	);
};

export default Body;
