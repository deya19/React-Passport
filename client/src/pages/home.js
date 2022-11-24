import React from 'react'
import Cart from '../components/Cart'
import {posts} from "../data"
const Home = () => {
  return (
    <div className='home'>
     {posts.map(post=>(
      <Cart post={post} key={post.id}/>
     ))}
    </div>
  )
}

export default Home