const InputAuthorComponent = (props) => {
    return (
        <input
            placeholder='Ввведите автора'
            className='author'
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
            onKeyDown={({key}) => {if (key === 'Enter') {props.onKeyDown()}}}
        />
    )
}

export default InputAuthorComponent;