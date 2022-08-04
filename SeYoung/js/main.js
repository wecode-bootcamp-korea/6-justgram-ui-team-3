//미션4 댓글 추가 기능 구현

const commentWriteInput = document.getElementsByClassName("comments-input");
const commentWriteButton = document.getElementsByClassName("upload-button");
const commentList = document.getElementsByClassName("feed-comment-list");

Array.from(commentWriteButton).forEach((button, index) => {
  button.addEventListener("click", () => {
    const content = commentWriteInput[index].value;

    const childElem = document.createElement("div");

    const nameSpan = document.createElement("span");
    nameSpan.className = "comment-name";
    nameSpan.textContent = "seeyong_0";
    //닉네임 붙이고, 댓글붙이고
    childElem.append(nameSpan, content);

    commentList[index].appendChild(childElem);
  });
});
// commentWriteButton.addEventListener("click", () => {
//   const content = commentWriteInput.value;

//   const nameSpan = document.createElement("span");
//   nameSpan.className = "comment-name";
//   //자식요소를 만들고
//   const childElem = document.createElement("div");
//   nameSpan.textContent = "seeyong_0";
//   //닉네임 붙이고, 댓글붙이고
//   childElem.append(nameSpan, content);

//   commentList.appendChild(childElem);
// });
