// Function to get the current page title
function getPageTitle() {
  return document.title;
}

// Function to collect all links on the page
function collectLinks() {
  return Array.from(document.querySelectorAll("a")).map((a) => a.href);
}

// Function to save the data to session storage
function saveDataToSessionStorage(title, links) {
  // Retrieve existing data from session storage
  let data = sessionStorage.getItem("pageLinks");
  data = data ? JSON.parse(data) : {};

  // Add new data
  data[title] = links;

  // Convert the object to a JSON string and save it to session storage
  sessionStorage.setItem("pageLinks", JSON.stringify(data));
}

// Function to get the data from session storage
function getDataFromSessionStorage() {
  let data = sessionStorage.getItem("pageLinks");
  return data ? JSON.parse(data) : {};
}

// Example usage
const title = getPageTitle();
const links = collectLinks();
saveDataToSessionStorage(title, links);

// Retrieve and log the data from session storage
const storedData = getDataFromSessionStorage();
