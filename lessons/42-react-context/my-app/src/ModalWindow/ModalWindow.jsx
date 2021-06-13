import './ModalWindow.css';

const ModalWindow = (props) => {
    return (
        <div className='ModalWindow-overlay'>
            <div className='ModalWindow'>
                <p className='Title Title-ModalWindow'>{props.info.author.name}</p>
                <p className='Text-body Text-body-ModalWindow'>Address: 
                    {props.info.author.address.city},  
                    {props.info.author.address.street},  
                    {props.info.author.address.suite}
                </p>
                <p className='Text-body Text-body-ModalWindow Link-ModalWindow'><a href="null" className='Link'>Email: {props.info.author.email}</a></p>
                <button className='Button-ModalWindow' onClick={props.toogle}>&#215;</button>
            </div>
        </div>
    )
};

export default ModalWindow;