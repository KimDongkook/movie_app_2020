import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  setLoading = () => {
    this.setState(current => ({
      isLoading: current.isLoading = !current.isLoading
    }))
  }

  componentDidMount() {
    // load movie data
    setTimeout(this.setLoading, 6000)
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? 'Loading...' : 'We are ready'}
      </div>
    );
  }
}

export default App;
