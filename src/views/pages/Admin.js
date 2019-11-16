import Sidebar from "../components/Sidebar.js";
import Dashborad from "./../components/Dashborad.js";
import AdminTable from './../components/AdminTable.js';



let Admin = {
  render: async () => {
    
    // getting some components to build the UI
    let SidebarAdmin = await Sidebar.render();
    let DashboradAdmin = await Dashborad.render();

    let view = /*html*/ `
            <div class="admin-page">
               ${SidebarAdmin} 
               <div class="admin-center">
                    ${DashboradAdmin}
                    <div class="card m-top overflow">
                      <h4 class="table-title">Table Title</h4>
                      <table id="admin-table">
                      <tr>
                          <th>#</th>
                          <th>Title</th>
                          <th>Type</th>
                          <th>Location</th>
                          <th>View</th>
                      </tr>
                        ${await AdminTable.render()}
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
