import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import CategoryListing from './pages/CategoryListing';
import VideoDetail from './pages/VideoDetail';
import WatchLaterPage from './pages/WatchLater';
import PlayList from './pages/PlayList';
import Explore from './pages/Explore';
import PlayListDialog from './components/playListDialog';
import PlaylistView from './pages/PlaylistView';

function App() {
  return (
    <div className="App relative">
      <PlayListDialog />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/category/:categoryName' element={<CategoryListing />}></Route>
        <Route path='/video/:videoId' element={<VideoDetail />}></Route>
        <Route path='/watchLater' element={<WatchLaterPage />}></Route>
        <Route path='/playlists' element={<PlayList />}></Route>
        <Route path='/explore' element={<Explore />}></Route>
        <Route path="/playlist/:playlistName" element={<PlaylistView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
