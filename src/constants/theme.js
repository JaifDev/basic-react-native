import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const COLORS = {
  white: "#F8F8FF",
  third: "rgba(73, 80, 87, 0.3)",
  primary: "#070D17",
  secondary: "rgba(121, 92, 235, 1)",
  light: "rgba(255,250,250, 0.6)",
  fourth: "#111926",
  error: "#f5022f",
};

const SIZES = {
  xSmall: wp(1.5),
  small: wp(2.5),
  medium: wp(3.5),
  large: wp(4.5),
  xLarge: wp(5.5),
  xxLarge: wp(6.5),
  xxxLarge: wp(7.5),
};

const SHADOWS = {
  small: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.55,
    shadowRadius: 4.84,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.55,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS };
