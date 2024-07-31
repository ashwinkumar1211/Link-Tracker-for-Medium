class LinkStore {
  constructor() {}
  saveDataToSessionStorage = (title, links) => {
    let data = sessionStorage.getItem("linkStore");
    data = data ? JSON.parse(data) : {};

    data[title] = links;

    sessionStorage.setItem("linkStore", JSON.stringify(data));
  };
  getDataFromSessionStorage = () => {
    let data = sessionStorage.getItem("linkStore");
    return data ? JSON.parse(data) : {};
  };
  getLinkDataForTitle = (title) => {
    let data = sessionStorage.getItem("linkStore");
    data = data ? JSON.parse(data) : {};
    return data[title] ? data[title] : [];
  };
}

export default LinkStore;
