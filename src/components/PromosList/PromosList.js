import React, {useContext, useEffect} from 'react';
import fetchData from "../../utils/fetch/FetchData";
import Navbar from '../Navbar/Navbar';
import ActionBar from '../ActionBar/ActionBar';
import Item from '../Item/Item';
import { DataContext } from '../../Store';
import "./PromosList.css";
import '../../Theme/Theme.css';

export default function PromosList(props) {

    const [data, setData] = useContext(DataContext)

    useEffect(()=>{
        if(!data){
            fetchData().fetchPromoData.read(setData);
        }
    }, [data, setData]);

    const buildPromosList = ()=> {
        if(data.length > 0){
            return data.promos.map((promo, i)=>{
                return <Item
                            key={i}
                            id={promo._id}
                            name={promo.name}
                            status={promo.status}
                            author={promo.author.name}
                            dateCreated={promo.dateCreated}
                            dateModified={promo.dateModified}
                            edit={<i className="fas fa-pen-square purple-txt"></i>}
                            link="promos"
                        ></Item>
            })
        }else{
            return  <div>No promos found</div>
        }
    }

    return (
        <div className="promo-container">
            <Navbar></Navbar>
            <div className="promo-wrapper">
                <ActionBar link={"/promos/builder"}></ActionBar>
                <div className="card promo-list">
                    {buildPromosList()}
                </div>
            </div>
        </div>
    )
}
