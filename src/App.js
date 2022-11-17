import logo from './logo.svg';
import './App.css';
import MainRouter from './MainRouter';
import SignInSide from './containers/SignInSide'
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
const theme = createTheme({
  palette:{
    primary: purple
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <MainRouter/>
    </div>
    </ThemeProvider>
  );
}

export default App;
