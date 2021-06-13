import './App.css';
import { useEffect, useState } from "react";
import {BrowserRouter, Route, Switch, Redirect, NavLink, useParams, Link } from 'react-router-dom';
import FetchPosts from './fetch/FetchPosts.jsx';
import Users from './Users/Users';
import Comments from './Comments/Comments';

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((r) => r.json())
      .then((data) => setPost(data))
    ])
  }, [postId]);
  return post ? (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to={`/posts/${postId}/comments`} >Show comment</Link>
    </div>
  ) : <h1>sorry</h1>
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <headear className="headear">
          <NavLink activeClassName="active" to="/" exact >Users</NavLink>
          <NavLink activeClassName="active" to="/posts" exact >Posts</NavLink>
        </headear>
        <Switch>
          <Route path="/" component={Users} exact />
          <Route path="/posts" component={FetchPosts} exact />
          <Route path="/users" component={Users} exact />
          <Route path="/posts/:postId" component={PostDetails} exact />
          <Route path="/posts/:postId/comments" component={Comments} exact />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
