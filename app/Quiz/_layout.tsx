import { Stack } from 'expo-router';

export default () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='QuizScreen' />
      <Stack.Screen name='QuizDetailsScreen' />
      <Stack.Screen name='ResultScreen' />
    </Stack>
  );
};
