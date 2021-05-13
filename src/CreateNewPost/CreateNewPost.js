import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #a3b5a7;
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
const Wrapper = styled.div`
    width: 90vw;
  height: 100wh;
  font-family: Karla, "Helvetica Neue", Arial, Helvetica, Verdana, sans-serif;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column; 
  background: #fafafa;
  color: #585858;
`;
const Form = styled.form`
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction:column; 
`;
const Title = styled.h3`

  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0;
  font-size: 50px;
  text-align: center;
  font-family: Dancing Script, cursive;
  font-weight: bold;
`;
const Input = styled.input`
    width: 300px;
    height: 30px;
    margin: 10px 0;
`;
const Textarea = styled.textarea`
    width: 300px;
    height: 100px;
    margin: 10px 0;
`;

const CreateNewPost = (props) => {
    return(
        <Wrapper>
            <Form onSubmit={props.savePost}>
                <Title>Create new post</Title>
                <label>Post title</label>
                <Input
                onChange={props.postTitle}
                ref={props.getPostTitle}
                type="text" 
                placeholder="Title"
                required
                ></Input>
                <label>Post content</label>
                <Textarea
                onChange={props.postContent} 
                ref={props.getPostContent}
                placeholder="Type some text"
                required
                ></Textarea>
                <Button>Add post</Button>
            </Form>   
        </Wrapper>
    )
}

export default CreateNewPost;