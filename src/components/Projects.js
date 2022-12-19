import { Box, Button, Grid, Slide, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import BigTxt from './BigTxt'

const useStyles = makeStyles({
  contents:{
    
  },
  project: {
    '&:hover':{
      boxShadow: 'inset 0 0 0 1000px rgba(255, 189, 57, .8)',
      '& div':{
        display: 'flex'
      }
    }
  }
})

const Projects = () => {
  const classes = useStyles()

  const myProjects = [
    {name: "Social App", category: "Flutter App", link: 'https://www.google.com', img: "project.jpg"},
    {name: "Social App", category: "Flutter App", link: 'https://www.google.com', img: "project.jpg"},
    {name: "Social App", category: "Flutter App", link: 'https://www.google.com', img: "project.jpg"},
    {name: "Social App", category: "Flutter App", link: 'https://www.google.com', img: "project.jpg"},
    {name: "Social App", category: "Flutter App", link: 'https://www.google.com', img: "project.jpg"},
    {name: "Social App", category: "Flutter App", link: 'https://www.google.com', img: "project.jpg"}
  ]

  return (
    <Box pt={'20px'} sx={{minHeight: '120vh', width: "100%", backgroundColor:'#000000'}} pb='30px'>
     
        <Slide direction="up" in={true} mountOnEnter>
          <Box flex={0.6} sx={{position: 'relative', height:'100%'}}>
            <Typography data-aos='slide-down' variant='h2' textAlign={'center'} fontWeight={800} fontSize={{xs: 30, md:70}} color='#ffffff' sx={{overflow: 'hidden'}}>My Projects</Typography>
            <BigTxt text={"Projects"} />
       
            <Grid sx={{overflow: 'hidden'}} container justifyContent='center' mt={'120px'} spacing={3} mb='30px'>
              {
                myProjects.map((project, i)=> 

                 <Grid data-aos='slide-up' item xs={12} md={4}  m='5px'>
                  <Box className={classes.project} sx={{borderRadius: '10px',position: 'relative', height:{xs:'200px', md:'350px'}, width:'100%',boxShadow: 'none', backgroundRepeat:'no-repeat', objectFit: 'contain', backgroundSize: 'cover', backgroundImage:`url(${project.img})`}}> 
                    <Stack className={classes.contents} spacing={1} sx={{ height: '100%', display: {xs:'flex', md:'none'}}} justifyContent='center' alignItems='center'>
                      <Typography color={{xs:'#ffbd39', md:'#ffffff'}} fontSize={35} fontWeight={600}>{project.name}</Typography>
                      <Typography color={{xs:'#ffbd39', md:'#ffffff'}} fontSize={25}>{project.category}</Typography>
                    </Stack>
                    {/* <Box sx={{zIndex: 'revert',top: '0px',left: '0px',backgroundColor:'rgba(255, 189, 57, .7)', height: '100%',width: '100%', position:'absolute'}}/> */}
                    
                  </Box>
                 </Grid>
                )
              }
              
            </Grid>
        
        </Box> 
        </Slide>
    
  </Box>
  )
}

export default Projects
