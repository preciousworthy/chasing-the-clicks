import Counter from './components/counter'
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1 className='App-Header'>Chasing the Clicks</h1>
      <h3>Level 1</h3>
      <p>Welcome! This web app is a challenge for Lighthall's Software Engineer Super League
        competition. Chasing the Clicks is the first of five challenges.<br/></p>
         <h3>The Challenge:</h3>
         <p>Build a web page (or any kind of hosted web app) with a clickable button and a click count. Every time that the button is clicked, the number increases by 1. When the web page is refreshed, the click count number should reflect all previous clicks. That means, refreshing the page should not reset the count to 0 or any other default number.</p>
      <Counter />
    </div>
  );
}

export default App;
