import { FlatList, Text, View } from "react-native";
import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { PRODUCTS } from "@/utils/products";

export class ListProducts extends Component {
  render() {
    return (
      <FlatList
        data={PRODUCTS}
        keyExtractor={({ id }) => JSON.stringify(id)}
        renderItem={({ item }) => (
          <ProductItem key={item.id} productItemProp={item} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-4 px-6"
      />
    );
  }
}

export default ListProducts;
