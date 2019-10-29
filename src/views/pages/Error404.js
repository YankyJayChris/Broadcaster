let Error404 = {
  render: async () => {
    let view = /*html*/ `
            <div class="content">
                <h1> 404 Error </h1>
            </div>
        `;
    return view;
  },
  events: async () => {}
};
export default Error404;
