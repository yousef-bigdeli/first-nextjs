import React from "react";
import Template from './components/Template';
import Slider from './components/Slider';
import styles from './styles/Index.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight,  faAngleLeft } from "@fortawesome/free-solid-svg-icons";

//home page on site
function Index() {
  return (
      <>
        <Template>
            {/* Slider component*/}
            <Slider />
            {/*  */}
        </Template>
      </>
  );
};

export default Index;
