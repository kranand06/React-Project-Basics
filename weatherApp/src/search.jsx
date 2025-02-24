import './App.css'
import './search.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

function Searchbox(props ) {

  const keypress = (e) => {
    if (e.key === "Enter")
      props.search();
  }



  return (
    <>
      <TextField
        id="outlined-basic"
        label="Enter City"
        variant="outlined"
        required
        value={props.city}
        onChange={props.handler}
        onKeyDown={keypress}
        size='small'
      />
      <br /><br />
      <Button
        variant="contained"
        size="large"
        onClick={props.search}
        endIcon={<SearchIcon />}>
        Search
      </Button>
    </>
  )
}

export default Searchbox

