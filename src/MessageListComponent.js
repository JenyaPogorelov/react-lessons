const MessageListComponent = (props) => {
    return (
        <div className='messageBox'>
            <div className='messageBox__author' >{props.message.author}</div>
            <div className='messageBox__message' >{props.message.textMessage}</div>
        </div>

    )
}

export default MessageListComponent;