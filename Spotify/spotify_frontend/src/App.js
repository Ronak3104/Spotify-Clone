import './output.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from './routes/Home';
import LoggedInHomeComponent from './routes/LoggedInHome';
import UploadSong from './routes/UploadSong';
import MyMusic from './routes/MyMusic';
import SearchPage from './routes/SearchPage';
import Library from './routes/Library';
import { useCookies } from 'react-cookie';
import songContext from './contexts/songContext';
import SinglePlayListView from './routes/SinglePlayListView';
import Premium from './routes/Premium';
import Support from './routes/Support';
import { useState } from 'react';

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [cookie, setCookie] = useCookies(["token"]);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused]= useState(true);

  return (
    <div className="App">
      {/* BrowserRouter is a wrapper component*/} 
      <div className='w-screen h-screen font-poppins'>
        <BrowserRouter>
          {cookie.token?( 
            <songContext.Provider 
              value={{
                currentSong, 
                setCurrentSong, 
                soundPlayed, 
                setSoundPlayed, 
                isPaused, 
                setIsPaused
              }}> 
              <Routes>
                {/* Adding routes component here indicaes to the package(react-router-dom) that we are starting yo define oir routed inside turth 
                  These are logged in routes*/}
                <Route path = "/" element = {<HomeComponent/>}/>
                <Route path = "/home" element = {<LoggedInHomeComponent/>}/>
                <Route path = "/uploadSong" element = {<UploadSong/>}/>
                <Route path = "/myMusic" element = {<MyMusic/>}/>
                <Route path = "/search" element = {<SearchPage/>}/>
                <Route path = "/library" element = {<Library/>}/>
                <Route path = "/playlist/:playlistId" element = {<SinglePlayListView/>}/>
                <Route path = "/premium" element = {<Premium/>}/>
                <Route path = "/support" element = {<Support/>}/>
                <Route path = "*" element={<Navigate to="/home"/>}/>
              </Routes>
            </songContext.Provider>
          ):(
            // These are logged out routes
            <Routes>
              <Route path = "/home" element = {<HomeComponent/>}/>
              <Route path = "/login" element = {<LoginComponent/>}/>
              <Route path = "/signup" element = {<SignupComponent/>}/>
              <Route path = "*" element={<HomeComponent/>}/>
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
