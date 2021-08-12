const MyComponent = (props) => {
    console.log('props', props);
    return <div>{props.textToShow}</div>;

}

export default MyComponent;