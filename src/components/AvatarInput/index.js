import React, { useState } from 'react';
import { MdCameraAlt } from 'react-icons/md';

import { Container, Preview, Input, Overflow } from './styles';

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
      <Container style={style} htmlFor="file">
        <div>{preview && <Preview src={preview} alt="Preview" />}</div>

        <Overflow className="overflow">
          <MdCameraAlt size={30} color="rgba(0, 0, 0, 0.5)" />

          <div>
            <span>ALTERAR FOTO</span>
          </div>
        </Overflow>
        <Input id="file" type="file" onChange={handleImageChange} />
      </Container>
    </>
  );
}
