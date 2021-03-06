import './searchForm.css';
import { TextField, Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const SearchForm = ({handleSubmit, handleChange, userInput}) => {

    return (
        <form className="search-form" onSubmit={e=>handleSubmit(e)}>
            <TextField
              variant="filled"  
              label="City"
              className="search-field"
              value={userInput}
              onChange={(e)=>handleChange(e)}
            />
            <Button type="submit">
                <SearchIcon/>
            </Button>
        </form>  
    );
    
}

export default SearchForm;
