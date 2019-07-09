import React from "react";
import "./css/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Blog } from "./components/Blog";
import Guide from "./components/Guide/Guide";
import InnerGuide from "./components/InnerGuide/InnerGuide";
import { InnerPost, InnerGuidePost } from "./components/InnerPost";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Search } from './components/search'
import { useStore } from "outstated";
import { FetchStrings } from "./components/store";

function App() {
  const { fetchedStrings, isLoading } = useStore(FetchStrings);

  let content = <div className="loading" >Loading Page....</div>;

  if (fetchedStrings && !isLoading) {
    content = (
      <Router> 
        <div>
          <Header  />
          <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/guide/:id" exact component={Guide} />
            <Route path="/guides/catId/:categori" exact component={InnerGuide} />
            <Route path="/blog/:card" component={InnerPost} />
            <Route path="/guides/:card" component={InnerGuidePost} />
            <Route path="/search/:search" component={Search} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  } 
  // else if (!fetchedStrings && !isLoading) {
  //   content = <div>ar itvirteba</div>
  // }
  return content;
}

export default App;
