import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Share,
  Clipboard,
} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Tab,
  Tabs,
  ScrollableTab,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import Modal from "react-native-modal";
import {} from "@expo/vector-icons";

export default class HeaderMultipleIconExample extends Component {
  constructor() {
    super();
    this.state = {
      activeTabNumber: 1,
      isDisabled: true,
      myAddress: "DkYx xQx6 T SYC bZNY6 \n d9kp 3KGA CQfy J1g5s",
      header: false,
      isModalVisible: false,
      modalText: "",
      path: "",
      myAddress1: false,
      myAddress2: "DkYx xQx6 T SYC bZNY6 d9kp 3KGA CQfy J1g5s",
      myAddress3:false
    };
  }
  _menu = null;

  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu = (path) => {
    this._menu.hide();
    this.props.navigation.navigate(path);
  };

  showMenu = () => {
    this._menu.show();
  };
  onChangeText = (text) => {
    console.log(text);
    this.setState({ value: text, isDisabled: false });
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      myAddress3:this.state.myAddress1===false?false:this.state.myAddress3,
      myAddress1:""
    });
  };
  nextScreen = () => {
    this.toggleModal();
    this.setState({
      myAddress3:this.state.myAddress1,
      myAddress1:this.state.myAddress4
    })
  };

  myAddress=()=>{
    this.toggleModal();
    this.hideMenu("home")

  }
  myAddress1=()=>{
    this.toggleModal();
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  copyToClipboard = () => {
    Clipboard.setString("DkYx xQx6 T SYC bZNY6 d9kp 3KGA CQfy J1g5s");
  };

  render() {
    return (
      <Container style={styles._Container}>
        {this.state.header === true ? (
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.setState({ header: false })}
              >
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>{this.state.myAddress}</Title>
            </Body>
            <Right>
              <Button transparent>{/* <Icon name='search' /> */}</Button>
              <Button transparent onPress={() => this.myAddress1()}>
                <Entypo name="edit" size={24} color="white" />
              </Button>
              <Button transparent>
                <TouchableOpacity onPress={() => this.copyToClipboard()}>
                  <MaterialIcons name="content-copy" size={24} color="white" />
                </TouchableOpacity>
              </Button>
            </Right>
          </Header>
        ) : (
          <Header style={styles._header}>
            <Left>
              <Image
                style={styles.image}
                source={require("./../../../assets/images/Cashhand.jpg")}
                style={{
                  borderRadius: 100,
                  width: 50,
                  height: 50,
                  alignSelf: "center",
                }}
              />
            </Left>
            <Body>
              <Title>Cashhand</Title>
            </Body>
            <Right>
              <Button transparent>
                {this.state.activeTabNumber === 0 ? (
                  <TouchableOpacity onPress={() => this.copyToClipboard()}>
                    <MaterialIcons
                      name="content-copy"
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                ) : null}
              </Button>
              <Button transparent>
                {this.state.activeTabNumber === 0 ? (
                  <TouchableOpacity onPress={() => this.onShare()}>
                    <Entypo name="share" size={24} color="white" />
                  </TouchableOpacity>
                ) : null}
                {this.state.activeTabNumber === 1 ? (
                  <AntDesign name="qrcode" size={24} color="white" />
                ) : null}
              </Button>
              {this.state.activeTabNumber === 0 ? (
                <Menu
                  ref={this.setMenuRef}
                  button={
                    <Button transparent onPress={this.showMenu}>
                      <Icon name="more" />
                    </Button>
                  }
                >
                  <MenuItem onPress={() => this.myAddress()}>
                    Edit label
                  </MenuItem>
                  <MenuItem onPress={this.hideMenu}>New address</MenuItem>
                  <MenuItem onPress={() => this.hideMenu("Settings")}>
                    Setting
                  </MenuItem>
                  <MenuItem onPress={() => this.hideMenu("Contact")}>
                    Contact support
                  </MenuItem>
                  <MenuItem onPress={() => this.hideMenu("About")}>
                    About
                  </MenuItem>
                </Menu>
              ) : null}
              {this.state.activeTabNumber === 1 ? (
                <Menu
                  ref={this.setMenuRef}
                  button={
                    <Button transparent onPress={this.showMenu}>
                      <Icon name="more" />
                    </Button>
                  }
                >
                  <MenuItem onPress={this.hideMenu}>Refresh</MenuItem>
                  <MenuItem onPress={() => this.hideMenu("Sign")}>
                    Sign/verify message
                  </MenuItem>
                  <MenuItem onPress={() => this.hideMenu("AcountDetail")}>
                    Acount details
                  </MenuItem>
                  <MenuItem onPress={() => this.hideMenu("Sweepwallet")}>
                    Sweep wallet
                  </MenuItem>
                  <MenuItem onPress={() => this.hideMenu("Settings")}>
                    Setting
                  </MenuItem>

                  <MenuItem onPress={() => this.hideMenu("Contact")}>
                    Contact support
                  </MenuItem>
                  <MenuItem onPress={() => this.hideMenu("About")}>
                    About
                  </MenuItem>
                </Menu>
              ) : null}
              {this.state.activeTabNumber === 2 ? (
                <Menu
                  ref={this.setMenuRef}
                  button={
                    <Button transparent onPress={this.showMenu}>
                      <Icon name="more" />
                    </Button>
                  }
                >
                  <MenuItem onPress={this.hideMenu}>Use all funds</MenuItem>
                  <MenuItem onPress={() => this.hideMenu("Settings")}>
                    Setting
                  </MenuItem>

                  <MenuItem onPress={() => this.hideMenu("Contact")}>
                    Contact support
                  </MenuItem>
                  <MenuItem onPress={() => this.hideMenu("About")}>
                    About
                  </MenuItem>
                </Menu>
              ) : null}
            </Right>
          </Header>
        )}

        <Tabs
          style={styles._tababr}
          style={(backgroundColor = "white")}
          renderTabBar={() => (
            <ScrollableTab style={{ backgroundColor: "#347AF0" }} />
          )}
          initialPage={1}
          onChangeTab={({ i, ref }) => this.setState({ activeTabNumber: i })}
        >
          <Tab
            heading="recieve"
            tabStyle={{ backgroundColor: "#347AF0" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#347AF0" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <View>
              <View
                style={{
                  // alignSelf: "left",
                  marginBottom: "23%",
                  marginTop: "5%",
                  marginLeft: "10%",
                }}
              >
                <Text style={{ color: "grey",marginLeft:"3%" }}>My address</Text>
                {this.state.myAddress3 === false ? (
                  <TouchableOpacity
                    onPress={() => this.setState({ header: true })}
                  >
                    <Text style={{ fontSize: 23,textAlign:"left",marginLeft:"3%" }}>{this.state.myAddress}</Text>
                  </TouchableOpacity>
                ) : (
                  <View style={{marginLeft:"3%"}}>
                    <TouchableOpacity
                      onPress={() => this.setState({ header: true })}
                    >
                      <Text style={{ fontSize: 23 }}>
                        {this.state.myAddress3}
                      </Text>
                    </TouchableOpacity>
                    <Text style={{color:"grey"}}>{this.state.myAddress2}</Text>
                  </View>
                )}
              </View>
              <Image
                style={styles.image}
                source={require("./../../../assets/images/reqr.png")}
                style={{
                  //   borderRadius: 100,
                  width: 210,
                  height: 210,
                  alignSelf: "center",
                  marginTop: 28,
                }}
              />
              <TextInput
                placeholder="0.00"
                type="number"
                keyboardType="numeric"
                style={{
                  height: 30,
                  borderColor: "gray",
                  borderWidth: 1,
                  borderLeftWidth: 0,
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  width: "48%",
                  marginLeft: "3%",
                }}
              />

              <Text style={styles._dfcText1}>DFC</Text>
            </View>
          </Tab>
          <Tab
            heading="balance"
            tabStyle={{ backgroundColor: "#347AF0" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#347AF0" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <View style={{ marginTop: "7%" }}>
              <Text style={styles._dfcVAlue}>0.00</Text>
              <Text style={styles._dfcText}>CHD</Text>
            </View>
            <View style={{ marginTop: "7%" }}>
              <Text
                style={{
                  color: "gray",
                  alignSelf: "center",
                  fontSize: 18,
                  marginBottom: "5 %",
                }}
              >
                No coins recieved so far!
              </Text>
              <Text
                style={{ color: "gray", alignSelf: "center", fontSize: 18 }}
              >
                You can get some through an{" "}
              </Text>
              <Text
                style={{ color: "gray", alignSelf: "center", fontSize: 18 }}
              >
                exchange,trading and selling goods
              </Text>
              <Text
                style={{ color: "gray", alignSelf: "center", fontSize: 18 }}
              >
                or services
              </Text>
            </View>
          </Tab>
          <Tab
            heading="send"
            tabStyle={{ backgroundColor: "#347AF0" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#347AF0" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <View>
              <View>
                <Text style={styles._balanceText}>Balance: 0.00 CHD</Text>
              </View>
            </View>
            <View style={styles.view2}>
              <Text style={styles.phraseText2}>Pay to</Text>
              <View style={styles._inputView}>
                <TextInput
                  placeholder="name or address"
                  style={styles.input1}
                  style={{
                    height: 30,
                    borderColor: "gray",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    width: "84%",
                  }}
                />
                <View style={styles._qrCode}>
                  <AntDesign name="qrcode" size={24} color="black" />
                </View>
              </View>
              <Text style={styles.phraseText3}>Amount</Text>
              <View>
                <TextInput
                  placeholder="0.00"
                  //   style={styles.input1}
                  style={{
                    height: 30,
                    borderColor: "gray",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    width: "50%",
                  }}
                  onChangeText={(e) => this.onChangeText(e)}
                  value={this.state.value}
                  keyboardType="numeric"
                />
              </View>
              <Text style={styles._dfcText1}>DFC</Text>
              <View style={styles._bottom_row}>
                <TouchableOpacity
                  disabled={this.state.isDisabled}
                  style={
                    this.state.isDisabled === true ? styles.text4 : styles.text5
                  }
                >
                  <Text style={styles._btnText}>SEND</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Tab>
        </Tabs>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles._modalView}>
            <Text style={styles._modalHeading}>Adress</Text>
            <Text style={styles._modalText}>{this.state.myAddress2}</Text>
            <Text style={styles._modalHeading}>Name</Text>
            <TextInput
              style={{
                height: 30,
                borderColor: "gray",
                borderWidth: 2,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                borderRightWidth: 0,
                width: "100%",
              }}
              onChangeText={(e) => this.setState({ myAddress1: e})}
              value={this.state.myAddress1}
            />
            <View style={styles._buttonsView}>
              <TouchableOpacity
                onPress={() => this.toggleModal()}
                style={styles._cancelBtn}
              >
                <Text>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles._cancelBtn}
                onPress={() => this.nextScreen()}
              >
                <Text>SAVE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  _Container: {},
  _header: {
    backgroundColor: "#347AF0",
  },
  _tababr: {
    backgroundColor: "#347AF0",
  },
  _dfcVAlue: {
    textAlign: "center",
    fontSize: 50,
  },
  _dfcText: {
    marginLeft: "50%",
    color: "grey",
    //   marginTop:-10,
    fontSize: 20,
  },
  _balanceText: {
    textAlign: "right",
    width: "85%",
    alignSelf: "center",
    fontSize: 16,
    color: "grey",
    marginTop: 10,
  },
  _qrCode: {
    marginLeft: "4%",
    backgroundColor: "#c2c2c2",
    padding: "1%",
  },
  _inputView: {
    flexDirection: "row",
  },
  view2: {
    marginTop: 20,
    marginLeft: "5%",
  },
  phraseText2: {
    fontSize: 16,
    color: "grey",
  },
  phraseText3: {
    fontSize: 16,
    color: "grey",
    marginTop: 30,
  },
  text4: {
    backgroundColor: "grey",
    width: "20%",
    alignSelf: "flex-end",
    marginRight: "2%",
    padding: "2%",
    opacity: 0.5,
    borderRadius: 50,
  },
  text5: {
    backgroundColor: "#347AF0",
    width: "20%",
    alignSelf: "flex-end",
    marginRight: "2%",
    padding: "2%",
    borderRadius: 50,
  },
  _btnText: {
    textAlign: "center",
    color: "white",
  },
  _dfcText1: {
    color: "grey",
    textAlign: "center",
    marginRight: "6%",
  },
  _modalView: {
    padding: 20,
    backgroundColor: "white",
  },
  _buttonsView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  _modalHeading: {
    fontSize: 16,
    color: "grey",
    marginTop: 30,
  },
  _modalText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "left",
    borderBottomWidth: 1,
    paddingBottom: "4%",
    borderBottomColor: "grey",
    color: "grey",
  },
  _cancelBtn: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
