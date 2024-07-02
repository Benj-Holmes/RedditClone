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
    <div id="theme">
      <header>
        <Header />
      </header>
      <main>
      <aside className='sidebar'>
        <div className='navbar'>
          <Nav />
        </div>
        <div>
          <Subreddits />
        </div>
      </aside>
      <article className='articleList'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={[<Articles key={1} />]} />
            <Route path='*' element={[<Error key={2} />]} />
            <Route path='/article' element={[<Thread key={3} />, <div className='articleSide'><SideInfo /><Articles key={4} /></div>]} />
          </Routes>
        </BrowserRouter>
      </article>
      {/* <div className='blankSpace'>
        <p> You are Viewing the Top Posts from r/Popular </p>
      </div> */}
      </main>
    </div>
  );
}

export default App;
