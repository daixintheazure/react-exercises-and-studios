import data from "./../data.json";
import {useState} from 'react';



export default function MyProjects(){

    const [index, setIndex] = useState(0);

    const list = data;
    const item = list[index];

    function handleClick() {
        if (index < data.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }
     
    return(
        <div>
            <button onClick={handleClick}>Next</button>
            <ul>
                <li>{item.build}</li>
                <li>{item.skill}</li>
                <li>{item.class}</li>
                <li>{item.acendency}</li>
            </ul>
        </div>
    );
}