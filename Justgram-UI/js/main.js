const uploadBtn = document.querySelectorAll(".upload-btn");
const uploadIdInput = document.getElementsByClassName("upload-id-input");
const uploadCmInput = document.getElementsByClassName("upload-comment-input");
const totalInput = document.getElementsByClassName("comment-input");

console.log(Array.from(uploadCmInput));

Array.from(uploadBtn).forEach((button, index) => {
  button.addEventListener("click", () => {
    const commentContent = uploadCmInput[index].value;
    const idContent = uploadIdInput[index].value;

    if (idContent !== "" && commentContent !== "") {
      //댓글 내용 업로드//
      const uploadCommentSpace =
        document.getElementsByClassName("comment-text-box");
      const li = document.createElement("li");

      const id = document.createElement("span");
      id.innerHTML = idContent;

      const comment = document.createElement("p");
      comment.innerHTML = commentContent;

      li.append(id, comment);
      uploadCommentSpace[index].appendChild(li);

      uploadIdInput[index].value = "";
      uploadCmInput[index].value = "";
    }
  });
});

Array.from(totalInput).forEach((input, index) => {
  input.addEventListener("keyup", (e) => {
    const commentContent = uploadCmInput[index].value;
    const idContent = uploadIdInput[index].value;

    if (e.keyCode === 13) {
      if (idContent !== "" && commentContent !== "") {
        //댓글 내용 업로드//
        const uploadCommentSpace =
          document.getElementsByClassName("comment-text-box");
        const li = document.createElement("li");

        const id = document.createElement("span");
        id.innerHTML = idContent;

        const comment = document.createElement("p");
        comment.innerHTML = commentContent;

        li.append(id, comment);
        uploadCommentSpace[index].appendChild(li);

        uploadIdInput[index].value = "";
        uploadCmInput[index].value = "";
      }
    }
  });
});
// uploadCmInput.addEventListener("keyup", (e) => {
//   if (e.keyCode === 13) {
//     if (uploadIdInput.value.length > 0 && uploadCmInput.value.length > 0) {
//       uploadComment();
//       console.log("enter push");
//     }
//   }
// });

// console.dir(uploadIdInput);
// array.forEach(element => {

// });

// if (uploadIdInput[i].value.length !== "" && uploadCmInput[i].value.length !== "")
