import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";

// Pages
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Users from "pages/Users/Users";

// Lessons
import Lesson20 from "lessons/Lesson20/Lesson20";
import Lesson21 from "lessons/Lesson21/Lesson21";
import Lesson22 from "lessons/Lessons22/Lesson22";
import Lesson23 from "lessons/Lesson23/Lesson23";
import Lesson24 from "lessons/Lesson24/Lesson24";
import Lesson25 from "lessons/Lesson25/Lesson25";

// Homeworks
import Homework20 from "homeworks/Homework20/Homework20";
import Homework21 from "homeworks/Homework21/Homework21";
import Homework22 from "homeworks/Homework22/Homework22";
import Homework23 from "homeworks/Homework23/Homework23";
import Homework24 from "homeworks/Homework24/Homework24";
import Homework25 from "homeworks/Homework25/Homework25";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
      {/* <Lesson20 /> */}
      {/* <Lesson21 /> */}
      {/* <Lesson22 /> */}
      {/* <Lesson23 /> */}
      {/* <Lesson24 /> */}
      {/* <Lesson25 /> */}
      {/* <Homework20 /> */}
      {/* <Homework21 /> */}
      {/* <Homework22 /> */}
      {/* <Homework23 /> */}
      {/* <Homework24 /> */}
      {/* <Homework25 /> */}
    </BrowserRouter>
  );
}

export default App;
