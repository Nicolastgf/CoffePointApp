import React, { useRef } from "react";
import { View, Dimensions, StyleSheet, TouchableOpacity, Platform} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Animated, {
	interpolate,
	useAnimatedStyle,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

import { membresias } from "../../data/Membresia";
import MembresiaItem from "./MembresiaItem";

const PAGE_WIDTH = Dimensions.get("window").width * 0.85;
const CARD_HEIGHT = 480;

const MembresiaCarousel = () => {
	const ref = useRef(null);

	return (
		<View style={styles.carouselContainer}>
			<Carousel
				ref={ref}
				width={PAGE_WIDTH}
				height={CARD_HEIGHT + 80}
				data={membresias}
				mode="parallax"
				modeConfig={{
					parallaxScrollingScale: 0.9,
					parallaxScrollingOffset: Platform.OS === "ios" ? 30 : 60, // 👈 distinto valor según plataforma
					parallaxAdjacentItemScale: 0.8,
				}}
				autoPlay
				autoPlayInterval={20000}
				scrollAnimationDuration={1000}
				loop
				style={{ overflow: "visible" }}
				renderItem={({ item, index, animationValue }) => {
					return (
						<AnimatedCard
							item={item}
							animationValue={animationValue}
							key={index}
						/>
					);
				}}
			/>

			{/* Flechas de navegación con color EC407A */}
			<TouchableOpacity
				style={styles.arrowLeft}
				onPress={() => ref.current?.prev()}
			>
				<Ionicons name="chevron-back" size={32} color="#EC407A" />
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.arrowRight}
				onPress={() => ref.current?.next()}
			>
				<Ionicons name="chevron-forward" size={32} color="#EC407A" />
			</TouchableOpacity>
		</View>
	);
};

const AnimatedCard = ({ item, animationValue }) => {
	const animatedStyle = useAnimatedStyle(() => {
		const scale = interpolate(animationValue.value, [-1, 0, 1], [0.9, 1, 0.9]);
		return {
			transform: [{ scale }],
		};
	});

	return (
		<Animated.View style={[styles.cardWrapper, animatedStyle]}>
			<MembresiaItem item={item} />
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	carouselContainer: {
		alignItems: "center",
		marginVertical: 30,
		position: "relative",
	},
	cardWrapper: {
		// vacío o personalizado
	},
	arrowLeft: {
	position: "absolute",
	left: 4,
	top: "45%",
	zIndex: 10,
},

arrowRight: {
	position: "absolute",
	right: 4,
	top: "45%",
	zIndex: 10,
},
});

export default MembresiaCarousel;
