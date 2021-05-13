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
const CreateComment = (props) => {
   
    
    
    return(
        <>
           <Form onSubmit={props.saveComment}>
                <h3>Comment post</h3>
                <input
                
                onChange={props.name}
                type="text"
                placeholder="Your name"
                ref={props.getCommentName}
                required
                ></input>
                <textarea 
                onChange={props.comment}
                placeholder="comment"
                ref={props.getCommentContent}
                required
                ></textarea>
                <Button>add comment</Button>
            </Form> 
        </>
    )
}
export default CreateComment;