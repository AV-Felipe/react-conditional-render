import React, {useEffect, useState} from "react";
import './Options.css';

function OptionsMenu () {

    return (
        <div className="optionMenuContainer">
            <button type="button" onClick={()=>{console.log("oi querida")}}>editar</button>
            <button type="button" onClick={()=>{console.log("chau querida")}}>cantar</button>
            <button type="button" onClick={()=>{console.log("tumbalacatumbatumbata")}}>tricotar</button>
        </div>
    )
}

export default OptionsMenu;