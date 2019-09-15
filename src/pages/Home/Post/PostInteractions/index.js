import React, { useState, useEffect } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container, Interactions, Likes, Comments, Actions } from './styles';

export default function PostInteractions({ likes, comments, postId, profile }) {
  const [isEmpty, setIsEmpty] = useState(false);
  const [likesList, setLikesList] = useState(likes || []);
  const [commentsList, setCommentsList] = useState(comments || []);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (likesList.length === 0 && commentsList.length === 0) {
      return setIsEmpty(true);
    }

    return setIsEmpty(false);
  }, [likesList, commentsList]);

  useEffect(() => {
    setCommentsList(comments);
  }, [comments]);

  useEffect(() => {
    function checkIfUserLiked() {
      const userAlreadyLiked = likes.findIndex(like => like === profile.id);

      if (userAlreadyLiked === -1) return;

      return setLiked(true);
    }

    checkIfUserLiked();
  }, [likes, profile.id]);

  async function handleLike(post_id) {
    try {
      await api.post(`/posts/${post_id}/like`);

      setLikesList([...likesList, profile.id]);
      setLiked(true);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  async function handleDislike(post_id) {
    try {
      await api.delete(`/posts/${post_id}/dislike`);

      const updatedLikes = likesList;

      const likeIndex = updatedLikes.findIndex(like => like === profile.id);

      updatedLikes.splice(likeIndex, 1);

      setLikesList([...updatedLikes]);
      setLiked(false);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <Container>
      <Interactions isEmpty={isEmpty}>
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
      </Interactions>

      <Actions liked={liked}>
        {liked ? (
          <>
            <button
              id="dislike"
              type="button"
              onClick={() => handleDislike(postId)}
            >
              <MdFavorite size={20} />
              <span>Descurtir</span>
            </button>
          </>
        ) : (
          <>
            <button id="like" type="button" onClick={() => handleLike(postId)}>
              <MdFavoriteBorder size={20} />
              <span>Curtir</span>
            </button>
          </>
        )}
      </Actions>
    </Container>
  );
}

PostInteractions.propTypes = {
  likes: PropTypes.arrayOf(PropTypes.number).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  postId: PropTypes.number.isRequired,
  profile: PropTypes.shape().isRequired,
};
