import React, { useState, useEffect } from 'react';

import { Container, Likes, Comments } from './styles';

export default function PostInteractions({ likes, comments }) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [likesList, setLikesList] = useState([]);
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    if (likesList.length > 0 || commentsList.length > 0)
      return setIsEmpty(false);
  }, [likesList, commentsList]);

  useEffect(() => {
    setLikesList(likes);
    setCommentsList(comments);
  }, [likes, comments]);

  return (
    <Container isEmpty={isEmpty}>
      {likesList && likesList.length !== 0 && (
        <Likes>
          {likesList.length === 1
            ? `1 curtida`
            : `${likesList.length} curtidas`}
        </Likes>
      )}

      {commentsList && commentsList.length !== 0 && (
        <Comments>
          {commentsList.length === 1
            ? `1 comentario`
            : `${commentsList.length} comentarios`}
        </Comments>
      )}
    </Container>
  );
}
