import React, { useState } from "react";

function Formas(props) {
    const [pic, setPic] = useState("");

    function renderChildren() {
        return React.Children.map(props.children, (child, i) => {
            return React.cloneElement(child, {
                changePicOnParent: (pic) => {
                    setPic(pic);
                }
            })          
        })
    }
    // baseado em: https://mxstbr.blog/2017/02/react-children-deepdive/

    return (
        <div>
            {
                renderChildren()
            }                 
            <div>
                <img src={pic} alt="GRAVURA" height={300} />
            </div>            
        </div>
    )
}

export default Formas;