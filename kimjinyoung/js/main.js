const commentBtns = document.querySelectorAll(".commentBtn");
const commentInputs = document.querySelectorAll(".commentInput");
const commentBoxes = document.querySelectorAll(".commentBox");

// 댓글 추가 로직
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

  commentInputs[i].addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
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
    }
  });
});
