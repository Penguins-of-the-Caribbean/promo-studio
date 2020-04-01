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
    }, []);

    function fetchData(){
        axios.all([
            axios.get(props.paths.offers.read, props.config),
            axios.get(props.paths.experiences.read, props.config),
            axios.get(props.paths.components.read, props.config),
            axios.get(props.paths.markets.read, props.config),
            axios.get(props.paths.ports.read, props.config),
            axios.get(props.paths.ships.read, props.config)
        ])
        .then(axios.spread((offers, experiences, components, markets, ports, ships)=>{
            setData({
                offers: offers.data,
                experiences: experiences.data,
                components: components.data,
                markets: markets.data,
                ports: ports.data,
                ships: ships.data
            })
        }))
        .catch((error)=> {
            console.log(error);
        });
    }

    function offersCard(){
        if(data && data.offers){
            return <Card
                        header="Offers"
                        icon={<i className="fab fa-buffer fa-2x off-white-txt"></i>}
                        stat={data.offers.length}
                        label="saved offers"
                        menu={<i className="fas fa-ellipsis-v fa-xs"></i>}
                        link="/experiences"
                    ></Card>
        }else{
            return  <Card
                        header="Offers"
                        icon={<i className="fab fa-buffer fa-2x off-white-txt"></i>}
                        stat="0"
                        label="Nothing found"
                        menu={<i className="fas fa-ellipsis-v fa-xs"></i>}
                        link="/experiences"
                    ></Card>
        }
    }

    function experincesCard(){
        if(data && data.experiences.length){
            return  <Card
                        header="Experiences"
                        icon={<i className="fas fa-bars fa-2x off-white-txt"></i>}
                        stat={data.experiences.length}
                        label="saved experiences"
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

    function termsCard(){
        if(data && data.terms.length){
            return <Card
                        header="Terms &amp; Conditions"
                        icon={<i className="fas fa-asterisk fa-2x off-white-txt"></i>}
                        stat={data.terms.length}
                        label="saved T's &amp; C's"
                        menu={<i className="fas fa-ellipsis-v fa-xs"></i>}
                        link="/experiences"
                    ></Card>
        }else{
            return  <Card
                        header="Terms &amp; Conditions"
                        icon={<i className="fas fa-asterisk fa-2x off-white-txt"></i>}
                        stat="0"
                        label="Nothing found"
                        menu={<i className="fas fa-ellipsis-v fa-xs"></i>}
                        link="/experiences"
                    ></Card>
        }
    }

    function componentsCard(){
        if(data && data.components.length){
            return  <Card
                        header="Components"
                        icon={<i className="fas fa-code fa-2x off-white-txt"></i>}
                        stat={data.components.length}
                        label="saved components"
                        menu={<i className="fas fa-ellipsis-v fa-xs"></i>}
                        link="/experiences"
                    ></Card>
        }else{
            return  <Card
                        header="Components"
                        icon={<i className="fas fa-code fa-2x off-white-txt"></i>}
                        stat="0"
                        label="Nothing found"
                        menu={<i className="fas fa-ellipsis-v fa-xs"></i>}
                        link="/experiences"
                    ></Card>
        }
    }

    function marketsCard(){
        if(data && data.markets.length){
            return  <Card
                        header="Markets"
                        icon={<i className="fas fa-globe fa-2x off-white-txt"></i>}
                        stat={data.markets.length}
                        label="saved components"
                        menu={<i className="fas fa-ellipsis-v fa-xs"></i>}
                        link="/experiences"
                    ></Card>
        }else{
            return  <Card
                        header="Markets"
                        icon={<i className="fas fa-globe fa-2x off-white-txt"></i>}
                        stat="0"
                        label="Nothing found"
                        menu={<i className="fas fa-ellipsis-v fa-xs"></i>}
                        link="/experiences"
                    ></Card>
        }
    }

    function portsCard(){
        if(data && data.ports.length){
            return  <Card
                        header="Ports"
                        icon={<i className="fas fa-anchor fa-2x off-white-txt"></i>}
                        stat={data.ports.length}
                        label="saved components"
                        menu={<i className="fas fa-ellipsis-v fa-xs"></i>}
                        link="/experiences"
                    ></Card>
        }else{
            return  <Card
                        header="Ports"
                        icon={<i className="fas fa-anchor fa-2x off-white-txt"></i>}
                        stat="0"
                        label="Nothing found"
                        menu={<i className="fas fa-ellipsis-v fa-xs"></i>}
                        link="/experiences"
                    ></Card>
        }
    }

    function shipsCard(){
        if(data && data.ships.length){
            return  <Card
                        header="Ships"
                        icon={<i className="fas fa-ship fa-2x off-white-txt"></i>}
                        stat={data.ships.length}
                        label="saved components"
                        menu={<i className="fas fa-ellipsis-v fa-xs"></i>}
                        link="/experiences"
                    ></Card>
        }else{
            return  <Card
                        header="Ships"
                        icon={<i className="fas fa-ship fa-2x off-white-txt"></i>}
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
                offers={offersCard()}
                experiences={experincesCard()}
                components={componentsCard()}
                markets={marketsCard()}
                ports={portsCard()}
                ships={shipsCard()}
            ></Board>
        </div>
    )
}

