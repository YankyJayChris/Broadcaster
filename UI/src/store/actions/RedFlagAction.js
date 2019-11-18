import {store} from '../index.js';

// test action
export const getRedFlag = () =>{
    console.log("run");
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => store.dispatch({ type: "ADD_REDFLAGS", payload: data }))
    .catch(err => console.log(err));
}
