import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SpendingType } from "@/types";
import Colors from "@/constants/Colors";
import {
  AirbnbIcon,
  AmazonIcon,
  DollarIcon,
  FigmaIcon,
  NetflixIcon,
  ShoopingCartIcon,
  SpotifyIcon,
} from "@/constants/Icons";

const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {
  let icon = <DollarIcon width={22} height={22} color={Colors.white} />;

  return (
    <View style={styles.spendingSectionWrapper}>
      <Text style={styles.sectionTitle}>
        July <Text style={{ fontWeight: "700" }}>Spending</Text>
      </Text>

      {spendingList.map((item) => {
        if (item.name == "AirBnB Rent") {
          icon = <AirbnbIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Netflix") {
          icon = <NetflixIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Spotify") {
          icon = <SpotifyIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Amazon") {
          icon = <AmazonIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Figma") {
          icon = <FigmaIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Online Shopping") {
          icon = (
            <ShoopingCartIcon width={22} height={22} color={Colors.white} />
          );
        }

        return (
          <View style={styles.spendingWrapper} key={item.id}>
            <View style={styles.iconWrapper}>{icon}</View>
            <View style={styles.textWrapper}>
              <View style={{ gap: 5 }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={{ color: Colors.white }}>{item.date}</Text>
              </View>
              <Text style={styles.itemName}>${item.amount}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default SpendingBlock;

const styles = StyleSheet.create({
  spendingSectionWrapper: {
    marginVertical: 20,
    alignItems: "flex-start",
  },
  sectionTitle: {
    color: Colors.white,
    fontSize: 16,
    marginBottom: 20,
  },
  spendingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  iconWrapper: {
    backgroundColor: Colors.grey,
    padding: 15,
    borderRadius: 50,
    marginRight: 10,
  },
  textWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemName: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
