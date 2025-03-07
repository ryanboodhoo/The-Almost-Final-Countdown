import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
      <TimerChallenge title="Easy" targetTime={1} />
      <TimerChallenge title="Medium" targetTime={5} />
      <TimerChallenge title="Hard" targetTime={10} />
      <TimerChallenge title="Extreme" targetTime={15} />  
      <TimerChallenge title="Super Saiyan" targetTime={3600} /> 
    </div>
     </>
  );
}

export default App;
