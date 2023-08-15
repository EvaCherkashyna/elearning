import useLocalStorage from 'use-local-storage';
import './App.scss';
import { Header, Main, Footer } from './layouts';

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'light' : 'dark')
  
  console.log(theme)
  return (
    <div className="App" data-theme={theme}>
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
