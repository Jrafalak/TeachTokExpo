import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { fetchData } from "./utils";
import { baseUrl, questionsUrlParam, answerUrlParam } from "./consts.json";
import Header from "./containers/Header/Header";
import Question from "./components/Question/Question";
import MultipleChoicePane from "./containers/MultipleChoicePane/MultipleChoicePane.js";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  const [data, setData] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [counter, setCounter] = useState(600000);
  const [image, setImage] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchQuestionDataFromAPI = async () => {
      const questionsUrl = `${baseUrl}${questionsUrlParam}`;
      const response = await fetchData(questionsUrl);
      const answersUrl = `${baseUrl}${answerUrlParam}${response.id}`;
      setData(response);
      setImage(response.image);
      setOptions(response.options);

      const answerResponse = await fetchData(answersUrl);
      setAnswer(answerResponse.correct_options[0].id);
    };
    fetchQuestionDataFromAPI();
  }, []);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground
        source={{ uri: image }}
        resizeMode="cover"
        style={styles.image}
      >
        {/* <View style={styles.overlay} /> */}
        <Header counter={counter} />
        <Question text={data ? data.question : "Loading..."} />

        <Text style={styles.whiteText}>
          {data ? JSON.stringify(data) : "Loading..."}
        </Text>
        <Text style={styles.whiteText}>
          {answer ? JSON.stringify(answer) : "Loading..."}
        </Text>
        <MultipleChoicePane options={options || []} correctAnswerId={answer} />
        <NavBar style={styles.navBar} />
        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    height: "100%",
  },
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  whiteText: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.50)",
    textShadowOffset: { width: -5, height: 5 },
    textShadowRadius: 10,
  },
  navBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
  },
});
