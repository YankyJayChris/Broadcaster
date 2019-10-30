import Sidebar from "../components/Sidebar.js"
import Notification from './../components/Notification.js';
import RedFlagForm from './../components/RedFlagForm.js';

let Home = {
  render: async (posts) => {
      let SidebarHome = await Sidebar.render();
      let RedFlagFormHome = await RedFlagForm.render();
      let NotificationHome = await Notification.render();
    return /*html*/ `
            ${SidebarHome} 
            <div class="content">
               
               <div class="center">
                    ${RedFlagFormHome}
               </div>
               ${NotificationHome}
            </div>
        `;
  },
  // All the code related to DOM interactions and controls
  events: async () => {
      Sidebar.events();
      RedFlagForm.events();
      Notification.events();
  }
};

export default Home;
