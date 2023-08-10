import React from 'react'
import Post from './components/Post'
import { FaHeart, FaRetweet, FaComment, FaRegArrowAltCircleDown} from "react-icons/fa";


const ANAKIN_IMAGE = "https://static1.personality-database.com/profile_images/0bee799c000d49c2b5719bb60dce8a68.png";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const data = [
  {
    author: {
    name: "Anakin skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader",
    },
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  image: RAY_IMAGE,
  date: "26 Febr.",
  chat: <FaComment />,
  repost: <FaRetweet />,
  like: <FaHeart />,
  download: <FaRegArrowAltCircleDown />,

},
]

function App() {

  return (
    <>
      {data.map((item, i) => 
        <Post post={item} key={i}/>     
      )}

    </>
    
  );
}

export default App;