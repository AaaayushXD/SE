import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage, TestPage } from "./pages";
import { CourseDetailPage } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route path="/sign-up" Component={SignUpPage} />
        <Route path="/" Component={HomePage} />
        <Route path="/course/:id" Component={CourseDetailPage} />
        <Route path="/test" Component={TestPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
