const ToDo = (props) => {
    return (
        <ul>
            {
                props.listItems.map((item) => { 
                    return <li>
                        {item}
                    </li>
                })
            }
        </ul>
    );
}

export default ToDo;