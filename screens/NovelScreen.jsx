import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import styles from "../src/styles";
import TypingText from "../components/TypingText";

const NovelScreen = () => {
  const [pageData, setPageData] = useState({
    backgroundImage: null,
    textData: "",
    choice_data: [],
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    axios
      .get("https://657f04b99d10ccb465d5c9a9.mockapi.io/sot/novel_page")
      .then((response) => {
        setPages(response.data);
        const currentPageData = response.data[currentPage];

        setPageData({
          backgroundImage: { uri: currentPageData.image },
          textData: currentPageData.text,
          choice_data: currentPageData.choice_data,
        });
      })
      .catch((error) => {
        console.error("Data upload error:", error);
      });
  }, []);

  useEffect(() => {
    if (currentPage >= 0 && currentPage < pages.length) {
      const newPageData = pages[currentPage];

      setPageData({
        backgroundImage: { uri: newPageData.image },
        textData: newPageData.text,
        choice_data: newPageData.choice_data,
      });
    }
  }, [currentPage]);

  const handlePress = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleChoicePress = (number) => {
    setCurrentPage(number);
  };

  return (
    <View style={styles.container}>
      {pageData.backgroundImage && (
        <Image
          source={pageData.backgroundImage}
          style={styles.backgroundImage}
        />
      )}

      <View style={styles.textContainer}>
        {/* <Text style={styles.text}>{pageData.textData}</Text> */}
        {pageData.textData && (
          <TypingText text={pageData.textData} speed={50} />
        )}
      </View>
      <View style={styles.buttonContainer}>
        {pageData.choice_data.length > 0 &&
          pageData.choice_data.map((choice, index) => {
            if (index % 2 === 0) {
              const number = choice;
              const text = pageData.choice_data[index + 1];
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.button}
                  onPress={() => handleChoicePress(number)}
                >
                  <Text style={styles.buttonText}>{text}</Text>
                </TouchableOpacity>
              );
            }
            return null;
          })}

        {pageData.choice_data.length === 0 && (
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Далее</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default NovelScreen;
