import './App.css';
import MainRouter from './MainRouter';
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette:{
    primary: purple
  },
  components:{
    MuiButton:{
      variants:[
        {
          props:{variant:"bold"},
          style:{
            font:"bold",
            border:`4px solid white`,
            color:'white'
          }
        }
      ]
    }
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
