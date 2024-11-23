import { useState } from "react";
import { FlatList, Text } from "react-native";
import { Button, Input, Modal, View, Provider } from "@ant-design/react-native";

export default function Inventory() {
	const [name, setName] = useState("");
	const [inventory, setInventory] = useState<any[]>([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [currentItemName, setCurrentItemName] = useState("");
	const [currentItemIndex, setCurrentItemIndex] = useState(-1); // Added to keep track of the current item index

	const handleItem = (action: "add" | "edit" | "delete", newName = "") => {
		if (action === "add" && name) {
			setInventory([...inventory, { name }]);
			setName("");
		} else if (action === "delete") {
			setInventory(
				inventory.filter((item, index) => index !== currentItemIndex)
			);
		} else if (action === "edit") {
			setInventory(
				inventory.map((item, index) =>
					index === currentItemIndex ? { ...item, name: newName } : item
				)
			);
		}
	};

	const handleEdit = (itemName: string, index: number) => {
		setCurrentItemName(itemName);
		setCurrentItemIndex(index); // Set the current item index
		setModalVisible(true);
	};

	const confirmEdit = () => {
		handleItem("edit", currentItemName);
		setModalVisible(false);
	};

	return (
		<Provider>
			<View>
				<Text>Inventory</Text>
				<Input
					autoFocus
					value={name}
					onChangeText={setName}
					placeholder="Enter item name"
					style={{ marginBottom: 10 }}
				/>
				<Button type="primary" onPress={() => handleItem("add")}>
					Add Item
				</Button>
				<FlatList
					data={inventory}
					renderItem={({ item, index }) => (
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								padding: 10,
							}}
						>
							<Text>{item.name}</Text>
							<View style={{ flexDirection: "row" }}>
								<Button
									type="primary"
									onPress={() => handleEdit(item.name, index)}
									style={{ marginRight: 10 }}
								>
									Edit
								</Button>
								<Button type="ghost" onPress={() => handleItem("delete")}>
									Delete
								</Button>
							</View>
						</View>
					)}
					keyExtractor={(item) => item.name}
				/>

				<Modal
					visible={modalVisible}
					onClose={() => setModalVisible(false)}
					animationType="slide-up"
				>
					<View style={{ padding: 20, paddingTop: 30 }}>
						<Text>Edit Item Name</Text>
						<Input
							autoFocus
							value={currentItemName}
							onChangeText={setCurrentItemName}
							placeholder="Enter new name"
							style={{ marginBottom: 20 }}
						/>
						<Button type="primary" onPress={confirmEdit}>
							Confirm
						</Button>
						<Button onPress={() => setModalVisible(false)}>Cancel</Button>
					</View>
				</Modal>
			</View>
		</Provider>
	);
}
