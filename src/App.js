//import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData]=useState([])
  useEffect(()=>{
    getCondiciones()
  },[])

  const getCondiciones= ()=>{
    const url= 'https://api.datos.gob.mx/v1/condiciones-atmosfericas'
    const response= axios(url).then((res)=>{
      console.log("Response:", res.data.results);
      var resData=res.data.results;
      setData(resData);

    }).catch()

  }


  return (
    <div className="App"  style={{width:"200px"}} >
     
     <table style={{width:"200px"}} >
            <tr>
              <th>ID</th>
              <th>cityId</th>
              <th>name</th>
              <th>state</th>
              <th>probabilityofprecip</th>
              <th>relativehumidity</th>
              <th>Lastreporttime formato (YYYY/MM/DD)</th>
              <th>LLUEVE SI se cumple = probabilityofprecip >60 || relativehumidity > 50</th>

            </tr>
              {
                data.map((item, index)=>{
                  return(
                    <tr key={index}>
                    <td>{item._id}</td>
                    <td>{item.cityid}</td>
                    <td>{item.name}</td>
                    <td>{item.state}</td>
                    <td>{item.probabilityofprecip}</td>
                    <td>{item.relativehumidity}</td>
                    <td>{item.lastreporttime}</td>
                    <td>{item.cityid}</td>
                    </tr>
                  )
                })
              }
           
    </table>
      
    </div>
  );
}

export default App;
