import React, {useEffect, useState} from "react";
import "./PageLayout.css";
import OptionsMenu from '../Options';
import { Routes, Route, Link } from "react-router-dom";

function PageLayout (props) {

    return(
        <article className="mainBody">
      
        <header className="pageHeader">
            <img src={props.logo} className="mainTitle" />
            {props.header}
        </header>
        
        <main>

          <Routes>

            <Route path="/" element={props.main} />

            <Route path="options" element={<OptionsMenu />} />

          </Routes>

  
        </main>
  
      </article>
    )

}

export default PageLayout;