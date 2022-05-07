import React, {useEffect, useState} from "react";
import "./PageLayout.css";

function PageLayout (props) {

    return(
        <article className="mainBody">
      
        <header className="pageHeader">
            {props.header}
        </header>
        
        <main>
  
          {props.main}
  
        </main>
  
      </article>
    )

}

export default PageLayout;