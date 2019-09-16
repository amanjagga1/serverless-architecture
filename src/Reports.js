import React, { useState, useEffect} from 'react'
import axios from 'axios';
import BarChartCompanyWise from './charts/BarChartCompanyWise.js';
import LineChartRevenue from './charts/LineChart';
import PieChartSetup from './charts/PieChart';
const Reports = (props) => {
  const [revenues, setRevenues] = useState();
  const [monthWiseRevenues, setMonthWiseRevenues] = useState();
  const [companyWiseRevenues, setCompanyWiseRevenues] = useState();
  const [countryWiseRevenues, setCountryWiseRevenues] = useState({});
  const { getToken } = props;
  
  useEffect(() => {
    getToken().then((token) => {
      axios.get('https://mega-ca516.firebaseio.com/revenues.json',
        { params: {
          auth: token
        }
      })
      .then((res) => {
        const data = res.data;
        setCompanyWiseRevenues(data.map((item) => {
          return {
            name: `${item.Company} ${item.Country}`,
            Company: item.TotalRevenue
          }
        }))
        setMonthWiseRevenues(data.map((item) => {
          return {
            name: `${item.Company} ${item.Country}`,
            ...item.MonthlyRevenues
          }
        }))
        const countryWise = data.reduce((countryWise, item) => {
          const mItem = {
            name: item.Company,
            value: item.TotalRevenue
          }
          countryWise[item.Country] ? countryWise[item.Country].push(mItem) : countryWise[item.Country] = [mItem]
          return countryWise;
        }, {})
        setCountryWiseRevenues(countryWise)
        setRevenues(data.map((item) => {
          return {
            name: `${item.Company} ${item.Country}`,
            ...item.MonthlyRevenues
          }
        }))
      })
    })
  }, [ getToken ])
  return (
    <div>
      <BarChartCompanyWise data={companyWiseRevenues} /> 
      <LineChartRevenue data={monthWiseRevenues}/>
      <PieChartSetup data={countryWiseRevenues}/>
    </div>
  );

};

export default Reports;