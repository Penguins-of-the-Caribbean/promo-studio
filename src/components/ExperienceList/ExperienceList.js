import React, {useContext, useEffect, useState} from 'react'
import Navbar from '../Navbar/Navbar';
import Item from '../Item/Item';
import { DataContext } from '../../Store';
import '../../Theme/Theme.css';

export default function ExperienceList(props) {

    const [data, setData] = useContext(DataContext);

    console.log(data);

    function buildExpList(){
        console.log('from list item', data.experiences);
        if(data.ExperienceList){
            return data.experiences.map((exp, i)=>{
                return  <Item 
                            key={i}
                            name={exp.name}
                            status={exp.status}
                            author={exp.author}
                            dateCreated={exp.dateCreated}
                            dateModified={exp.dateModified}
                            edit={<i class="fas fa-pen-square purple-txt"></i>}
                            delte={<i className="fas fa-minus-circle purple-txt"></i>} 
                        ></Item>
            })
        }else{
            return  <Item 
                        name="No experiences found"
                    ></Item>
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="card">
                    {buildExpList()}
                </div>
            </div>
        </div>
    )
}
