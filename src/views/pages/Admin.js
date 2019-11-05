import Sidebar from "../components/Sidebar.js";
import Dashborad from "./../components/Dashborad.js";

let Feed = {
  render: async () => {
    let SidebarFeed = await Sidebar.render();
    let DashboradFeed = await Dashborad.render();
    return /*html*/ `
            <div class="admin-page">
               ${SidebarFeed} 
               <div class="admin-center">
                    ${DashboradFeed}
               </div>

            </div>
        `;
  },
  // All the code related to DOM interactions and controls
  events: async () => {
    Sidebar.events();
    Dashborad.events();
  }
};

export default Feed;
