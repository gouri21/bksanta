import React from 'react'
import {Image} from 'react-native'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import BookRequestscreen from '../screens/bookrequestscreen'
import BookDonatescreen from '../screens/bookdonationscreen'
export const AppTabNavigator = createBottomTabNavigator({
    donatebook:{screen:BookDonatescreen, navigationOptions:{
        tabBarIcon:<Image source={require("../assets/request-list.png")} 
        style={{width:50, height:150}}/>,
tabBarLabel:"donate books",     }},
bookrequest:{screen:BookRequestscreen, navigationOptions:{
    tabBarIcon:<Image source={require("../assets/request-book.png")} 
    style={{width:50, height:150}}/>,
tabBarLabel:"book request"}
}
})