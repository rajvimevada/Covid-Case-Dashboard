import React, { useEffect, useState } from 'react'
import './App.css'
import Box from './Box'

const Covid=()=> {
    const [data, setData]= useState([]);
    const getCovidData=async ()=>{
        try{
            const res= await fetch('https://data.covid19india.org/data.json')
            const actualData= await res.json();
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0])

        }catch(err){
            console.log({err})
        }
    }

   useEffect(()=>{
    getCovidData()
   }, []);

  return (
    <>
      <div className='mainBody'>
      <h3>LIVE</h3>
      <h1>COVID-19 CORONA VIRUS TRACKER</h1>
        <div className='box'>
        <Box t1='OUR' t2='COUNTRY' t3='INDIA' bg='lblue'/>
        <Box t1='TOTAL' t2='RECOVERED' t3={data.recovered} bg='green'/>
        <Box t1='TOTAL' t2='CONFIRMED' t3={data.confirmed} bg='yellow'/>
        <Box t1='TOTAL' t2='DEATH' t3={data.deaths} bg='orange'/>
        <Box t1='TOTAL' t2='ACTIVE' t3={data.active} bg='dblue'/>
        <Box t1='LAST' t2='UPDATED' t3={data.lastupdatedtime} bg='brown'/>
        <br/>
        <br/>

        <br/>

        
        

        </div>

      </div>
    </>
  )
}

export default Covid
