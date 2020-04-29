import React from 'react';
import Axios from 'axios';
import './App.css';
import Windy from './components/appelWindy/WindyImages';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: '',
    };
  }

  componentDidMount() {
    Axios.get(
      'https://api.windy.com/api/webcams/v2/list/category=beach/limit=50?show=webcams:category,image,location,player&key=v8FJkDLEcXgmPza5EsdFFtKoSUIaTbX4'
    )
      .then((response) => response.data)
      .then((data) => {
        const dataBase = data.result.webcams[2].image.current.preview;
        this.setState({ apiData: dataBase });
        console.log(this.state.apiData);
      });
  }

  render() {
    return (
      <div>
        <Windy apiData={this.state.apiData} />
      </div>
    );
  }
}
export default App;
