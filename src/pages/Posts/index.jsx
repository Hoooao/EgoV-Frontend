import React, { useState, useEffect } from 'react'
import { useNavigate, Routes, Route, } from 'react-router-dom';
import { Box, TextField, Button, Container, Divider, FormControl } from '@mui/material'
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import apiConfig from '../../apiConfig.mjs';
import UserLeftBar from '../../containers/UserLeftBar';
import PostCard from '../../containers/PostCard/index.jsx';
import Masonry from 'react-masonry-css';

const baseURL = apiConfig.base;


const NewPost = (props) => {
  const [content, setContent] = React.useState("**Hello world!!!**");
  const [title, setTitle] = useState(' ');
  const [description, setDescription] = useState(' ');
  const [img_url, setImgURL] = useState(' ');
  const navigate = useNavigate();
  const handleSubmitPost = (e) => {
    e.preventDefault()
    const { id } = JSON.parse(localStorage.getItem('userObj'));
    axios({
      method: 'POST',
      url: `${baseURL}/api/post/addPost`,
      data: {
        post: {
          user_id: id,
          length: content.length,
          date: Date.now(),
          content,
          description: description,
          title,
          img_url
        }
      }
    }).then(res => {
      navigate('/myposts')
    })
  }

  return (
    <Box sx={{
      float: 'left',
      width: '75%',
      height: '1000px',
      marginLeft: { xl: '10%', lg: '10%', md: '10%', sm: '0' }
    }}>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <form action="" onSubmit={handleSubmitPost}>
          <FormControl sx={{
            marginTop: "20px",
            float: "left",
            width: '100%'
          }}>
            <TextField sx={{ float: 'left', width: "25%", marginBottom: '20px' }} value={title} onChange={(eve) => setTitle(eve.target.value)} id="outlined-basic" required label="Title" variant="outlined" />
            <TextField sx={{ float: 'left', width: "25%", marginBottom: '20px' }} value={img_url} onChange={(eve) => setImgURL(eve.target.value)} id="outlined-basic" required label="Cover Image URL" variant="outlined" />
            <TextField sx={{ float: 'left', width: "50%", marginBottom: '20px' }} value={description} onChange={(eve) => setDescription(eve.target.value)} multiline rows={4} id="outlined-basic" required label="Description" variant="outlined" />

          </FormControl>

          <Button type="submit" variant="outlined" size="large" sx={{ marginTop: "0px", marginLeft: '50%' }}>Publish!</Button>
        </form>
      </Box>
      <Box sx={{ height: '1000px', }}>
        <MDEditor
          value={content}
          height={700}
          onChange={setContent}
        />
      </Box>
    </Box>
  )
}


const MyPosts = () => {
  const [content, setContent] = React.useState("**Hello world!!!**");
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true);
  const { id } = JSON.parse(localStorage.getItem('userObj'));
  const navigate = useNavigate();
  useEffect(
    () => {
      axios({
        method: 'GET',
        url: `${baseURL}/api/post/getPostsWithUserID`,
        params: {
          id
        }
      }).then(res => {
        setPosts(res.data.posts);
        console.log(res.data)
        setLoading(false);
      })
    }, []);


  const breakpoints = {
    default: 3,
    1100: 2,
    500: 1,
  }

  // wait.
  const handleSubmitNote = () => {
    axios({
      method: 'POST',
      url: `${baseURL}/api/post`
    })
  }
  const handleNewPost = () => {
    navigate('/myposts/newpost');
  }

  if(loading){
    return (
      <div>Loading...</div>
    )
  }
  return (
    <Box sx={{
      float: 'left',
      width: '75%',
      marginLeft: { xl: '10%', lg: '10%', md: '10%', sm: '0' }
    }}>
      <Box>
        <MDEditor
          value={content}
          onChange={setContent}
        />
        <Button size="large" variant='outlined' sx={{ marginTop: '20px', float: 'right' }} onClick={handleSubmitNote}>
          Share this daily note!
        </Button>
      </Box>

      <Divider />
      <Box sx={{ float: 'left', width: '100%' }}>
        <Button size="large" variant='outlined' sx={{ marginTop: '30px', clear: 'both', float: 'left' }} onClick={handleNewPost}>
          Post a new article
        </Button>

        <Box sx={{ clear: 'both', marginTop: '90px' }}>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {posts.map(ele => {
              return (
                <PostCard {...ele} key={ele.id} />
              )
            })}

          </Masonry>
        </Box>
      </Box>

    </Box>
  )
}

export default function Post(props) {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [avatar, setavatar] = useState('');
  const [id, setid] = useState('');
  const [description, setdescription] = useState('');
  const [post, setPost] = React.useState("**Hello world!!!**");
  const [userObj, setUserObj] = useState({})
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      url: `${baseURL}/api/user/profile`
    }).then(res => {
      const user = res.data.userObj || JSON.parse(localStorage.getItem('userObj'));
      setUserObj(user)
      setLoading(false);
      if (user.id == undefined) {
        navigate('/');
      }
    })
  }, [])

  if(loading){
    return (
      <div>Loading...</div>
    )
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
        height: '400px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <UserLeftBar {...userObj} />
      </Box>

      <Routes>
        <Route path='newpost' element={<NewPost />} />
        <Route path='*' element={<MyPosts />} />
      </Routes>
    </Container>
  )
}



