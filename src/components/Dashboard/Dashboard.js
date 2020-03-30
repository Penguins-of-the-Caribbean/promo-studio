import React, {useState, useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

import '../../styles/Card/card.css';
import './Dashboard.css';

export default function Dashboard(props) {
    
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
        <div className="dash-container">
            <Navbar/>
            <div className="container">
                {/* <ul className="card">
                    {data !== undefined ? buildExpList() : 'No experiences found'}
                </ul> */}
            </div>
        </div>
    )
}

