import Sidebar from "../components/Sidebar.js"
import RedFlagForm from './../components/RedFlagForm.js';
import Cards from '../components/Cards.js';
import myMap from '../components/Map.js';


// main component which is an object with some propeties
let Home = {
  render: async () => {
 
    // getting some components to build the UI
    let SidebarHome = await Sidebar.render();
    let RedFlagFormHome = await RedFlagForm.render();
    const output = await Cards.render();

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
