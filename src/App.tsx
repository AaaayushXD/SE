import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Course, HomePage, LoginPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        {/* <Route path="/sign-up" Component={SignUpPage} /> */}
        <Route path="/" Component={HomePage} />
        <Route path="/course/:id" Component={Course} />,
      </Routes>
    </BrowserRouter>
  );
}

export default App;
