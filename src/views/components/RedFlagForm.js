let RedFlagForm = {
  render: async () => {
    return /*html*/ `
            <div class="card create-redflag">
                <form id="create-form-redflag" >
                    <div class="row image-video">
                        <div class="child">
                            <i class="fa fa-edit"></i> 
                            <h3 class="s-hide">Create red-flag</h3>
                        </div>
                        <div class="child link">
                            <i class="fa fa-images"></i> 
                            <span class="s-hide"> Add images</span>
                            <span class="l-hide">images</span>
                            <input class="hide" id="imagefiles" type="file" />
                        </div>
                        <div class="child link">
                            <i class="fa fa-file-video"></i> 
                            <span class="s-hide"> Add Videos</span>
                            <span class="l-hide">Videos</span>
                            <input class="hide" id="videofiles" type="file" />
                        </div>
                    </div>
                    <div class="description">
                        <textarea name="description" placeholder="Create a red-flag or intervation" class="description full-with" ></textarea>
                    </div>
                    <div class="row location-tags">
                        <div class="child link">
                           <input type="text" placeholder="Add Location coordinates">   
                        </div>
                        <div class="child link">
                            <div>
                                <input type="text" placeholder=" Add Tags">
                            </div>
                        </div>
                        <div class="child">
                            <button class="btn post-btn">Post</button>
                        </div>
                    </div>
                </form>
            </div>
        `;
  },
  // All the code related to DOM interactions and controls
  events: async () => {}
};

export default RedFlagForm;