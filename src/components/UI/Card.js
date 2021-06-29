import React from "react";

const Card = (props) => {
    const classes = "card h-100 " + props.className;

    return (
        <>
            <div className="card-group">
                <div className={classes}>{props.children}</div>
            </div>
        </>
    );
};
export default Card;
