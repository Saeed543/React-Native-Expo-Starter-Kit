import { View, SafeAreaView } from 'react-native';
import RootNavigation from './Navigation';
import './config/firebase';
import Homepage from './Pages/Home';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <RootNavigation />
    </View>
  );
}