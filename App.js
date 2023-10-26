import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { fetchData } from "./utils";
import { baseUrl, questionsUrlParam, answerUrlParam } from "./consts.json";
import Header from "./containers/Header/Header";
import Question from "./components/Question/Question";

export default function App() {
  const [data, setData] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [counter, setCounter] = useState(600);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchQuestionDataFromAPI = async () => {
      const questionsUrl = `${baseUrl}${questionsUrlParam}`;
      const response = await fetchData(questionsUrl);
      const answersUrl = `${baseUrl}${answerUrlParam}${response.id}`;
      setData(response);
      setImage(response.image);

      const answerResponse = await fetchData(answersUrl);
      setAnswer(answerResponse);
    };
    fetchQuestionDataFromAPI();
  }, []);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: image }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.overlay} />
        <Header />

        <Question text={data ? data.question : "Loading..."} />

        <Text style={styles.whiteText}>
          {data ? JSON.stringify(data) : "Loading..."}
        </Text>
        <Text style={styles.whiteText}>
          {answer ? JSON.stringify(answer) : "Loading..."}
        </Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 0,
    margin: 0,
  },
  whiteText: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.50)",
    textShadowOffset: { width: -5, height: 5 },
    textShadowRadius: 10,
  },
});
