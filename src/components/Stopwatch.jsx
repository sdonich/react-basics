import React from 'react';
import Button from './Button';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      elapsed: 0,
      lastTick: 0
    };

    this.handleStart = this.handleStart.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    if (this.state.running) {
      let now = Date.now();
      let diff = now - this.state.lastTick;

      this.setState ({
        elapsed: this.state.elapsed + diff,
        lastTick: now
      });
    }    
  }

  handleStart() {
    this.setState ({
      running: true,
      lastTick: Date.now()
    });
  }

  handlePause() {
    this.setState ( { running: false } );
  }

  handleStop() {
    this.setState ({
      running: false,
      elapsed: 0,
      lastTick: 0
    });
  }

  format(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let min = Math.floor(totalSeconds / 60);
    let sec = totalSeconds % 60;

    return `${min > 9 ? min : '0' + min}:${sec > 9 ? sec : '0' + sec}`
  }

  render() {
    let time = this.format(this.state.elapsed);

    return (
      <section className="stopwatch">
        <div className="stopwatch-time">{time}</div>

        <div className="stopwatch-controls">
          {
            this.state.running ?
            <Button className="icon" icon="pause" onClick={this.handlePause} />
            :
            <Button className="icon" icon="play_arrow" onClick={this.handleStart} />
          }
          <Button className="icon" icon="stop" onClick={this.handleStop} />
        </div>
      </section>
    );
  }
}

export default Stopwatch;