import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const base_url = process.env.REACT_APP_BASE_URL;

  const callApi = () => {
    axios.get(`${base_url}`).then((res) => console.log(res.data));
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <a href={`${base_url}/login`}>로그인하러가기</a>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
