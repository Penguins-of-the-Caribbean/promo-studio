import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import fetchData from '../../utils/fetch/FetchData'
import './PromoBuilder.css'

export default function PromoBuilder(props) {

    const [markets, setMarkets] = useState('');
    const [ships, setShips] = useState('');

    useEffect(()=> {
        if(markets === '' || ships === ''){
            fetchData().fetchMarketData.read(setMarkets);
            fetchData().fetchShipData.read(setShips);
        }
        
    }, [markets, setMarkets, ships, setShips]);

    const createOptionsList = (data, defaultOptionText)=> {
        if(data && data.length  > 0){
            let optionsArray = [];
            optionsArray.push(<option key={0} default>{defaultOptionText}</option>);

            let mappedOptionsArray = data.map((data, i)=>{
                return <option key={i+1} value={data.code}>{`${data.name}, (${data.code})`}</option>
            })

            return optionsArray.concat(mappedOptionsArray);
        }
    }

    return (
        <div className='promo-builder-container'>
            <Navbar/>
            <div className='promo-builder-wrapper'>
                <div className='promo-action-bar'>
                    
                </div>
                <div className='promo-builder-form'>
                    <input type="text" name="name" placeholder='Promo name'/>
                    <select>
                        <option value="Monthly">Monthly</option>
                        <option value="Flash">Flash</option>
                    </select>
                    <select>
                        {createOptionsList(markets, 'Select a market')}
                    </select>
                    <input type="text" name="value" placeholder='Promo value'/>
                    <select>
                        {createOptionsList(ships, 'Select a ship')}
                    </select>
                </div>
            </div>
        </div>
    )
}
