import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList
} from 'react-native';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming
} from "react-native-reanimated";
import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";

import { 
    Home,
    Search,
    CartTab,
    Favourite,
    Notification
 } from "../screens";
 import { 
    COLORS,
    SIZES,
    FONTS,
    icons,
    constants,
    dummyData
  } from "../constants";
  import { Header } from "../components";

const MainLayout = ( {drawerAnimatedStyle, navigation, selectedTab, setSelectedTab} ) => {

    React.useEffect(() => {
        setSelectedTab(constants.screens.home)
    }, [])

    return (
      <Animated.View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          ...drawerAnimatedStyle,
        }}
      >
        {/* header */}
        <Header
          containerStyle={{
            height: 50,
            paddingHorizontal: SIZES.padding,
            marginTop: 40,
            alignItems: "center",
          }}
          title={selectedTab.toUpperCase()}
        />

        {/* Content */}
        <View
          style={{
            flex: 1,
          }}
        >
          <Text>MainLayout</Text>
        </View>

        {/* Footer */}
      </Animated.View>
    );
}

 function mapStateToProps(state) {
    return{
        selectedTab: state.tabReducer.selectedTab
    }
 }
 function mapDispatchToProps(dispatch) {
    return{
        setSelectedTab: (selectedTab) => {
            return dispatch(setSelectedTab(selectedTab))}
    }
 }

 export default connect(mapStateToProps, mapDispatchToProps) (MainLayout)