import React, { useState, useEffect } from "react";
import GmailSubscribe from "./GmailSubscribe";
import JoinComunity from "./JoinComunity";
import { Row } from "react-bootstrap";

import { useStore } from "outstated";
import { FetchStrings } from "../store";

const Subscribe = props => {
  const { fetchedStrings } = useStore(FetchStrings);
  const [scrolled, setScrolled] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (window.innerWidth >998) {
      window.addEventListener("scroll", () => {
        var testDiv = document.getElementById("testi");

        if (testDiv) {
          var isTop = window.scrollY < testDiv.offsetTop - 60;
        } else {
          isTop = true;
        }

        if (isTop !== true) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }

        if (
          document.body.scrollHeight - window.scrollY < 1284+274+40 &&
          props.innerpostsScroll
        ) {
          setIsEnd(true);
        } else {
          setIsEnd(false);
        }
      });
    }

    return () => {};
  }, []);

  const style = {
    position: "fixed",
    top: "60px",
    flexDirection: "column"
  };

  let content = (
    <div className={props.innerpostsScroll && isEnd ? "subscribe" : ""}>
      <Row
        className="scroll"
        style={props.innerpostsScroll && scrolled && !isEnd ? style : {}}
      >
        <GmailSubscribe
          className="test"
          data={fetchedStrings.data.subscribeBanner}
        />
        <JoinComunity data={fetchedStrings.data.partnerBanner} />
      </Row>
    </div>
  );
  return content;
};
export default Subscribe;
