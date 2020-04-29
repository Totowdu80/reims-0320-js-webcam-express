import React from 'react';
import Axios from 'axios';
import WindyImages from './components/appelWindy/WindyImages';
import WindyWebcam from './components/appelWindy/WindyWebcam';
import Homepage from './components/Homepage/Homepage';
import RandomQuote from './components/RandomQuote';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: { webcams: [] },
      currentPage: 'homepage',
      category: '',
      },
    };
  }


  componentDidMount() {
    Axios.get(
      `https://api.windy.com/api/webcams/v2/list/category=${this.state.category}/limit=50?show=webcams:category,image,location,player&key=v8FJkDLEcXgmPza5EsdFFtKoSUIaTbX4`
    )
      .then((response) => response.data)
      .then((data) => {
        const dataBase = data.result;
        this.setState({ apiData: dataBase });
      });
  }


  render() {
    return (
      <div>
        <div className={this.state.currentPage === 'homepage' ? 'homepageON' : 'affichageOFF'}>
          <Homepage />
        </div>
        <div className="Webcam">
          <WindyWebcam apiData={this.state.apiData} />
        </div>
        <div>
          <WindyImages apiData={this.state.apiData} />
        </div>
      </div>
    );
  }
}
export default App;
