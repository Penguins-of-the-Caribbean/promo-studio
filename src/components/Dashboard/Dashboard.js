import React, {useContext, useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import Board from '../Board/Board';
import Card from '../Card/Card';
import {DataContext} from '../../Store';
import fetchData from '../../utils/fetch/FetchData';

import './Dashboard.css';
import '../../Theme/Theme.css';

export default function Dashboard(props) {
    
    const [data, setData] = useContext(DataContext);

    useEffect(()=>{
        if( !data.components  || 
            !data.experiences || 
            !data.offers      ||
            !data.markets     || 
            !data.ships       || 
            !data.ports       ||
            !data.terms
        ){
            fetchData().fetchAllData(setData);
        }
    }, [data.components, data.experiences, data.offers, data.markets, data.ships, data.ports, data.terms, setData]);

    function offersCard(){
        if(data && data.offers && data.offers.length){
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
        if(data && data.experiences && data.experiences.length){
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
        if(data && data.terms  && data.terms.length){
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
        if(data && data.components  && data.components.length){
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
        if(data && data.markets && data.markets.length){
            return  <Card
                        header="Markets"
                        icon={<i className="fas fa-globe fa-2x off-white-txt"></i>}
                        stat={data.markets.length}
                        label="saved markets"
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
        if(data && data.ports && data.ports.length){
            return  <Card
                        header="Ports"
                        icon={<i className="fas fa-anchor fa-2x off-white-txt"></i>}
                        stat={data.ports.length}
                        label="saved ports"
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
        if(data && data.ships && data.ships.length){
            return  <Card
                        header="Ships"
                        icon={<i className="fas fa-ship fa-2x off-white-txt"></i>}
                        stat={data.ships.length}
                        label="saved ships"
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
                terms={termsCard()}
            ></Board>
        </div>
    )
}

