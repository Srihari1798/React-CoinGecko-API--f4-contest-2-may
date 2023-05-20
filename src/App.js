
import React, { useEffect, useState } from 'react';
import './App.css';
import CoinGecko from './CoinGecko';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      );
      const actualData = await res.json();
      console.log(actualData);
      setData(actualData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
   
    <div className="table-responsive">
      <table className="table  table-success table-striped-columns">
        <thead className="table-dark">
    
       {/* <thead className='thead'> */}
          <tr>
            <th>NAME</th>
            <th>ID</th>
            <th>IMAGE</th>
            <th>SYMBOL</th>
            <th>CURRENT_PRICE</th>
            <th>TOTAL_VOLUME</th>
          </tr>
        </thead>
        <tbody className='tbody'>
         
          {data.map(item => (
            <CoinGecko key={item.id} data={item} />
            
          ))}
        
         
        </tbody>
      </table>
    </div>
  );
}

export default App;
