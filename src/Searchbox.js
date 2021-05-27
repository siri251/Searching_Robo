import React from 'react';

const Searchbox=({searchchange})=>{
    return(
        <input type="Search" placeholder="search here" onChange={searchchange} />
    )
}

export default Searchbox;