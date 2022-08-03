const commentsBtn = document.querySelector(".commentsBtn");
const commentsInput = document.querySelector(".commentsInput");
const commentsBox = document.querySelector(".commentsBox");

function leaveComments(e) {
  const commentsWrapper = document.createElement("div");
  const comments = document.createElement("div");
  const img = document.createElement("img");

  commentsWrapper.className = "commentsWrapper";
  comments.className = "chatBox comments";
  comments.innerHTML = `<span class="bold">justcode_bootcamp</span> ${e.value}`;
  img.className = "commentsHeart";
  img.src = "img/heart.png";

  commentsWrapper.append(comments);
  commentsWrapper.append(img);
  commentsBox.append(commentsWrapper);

  commentsInput.value = "";
}

commentsBtn.addEventListener("click", function () {
  leaveComments(commentsInput);
});
