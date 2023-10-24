import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { fetchData } from "./utils";
import { baseUrl, questionsUrlParam, answerUrlParam } from "./consts.json";

export default function App() {
  const [data, setData] = useState(null);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    const fetchQuestionDataFromAPI = async () => {
      const questionsUrl = `${baseUrl}${questionsUrlParam}`;
      const response = await fetchData(questionsUrl);
      setData(response);
    };
    fetchQuestionDataFromAPI();

    const fetchAnswerDataFromAPI = async () => {
      const answersUrl = `${baseUrl}${answerUrlParam}${data.id}`;
      const response = await fetchData(answersUrl);
      setAnswer(response);
    };
    fetchAnswerDataFromAPI();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{data ? JSON.stringify(data) : "Loading..."}</Text>
      <Text>{answer ? JSON.stringify(answer) : "Loading..."}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
