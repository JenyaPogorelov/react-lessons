const ButtonComponent = (props) => {
    return (
        <button
            className='inputWrapper__button'
            onClick={() => {props.onClick()}}
        >Отправить</button>
    )
}

export default ButtonComponent;