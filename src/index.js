console.log("script launched");
let detailsImage=document.querySelector(".details-image");
let detailsTitle=document.querySelector(".details-title");
let detailsNamesColon=document.querySelectorAll(".thumbnails-title")
let anchors=document.querySelectorAll(".thumbnails-anchor");
for(let i=0; i<anchors.length; i++){
    anchors[i].addEventListener("click", function(event){
        event.preventDefault();
        setDetails(anchors[i],detailsNamesColon[i]);
    })
}
function setDetails(anchor,colon){
    console.log("anchor element was pressed", anchor);
    detailsImage.setAttribute("src", anchor.getAttribute("href"));
    detailsTitle.textContent=colon.textContent+": "+anchor.getAttribute("data-details-title");
}