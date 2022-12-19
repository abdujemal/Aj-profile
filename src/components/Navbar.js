import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Checkbox, Collapse, Divider, Grow, Stack, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Clear } from '@mui/icons-material';
const pages = ['Home', 'About', 'Services', 'Skills', 'Projects', 'Contacts'];

const useStyles = makeStyles((theme) =>({
  appBar: {
    padding: '10px 25px', 
    backgroundColor:'#000000 !important',
  },
  line: {
    width: '0',
    transition: 'width .5s'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
      '& hr': {
        width: '100%'
      }
    }
  }
}))



const Navbar = () => {
    const [index, setIndex] = React.useState(0);

    const [showMenu, setShowMenu] = React.useState(false);

    const classes = useStyles();

    const handleLinkClick = (e,i)=>{
      setShowMenu(false)
      setIndex(i)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
          
      <AppBar className={classes.appBar}>
        <Toolbar >
          <Stack direction={'row'} justifyContent='space-between' sx={{width: "100%"}}>

            <Stack spacing={3}>
            <Typography color="#ffffff" variant="h4" fontWeight={800} component="div" sx={{ flexGrow: 1, overflow: 'hidden' }}>
              AJ
            </Typography>
            {showMenu?<Collapse
              sx={{display: {xs: 'block', md: "none"}}}
              in={showMenu}
              >
              <Stack direction={'column'} spacing={1} alignItems="flex-start" >
                {
                    pages.map((page, i)=>
                    <Box 
                      className={classes.link}
                      component={'a'} 
                      href={`#${page}`}
                      onClick={(e)=>handleLinkClick(e,i)}
                    >
                        <Typography color={index == i ? '#ffbd39': "#ffffff"} fontSize={"1.3em"}>{page}</Typography>
                        <Divider className={classes.line} color="#ffbd39" sx={{height: '2px', borderRadius: '5px'}}/>
                        
                    </Box>
                    )
                }
              </Stack>
            </Collapse>:null}
            </Stack>
            <Checkbox 
              color='white'
              checked={showMenu}
              icon={<MenuIcon color='white'/>}
              checkedIcon={<Clear/>}
              onChange={(e)=>{setShowMenu(e.target.checked); console.log(showMenu);}}
              sx={{display: {xs: "block", md: "none"}}} 
             />
              
            
          
              <Stack direction={'row'} spacing={5} alignItems="flex-start" sx={{display: {xs: 'none', md: 'flex'}}}>
                {
                    pages.map((page, i)=>
                    <Box 
                      className={classes.link}
                      component={'a'} 
                      href={`#${page}`}
                      onClick={(e)=>handleLinkClick(e,i)}
                    >
                        <Typography color={index == i ? '#ffbd39': "#ffffff"} fontSize={"1.3em"}>{page}</Typography>
                        <Divider className={classes.line} color="#ffbd39" sx={{height: '2px', borderRadius: '5px'}}/>
                        
                    </Box>
                    )
                }
              </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navbar
