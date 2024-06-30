import './App.css';
import Header from "./header/header";
import Nav from './nav/nav';
import Subreddits from './subreddits/subreddits';

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
        <p> Articles </p>
      </article>
      <div className='blankSpace'>
        <p> Blank Space </p>
      </div>
      </main>
    </div>
  );
}

export default App;
