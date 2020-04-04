import React, {useContext, useEffect, useState} from 'react'
import fetchData from '../../utils/fetch/FetchData';
import Navbar from '../Navbar/Navbar';
import ActionBar from '../ActionBar/ActionBar';
import Item from '../Item/Item';
import { DataContext } from '../../Store';
import './ExperienceList.css'
import '../../Theme/Theme.css';

export default function ExperienceList(props) {

    const [data, setData] = useContext(DataContext);

    console.log(data);

    useEffect(()=>{
        if(!data){
            fetchData().fetchExperienceData.read(setData);
        }
    },[])

    function buildExpList(){
        if(data && data.experiences){
            return data.experiences.map((exp, i)=>{
                return  <Item 
                            key={i}
                            id={exp._id}
                            name={exp.name}
                            status={exp.status}
                            author={exp.author.name}
                            dateCreated={exp.dateCreated}
                            dateModified={exp.dateModified}
                            edit={<i className="fas fa-pen-square purple-txt"></i>}
                        ></Item>
            })
        }else{
            return  <Item 
                        name="No experiences found"
                    ></Item>
        }
    }

    return (
        <div className="exp-container">
            <Navbar></Navbar>
            <div className="exp-wrapper">
                <ActionBar link={"/experiences/builder"}></ActionBar>
                <div className="card exp-list">
                    {buildExpList()}
                </div>
            </div>
        </div>
    )
}
