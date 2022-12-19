import { Box, Button, Divider, Icon, Paper, Slide, Stack, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useState } from 'react'

import BigTxt from './BigTxt'

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [messege, setMessege] = useState('');
  return (
    <Box pt={'20px'} sx={{minHeight: '120vh', width: "100%", backgroundColor:'#000000'}} pb='30px'>
      <Stack direction='column' alignItems='center' sx={{height: '100%'}}>
        
          <Slide direction="up" in={true} mountOnEnter>
            <Box flex={0.6} sx={{position: 'relative', height:'100%', width:'80%'}}>
              <Typography data-aos='slide-down' variant='h2' textAlign={'center'} fontWeight={800} fontSize={{xs: 30, md:70}} color='#ffffff' sx={{overflow: 'hidden'}}>Contact Me</Typography>
              <BigTxt text={"Contact"} />
         
              <Stack direction='row' justifyContent='center' mt='80px' mb='30px' height={{xs: '500px', md:'600px'}}>
                <Box data-aos='slide-right' flex={.5} sx={{display: {xs: 'none', md: 'block'}, backgroundColor: "#232931", backgroundRepeat:'no-repeat', objectFit: 'contain', backgroundSize: 'cover', backgroundImage:`url('bg_1.png')`}}/>
                <Box flex={{xs: 1, md:.5}}  sx={{backgroundColor: grey[50], }} >
                  <Stack spacing={{xs: 2, md:4}} width={{xs:'95%', md:'80%'}} m='auto' justifyContent={'center'} height='100%'>
                    <TextField variant='outlined' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Name'/>
                    <TextField variant='outlined' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email'/>
                    <TextField variant='outlined' value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder='Subject'/>
                    <TextField variant='outlined' rows={5} multiline value={messege} onChange={(e)=>setMessege(e.target.value)} placeholder='Message'/>
                    <Button variant='contained' sx={{borderRadius:'10px', color: '#ffffff', fontWeight: 700, fontSize: 20}}>Submit</Button>
                  </Stack>
                </Box>
              </Stack>
          
          </Box> 
          </Slide>
      </Stack>
    </Box>
  )
}

export default Contacts
