import { useEffect, useState } from "react";
import Preloader from '../Preloader/Preloader';


const Users = () => {
    const [users, setUsers] = useState([]);

    const [preloader, setPreloader] = useState(false);

    useEffect(() => {
      toogleVisblePreloader()
      Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((res) => setUsers(res))
      ]).then(() => toogleVisblePreloader())
      
    }, []);

    const toogleVisblePreloader = () => {
      setPreloader((preloader) => !preloader)
    }

    return (
      <div className={"wrapper"}>
        {preloader ? <Preloader /> :
        <ul className="users-container">
            {users.map(user => <li key={'user-' + user.id}>{user.name}</li>)}   
        </ul>   
        }
      </div>
    );
};

export default Users;