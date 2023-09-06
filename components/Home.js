import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
            <Video
                source={require('../assets/Videos/pexels-artem-podrez-8088339 (2160p).mp4')}
                style={styles.video}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: 300,
    height: 200,
  },
});