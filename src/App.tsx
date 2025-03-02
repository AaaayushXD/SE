import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, SignUpPage } from "./pages";
import { CourseComponent } from "./components/course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route path="/sign-up" Component={SignUpPage} />
        <Route path="/" Component={CourseComponent} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
