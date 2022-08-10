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

Array.from(commentWriteInput).forEach((input, index) => {
  input.addEventListener("keydown", (event) => {
    if (event.keyCode == "13") {
      const content = commentWriteInput[index].value;

      const childElem = document.createElement("div");

      const nameSpan = document.createElement("span");
      nameSpan.className = "comment-name";
      nameSpan.textContent = "seeyong_0";

      childElem.append(nameSpan, content);

      commentList[index].appendChild(childElem);
    }
  });
});

// feed mock data fetch 후 댓글 출력
const uploadedComments = document.getElementsByClassName("feed-comment-list");

fetch("./data/comments.json")
  // res를 받아서 res데이터를 json형식으로 바꿈
  .then((res) => res.json())
  .then((data) => {
    //데이터를 받아서 배열로 다시 할당하기
    let comments_list = data.comments;

    //배열에 담긴 댓글 하나하나 반복문 돌기
    comments_list.forEach((comment) => {
      //먼저 uploadedComments 반복문 돌면서 피드 하나하나에 댓글 하나씩 넣어주기
      for (let i = 0; i < comments_list.length; i++) {
        //댓글 넣을 div
        const commentElem = document.createElement("div");
        //댓글 닉네임 넣을 span
        const nameSpan = document.createElement("span");
        nameSpan.className = "comment-id";
        nameSpan.textContent = comment.id;
        //댓글 내용을 넣어주기
        const content = comment.content;
        commentElem.append(nameSpan, content);
        //피드 하나하나에 댓글 넣기
        uploadedComments[i].append(commentElem);
      }
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
