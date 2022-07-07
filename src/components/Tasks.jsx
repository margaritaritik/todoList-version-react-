import React from 'react';

const Tasks = function (props) {
    console.log(props);
    return (
        <div className="containerItem" >
            <label>
                <input key={'inputting'} type={"checkbox"} />
                <span>nov</span>
            </label>
        </div>
    );
};

export default Tasks;
