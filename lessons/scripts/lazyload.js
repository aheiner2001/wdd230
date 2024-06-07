const lastModifiedElement = document.querySelector("#lastModified");
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = lastModifiedDate.toDateString();