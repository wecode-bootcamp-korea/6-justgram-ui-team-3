const commentsBtns = document.querySelectorAll(".commentsBtn");
const commentsInputs = document.querySelectorAll(".commentsInput");
const commentsBoxes = document.querySelectorAll(".commentsBox");

for (let i = 0; i < commentsBtns.length; i++) {
  commentsBtns[i].addEventListener("click", function () {
    const commentsWrapper = document.createElement("div");
    const comments = document.createElement("div");
    const img = document.createElement("img");

    commentsWrapper.className = "commentsWrapper";
    comments.className = "chatBox comments";
    comments.innerHTML = `<span class="bold">justcode_bootcamp</span> ${commentsInputs[i].value}`;
    img.className = "commentsHeart";
    img.src = "img/heart.png";

    commentsWrapper.append(comments);
    commentsWrapper.append(img);
    commentsBoxes[i].append(commentsWrapper);

    commentsInputs[i].value = "";
  });
}
