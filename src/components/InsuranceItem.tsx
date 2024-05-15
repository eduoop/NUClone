import { View, Text } from "react-native";
import React from "react";
import { Card } from "./Card";
import { Icon } from "@expo/vector-icons/build/createIconSet";

interface InsuranceItemProps {
  content: React.ReactNode;
  label: string;
}

const InsuranceItem = ({ content, label }: InsuranceItemProps) => {
  return (
    <Card className="w-full flex-row p-4 py-6 rounded-[17px] gap-5 justify-between">
      {content}
      <Text className="text-purple-600 font-semibold">{label}</Text>
    </Card>
  );
};

export default InsuranceItem;
