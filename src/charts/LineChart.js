import React, { PureComponent, Fragment } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class LineChartRevenue extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <Fragment>
        <h2>Month Wise Distribution for each company</h2>
        <LineChart
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
          <Line type="monotone" dataKey="January" stroke='yellow' />
          <Line type="monotone" dataKey="February" stroke='orange' />
          <Line type="monotone" dataKey="March" stroke="pink" />
          <Line type="monotone" dataKey="April" stroke="green" />
          <Line type="monotone" dataKey="May" stroke="black" />
          <Line type="monotone" dataKey="June" stroke="purple" />
          <Line type="monotone" dataKey="July" stroke="red" />
          <Line type="monotone" dataKey="August" stroke="blue" />
          <Line type="monotone" dataKey="September" stroke="grey" />
          <Line type="monotone" dataKey="October" stroke="#34ca9d" />
          <Line type="monotone" dataKey="November" stroke="#55ca9d" />
          <Line type="monotone" dataKey="December" stroke="#44ca9d" />
        </LineChart>
      </Fragment>
    );
  }
}