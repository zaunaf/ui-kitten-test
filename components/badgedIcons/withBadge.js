import React from "react";
import { StyleSheet, View } from "react-native";
import { Badge } from "react-native-elements";

const withBadge = (value, options = {}) => WrappedComponent =>
  class extends React.Component {
    render() {
      const { top = -5, right = -20, left = 0, bottom = 0, hidden = !value, ...badgeProps } = options;
      const badgeValue = typeof value === "function" ? value(this.props) : value;
      let width = (value > 10) ? (value > 100) ? 26 : 21 : 18;
      
      const styles = StyleSheet.create({
        badge: {
          borderRadius: 9,
          height: 18,
          minWidth: 0,
          width: width
        },
        badgeContainer: {
          position: "absolute"
        },
        badgeText: {
          fontSize: 10,
          paddingHorizontal: 0
        }
      });

      return (
        <View>
          <WrappedComponent {...this.props} />
          {!hidden && (
            <Badge
              badgeStyle={styles.badge}
              textStyle={styles.badgeText}
              value={badgeValue}
              status="error"
              containerStyle={[styles.badgeContainer, { top, right, left, bottom }]}
              {...badgeProps}
            />
          )}
        </View>
      );
    }
  };

export default withBadge;