import React, {useState} from 'react';
import styles from '../styles/styleForTodo.module.css';
import ButtonDelete from "./button/ButtonDelete";

const Tasks = function ({name,id,completed,checkedCompleted,deleteTodo}) {
    const [checked,setChecked]=useState(completed);
    const [isHovering,setIsHovering]=useState(false);
    const [hoveringDeleting,getHoveringDeleting]=useState({typeHovering:false, typeHoveringBlock:false});
    const handleMouseOver = () => {
        // if(hoveringDeleting.typeHovering==false && hoveringDeleting.typeHoveringBlock==false)
        // {
            hoveringDeleting.typeHovering=true;
            // hoveringDeleting.typeHoveringBlock=false;
        // }



    };
    const handleMouseOverBlock = () => {
        if(hoveringDeleting.typeHovering==true && hoveringDeleting.typeHoveringBlock==false)
        {
            hoveringDeleting.typeHoveringBlock=true;
            // hoveringDeleting.typeHoveringBlock=false;
        }
    };

    const handleMouseOut = () => {
        // setIsHovering(false);
        if(hoveringDeleting.typeHovering==true && hoveringDeleting.typeHoveringBlock==true)
        {
            hoveringDeleting.typeHoveringBlock=false;
            hoveringDeleting.typeHovering=false;
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
                {hoveringDeleting.typeHovering===true&&(
                    <div className={styles.targeting} onMouseOver={handleMouseOverBlock} onMouseOut={handleMouseOut}>
                        <ButtonDelete key="btnDelete" onClick={ButtonDeleteClick}  >X</ButtonDelete>
                        <div className={styles.date_time}>дата и время</div>
                    </div>
                )}
            </div>

        </div>

    );
};

export default Tasks;
