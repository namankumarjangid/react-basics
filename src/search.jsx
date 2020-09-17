import React from 'react';
import { useState } from 'react';
import Sresult from './searchresult';

const Search = () => {
    const [img, setImg] = useState("");
    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);
    };

    return (
        <>
            <input className="search"
                type="text"
                value={img}
                onChange={inputEvent}
                placeholder="search anything" />
            {img === "" ? null : <Sresult name={img} />}
        </>
    )
}

export default Search;