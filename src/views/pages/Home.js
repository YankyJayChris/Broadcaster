import Sidebar from "../components/Sidebar.js"
import myMap from '../components/Map.js';
import RedFlagForm from './../components/RedFlagForm.js';
import Cards from '../components/Cards.js';


// importing store and actions
import {store} from "../../store/index.js";
import { getRedFlag } from "../../store/actions/RedFlagAction.js";



// main component which is an object with some propeties
let Home = {
  render: async () => {
      let posts;
    //   subscribing to the store to get data when there is any changed 
    store.subscribe(newState => {
      posts= newState.redFlags.data;
    });
    
    // getting some components to build the UI
    let SidebarHome = await Sidebar.render();
    let RedFlagFormHome = await RedFlagForm.render();
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
                <div id="map-container" class="map-container">
                    ${await myMap.render()}
                </div>
            </div>`;
    return view;
  },
  // All the code related to DOM interactions and controls
  events: async () => {
    await Sidebar.events();
    await RedFlagForm.events();
    await Cards.events();
    await myMap.events();
  }
};

export default Home;
