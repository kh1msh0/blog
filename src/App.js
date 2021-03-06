import React, { useEffect }from "react";
import "./css/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Blog } from "./components/Blog";
import Guide from "./components/Guide/Guide";
import InnerGuide from "./components/InnerGuide/InnerGuide";
import { InnerPost, InnerGuidePost } from "./components/InnerPost";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Search } from "./components/search";
import { useStore } from "outstated";
import { FetchStrings } from "./components/store";
import Loading from "./components/Loading";

function App() {

  
  const { fetchedStrings, isLoading } = useStore(FetchStrings);
  useEffect(() => {
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, [])
  let content = <Loading />;

  if (fetchedStrings && !isLoading) {
    content = (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Blog} />
            {/* <Route path="/guide/:id" exact component={Guide} /> */}
            {/* <Route path="/guides/catId/:categori" exact component={InnerGuide} /> */}
            <Route path="/blog/:card" component={InnerPost} />
            {/* <Route path="/guides/:card" component={InnerGuidePost} /> */}
            <Route path="/search/:search" component={Search} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
  return content;
}

export default App;
