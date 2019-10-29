let Header = {
  render: async () => {
    let view = /*html*/ `
            <header class="header">
                <div class="brand-search">
                    <div class="brand">
                        <h1>Broadcaster</h1>
                    </div>
                    <div class="search-form">
                        <input type="text" placeholder="Search Red-flag or intervation">
                    </div>
                    <div class="not-icon l-hide">
                        <i class="far fa-bell"></i>
                        <span class="bag">10</span>
                    </div>
                </div>
                <nav class="navbar">
                    <ul>
                        <li><span class="s-hide">Home</span> <i class="fa fa-home l-hide"></i></li>
                        <li><span class="s-hide">Feed</span> <i class="fa fa-newspaper l-hide"></i></li>
                        <li><span class="s-hide">Admin</span> <i class="fas fa-th-list l-hide"></i></li>
                        <li><span class="s-hide">Map</span> <i class="fas fa-map-marked-alt l-hide"></i></li>
                        
                    </ul>
                </nav>

            </header>`;
    return view;
  },
  events: async () => {}
};

export default Header;
