import axios from "axios";
import react from "react";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	SafeAreaView,
	Image,
	Dimensions,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const MealButton = ({ img, text }) => (
	<TouchableOpacity style={[buttonStyle.button, { paddingHorizontal: 20 }]}>
		<Image source={{ uri: img }} style={buttonStyle.image} />
		<Text style={buttonStyle.text}>{text}</Text>
	</TouchableOpacity>
);

function BookmarkScreen(props) {
	const [hasBookmarked, setHasBookarked] = React.useState(true);
	const [bookmarkedArray, setBookmarked] = React.useState([]);
	const [savedMeals, onSavedArray] = React.useState([]);

	react.useEffect(() => {
		AsyncStorage.getItem("bookmarks").then((res) => {
			if (res !== null && res !== undefined) {
				onSavedArray(JSON.parse(res));
			}
		});
		console.log(savedMeals);
		savedMeals.forEach((e) =>
			axios
				.request(
					"https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + e
				)
				.then((response) => {
					const meal = response.data.meals;
					console.log(meal);
					setBookmarked([
						...bookmarkedArray,
						[meal["strMeal"], meal["strMealThumb"]],
					]);
				})
		);
	}, []);
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.title}>
				<Text style={styles.title}>
					{JSON.stringify(bookmarkedArray)}
				</Text>

				{bookmarkedArray.map((index, key) => {
					<MealButton text={index[0]} img={index[1]} />;
				})}
			</ScrollView>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F0F0F0",
		alignItems: "center",
		justifyContent: "center",
	},
	scrollView: {
		backgroundColor: "#e0e0e0",
		elevation: 10,
		width: "100%",
		paddingTop: 50,
	},
	title: {
		fontSize: 30,
		margin: 10,
		backgroundColor: "#ff6b6b",
		borderRadius: 10,
		elevation: 10,
		textAlign: "center",
		color: "#fff",
		paddingHorizontal: 20,
		alignSelf: "center",
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
const buttonStyle = StyleSheet.create({
	text: {
		marginTop: 10,
		fontSize: 15,
		backgroundColor: "#4ecdc4",
		textAlign: "center",
		alignSelf: "center",
		paddingHorizontal: 20,
		textTransform: "uppercase",
		fontWeight: "bold",
		borderRadius: 20,
		color: "#fff",
	},
	button: {
		backgroundColor: "#f8f9fa",
		margin: 10,
		paddingHorizontal: 0,
		borderRadius: 20,
		padding: 10,
		width: "90%",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.44,
		shadowRadius: 10.32,

		elevation: 10,
	},
	image: {
		width: "100%",
		height: undefined,
		aspectRatio: 1,
		margin: 0,
		borderRadius: 20,
	},
});
export default BookmarkScreen;
