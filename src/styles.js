import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touchableContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  textContainer: {
    marginTop: 50,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",

    marginBottom: "auto",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    marginTop: "auto", // Прижатие контейнера к низу
    width: "100%", // Ширина контейнера кнопок
  },
  button: {
    marginTop: 10,
    backgroundColor: "#000", // Цвет кнопки
    padding: 10,
    borderRadius: 5,

    marginBottom: 10, // Отступ снизу
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff", // Цвет текста кнопки
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;
