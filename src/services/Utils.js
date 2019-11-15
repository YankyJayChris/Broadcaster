
const Utils = {
  //  get a url and break it into resource, id and verb

  getURL: () => {
    // let pathname = window.location.pathname;

    let url = location.hash.slice(1).toLowerCase() || "/";
    let r = url.split("/");
    let request = {
      resource: null,
      id: null,
      verb: null,
      url: null
    };
    request.resource = r[1];
    request.id = r[2];
    request.verb = r[3];
    request.url = url;

    console.log(request.url);
    return request;
  },
  routeTo: route => {
    window.location.href = `${route}`;
  }
};

export default Utils;