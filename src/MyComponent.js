const MyComponent = (props) => {
    console.log('props', props);
    return <div className="mainInput">{props.textToShow}</div>;

}

export default MyComponent;