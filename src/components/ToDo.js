import './ToDo.css';

const ToDo = (props) => {
    return (
        <div className="ui segment">
            {
                props.listItems.map((item, index) => {
                    return(
                        <div key={index} className="">
                            <div className="ui grid">
                                <div className="left floated five wide column">
                                    {/* <div className="ui checkbox">
                                        <input type="checkbox" />
                                        <label>
                                            {item.isCompleted === true ? <del>{item.todo}</del> : item.todo}
                                        </label>
                                    </div> */}
                                </div>
                                <div className="right floated five wide column">
                                    <i className="times circle outline icon"></i>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => ({

})

export default ToDo;