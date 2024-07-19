import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="SignIn" options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" options={{ headerShown: false }} />
      <Stack.Screen name="OtpVerification" options={{ headerShown: false }} />
      <Stack.Screen name="PaymentMethods" options={{ headerShown: false }} />
      <Stack.Screen name="Course" options={{ headerShown: false }} />
      <Stack.Screen name="Mentor" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
