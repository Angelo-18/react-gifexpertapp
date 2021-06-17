import React from 'react';
import { useState } from 'react';
import { AddElement } from './AddElement';

const Resto01 = ()=>{
    const [categories, setCategories] = useState(['One Punch','Samurai X', 'Dragon Ball']);
    
    return (
        <>
        <h2>GifExpertApp</h2>
        <AddElement setCategories={setCategories}/>
        <hr/>
        <ol>
            {
                categories.map(category =>{
                    return <li key = {category}>{category}</li>
                })
            }
        </ol>
        </>
    );
}
export default Resto01;