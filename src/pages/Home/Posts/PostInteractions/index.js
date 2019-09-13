import React, { useState, useEffect } from 'react';

import { Container, Likes, Comments } from './styles';

export default function PostInteractions({ likes, comments }) {
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (likes.length > 0 || comments.length > 0) return setIsEmpty(false);
  }, [likes, comments]);

  return (
    <Container isEmpty={isEmpty}>
      {likes && likes.length !== 0 && (
        <Likes>
          {likes.length === 1 ? `1 curtida` : `${likes.length} curtidas`}
        </Likes>
      )}

      {comments && comments.length !== 0 && (
        <Comments>
          {comments.length === 1 ? `1 comentario` : `${comments.length} comentarios`}
        </Comments>
      )}
    </Container>
  );
}
