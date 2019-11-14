import React from "react";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import withBadge from './withBadge';

export const FeatherBadgedIcon = (props) => {
    const Icon = withBadge(props.count)(Feather);
    return <Icon {...props} />
}

export const FontAwesomeBadgedIcon = (props) => {
    const Icon = withBadge(props.count)(FontAwesome);
    return <Icon {...props} />
}

export const IoniconsBadgedIcon = (props) => {
    const Icon = withBadge(props.count)(Ionicons);
    return <Icon {...props} />
}

