const commentBtns = document.querySelectorAll(".commentBtn");
const commentInputs = document.querySelectorAll(".commentInput");
const commentBoxes = document.querySelectorAll(".commentBox");

commentBtns.forEach(function (el, i) {
  commentBtns[i].addEventListener("click", function () {
    const commentWrapper = document.createElement("div");
    const comment = document.createElement("div");
    const img = document.createElement("img");

    commentWrapper.className = "commentWrapper";
    comment.className = "chatBox comment";
    comment.innerHTML = `<span class="bold">justcode_bootcamp</span> ${commentInputs[i].value}`;
    img.className = "commentHeart";
    img.src = "img/heart.png";

    if (commentInputs[i].value !== "") {
      commentWrapper.append(comment);
      commentWrapper.append(img);
      commentBoxes[i].append(commentWrapper);
      commentInputs[i].value = "";
    }
  });
});
