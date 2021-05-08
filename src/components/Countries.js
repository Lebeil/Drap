import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from "./Card";

const Countries = () => {
    const [data, setData] = useState([])
    const [sortedData, setSortedData] = useState([])
    const [playOnce, setPlayOne] = useState(true)

    useEffect(()=> {
        if (playOnce){
            axios
                .get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
                .then((res) => {
                    setData(res.data);
                    setPlayOne(false);
                });
        }


        const sortedCountry = ()=> {
            const objCountry = Object.keys(data).map((i) => data[i]);
            const sortedArray = objCountry.sort((a,b)=> {
                return b.population - a.population
            });
            sortedArray.length = 30;
            setSortedData(sortedArray)
        }
        sortedCountry();

    }, [data, playOnce]);


    return (
        <div className="countries">
            <ul className="countries-list">
                {sortedData.map((country) => (
                    <Card country={country} key={country.name}/>
                ))}
            </ul>

        </div>
    );
};

export default Countries;