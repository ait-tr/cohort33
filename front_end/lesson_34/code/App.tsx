import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homework29 from "./homeworks/Homework29/Homework29"
import Homework31 from "homeworks/Homework31/Homework32"

import RandomJoke from "components/RandomJoke/RandomJoke"
import CatFacts from "components/CatFacts/CatFacts"
import RandomUser from "components/RandomUser/RandomUser"

import Layout from "pages/UsersApp/Layout/Layout"
import Home from "pages/UsersApp/Home/Home"
import Users from "pages/UsersApp/Users/Users"

function App() {
  return (
    <BrowserRouter>
      {/* User App
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout> */}
      {/* <Homework29 /> */}
      {/* <Homework31 /> */}
      {/* <RandomJoke /> */}
      {/* <CatFacts /> */}
      <RandomUser />
    </BrowserRouter>
  )
}

export default App
