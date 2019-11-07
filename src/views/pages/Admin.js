import Sidebar from "../components/Sidebar.js";
import Dashborad from "./../components/Dashborad.js";
import AdminTable from './../components/AdminTable.js';


// importing store and actions
import {store} from "../../store/index.js";
import { getRedFlag } from "../../store/actions/RedFlagAction.js";

let posts;
let Admin = {
  render: async () => {
    if (!posts) {
      //   preventing the the getRedflag to be called when it have been called
      await getRedFlag();
      //   post must be undefined
      console.log(posts);
    }
    //   subscribing to the store to get data when there is any changed
    store.subscribe(newState => {
      posts = newState.redFlags.data;
    });

    // getting some components to build the UI
    let SidebarAdmin = await Sidebar.render();
    let DashboradAdmin = await Dashborad.render();

    let view = /*html*/ `
            <div class="admin-page">
               ${SidebarAdmin} 
               <div class="admin-center">
                    ${DashboradAdmin}
                    <div class="card m-top overflow">
                      <table id="admin-table">
                      <tr>
                          <th>#</th>
                          <th>Title</th>
                          <th>Type</th>
                          <th>Location</th>
                          <th>View</th>
                      </tr>
                        ${await AdminTable.render(posts)}
                      </table>
                   </div> 
               </div>

            </div>
        `;

    return view;
  },
  // All the code related to DOM interactions and controls
  events: async () => {
    Sidebar.events();
    Dashborad.events();
  }
};

export default Admin;
