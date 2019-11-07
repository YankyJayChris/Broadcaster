import Sidebar from "../components/Sidebar.js";
import myMap from "../components/Map.js";
import Cards from "../components/Cards.js";
import Dashborad from './../components/Dashborad.js';

// importing store and actions
import { store } from "../../store/index.js";
import { getRedFlag } from "../../store/actions/RedFlagAction.js";

// state of this component
// this will help presist the data so that when a user navigate somewhere else to keep the data

let Feed = {
  render: async posts => {
    
    let feeds;
    //   subscribing to the store to get data when there is any changed
    store.subscribe(newState => {
      feeds = newState.redFlags.data;
    });

    // getting some components to build the UI
    let SidebarHome = await Sidebar.render();
    let DashboradFeed = await Dashborad.render();
    const output = await Cards.render(feeds);

    // building the component
    let view = /*html*/ `
            <div class="content home">
                ${SidebarHome} 
                <div class="center">
                    ${DashboradFeed}
                    <div class="posts">
                      ${output}
                    </div>
                </div>
                <div id="map-container" class="s-hide map-container">
                    ${await myMap.render()}
                </div>
            </div>`;
    return view;
  },
  // All the code related to DOM interactions and controls
  events: async () => {
    await Sidebar.events();
    await Cards.events();
    await myMap.events();
    await Dashborad.events();
  }
};

export default Feed;
