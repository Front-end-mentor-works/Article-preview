const shareBtn = document.querySelector(".share-btn");
shareBtn.addEventListener("mouseover", () => {
  console.log("screen width", screen.width);
  if (screen.width < 375) {
    hideAuthorDetails();
    changeBtnPosition();
  }
});
function changeBtnPosition() {
  const author = document.querySelector(".author-box");

  if (author.hasChildNodes()) {
    const detailsDiv = document.querySelector(".details");
    // console.log(author.children);
    // author.removeChild(author.children[2]);
    author.removeChild(shareBtn);
    author.appendChild(shareBtn);
    detailsDiv.classList.toggle("fix-flex");
    document.querySelector(".share-box").classList.toggle("share-box-mobile");
    author.classList.toggle("set-flex");
  }
}

function hideAuthorDetails() {
  const authorDetails = document.getElementById("author-details");
  const authorImg = document.querySelector(".author-box img");
  authorDetails.classList.toggle("hide");
  authorImg.classList.toggle("hide");
}
