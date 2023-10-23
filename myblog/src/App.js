import {useState,useEffect} from 'react'
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setBlogs(data)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
       <h1>All Blogs</h1>
       {
        blogs && blogs.map(blog => (
          <div key={blog.id}>{blog.title}</div>
        ))
       }
      </header>
    </div>
  );
}

export default App;
