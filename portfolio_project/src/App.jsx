import './styles/components/app.sass'
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div id="portfolio">
      <h1>Icaro Augusto Maccari Zelioli</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App;
