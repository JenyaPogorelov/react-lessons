const MessageListComponent = (props) => {
    return (
        <div>
            <div>{props.message.author}</div>
            <div>{props.message.textMessage}</div>
        </div>

    )
}

export default MessageListComponent;