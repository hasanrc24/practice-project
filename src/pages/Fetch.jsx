import React, { useEffect, useState } from 'react'

const Fetch = () => {

  const [user, setUser] = useState(1);
  const [content, setContent] = useState('');
  const [image, setImage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('user', user);
    formData.append('content', content);
    formData.append('image', image);

    fetch('http://127.0.0.1:8000/api/status/', {
      method: 'POST',
      header: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData
    })
    .then(res => console.log(res))
  }
  return (
    <form onSubmit={handleSubmit} className='p-3 bg-slate-500 text-center'>
      <input type="number" name="id" id="number" value={user} onChange={(e) => setUser(e.target.value)} />
      <br />
      <br />
      <input type="text" name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
      <br />
      <br />
      <input type="file" name="file" id="file" onChange={(e) => setImage(e.target.files[0])} />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Fetch