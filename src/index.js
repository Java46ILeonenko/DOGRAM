console.log("Script launched");

let detailsAudio = document.querySelector(".details-audio");

let detailsImage = document.querySelector(".details-image");
let anchors = document.querySelectorAll(".thumbnails-anchor");
let detailsTitle = document.querySelector(".details-title");
let mainContentEl = document.querySelector(".main-content");
let selectedItem;
for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event) {
        event.preventDefault();
        showDetails();
        setDetails(anchors[i]);
    });
}
function setDetails(anchor){
    console.log("anchor was pressed", anchor);
    let hrefValue = anchor.getAttribute("href");
    detailsImage.setAttribute("src", hrefValue);
    anchor.parentElement.classList.add("selected");
    if (selectedItem){
        selectedItem.classList.remove("selected");
    }
    selectedItem = anchor.parentElement;
    let thumbnailsTitleSelector = `[href="${hrefValue}"] .thumbnails-title`;
    let thumbnailsTitleElement = document.querySelector(thumbnailsTitleSelector);
    detailsTitle.textContent = `${thumbnailsTitleElement.textContent}: ${anchor.getAttribute("data-details-title")}`;

    let thumbnailsSoundlector = `[href="${hrefValue}"] .thumbnails-audio`;
    let thumbnailsSoundEl = document.querySelector(thumbnailsSoundlector);
    let srcValue = thumbnailsSoundEl.getAttribute("src");
    detailsAudio.muted = false;
    detailsAudio.setAttribute("src", srcValue);
}
function showDetails() {
    mainContentEl.classList.remove('hidden');
    detailsImage.parentElement.classList.add('is-tiny');
    setTimeout(removeIsTiny);
}
function removeIsTiny() {
    detailsImage.parentElement.classList.remove('is-tiny');
}
function hideDetails(){
    mainContentEl.classList.add('hidden');
    if (selectedItem) {
        selectedItem.classList.remove('selected');
    }
}