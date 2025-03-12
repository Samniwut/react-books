import React from "react";
import { Navbar } from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Slidebar from "./components/Slidebar";
import Flashsale from "./components/Flashsale";
import Footer from "./components/Footer";
import Book_crad from "./components/Book_crad";

const App = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Slidebar />
      <Flashsale />
      <Book_crad />
      <Footer />
    </div>
  );
};

export default App;
