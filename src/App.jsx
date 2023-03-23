import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  // Fetch posts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      {
        posts.map(p => {
          console.log(p);

          return (
            <div className='post'>
              <h2>{p.title}</h2>
              <p>{p.body}</p>
            </div>
          )
        })
      }

    </div>
  )
}

export default App
