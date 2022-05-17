import React, {useEffect, useState} from "react";
import './Modal.css';

function Modal(){

    const [display, setDisplay] = useState("none");

    return (
        <div>
            <button type="button" onClick={()=>{
                console.log("oi");
                const displayHeight = document.body.clientHeight;
                
                const TopScroll = window.pageYOffset || document.documentElement.scrollTop;
                const LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;
                window.onscroll = ()=>{
                    window.scrollTo(LeftScroll, TopScroll);
                };


                setDisplay("flex");
            }}>logout</button>
            <div className="modalBackground" style={{display: display}} onClick={(e)=>{
                console.log("tchau");
                console.log(e.target);
                if(e.target.id != "modalMainWindow"){
                    setDisplay("none");
                    window.onscroll = ()=>{};
                }

            }}>
                <div className="modalWindow" id="modalMainWindow">
                    <p>Você realmente quer sair???</p>
                </div>
            </div>
        </div>

    )
}

export default Modal;