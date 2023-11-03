import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar as StatusBarRN,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { fetchData } from "./utils";
import { baseUrl, questionsUrlParam, answerUrlParam } from "./consts.json";
import Header from "./containers/Header/Header";
import Question from "./components/Question/Question";
import MultipleChoicePane from "./containers/MultipleChoicePane/MultipleChoicePane.js";
import NavBar from "./components/NavBar/NavBar";
import ActionButtonRow from "./containers/ActionButtonRow/ActionButtonRow";
import Playlist from "./components/Playlist/Playlist";
import Description from "./components/Description/Description";

// tenMin = 10 min * 60 seconds * 1000 milliseconds
const tenMin = 10 * 60 * 1000;

export default function App() {
  const [id, setId] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [image, setImage] = useState(null);
  const [options, setOptions] = useState([]);
  const [playlist, setPlaylist] = useState(null);
  const [author, setAuthor] = useState(null);
  const [description, setDescription] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [viewedQuestions, setViewedQuestions] = useState([]);
  // [{ id: 123, data: {correctAnswer: "A", selectedAnswer: "B"}}]
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [counter, setCounter] = useState(tenMin);
  const [index, setIndex] = useState(-1);

  const fetchQuestionDataFromAPI = async () => {
    const questionsUrl = `${baseUrl}${questionsUrlParam}`;
    const response = await fetchData(questionsUrl);
    const answersUrl = `${baseUrl}${answerUrlParam}${response.id}`;
    const answerResponse = await fetchData(answersUrl);

    setId(response.id);
    setQuestion(response.question);
    setAnswer(answerResponse.correct_options[0].id);
    setSelectedAnswer(null);
    setImage(response.image);
    setOptions(response.options);
    setPlaylist(response.playlist);
    setAuthor(response.user.name);
    setDescription(response.description);
    setAvatar(response.user.avatar);
    setIndex(index + 1);

    const isNewQuestion =
      viewedQuestions.length === 0 ||
      !viewedQuestions.find((question) => question.id === response.id);
    if (isNewQuestion) {
      setViewedQuestions([...viewedQuestions, response]);
    }
    setCounter(tenMin);
  };

  // fetch data on load
  useEffect(() => {
    fetchQuestionDataFromAPI();
  }, []);

  // make the timer count down every second
  useEffect(() => {
    const interval = setInterval(() => {
      counter > 0 && setCounter(counter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  const populateQuestionDataFromViewedQuestions = async (index) => {
    const question = viewedQuestions[index];
    setId(question.id);
    setQuestion(question.question);
    setImage(question.image);
    setOptions(question.options);
    setPlaylist(question.playlist);
    setAuthor(question.user.name);
    setDescription(question.description);
    setAvatar(question.user.avatar);

    // if the user has already answered this question before, populate the answer and selected answer
    if (completedQuestions.find((question) => question.id === id)) {
      const completedQuestion = completedQuestions.find(
        (question) => question.id === id
      );
      setAnswer(completedQuestion.data.correctAnswer);
      setSelectedAnswer(completedQuestion.data.selectedAnswer);
    } else {
      // if the user has not answered this question before, fetch the answer and set the selected answer to null
      const answersUrl = `${baseUrl}${answerUrlParam}${question.id}`;
      const answerResponse = await fetchData(answersUrl);
      setAnswer(answerResponse.correct_options[0].id);
      setSelectedAnswer(null);
    }
  };

  // forward will be true or false depending on whether the user is going forward or backwards, true is forward
  const navToViewedQuestion = async (forward) => {
    // going forward through viewed questions
    if (forward) {
      // if we are not at the end of the viewed questions array, go forward
      // populate the data from already viewed questions
      if (index + 1 <= viewedQuestions.length - 1) {
        populateQuestionDataFromViewedQuestions(index + 1);
        setIndex(index + 1);
      } else {
        // if we are at the end of the viewed questions array, fetch a new question
        setSelectedAnswer(null);
        fetchQuestionDataFromAPI();
      }
    } else {
      // going backward through viewed questions, if it's the beginning of the array, do nothing
      if (index - 1 >= 0) {
        populateQuestionDataFromViewedQuestions(index - 1);
        setIndex(index - 1);
      }
    }
  };

  const onSelectChoice = (choiceId) => {
    const hasCompletedQuestion = completedQuestions.find(
      (question) => question.id === id
    );
    if (!hasCompletedQuestion) {
      const completedQuestion = {
        id: id,
        data: {
          correctAnswer: answer,
          selectedAnswer: choiceId,
        },
      };
      setCompletedQuestions([...completedQuestions, completedQuestion]);
    }
  };

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
            <View style={styles.arrowNav}>
              <TouchableHighlight
                style={styles.arrowNavBtn}
                activeOpacity={0.5}
                underlayColor="rgba(255, 255, 255, 0.1)"
                onPress={() => {
                  navToViewedQuestion(false);
                }}
              >
                <Icon
                  name="arrow-back-circle-outline"
                  size={30}
                  color="rgba(255, 255, 255, 0.5)"
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.arrowNavBtn}
                activeOpacity={0.5}
                underlayColor="rgba(255, 255, 255, 0.1)"
                onPress={() => {
                  navToViewedQuestion(true);
                }}
              >
                <Icon
                  name="arrow-forward-circle-outline"
                  size={30}
                  color="rgba(255, 255, 255, 0.5)"
                />
              </TouchableHighlight>
            </View>
            <Question style={styles.question} text={question || "Loading..."} />
          </View>
          <View style={styles.actionsContainer}>
            <View style={styles.answersDescription}>
              <MultipleChoicePane
                style={styles.choices}
                questionId={id}
                options={options || []}
                correctAnswerId={answer}
                completedQuestions={completedQuestions}
                onPress={onSelectChoice}
              />
              <Description author={author} description={description} />
            </View>
            <ActionButtonRow imageUrl={avatar} style={styles.actionButtons} />
          </View>
          <Playlist style={styles.playlist} text={`Playlist - ${playlist}`} />
          <NavBar style={styles.navBar} />
        </View>
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
  arrowNav: {
    marginTop: StatusBarRN.currentHeight + 50,
    marginBottom: -50,
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowNavBtn: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  answersDescription: {
    width: "80%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  choices: {
    width: "100%",
  },
  actionButtons: {
    width: "20%",
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
