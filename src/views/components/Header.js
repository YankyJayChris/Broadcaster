import Utils from "./../../services/Utils.js";

let Header = {
  render: async () => {
      let url = Utils.getURL();
    let view = /*html*/ `
            
                <div class="brand-search">
                    <div class="brand">
                        <h1>Broadcaster</h1>
                    </div>
                    <div class="search-form">
                        <input type="text" placeholder="Search Red-flag or intervation">
                    </div>
                    <div class="not-icon l-hide">
                        <i class="far fa-bell"></i>
                        <span class="bag-danger">10</span>
                    </div>
                </div>
                <nav class="navbar">
                    <ul>
                        <li class=${url.url == "/home" ? "active" : ""}><a href="/#/home"><span class="s-hide">Home</span> <i class="fa fa-home l-hide"></i></a></li>
                        <li class=${url.url == "/feed" ? "active" : ""}><a href="/#/feed"><span class="s-hide">Feed</span> <i class="fa fa-newspaper l-hide"></i></a></li>
                        <li class=${url.url == "/admin" ? "active" : ""}><a href="/#/admin"><span class="s-hide">Admin</span> <i class="fas fa-th-list l-hide"></i></a></li>
                        <li class=${url.url == "/map" ? "active" : ""}><a href="/#/map"><span class="s-hide">Map</span> <i class="fas fa-map-marked-alt l-hide"></i></a></li>
                        
                    </ul>
                </nav>`;
    return view;
  },
  events: async () => {}
};

export default Header;
