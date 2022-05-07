import React, {useEffect, useState} from "react";
import "./PageLayout.css";

function PageLayout (props) {

    return(
        <article className="mainBody">
      
        <header className="pageHeader">
            <img src={props.logo} className="mainTitle" />
            {props.header}
        </header>
        
        <main>
  
          {props.main}
  
        </main>
  
      </article>
    )

}

export default PageLayout;