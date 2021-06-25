import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Start = (props) => {
    return (<LoadHeader />);
};

const LoadHeader = (props) => {
    return (
        <div>
            <div>Header</div>
            <Link to="/posts">Posts</Link>
        </div>
    );
};

export default Start;
