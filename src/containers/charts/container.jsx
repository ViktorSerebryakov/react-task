import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Subtitle,
  Legend,
  LineSeries
} from 'react-jsx-highcharts';
import mapStateToProps from './selectors';


class Charts extends Component {

  static proptypes = {
    chartsData: PropTypes.object.isRequired
  };

  render() {
    const { chartsData } = this.props;

    const charts = chartsData.charts.map((chart, key) => (
      <HighchartsChart key={key}>
        <Chart />
        <Title>{chart.label}</Title>
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <XAxis categories={chartsData.dates}>
          <XAxis.Title>Time</XAxis.Title>
        </XAxis>
        <YAxis>
          <YAxis.Title>Rub</YAxis.Title>
          <LineSeries name={chart.title} data={chart.values} />
        </YAxis>
      </HighchartsChart>
    ));
    return(
      <div>
        {charts}
      </div>

    )
  }
}

export default connect(mapStateToProps)
(withHighcharts(Charts, Highcharts));
