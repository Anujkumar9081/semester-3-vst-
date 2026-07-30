import React, { useState } from 'react'
import LikeCount from './components/LikeCount'
import LikeButton from './components/LikeButton'

const App = () => {
  const [likes, setLike] = useState(0);

  function handleLike() {
    setLike(likes + 1);
  }

  return (
    <div>
      <LikeCount likes={likes} />
      <LikeButton handleLike={handleLike} />
    </div>
  )
}

export default App