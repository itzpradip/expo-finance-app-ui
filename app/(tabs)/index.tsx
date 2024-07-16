import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import { PieChart } from "react-native-gifted-charts";
import ExpenseBlock from "@/components/ExpenseBlock";
import IncomeBlock from "@/components/IncomeBlock";
import SpendingBlock from "@/components/SpendingBlock";
import ExpenseList from '@/data/expenses.json';
import incomeList from '@/data/income.json';
import spendingList from '@/data/spending.json';
 
const Page = () => {
  const pieData = [
    {
      value: 47,
      color: Colors.tintColor,
      focused: true,
      text: "47%",
    },
    {
      value: 40,
      color: Colors.blue,
      text: "40%",
    },
    {
      value: 16,
      color: Colors.white,
      text: "16%",
    },
    { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97", text: "3%" },
  ];

  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={[styles.container, { paddingTop: 40 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ gap: 10 }}>
              <Text style={{ color: Colors.white, fontSize: 16 }}>
                My <Text style={{ fontWeight: 700 }}>Expenses</Text>
              </Text>
              <Text
                style={{ color: Colors.white, fontSize: 36, fontWeight: 700 }}
              >
                $1475.<Text style={{ fontSize: 22, fontWeight: 400 }}>00</Text>
              </Text>
            </View>
            <View style={{paddingVertical:20,alignItems:'center'}}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                // focusOnPress
                semiCircle
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors.black}
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        47%
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>

          <ExpenseBlock expenseList={ExpenseList} />

          <IncomeBlock incomeList={incomeList} />

          <SpendingBlock spendingList={spendingList} />
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
});
