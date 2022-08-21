import React, {useState} from 'react';
import styles from '../styles/styleForTodo.module.css';
import ButtonDelete from "./button/ButtonDelete";

const Tasks = function ({name,id,completed,checkedCompleted,deleteTodo}) {
    const [checked,setChecked]=useState(completed);
    const [isHovering,setIsHovering]=useState(false);
    const [hoveringDeleting,setHoveringDeleting]=useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOverBlock = () => {
        setHoveringDeleting(true);
    };
    const handleMouseOutBlock = () => {
        setHoveringDeleting(false);

    };


    const handleMouseOut = () => {
        if(hoveringDeleting===false){
            console.log( isHovering);
            console.log(hoveringDeleting);
            setIsHovering(true);
        }
        else {
            console.log(isHovering);
            console.log(hoveringDeleting);
            setIsHovering(false);
        }
    };

    const ChangeCompleted = ()=>{
        setChecked(!checked);
        completed=!checked;
        checkedCompleted(id,name,completed);
    }
    const ButtonDeleteClick=event=>{
        deleteTodo(id);
    }

    return (
        <div  className={styles.containerTodo}>
            <div className={styles.divTodo} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <label key={id} className={styles.textTodo}>
                    <input key={'inputting'} type={"checkbox"} checked={checked} onChange={ChangeCompleted} />
                    <span >{name}</span>
                </label>
                {isHovering&&(
                    <div className={styles.targeting} onMouseOver={handleMouseOverBlock} onMouseOut={handleMouseOutBlock }>
                        <ButtonDelete key="btnDelete" onClick={ButtonDeleteClick}  >X</ButtonDelete>
                        <div className={styles.date_time}>дата и время</div>
                    </div>
                )}
            </div>

        </div>

    );
};

export default Tasks;
