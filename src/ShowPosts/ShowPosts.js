import React, {useState, useRef} from 'react';
import CreateNewPost from '../CreateNewPost/CreateNewPost';
import Post from '../Post/Post';
import EditPost from '../EditPost/EditPost';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  font-family: Karla, "Helvetica Neue", Arial, Helvetica, Verdana, sans-serif;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column; 
  background: #fafafa;
  color: #585858;
`;
const Button = styled.button`
  background-color: #FCBA04;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  letter-spacing: 2px;
  cursor:pointer;
`;

const Title = styled.h1`

  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0;
  font-size: 50px;
  text-align: center;
  font-family: Dancing Script, cursive;
  font-weight: bold;
`;
const Text = styled.p`
  
`;

const ShowPosts = () => {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [posts, setPosts] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    const [isUpdatePost, setIsUpdatePost] = useState(false);
    const [editPostId, setEditPostId] = useState("");

 

    const getPostTitle = useRef();
    const getPostContent = useRef();
   

    const savePostTitle = e => {
        setPostTitle(e.target.value);
    };
    const savePostContent = e => {
        setPostContent(e.target.value);
    };
    const savePost = e => {
        e.preventDefault();
        const id = Date.now();
        setPosts([...posts, {postTitle, postContent, id}]);
        setPostTitle("");
        setPostContent("");
        getPostTitle.current.value = "";
        getPostContent.current.value = "";
        toggleCreateNewPost();
        
    };
    const toggleCreateNewPost = () => {
        setIsCreateNewPost(!isCreateNewPost);
    };
    const toggleUpdatePost = () => {
        setIsUpdatePost(!isUpdatePost)
    }
    
    const editPost = id => {
        setEditPostId(id);
        toggleUpdatePost();
    };
    const updatePost = e => {
        e.preventDefault();
        const updatedPost = posts.map(post => {
          if (post.id === editPostId) {
            return {
              ...post,
              postTitle: postTitle || post.postTitle,
              postContent: postContent || post.postContent
            };
          }
          return post;
        });
        setPosts(updatedPost);
        toggleUpdatePost();
    };
    const deletePost = id => {
        const modifiedPost = posts.filter(post => {
          return post.id !== id;
        });
        setPosts(modifiedPost);
    };
   
    if(isCreateNewPost){
        return(
            <Wrapper>
                <CreateNewPost
                    postTitle={savePostTitle}
                    postContent={savePostContent}
                    getPostTitle={getPostTitle}
                    getPostContent={getPostContent}
                    savePost={savePost}           
                />
            </Wrapper>
        )
    }

    else if (isUpdatePost) {
        const post = posts.find(post => {
          return post.id === editPostId;
        });
        return (
          <Wrapper>
            <EditPost
            title={post.postTitle}
            content={post.postContent}
            updatePost={updatePost}
            savePostTitle={savePostTitle}
            savePostContent={savePostContent}
            />
          </Wrapper>
        );
      }

 

    return (
        <Wrapper>
          <Title>Simple blog</Title>
          <Button onClick={toggleCreateNewPost}>Create New Post</Button>
          {!posts.length ? (
          <div>
            <Text>Nothing here yet. Click yellow button to add some content</Text>
          </div>
          ) : (
          posts.map(post => {
            return (
              
                <Post
                  id={post.id}
                  key={post.id}
                  postTitle={post.postTitle}
                  postContent={post.postContent}
                  editPost={editPost}
                  deletePost={deletePost}
                />
              
    
              );
            
            })
          )}

          
        </Wrapper>
    )
}

export default ShowPosts;