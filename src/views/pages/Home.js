import Sidebar from "../components/Sidebar.js"
import Notification from './../components/Notification.js';
import RedFlagForm from './../components/RedFlagForm.js';
import Cards from '../components/Cards.js';


// importing store and actions
import {store} from "../../store/index.js";
import { getRedFlag } from "../../store/actions/RedFlagAction.js";

// state of this component
// this will help presist the data so that when a user navigate somewhere else to keep the data
let posts;

// main component which is an object with some propeties
let Home = {
  render: async () => {
      if(!posts){
        //   preventing the the getRedflag to be called when it have been called
          await getRedFlag();
        //   post must be undefined
          console.log(posts);
      }
    //   subscribing to the store to get data when there is any changed 
    store.subscribe(newState => {
      posts= newState.redFlags.data;
    });
    
    // getting some components to build the UI
    let SidebarHome = await Sidebar.render();
    let RedFlagFormHome = await RedFlagForm.render();
    let NotificationHome = await Notification.render();
    const output = await Cards.render(posts);

    // building the component
     let view = /*html*/ `
            <div class="content home">
                ${SidebarHome} 
                <div class="center">
                    ${RedFlagFormHome}
                    <div class="posts">
                      ${output}
                    </div>
                </div>
                <div class="s-hide">
                    ${NotificationHome}
                </div>
            </div>`;
    return view;
  },
  // All the code related to DOM interactions and controls
  events: async () => {
    await Sidebar.events();
    await RedFlagForm.events();
    await Notification.events();
    await Cards.events();
  }
};

export default Home;
