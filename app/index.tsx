import { Button } from '@ant-design/react-native';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { styles } from '../styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Link href={'/inventory'} asChild>
        <Button type='primary'>Inventory</Button>
      </Link>
      <Link href={'/export'} asChild>
        <Button>Export</Button>
      </Link>
    </View>
  );
}


