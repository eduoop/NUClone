import { View, Text, FlatList } from "react-native";
import React from "react";
import MyInvestmentItem from "./MyInvestmentItem";
import { INVESTMENTSITEMS } from "@/utils/investment-items";

const ListMyInvestments = () => {
  return (
    <FlatList
      data={INVESTMENTSITEMS}
      keyExtractor={({ id }) => JSON.stringify(id)}
      renderItem={({ item }) => (
        <MyInvestmentItem key={item.id} investmentItem={item} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-4 px-6"
    />
  );
};

export default ListMyInvestments;
