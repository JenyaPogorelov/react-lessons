const InputComponent = (props) => {
    return (
        <input
            placeholder='Ввведите текст сообщения'
            className='input'
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
            onKeyDown={({key}) => {if (key === 'Enter') {props.onKeyDown()}}}
        />
    )
}

export default InputComponent;