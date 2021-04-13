import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Linking } from 'react-native'
import {Text, View, ScrollView, Button, SafeAreaView, ImageBackground } from 'react-native';
import { ScaledSheet } from "react-native-size-matters";

export default function App() {

  const image = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/asubtlegreen/header.png",
  };
  const imagebar = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/asubtlegreen/bar.png",
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.contentBorder}>
        <View style={styles.contentBorderTwo}>
          <ImageBackground source={image} style={styles.image}>
            <View style={styles.header}>
              <Text style={styles.h1}> A Subtle Green</Text>
              <Text style={styles.subtitle}>A design by Bryant Smith</Text>
            </View>
          </ImageBackground>

          <View style={styles.containerNav}>
            <ImageBackground source={imagebar} style={styles.imagebar}>
              <ScrollView style={styles.navContainer} horizontal={true} showsHorizontalScrollIndicator={false}>

                <View style={styles.navButton}>
                  <Text style={styles.navBtnTxt}>About</Text>
                </View>

                <View style={styles.navButton}>
                  <Text style={styles.navBtnTxt}>Portfolio</Text>
                </View>
                <View style={styles.navButton}>
                  <Text style={styles.navBtnTxt}>Services</Text>
                </View>
                <View style={styles.navButton}>
                  <Text style={styles.navBtnTxt}>Contact</Text>
                </View>

              </ScrollView>
            </ImageBackground>
          </View>



          <ScrollView horizontal={false}
            showsHorizontalScrollIndicator={true} style={styles.containerText}>
            <View style={styles.text}>
              <Text style={styles.h2} >The Article Title</Text>
              <View style={styles.text1} >

                <View style={styles.text1p} >
                  <Text style={styles.p}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)</Text>
                </View>
                <View style={styles.links}>

                  <Text style={styles.h2Link} onPress={() => Linking.openURL('http://www.bryantsmith.com/')} >Links:</Text>
                  <Text style={styles.link} onPress={() => Linking.openURL('http://www.bryantsmith.com/')} >Web Design</Text>
                  <Text style={styles.link} onPress={() => Linking.openURL('http://www.bryantsmith.com/')} >Templates</Text>
                  <Text style={styles.link} onPress={() => Linking.openURL('http://www.bryantsmith.com/')} >Marketing</Text>
                  <Text style={styles.link} onPress={() => Linking.openURL('http://www.bryantsmith.com/')} >SEO</Text>
                  <Text style={styles.link} onPress={() => Linking.openURL('http://www.bryantsmith.com/')} >Programming</Text>
                  <Text style={styles.link} onPress={() => Linking.openURL('http://www.bryantsmith.com/')} >Consulting</Text>
                </View>
                <View>


                </View>

              </View>
              <View style={styles.text2}>


                <Text style={styles.p}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>

              </View>
              <View style={styles.text3}>


                <Text style={styles.p}>Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>

              </View>
            </View>
            <Text style={styles.footer} onPress={() => Linking.openURL('http://www.bryantsmith.com')}>web development by bryant smith</Text>
          </ScrollView>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#252F33',
  },
  contentBorder: {
    backgroundColor: "#252F33",
    flexDirection: "column",
    flex: 1,
    padding: '10@s',
    marginTop: '40@s',
    marginLeft: '10@s',
    marginRight: '10@s'
  },
  contentBorderTwo: {
    flexDirection: "column",
    flex: 1,
    borderRadius: '20@s',
    backgroundColor: "white",
    paddingBottom: 0,
    backgroundColor: '#869c80',
  },
  header: {
    position: 'absolute',
    flex: .8,
    justifyContent: "center",

  },

  h1: {
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    paddingTop:'20@s',
    paddingLeft:'15@s',
    fontWeight: 'bold',
    fontSize: '27@s',
    color: "#252F33"
  },
  subtitle: {
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    paddingLeft:'28@s',
    color: "#CEEAEE",
    fontWeight: 'bold',
    fontSize: '13@s',


  },
  containerNav: {
    flex: .15,
  
  },
  navContainer: {
    flexDirection: "row",
    flex: 1,
  },
  navButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: '50@s',
    paddingLeft: '10@s',
    paddingRight: '25@s'
  },

  navBtnTxt: {
    color: "#252F33",
    fontWeight: "700",
    fontSize: '13@s'
  },
  containerText: {
    flex: .6,
  },

  text: {
    flexDirection: "column",
    fontFamily: 'Arial, Helvetica, sans-serif',
    flex: 0.5,
    marginTop: 0,
    paddingLeft: '2@s',
    paddingRight: '5@s',
  },


  text1: {
    flexDirection: "row",
    flex: 1,
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingBottom: '15@s',
    flex: 1,
  },

  links: {
    flex: .3,
    paddingTop: '25@s',
    paddingLeft: '10@s',
  },
  text1p: {
    flex: 0.7,
    paddingLeft: '5@s',

  },
  text2: {

    borderRadius: '30@s',
    paddingTop: '15@s',
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingBottom: '15@s',
    flex: 1,

  },
  text3: {

    borderRadius: '30@s',
    paddingTop: '15@s',
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingBottom: '15@s',
    flex: 1,

  },


  h2: {
    fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    color: '#2C4969',
    fontSize: '20@s',
    fontWeight: 'bold',
    paddingLeft: '15@s',
    paddingTop: '15@s',
    paddingBottom: '10@s',

  },

  
  p: {
    lineHeight: '25@s',
    paddingLeft: '10@s',
  },

  image: {
    position: 'relative',
    flex: .2,
    top: 0,
    right: 0,
    left: 0,

  },
  imagebar: {
    position: 'absolute',
    flex: .2,

  },

  footer: {
    color: '#667765',
    marginTop: '15@s',
    fontSize: '9@s',
    textAlign: 'center',


  },
h2Link:{
  fontWeight:'bold',
}

});
