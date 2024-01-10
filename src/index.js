import React from "react";


// High Order Component (HOC) - A component (HOC) that renders another component
const Tracker = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is my tracker component</p>
            <WrappedComponent {...props}/>
        </div>
    );
}

export default Tracker;