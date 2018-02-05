import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Switch,
  Button,
  Modal
} from "react-native";
import Accordion from "react-native-collapsible/Accordion";

export default class Main extends React.Component {
  state = {
    modalVisible: false,
    sections: [
      { title: "Instagram", content: "Add AlrtBatch", enabled: false },
      { title: "Snapchat", content: "Add AlrtBatch", enabled: false },
      { title: "Facebook", content: "Add AlrtBatch", enabled: false },
      { title: "LinkedIn", content: "Add AlrtBatch", enabled: false },
      { title: "Tumbler", content: "Add AlrtBatch", enabled: false },
      { title: "Reddit", content: "Add AlrtBatch", enabled: false },
      { title: "YouTube", content: "Add AlrtBatch", enabled: false }
    ]
  };

  openModal = () => {
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  _renderHeader = section => {
    return (
      <View style={styles.item}>
        <Text>></Text>
        <Text style={styles.headerText}>{section.title}</Text>
        <Switch
          value={section.enabled}
          onValueChange={() => this._toggleItem(section)}
        />
      </View>
    );
  };
  _renderContent = section => {
    return (
      <View>
        <Button onPress={this.openModal} title={`+ ${section.content}`} />
      </View>
    );
  };

  _toggleItem = section => {
    const toggledSection = this.state.sections.find(
      sect => sect.title === section.title
    );
    toggledSection.enabled = !toggledSection.enabled;
    this.setState({
      sections: [...this.state.sections]
    });
  };

  onDateTimeSelected = day => {
    console.log(`Day: ${day} Selected`);
  };

  render() {
    return (
      <View style={styles.container}>
        <Accordion
          sections={this.state.sections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />
        <Modal
          visible={this.state.modalVisible}
          animationType={"slide"}
          onRequestClose={() => this.closeModal()}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <FlatList
                data={[
                  { key: "Sunday" },
                  { key: "Monday" },
                  { key: "Tuesday" },
                  { key: "Wednesday" },
                  { key: "Thursday" },
                  { key: "Friday" },
                  { key: "Saturday" }
                ]}
                renderItem={({ item }) => (
                  <Button
                    style={styles.item}
                    onPress={() => this.onDateTimeSelected(item.key)}
                    title={item.key}
                  />
                )}
              />
              <Button onPress={() => this.closeModal()} title="Done" />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  item: {
    flexDirection: "row",
    padding: 10,
    height: 44
  },
  arrow: {
    height: 18,
    width: 18,
    color: "red",
    padding: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "grey"
  },
  innerContainer: {
    alignItems: "center"
  }
});
