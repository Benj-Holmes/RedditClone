import './App.css';
import Header from "./header/header";
import Nav from './nav/nav';
import Subreddits from './subreddits/subreddits';
import Articles from './articles/articles';
import Error from './error/error';
import Thread from './thread/thread';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import SideInfo from './thread/sideInfo';

function App() {
  return (
    // <div id="theme">
    //   <header>
    //     <Header />
    //   </header>
    //   <main>
    //   <aside className='sidebar'>
    //     <div className='navbar'>
    //       <Nav />
    //     </div>
    //     <div>
    //       <Subreddits />
    //     </div>
    //   </aside>
      <article className='articleList'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={[ 
              <div className='theme'>
              <header>
                <Header />
              </header>
              <main>
                <aside className='sidebar'>
                  <div className='navbar'>
                    <Nav />
                  </div>
                <Subreddits />
                </aside>
              <Articles />
              </main>
              </div> ]} />
            <Route path='*' element={[
              <div className='theme'>
              <header>
                <Header />
              </header>
              <main>
                <aside className='sidebar'>
                  <div className='navbar'>
                    <Nav />
                  </div>
                <Subreddits />
                </aside>
                <Error  />
                </main>
              </div> ]} />
            <Route path='/article' element={[ 
              <div className='theme'>
              <header>
                <Header />
              </header>
              <main>
                <aside className='sidebar'>
                  <div className='navbar'>
                    <Nav />
                  </div>
                  <Subreddits />
                </aside>
                <Thread />
                  <div className='articleSide'> 
                    <SideInfo /> 
                    <Articles />
                  </div>
              </main>
              </div> ]} />
          </Routes>
        </BrowserRouter>
      </article>
      
    //   </main>
    // </div>
  );
}

export default App;
