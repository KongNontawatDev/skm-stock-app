import { Provider } from "@ant-design/react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function RootLayout() {
	return (
		<Provider>
			<View style={{ flex: 1 }}>
				<StatusBar style="auto" />
				<Stack>
					<Stack.Screen
						name="index"
						options={{
							title: "Home",
							headerShown: true,
						}}
					/>
					<Stack.Screen
						name="inventory/index"
						options={{
							title: "Inventory",
							headerShown: true,
						}}
					/>
					<Stack.Screen
						name="inventory/[inventory_id]/index"
						options={({ route }: any) => ({
							title: `ID: ${route?.params?.inventory_id}`,
						})}
					/>
					<Stack.Screen
						name="export"
						options={{
							title: "Export",
							headerShown: true,
						}}
					/>
				</Stack>
			</View>
		</Provider>
	);
}
