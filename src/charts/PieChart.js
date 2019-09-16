import React, { PureComponent, Fragment } from 'react';
import {
  PieChart, Pie, Legend, Tooltip, Cell, LabelList
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class PieChartSetup extends PureComponent {

  render() {
    return (
      <Fragment>
        <h2>Country wise Distribution for each Market</h2>
        <div style={{display: 'flex'}}>
        {Object.keys(this.props.data).map((country, index) => (
          <div>
            <h3>{country}</h3>
            <PieChart width={300} height={300}>
              <Pie data={this.props.data[country]} cx={200} cy={100} innerRadius={40} outerRadius={80}>
                {
                this.props.data[country].map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
              }
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        ))}
        </div>
        {/* <PieChart width={1200} height={700}>
          {Object.keys(this.props.data).map((country, index) => (
            <Pie data={this.props.data[country]} cx={(index + 1) * 200} cy={100} innerRadius={40} outerRadius={80} labelLine>
              {
              this.props.data[country].map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
            <LabelList content={React.createElement('dsds')}></LabelList>
            </Pie>
          ))}
        <Tooltip />
      </PieChart> */}
      </Fragment>
    );
  }
}
