import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

// const User =({match)=>{
//     return <h1>User {match.params.name} Page</h1>
// }

const User = () => {
    const { name } = useParams();
    const location = useLocation();
    const history = useHistory();

    return (
        <>
            <h1>hello {name} ji</h1>
            <h4>my current location is {location.pathname}</h4>
            {location.pathname === `/user/naman` ? <button onClick = { () => history.goBack() }>Go back</button> : null}
        </>
    )
}


export default User; 