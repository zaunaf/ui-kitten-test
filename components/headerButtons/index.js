import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import withBadge from "../badgedIcons/withBadge";

export const FeatherHeaderButton = props => {
  const BadgedIcon = withBadge(props.count)(Feather);
  return (
    <HeaderButton
      {...props}
      IconComponent={BadgedIcon}
      iconSize={23}
      color={(Platform.OS === 'android') ? 'white' : Colors.primaryColor}
    />
  );
};

export const FontAwesomeHeaderButton = props => {
    const BadgedIcon = withBadge(props.count)(FontAwesome);
    return (
      <HeaderButton
        {...props}
        IconComponent={BadgedIcon}
        iconSize={23}
        color={(Platform.OS === 'android') ? 'white' : Colors.primaryColor}
      />
    );
  };
  