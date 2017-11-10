import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import './Timeline.css';

const refMonth = moment('20000101');

const TimeBox = (props) => {
  const gridStyle = {
    gridTemplateRows: `repeat(${props.totalHeight}, 1fr)`
  }
  const timeboxStyle = {
    width: `${props.monthsToPercent(props.end - props.start)}%`,
    left: `${props.monthsToPercent(props.start - props.minT)}%`,
    gridRow: props.height
  }
  return <div className="grid" style={gridStyle}>
    <div className="timebox" style={timeboxStyle}>
      <span className="title" alt={props.title}>{props.title}</span>
    </div>
  </div>;
}

const TimeBoxes = (props) => {
  const timeboxes = [];
  for (var g of props.groups) {
    for (var h = 0; h < g.lines.length; h++) {
      var line = g.lines[h];
      for (var event of line) {
        timeboxes.push(
          <TimeBox
            minT={props.minT}
            start={event.start}
            end={event.end}
            title={event.title}
            height={h + 1}
            totalHeight={g.lines.length}
            monthsToPercent={props.monthsToPercent}
          />
        )
      }
    }
  }
  return <div className="timeboxes">{timeboxes}</div>;
};

const BottomLine = (props) => {
  const minYear = refMonth.clone().add(props.minT, 'months').year()
  const maxYear = refMonth.clone().add(props.maxT, 'months').year() + 1

  const labels = _.range(minYear, maxYear).map(y => {
    const labelStyle = {
      left: `${props.monthsToPercent(moment(`${y}0101`).diff(refMonth.clone().add(props.minT, 'months'), 'months'))}%`
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
};

const Timeline = (props) => {
  if (_.isEmpty(props.events)) {
    return <div className="timeline" />
  }
  const events = _.sortBy(props.events, 'start');

  const groups = [];

  // minT and maxT are the beginning and end, in months, of
  // of what will be visible

  //minT is Jan1st preceeding the first event
  const minMoment = refMonth.clone().add(_.first(events).start, 'months').startOf('year');
  //same as minMoment but in months
  const minT = minMoment.diff(refMonth, 'months');

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

  //minT is Jan1st preceeding the first event
  const maxMoment = refMonth.clone().add(maxT, 'months').add(1, 'year').startOf('year');
  maxT = maxMoment.diff(refMonth, 'months');

  const monthsToPercent = (m) => {
    return 100 / (maxT - minT) * m;
  }

  return <div className="timeline">
    <TimeBoxes monthsToPercent={monthsToPercent} events={events} groups={groups} minT={minT} />
    <BottomLine monthsToPercent={monthsToPercent} minT={minT} maxT={maxT} />
  </div>;
};

export default Timeline;
