import React from 'react';
import Axios from 'axios';
import Homepage from './components/Homepage/Homepage';
import RandomQuote from './components/RandomQuote/RandomQuote';
import GameStart from './components/GameStart/GameStart';
import GameWin from './components/GameWin/GameWin';
import GameLose from './components/GameLose/GameLose';
import './App.css';
import NavBar from './components/Navbar/Navbar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: { webcams: [] },
      currentPage: 'homepage',
      categoryActual: RandomQuote(),
      categoryFirstChoice: RandomQuote(),
      categorySecondChoice: RandomQuote(),
      categoryTarget: RandomQuote(),
      playerPoints: 0,
    };
    this.startGame = this.startGame.bind(this);
    this.playChoiceOne = this.playChoiceOne.bind(this);
    this.playChoiceTwo = this.playChoiceTwo.bind(this);
    this.gameAfter = this.gameAfter.bind(this);
    this.gameAfterWin = this.gameAfterWin.bind(this);
    this.gameAfterLose = this.gameAfterLose.bind(this);
    this.getApiData = this.getApiData.bind(this);
  }

  componentDidMount() {
    this.getApiData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.playerPoints !== this.state.playerPoints) {
      this.getApiData();
    }
  }

  getApiData() {
    Axios.all([
      Axios.get(
        `https://api.windy.com/api/webcams/v2/list/category=${this.state.categoryActual}/limit=50?show=webcams:category,image,location,player&key=v8FJkDLEcXgmPza5EsdFFtKoSUIaTbX4`,
      ),
      Axios.get(
        `https://api.windy.com/api/webcams/v2/list/category=${this.state.categoryTarget}/limit=50?show=webcams:category,image,location,player&key=v8FJkDLEcXgmPza5EsdFFtKoSUIaTbX4`,
      ),
      Axios.get(
        `https://api.windy.com/api/webcams/v2/list/category=${this.state.categoryFirstChoice}/limit=50?show=webcams:category,image,location,player&key=v8FJkDLEcXgmPza5EsdFFtKoSUIaTbX4`,
      ),
      Axios.get(
        `https://api.windy.com/api/webcams/v2/list/category=${this.state.categorySecondChoice}/limit=50?show=webcams:category,image,location,player&key=v8FJkDLEcXgmPza5EsdFFtKoSUIaTbX4`,
      ),
    ])
      .then(Axios.spread((response1, response2, response3, response4) => {
        const allData = {
          actualData: response1.data,
          targetData: response2.data,
          choiceOneData: response3.data,
          choiceTwoData: response4.data,
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

  startGame() {
    this.gameAfter(0);
  }

  playChoiceOne() {
    if (this.state.categoryFirstChoice === this.state.categoryTarget) {
      this.setState({
        currentPage: 'gamewin',
      });
    } else {
      this.setState({
        currentPage: 'gamelose',
      });
    }
  }

  playChoiceTwo() {
    if (this.state.categorySecondChoice === this.state.categoryTarget) {
      this.setState({
        currentPage: 'gamewin',
      });
    } else {
      this.setState({
        currentPage: 'gamelose',
      });
    }
  }

  gameAfter(points) {
    const randomQuotes = [RandomQuote(), RandomQuote()];

    const randomIndex = Math.floor(Math.random() * 2);
    this.setState({
      currentPage: 'gamestart',
      categoryActual: this.state.categoryTarget,
      categoryTarget: randomQuotes[0],
      categoryFirstChoice: randomQuotes[randomIndex],
      categorySecondChoice: randomQuotes[(randomIndex + 1) % 2],
      playerPoints: points,
    });
  }

  gameAfterWin() {
    this.gameAfter(this.state.playerPoints + 200);
  }

  gameAfterLose() {
    this.gameAfter(0);
  }

  render() {
    return (
      <div>
        <div>
          <NavBar playerPoints={this.state.playerPoints} />
        </div>
        <div className={this.state.currentPage === 'homepage' ? 'homepageON' : 'affichageOFF'}>
          <Homepage startGame={this.startGame} />
        </div>
        <div className={this.state.currentPage === 'gamestart' ? 'gamestartON' : 'affichageOFF'}>
          <GameStart choiceOne={this.playChoiceOne} choiceTwo={this.playChoiceTwo} apiData={this.state.apiData} state={this.state} />
        </div>
        <div className={this.state.currentPage === 'gamewin' ? 'gamewinON' : 'affichageOFF'}>
          <GameWin apiData={this.state.apiData} continueGame={this.gameAfterWin} state={this.state} />
        </div>
        <div className={this.state.currentPage === 'gamelose' ? 'gameloseON' : 'affichageOFF'}>
          <GameLose apiData={this.state.apiData} restartGame={this.gameAfterLose} state={this.state} />
        </div>
      </div>
    );
  }
}
export default App;
