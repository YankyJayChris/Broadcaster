import Sidebar from "../components/Sidebar.js";
import Cards from "../components/Cards.js";
import Dashborad from './../components/Dashborad.js';



let Feed = {
  render: async posts => {

    // getting some components to build the UI
    let SidebarHome = await Sidebar.render();
    let DashboradFeed = await Dashborad.render();
    const output = await Cards.render();

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
                    
                </div>
            </div>`;
    return view;
  },
  // All the code related to DOM interactions and controls
  events: async () => {
    await Sidebar.events();
    await Cards.events();
    await Dashborad.events();
  }
};

export default Feed;
