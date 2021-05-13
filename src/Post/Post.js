import React, {useState, useRef} from 'react';
import CreateComment from '../CreateComment/CreateComment'
import CommentPost from '../CommentPost/CommentPost';
import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.primary ? "#F28482" : "#a3b5a7"};

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

const Article = styled.article`
    box-sizing: border-box;
    width: 90vw;
    background: white;
    
    margin:10px;
    box-shadow: 0px 0px 10px 1px #E8EDE9;

`;

const CommentSection = styled.section`
    width: 90vw;
`;
const Post = ({ postTitle, postContent, editPost, id, deletePost}) => {
    const [isComment, setIsCommentPost] = useState(false);
    const [commentName, setCommentName] = useState("");
    const [commentContent, setCommentContent] = useState("");
    const [comments, setComments] = useState([]);

    const getCommentName = useRef();
    const getCommentContent = useRef();

    const toggleComment = () => {
        setIsCommentPost(!isComment)
    }
    
    const saveCommentName = e => {
        setCommentName(e.target.value);
        
        
    };
    const saveCommentContent = e => {
        setCommentContent(e.target.value);
        
        
    }
    const saveComment = (id) => {
       
        setComments([...comments, {commentName, commentContent, id}]);
        toggleComment();
    };
    if(isComment){
        return(
          
              <CreateComment
                  name={saveCommentName}
                  comment={saveCommentContent}
                  getCommentName={getCommentName}
                  getCommentContent={getCommentContent}
                  saveComment={saveComment}
              />
           
        )
    }
    return(
        <>
            <Article>
                <h3>{postTitle}</h3>
                <p>{postContent}</p>
                <Button onClick={() => editPost(id)}>edit</Button>
                <Button primary onClick={() => deletePost(id)}>delete</Button>
                <Button onClick={() => saveComment(id)}>comment</Button>
            
            </Article>
            <CommentSection>
                <h5>Comments: </h5>
                <CommentPost
                    commentName={commentName}
                    commentContent={commentContent}
                />

            </CommentSection>
        </>
    )
    
}
export default Post;