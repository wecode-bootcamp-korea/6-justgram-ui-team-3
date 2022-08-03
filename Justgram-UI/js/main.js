const uploadBtn = document.querySelector(".upload-btn");
const uploadIdInput = document.querySelector(".upload-id-input");
const uploadCmInput = document.querySelector(".upload-comment-input");

function uploadComment(idContent, commentContent) {
  commentContent = uploadCmInput.value;
  idContent = uploadIdInput.value;

  //댓글 내용 업로드//
  const uploadCommentSpace = document.querySelector(".comment-text-box");
  const li = document.createElement("li");

  const id = document.createElement("span");
  id.innerHTML = idContent;

  const comment = document.createElement("p");
  comment.innerHTML = commentContent;

  li.append(id, comment);
  uploadCommentSpace.appendChild(li);

  uploadIdInput.value = "";
  uploadCmInput.value = "";
}

uploadBtn.addEventListener("click", () => {
  if (uploadIdInput.value.length > 0 && uploadCmInput.value.length > 0) {
    uploadComment();
  }
});

uploadCmInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    if (uploadIdInput.value.length > 0 && uploadCmInput.value.length > 0) {
      uploadComment();
      console.log("enter push");
    }
  }
});


console.dir(uploadIdInput);
