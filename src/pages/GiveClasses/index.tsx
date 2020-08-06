import React from "react";
import { View, ImageBackground, Text, Linking } from "react-native";

import giveClassesBgImage from "../../assets/images/give-classes-background.png";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  function handleCadastro() {
    Linking.openURL("https://proffy.tondinizr.vercel.app/");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleCadastro} style={styles.cadastroButton}>
        <Text style={styles.ButtonText}>Se cadastrar</Text>
      </RectButton>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.ButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
