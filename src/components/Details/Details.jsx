import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

function Details(){

    const details = useSelector(store => store.details);
    const history = useHistory();
    const title = [];
    const description = [];

    details.map(detail =>{
        return(
            title.push(detail.title)
        );
    });

    details.map(detail =>{
        return(
            description.push(detail.description)
        );
    });

    function goToList(){
        history.push('/');
    };

    return(
        <div>
            <div>{title[0]}</div>
            <br />
            <div>{description[0]}</div>
            <br />
            <p>Genres:</p>
            {details.map(detail => {
                return <div>
                    {detail.name}
                    </div>
            })}
            <br />
            <button onClick={goToList}>Return to Movie List</button>
        </div>
    );
};

export default Details;