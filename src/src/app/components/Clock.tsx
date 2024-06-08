"use client";
import { Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString();
      if (timeStr !== time) {
        setTime(timeStr);
      }
      const year = now.getFullYear();
      const month = now.getMonth();
      const day = now.getDate();
      const dateStr = year + "/" + (month + 1) + "/" + day;
      if (dateStr !== date) {
        setDate(dateStr);
      }
    }, 50);
    return () => clearInterval(clockInterval);
  });

  return (
    <VStack spacing={0} bg="cyan.900" width="400px">
      <Text fontSize="60pt" color="cyan.50" textAlign="center">
        {time}
      </Text>
      <Text fontSize="20pt" color="cyan.50" textAlign="center">
        {date}
      </Text>
    </VStack>
  );
};
