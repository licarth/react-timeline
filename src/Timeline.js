import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import './Timeline.css';

class TimeBoxes extends React.Component {
  render() {
    const timeboxes = [];
    for (var g of this.props.groups) {
      for (var h = 0; h < g.lines.length; h++) {
        var line = g.lines[h];
        for (var event of line) {
          timeboxes.push(
            <TimeBox
              minT={this.props.minT}
              start={event.start}
              end={event.end}
              title={event.title}
              height={h + 1}
              totalHeight={g.lines.length}
              percentsPerMonth={this.props.percentsPerMonth}
            />
          )
        }
      }
    }
    return <div className="timeboxes">{timeboxes}</div>;
  }
}

class BottomLine extends React.Component {
  render() {
    const refMonth = moment('20000101');
    const minYear = refMonth.clone().add(this.props.minT, 'months').year()
    const maxYear = refMonth.clone().add(this.props.maxT, 'months').year() + 1

    const labels = _.range(minYear, maxYear).map(y => {
      const labelStyle = {
        left: `${moment(`${y}0101`).diff(refMonth.clone().add(this.props.minT, 'months'), 'months') * this.props.percentsPerMonth}%`
      }
      const labelTextStyle = [];
      if (y % 5 !== 0) {
        labelTextStyle.display = "none";
      }
      return <span className="label" style={labelStyle}>
        <span className="vertical-line" />
        <span style={labelTextStyle} className="year-text">{y}</span>
      </span>
    });

    return <div className="bottomline"><hr />{labels}</div>;
  }
}

class TimeBox extends React.Component {
  render() {
    const gridStyle = {
      gridTemplateRows: `repeat(${this.props.totalHeight}, 1fr)`
    }
    const timeboxStyle = {
      width: `${(this.props.end - this.props.start) * this.props.percentsPerMonth}%`,
      left: `${(this.props.start - this.props.minT) * this.props.percentsPerMonth}%`,
      gridRow: this.props.height
    }
    return <div className="grid" style={gridStyle}>
      <div className="timebox" style={timeboxStyle}>
        <span className="title">{this.props.title}</span>
      </div>
    </div>;
  }
}

class Timeline extends React.Component {
  render() {
    if (_.isEmpty(this.props.events)) {
      return <div className="timeline" />
    }
    const events = _.sortBy(this.props.events, 'start');
    
    const groups = [];
    const minT = _.first(events).start;
    var maxT = _.first(events).end;
    var currentGroup = { lines: [], end: undefined };
    
    for (var e of events) {
      var placed = false;
      var h = 0;
      maxT = Math.max(maxT, e.end);
      while (!placed && h < 100) {
        if (!_.last(currentGroup.lines[h])) {
          placed = true;
        } else if (_.last(currentGroup.lines[h]).end <= e.start) {
          placed = true;
        }
        //Move to the next group if needed.
        if (placed && currentGroup.end <= e.start) { // i==0 is implicit
          groups.push(currentGroup);
          currentGroup = { lines: [], end: undefined };
        }
        if (placed) {
          if (!currentGroup.lines[h]) {
            currentGroup.lines[h] = [];
          }
          currentGroup.lines[h].push(e);
          currentGroup.end = currentGroup.end ? Math.max(currentGroup.end, e.end) : e.end
        }
        h++;
      }
    }
    groups.push(currentGroup);
    
    const percentsPerMonth = 100 / (maxT - minT);

    return <div className="timeline">
      <TimeBoxes percentsPerMonth={percentsPerMonth} events={events} groups={groups} minT={minT} />
      <BottomLine percentsPerMonth={percentsPerMonth} minT={minT} maxT={maxT} />
    </div>;
  }
}

export default Timeline;
