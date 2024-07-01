import './App.css';
import Header from "./header/header";
import Nav from './nav/nav';
import Subreddits from './subreddits/subreddits';
import Articles from './articles/articles';

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
        <div>
          <p> You are Viewing the top posts from 'r/Popular' </p>
        </div>
        <div>
          <Articles />
        </div>
      </article>
      <div className='blankSpace'>
        <p> Blank Space </p>
      </div>
      </main>
    </div>
  );
}

export default App;
