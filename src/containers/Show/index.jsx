
//show the result of adding form
import * as React from 'react'
import axios from 'axios'

export default function () {
    let result = [];
    const retrieveData = () => {
         axios.get('/api/show').then(data => {
            
            data.data.results.map(ele => {
                result.push(ele);
            })
            console.log(result)
            return (
                <div>
                    1111
                    <ul>
                        {result.map((ele,ind) => {
                            return (
                                <li key={ind}>
                                    <h2>{ele.title}</h2>
                                    <br/>
                                    {ele.content}
                                </li>
        
                            )
                        })}
                    </ul>
                </div>
            )
        })
        
    }
    return retrieveData();
    

}