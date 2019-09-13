import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MdClose, MdModeEdit } from 'react-icons/md';

import PostHeader from './PostHeader';
import PostInteractions from './PostInteractions';
import Comment from './Comment';

import { Container, PostContent, Content, SaveButton } from './styles';

export default function Posts({ postInfo: post, handleDelete }) {
  const profile = useSelector(state => state.user.profile);

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(post.content);
  const [comments, setComments] = useState([])

  useEffect(() => {
    setComments(post.comments);
  }, [post.comments])

  useEffect(() => {
    function resizeTextArea() {
      const element = document.getElementById(post.id);

      return (element.style.height = `${element.scrollHeight}px`);
    }

    resizeTextArea();
  }, [post.content, post.id]);



  return (
    <Container>
      <PostHeader
        profile={profile}
        user={post.user}
        post={post}
        setEditing={setEditing}
        handleDelete={handleDelete}
      />

      <PostContent>
        <Content
          id={post.id}
          className="post-content"
          value={value}
          onChange={e => setValue(e.target.value)}
          disabled={!editing}
        />
        {editing && <SaveButton>Salvar post</SaveButton>}
      </PostContent>

      <PostInteractions likes={post.likes} comments={post.comments} />

      {comments.map(comment => <Comment comment={comment} />)}
    </Container>
  );
}
