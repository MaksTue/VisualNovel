import React, { useState, useEffect, useRef } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../src/styles";

const TypingText = ({ text, speed, onPress }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const textRef = useRef(text);

  useEffect(() => {
    let index = 0;
    const textLength = text.length;

    if (!isTyping) {
      return;
    }

    setDisplayedText("");

    const timerId = setInterval(() => {
      setDisplayedText((prevText) => prevText + text[index]);
      index += 1;

      if (index === textLength) {
        clearInterval(timerId);
      }
    }, speed);

    return () => {
      clearInterval(timerId);
    };
  }, [text, speed, isTyping]);

  useEffect(() => {
    if (textRef.current !== text) {
      textRef.current = text;
      setDisplayedText("");
      setIsTyping(true);
    }
  }, [text]);

  const handlePress = () => {
    setIsTyping(false);
    setDisplayedText(text);
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{displayedText}</Text>
    </TouchableOpacity>
  );
};

export default TypingText;
