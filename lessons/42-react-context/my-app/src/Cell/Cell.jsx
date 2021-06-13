import { useState, useContext } from "react";
import ModalWindow from '../ModalWindow/ModalWindow';
import { themeContext } from '../ThemeContext/ThemeContext';
import { Link } from "react-router-dom";
import './Cell.css';

const Cell = (props) => {
    const [visible, setVisible] = useState(false);

    const { theme, toggleTheme } = useContext(themeContext);

    const toogleVisble = () => {
        setVisible((visible) => !visible)
    }

    return (
        <div className='Card'>
            <p className={'Title' + ' ' + theme}>{props.info.data.title}</p>
            <p className={'Text-body' + ' ' + theme}>{props.info.data.body}</p>
            <div className={'Text-footer' + ' ' + theme}>Author: 
                <button onClick={toogleVisble} className='Link'>
                    {props.info.author.name}
                </button>
                <br></br>
                <Link to={`/posts/${props.id}`} >Show details</Link>
            </div>
            {visible && <ModalWindow info={props.info} toogle={toogleVisble}/>}
        </div>
    )
};

export default Cell;