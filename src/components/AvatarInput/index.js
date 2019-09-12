import React, { useState } from 'react';

import { Container, Preview, Input } from './styles';

export default function AvatarInput({ style, setFile, defaultPreview }) {
  const [preview, setPreview] = useState(
    defaultPreview || 'http://localhost:3333/static/avatars/default.png'
  );

  function handleImageChange(e) {
    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);

    reader.onload = async event => {
      setPreview(event.target.result);
    };

    const file = new FormData();

    file.append('file', e.target.files[0]);

    setFile(file);
  }

  return (
    <>
      <Container htmlFor="file">
        <div style={style}>
          {preview && <Preview src={preview} alt="Preview" />}
        </div>
        <Input id="file" type="file" onChange={handleImageChange} />
      </Container>
    </>
  );
}
