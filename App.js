import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar as StatusBarRN,
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
import ActionButtonRow from "./containers/ActionButtonRow/ActionButtonRow";
import Playlist from "./components/Playlist/Playlist";
import Description from "./components/Description/Description";

export default function App() {
  const [data, setData] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [counter, setCounter] = useState(600000);
  const [image, setImage] = useState(null);
  const [options, setOptions] = useState([]);
  const [playlist, setPlaylist] = useState(null);
  const [author, setAuthor] = useState(null);
  const [description, setDescription] = useState(null);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const fetchQuestionDataFromAPI = async () => {
      const questionsUrl = `${baseUrl}${questionsUrlParam}`;
      const response = await fetchData(questionsUrl);
      const answersUrl = `${baseUrl}${answerUrlParam}${response.id}`;
      setData(response);
      setQuestion(response.question);
      setImage(response.image);
      setOptions(response.options);
      setPlaylist(response.playlist);
      setAuthor(response.user.name);
      setDescription(response.description);
      setAvatar(response.user.avatar);

      const answerResponse = await fetchData(answersUrl);
      setAnswer(answerResponse.correct_options[0].id);
    };
    fetchQuestionDataFromAPI();
  }, []);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <ImageBackground
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.overlay} />

        <View style={styles.content}>
          <View style={styles.topHalf}>
            <Header style={styles.header} counter={counter} />
            <Question style={styles.question} text={question || "Loading..."} />
          </View>
          <View style={styles.bottomHalf}>
            <View style={styles.actionsContainer}>
              <View style={styles.answersDescription}>
                <MultipleChoicePane
                  style={styles.choices}
                  options={options || []}
                  correctAnswerId={answer}
                />
                <Description author={author} description={description} />
              </View>
              <ActionButtonRow style={styles.actionButtons} />
            </View>
          </View>
          <Playlist style={styles.playlist} text={`Playlist - ${playlist}`} />
          <NavBar style={styles.navBar} />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0, backgroundColor: "black" }} />
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  whiteText: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.50)",
    textShadowOffset: { width: -5, height: 5 },
    textShadowRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  topHalf: {
    flex: 1,
    flexsDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  answersDescription: {
    width: "85%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  choices: {
    width: "100%",
  },
  actionButtons: {
    width: "15%",
  },
  navBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  playlist: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
  },
});
