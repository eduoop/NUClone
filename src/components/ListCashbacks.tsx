import { View, Text, FlatList } from "react-native";
import React from "react";
import CashbackItem from "./CashbackItem";
import { HIGHLIGHTS } from "@/utils/highlights";

const ListCashbacks = () => {
  return (
    <FlatList
      data={HIGHLIGHTS}
      keyExtractor={({ id }) => JSON.stringify(id)}
      renderItem={({ item }) => (
        <CashbackItem key={item.id} cashbackItem={item} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-4 px-6"
    />
  );
};

export default ListCashbacks;
