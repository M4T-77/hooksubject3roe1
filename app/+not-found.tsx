import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Esta página no existe.</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>¡Regresa a la página principal!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1a202c',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d3748',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#4299e1',
  },
});
