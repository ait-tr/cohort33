import GlobalStyles from "styles/GlobalStyles";

// Lessons
import Lesson20 from "./lessons/Lesson20/Lesson20";
import Lesson21 from "./lessons/Lesson21/Lesson21";
import Lesson22 from "./lessons/Lessons22/Lesson22";
import Lesson23 from "lessons/Lesson23/Lesson23";

// Homeworks
import Homework20 from "./homeworks/Homework20/Homework20";
import Homework21 from "./homeworks/Homework21/Homework21";
import Homework22 from "homeworks/Homework22/Homework22";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Lesson20 /> */}
      {/* <Lesson21 /> */}
      {/* <Lesson22 /> */}
      {/* <Homework20 /> */}
      {/* <Homework21 /> */}
      <Lesson23 />
    </>
  );
}

export default App;
