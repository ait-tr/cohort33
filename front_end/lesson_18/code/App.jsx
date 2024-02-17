import "./App.css";

// Lessons
import Lesson18 from "./lessons/Lesson18/Lesson18";

// Homeworks
import Homework18 from "./homeworks/Homework18/Homework18";

// 1. Компоненты пишутся с заглавной буквы
// 2. Компоненты должны возвращать JSX(DOM элементы - HTML теги)
function App() {
  return (
    <div className="App">
      <Lesson18 />
      {/* <Homework18 /> */}
    </div>
  );
}

export default App;
