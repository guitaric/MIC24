import './App.css'

import './components/1Header/Header.css';
import './components/2Roman/Roman.css';
import './components/3ChordGrid/ChordGrid.css';
import './components/4AltChordGrid/AltChordGrid.css';
import './components/5Controls/Controls.css';
import './components/6Sequencer/Sequencer.css';
import './components/7Player/Player.css';
import './components/8Scale/Scale.css';

import Header from './components/1Header/Header';
import Roman from './components/2Roman/Roman';
import ChordGrid from './components/3ChordGrid/ChordGrid';
import AltChordGrid from './components/4AltChordGrid/AltChordGrid';
import Controls from './components/5Controls/Controls';
import Sequencer from './components/6Sequencer/Sequencer';
import Player from './components/7Player/Player';
import Scale from './components/8Scale/Scale';



function App() {

  return (
    <> 
      <div className="superGrid">
        <Header/>
        <Roman/>
        <Scale/>
        <ChordGrid/>
        <AltChordGrid/>
        <Controls/>
        <Sequencer/>
        <Player/>
      </div>
    </>
  )
}

export default App
