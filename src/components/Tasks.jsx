import React from 'react';

const Tasks = function (props) {
    return (
        <div className="containerItem" >
            <label>
                <input key={'inputting'} type={"checkbox"} />
                <span>props.name</span>
            </label>
        </div>
    );
};

export default Tasks;