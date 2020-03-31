import React, {useState, useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import Board from '../Board/Board';
import Card from '../Card/Card';
import axios from 'axios';

import './Dashboard.css';
import '../../Theme/Theme.css';

export default function Dashboard(props) {
    
    const [data, setData] = useState(undefined);

    useEffect(()=>{
        fetchData();
        console.log(data);
    }, []);

    function fetchData(){
        axios.get(props.paths.experiences.read, props.config)
            .then((res)=>{
                setData(res.data);
            })
            .catch((error)=> {
                console.log(error);
            })
    }

    function experincesCard(){
        if(data){
            return  <Card
                        header="Experiences"
                        icon={<i className="fas fa-bars fa-2x off-white-txt"></i>}
                        stat={data.length}
                        label="saved exps."
                        menu={<i className="fas fa-ellipsis-v fa-xs"></i>}
                        link="/experiences"
                    ></Card>
        }else{
            return  <Card
                        header="Experiences"
                        icon={<i className="fas fa-bars fa-2x off-white-txt"></i>}
                        stat="0"
                        label="Nothing found"
                        menu={<i className="fas fa-ellipsis-v fa-xs"></i>}
                        link="/experiences"
                    ></Card>
        }
    }

    return (
        <div className="dash-container">
            <Navbar/>
            <Board 
                experiences={experincesCard()}
            ></Board>
        </div>
    )
}

