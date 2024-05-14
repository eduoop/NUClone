import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import DiscoveryItem from "./DiscoveryItem";
import { DISCOVERIES } from "@/utils/discoveries";

const ListDiscoveries = () => {
  return (
    // <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    //   <View className="px-6 flex-row gap-3 h-fit">
    //     <DiscoveryItem />
    //   </View>
    // </ScrollView>
     <FlatList
     data={DISCOVERIES}
     keyExtractor={({ id }) => JSON.stringify(id)}
     renderItem={({ item }) => <DiscoveryItem key={item.id} item={item}/>}
     horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerClassName="gap-4 px-6"
   />
  );
};

export default ListDiscoveries;
