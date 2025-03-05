import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route path="/sign-up" Component={SignUpPage} />
        <Route path="/" Component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
