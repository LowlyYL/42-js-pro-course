import { useEffect, useState, useContext } from "react";
import Cell from '../Cell/Cell';
import Preloader from '../Preloader/Preloader';
import { themeContext } from '../ThemeContext/ThemeContext'

import daySvg from '../img/day.svg';
import nightSvg from '../img/night.svg';

const FetchPosts = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [numberOfPosts, setNumberOfPosts] = useState(5);

    const [preloader, setPreloader] = useState(false);

    const [svg, setSvg] = useState(daySvg);

    const { theme, toggleTheme } = useContext(themeContext);

    useEffect(() => {
      toogleVisblePreloader()
      Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((res) => setPosts(res)),

        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((res) => setUsers(res))
      ]).then(() => toogleVisblePreloader())
      
    }, []);

    const toogleVisblePreloader = () => {
      setPreloader((preloader) => !preloader)
    }

    const toogleChangeTheme = () => {
      setSvg((svg) => svg === daySvg ? nightSvg : daySvg);
      toggleTheme()
    }

    const showMorePosts = () => {
      setNumberOfPosts((numberOfPosts) => numberOfPosts < 85 ? numberOfPosts + 5 : numberOfPosts = 5)
    }

    return (
      <div className={"wrapper" + ' ' + theme}>
        {preloader ? <Preloader /> : 
        <button className="theme" onClick={toogleChangeTheme}>
          <img src={svg} alt="moon" />
        </button>
        }
        {preloader ? null : 
        <div className={"Container " + ' ' + theme}>
          {posts.slice(0,numberOfPosts).map((data, index) => {
            const author = users.find(user => user.id === data.userId);
            return (
            <Cell key={'post-' + index} info={{ data, author }} id={data.id} />
            )
          })}
          <button className="Button" onClick={showMorePosts}>
            Show more
          </button>
        </div>
        }
      </div>
      
    );
};

export default FetchPosts;