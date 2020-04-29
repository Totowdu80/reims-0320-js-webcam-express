import React from 'react';
import Axios from 'axios';
import WindyImages from './components/appelWindy/WindyImages';
import WindyWebcam from './components/appelWindy/WindyWebcam';
import Homepage from './components/Homepage/Homepage';
import RandomQuote from './components/RandomQuote/RandomQuote';
import GameStart from './components/GameStart/GameStart';
import GameWin from './components/GameWin/GameWin';
import GameLose from './components/GameLose/GameLose';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: { webcams: [] },
      currentPage: 'homepage',
      category: RandomQuote(),
    };
  }


  componentDidMount() {
    Axios.all([
      Axios.get(
        `https://api.windy.com/api/webcams/v2/list/category=${this.state.category}/limit=50?show=webcams:category,image,location,player&key=v8FJkDLEcXgmPza5EsdFFtKoSUIaTbX4`,
      ),
      Axios.get(
        `https://api.windy.com/api/webcams/v2/list/category=${this.state.category}/limit=50?show=webcams:category,image,location,player&key=v8FJkDLEcXgmPza5EsdFFtKoSUIaTbX4`,
      ),
      Axios.get(
        `https://api.windy.com/api/webcams/v2/list/category=${this.state.category}/limit=50?show=webcams:category,image,location,player&key=v8FJkDLEcXgmPza5EsdFFtKoSUIaTbX4`,
      ),
    ])
      .then(Axios.spread((response1, response2, response3) => {
        const allData = {
          apiData1: response1.data,
          apiData2: response2.data,
          apiData3: response3.data,
        };
        this.setState({ apiData: allData });
      }));
    /* .then(Axios.spread((...responses) => {
        let allData = [];
        responses.forEach((response) => {
          allData = [...allData, response.data];
        });
        this.setState({ apiData: allData });
      }));
      */

    /* .then((data) => {
        const dataBase = data.result;
        this.setState({ apiData: dataBase });
      });
    */
  }


  render() {
    return (
      <div>
        <div className={this.state.currentPage === 'homepage' ? 'homepageON' : 'affichageOFF'}>
          <Homepage />
        </div>
        <div className={this.state.currentPage === 'gamestart' ? 'gamestartON' : 'affichageOFF'}>
          <GameStart />
        </div>
        <div className={this.state.currentPage === 'gamewin' ? 'gamewinON' : 'affichageOFF'}>
          <GameWin />
        </div>
        <div className={this.state.currentPage === 'gamelose' ? 'gameloseON' : 'affichageOFF'}>
          <GameLose />
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
