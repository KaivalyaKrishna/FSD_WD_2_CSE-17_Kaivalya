function StudentCard (props) {
    return (
       <div>
            <h2> Name:  {props.name} </h2>
            <p> Branch: {props.branch} </p>
        </div>

    );
}

export default StudentCard;