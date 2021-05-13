import React from 'react';
import styled from 'styled-components';
const Form = styled.form`
  width: 100vw;
  font-family: Karla, "Helvetica Neue", Arial, Helvetica, Verdana, sans-serif;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column; 
  background: #fafafa;
  color: #585858;
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
const Title = styled.h3`

  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0;
  font-size: 50px;
  text-align: center;
  font-family: Dancing Script, cursive;
  font-weight: bold;
`;
const Button = styled.button`
  background-color: #a3b5a7;
 
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  letter-spacing: 2px;
  margin: 2px;
  cursor:pointer;
`;
const EditPost = (props) => {
    return (
        <>
          <Form>
            <Title>Edit Post</Title>
            <Input
              defaultValue={props.title}
              onChange={props.savePostTitle}
              text
              placeholder="Title"
              ></Input>
           
            <Textarea
              defaultValue={props.content}
              placeholder="Post content"
              onChange={props.savePostContent}
            ></Textarea>
            <Button onClick ={props.updatePost}>Update</Button>
          </Form>
        </>
      );
    };

export default EditPost;