import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endpoints = ["tv", "movie"];
    let allGenres = {};

    endpoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);
    // console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGenres(allGenres));
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:mediaType/:id" element={<Details />} />
          <Route exact path="/search/:query" element={<SearchResult />} />
          <Route exact path="/explore/:mediaType" element={<Explore />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
