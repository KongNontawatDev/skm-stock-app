import { Tabs } from "@ant-design/react-native";
import { Text, View } from "react-native";
import { styles } from "../../../styles";
import { useGlobalSearchParams  } from "expo-router";

export default function Test() {
	const { inventory_id } = useGlobalSearchParams ();
	return (
		<View style={{ flex: 1 }}>
			<Tabs tabs={[{ title: "สแกน" }, { title: "รายการ" }]}>
				<View style={styles.container}>
					<Text>Content of First Tab {inventory_id}</Text>
				</View>
				<View style={styles.container}>
					<Text>Content of Second Tab</Text>
				</View>
			</Tabs>
		</View>
	);
}
