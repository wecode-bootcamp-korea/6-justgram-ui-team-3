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

// feed mock data fetch 후 댓글 출력
const uploadedComments = document.getElementById("uploaded-comments");
let comments_list;

fetch("data/comments.json", {
  method: "GET",
})
  .then((res) => res.json()) // res를 받아서 res데이터를 json형식으로 바꿈
  .then((data) => {
    comments_list = data.comments; //Json파일의 comments 안에 배열만 따로 할당
    comments_list.forEach((comment) => {
      const li = document.createElement("li");
      li.innerText = comment.content;
      uploadedComments.append(li);
    });
  });

//피드 하나일 때
/*commentWriteButton.addEventListener("click", () => {
  const content = commentWriteInput.value;

  const nameSpan = document.createElement("span");
  nameSpan.className = "comment-name";
  //자식요소를 만들고
  const childElem = document.createElement("div");
  nameSpan.textContent = "seeyong_0";
  //닉네임 붙이고, 댓글붙이고
  childElem.append(nameSpan, content);

  commentList.appendChild(childElem);
});*/
