
import { AppBar , Toolbar } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';


const Header = () => {
    return (
       <AppBar style={{backgroundColor: '#060606' , height:'10vh'}} position="static">
        <Toolbar><CodeIcon fontSize="large"></CodeIcon>Code-Pen<CodeOffIcon fontSize="large"></CodeOffIcon></Toolbar>
       </AppBar>
    )
}

export default Header ;