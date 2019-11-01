let Cards = {
  render: async (posts) => {
    let view = posts
      .map(
        post => `
            <div class="card column">
                <div class="image-video-container">
                    <img class="myslide" src="https://images.pexels.com/photos/3136078/pexels-photo-3136078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="redflag-image">
                    <button class="display-btn d-left">&#10094;</button>
                    <button class="display-btn d-right" >&#10095;</button>
                </div>
                <div class="row user-data ">
                    <div class="user-image">
                        <img class="myslide avatar" src="https://images.pexels.com/photos/3136078/pexels-photo-3136078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="redflag-image">
                    </div>
                    <div class="column user-names-time child">
                        <h3>myusername</h3>
                        <span>12:45 am</span>
                    </div>
                    <div class="edit-btn">
                        <button class="btn">Edit</button>
                    </div>
                </div>
                <div class="desc">
                    <p>${post.body}</p>
                </div>
                <div class="row comment-status">
                    <div class="comment-btn child f-center"><h3>Comment</h3></div>
                    <div class="comment-btn child f-center"><h3>Status: Draft</h3></div>
                </div>
            </div>
        `
      )
      .join("\n");
    return view;
  },
  events: async () => {}
};
export default Cards;
