import React, {useState, useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

export default function Dashboard(props) {

    // function getData(){
    //     if(props.expData === undefined){
    //         props.getExpData();
    //     }
    // }
    
    // getData();
    // console.log(props.expData);

    // function experienceListItems(){
    //     return props.expData ? props.expData.map((exp, i)=> {
    //         return <li key={i}>{exp.name}</li>
    //     }):
    //     <li>No experiences found</li>
    // }

    const [data, setData] = useState(undefined);

    useEffect(()=>{
        fetchExperienceData();
    }, []);

    function fetchExperienceData(){
        axios.get('http://localhost:4000/experience/read', props.config)
            .then((res)=>{
                setData(res.data);
            }) 
            .catch((error)=>{
                console.log(error);
            })
    }

    function buildExpList(){
        return data.map((exp, i)=>{
            return <li key={i}>{exp.name}</li>
        });
    }


    return (
        <div>
            <Navbar/>
            <h1>DASHBOARD</h1>
            <ul>{data !== undefined ? buildExpList() : 'No experiences found'}</ul>
        </div>
    )
}

