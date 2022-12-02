import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Typography, Grid, Button, Container, Divider } from '@mui/material'
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import apiConfig from '../../apiConfig.mjs';
import UserLeftBar from '../../containers/UserLeftBar';
import PostCard from '../../containers/PostCard/index.jsx';
import Masonry from 'react-masonry-css';


export default function Post(props) {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [avatar, setavatar] = useState('');
  const [id, setid] = useState('');
  const [description, setdescription] = useState('');
  const [post, setPost] = React.useState("**Hello world!!!**");
  const [userObj, setUserObj] = useState({})
  const baseURL = apiConfig.base;
  const navigate = useNavigate();

  const handleNewPost = () => {
    navigate('/myposts/newpost');
  }

  const handleSubmitNote = () => {
    axios({
      method: 'POST',
      url: `${baseURL}/api/post`
    })
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: `${baseURL}/api/user/profile`
    }).then(res => {
      const user = res.data.userObj || JSON.parse(localStorage.getItem('userObj'));
      setUserObj(user)
      if (userObj.id) {
        setavatar(userObj.avatar);
        setdescription(userObj.description);
        setemail(userObj.email);
        setname(userObj.name);
        setid(userObj.id)
      }
      else {
        //navigate('/');
      }
    })
  }, [])

  const breakpoints = {
    default: 3,
    1100: 2,
    500: 1,
  }

  return (
    <Container fixed maxWidth='xl' sx={{
      display: 'flex',
      flexDirection: { lg: 'row', sm: 'column' },
    }}>
      <Box sx={{
        float: 'left',
        width: { lg: '15%', sm: '50%' },
        left: '13%',
        height: '400px%',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <UserLeftBar {...userObj} />
      </Box>

      <Box sx={{
        float: 'left',
        background: 'green',
        width: '75%',
        marginLeft: { xl: '10%', lg: '10%', md: '10%', sm: '0' }
      }}>
        <Box>
          <MDEditor
            value={post}
            onChange={setPost}
          />
          <Button size="large" variant='outlined' sx={{ marginTop: '20px', float: 'right' }} onClick={handleSubmitNote}>
            Share this daily note!
          </Button>
        </Box>

        <Divider />
        <Box sx={{ float: 'left', width: '100%', background: 'pink' }}>
          <Button size="large" variant='outlined' sx={{ marginTop: '30px', clear: 'both', float: 'left' }} onClick={handleNewPost}>
            Post a new article
          </Button>

          <Box sx={{clear:'both', marginTop:'90px'}}>
            <Masonry
              breakpointCols={breakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {/* {subjects.map(ele => {
              return (
                <SubCardGrid {...ele} key={ele.id} />
              )
            })} */}

              <PostCard {...{ type: 1 }} />
            </Masonry>
          </Box>
        </Box>

      </Box>


    </Container>
  )
}
