import React, { PureComponent, Fragment } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class BarChartCompanyWise extends PureComponent {

  render() {
    return (
      <Fragment>
        <h2>Total Revenues for each company</h2>
        <BarChart
          width={1200}
          height={700}
          data={this.props.data}
          margin={{
            top: 5, right: 30, left: 50, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Company" fill="#8884d8" />
        </BarChart>
      </Fragment>
    );
  }
}
