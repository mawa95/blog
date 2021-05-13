import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  font-family: Karla, "Helvetica Neue", Arial, Helvetica, Verdana, sans-serif;
  display:flex;
  justify-content: center;
  align-items:felx-start;
  flex-direction:column; 
  background: #fafafa;
  color: #585858;
`;
const Name = styled.h5`
    font-weight:bold;
    font-family: Lora, "Helvetica Neue", Arial, Helvetica, Verdana, sans-serif;
`;

const CommentPost = (props) => {
    
    return(
        <Wrapper>
            <Name>{props.commentName}:</Name>
           <p>{props.commentContent}</p>
        </Wrapper>
    )
}
export default CommentPost;