import './App.css';
import Header from'./header';
function App() {
  return (
    <div className="App">
      <Header />
      <img src={require('./images/attlassian.png')} alt="logo" height="100%" width='100%'></img>
    </div>
  );
}

export default App;