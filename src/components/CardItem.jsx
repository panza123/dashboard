import React from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";
export default function CardItem() {
  return (
    <div>
      <Card
 
        className="w-xs md:w-[253px]"
        decoration="top"
        decorationColor="indigo"
      >
        <Flex justifyContent="between" alignItems="center">
        <Text>Sales</Text>
      <BadgeDelta deltaType='moderateIncrease'>12.5%</BadgeDelta>
      </Flex>
      
        <Metric>$ 34,743</Metric>
      </Card>
    </div>
  );
}
