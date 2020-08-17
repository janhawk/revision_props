import React from 'react';
import Day from './components/Day'

class App extends React.Component {
  render() {
    return(
      <div className='container-fluid'>
        <div className="row">
        <Day dayName="Thursday" dayNumber={8} monthName="july"/>
        <Day dayName="Friday" dayNumber={9} monthName="july"/>
        <Day dayName="Saturday" dayNumber={10} monthName="july"/>
        <Day dayName="Someday" dayNumber={this.props.dayNumber} monthName={this.props.monthName}/>
        </div>
      </div>
    );
  }
}
export default App;