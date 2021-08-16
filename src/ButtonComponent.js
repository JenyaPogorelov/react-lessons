const ButtonComponent = (props) => {
    return (
        <button
            onClick={() => {props.onClick()}}
        >Отправить</button>
    )
}

export default ButtonComponent;