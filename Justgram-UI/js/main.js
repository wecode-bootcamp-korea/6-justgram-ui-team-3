//상단 검색창 인풋 클릭시 돋보기 아이콘 사라짐 기능
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon")

searchInput.addEventListener("click", () => {
  searchIcon.remove();
})


//댓글 업로드 기능
const uploadBtn = document.querySelectorAll(".upload-btn");
const uploadIdInput = document.getElementsByClassName("upload-id-input");
const uploadCmInput = document.getElementsByClassName("upload-comment-input");
const totalInput = document.getElementsByClassName("comment-input");


Array.from(uploadBtn).forEach((button, index) => {
  button.addEventListener("click", () => {
    const commentContent = uploadCmInput[index].value;
    const idContent = uploadIdInput[index].value;

    //만약 id와 pw 값이 비어있지 않다면 댓글 업로드 기능 실행
    if (idContent !== "" && commentContent !== "") {
      //댓글을 자식으로 포함할 부모 요소 불러오기
      const uploadCommentSpace =
        document.getElementsByClassName("comment-text-box");
      // <li><span>id값</span><p>댓글 값</P></li> 형태로 uploadCommentSpace에 넣어줄 것임.
      const li = document.createElement("li");

      const id = document.createElement("span");
      id.innerHTML = idContent;

      const comment = document.createElement("p");
      comment.innerHTML = commentContent;

      li.append(id, comment);
      uploadCommentSpace[index].appendChild(li);
      // 업로드 후 input 태그 안의 입력값 비워주기.
      uploadIdInput[index].value = "";
      uploadCmInput[index].value = "";
    }
  });
});

//인풋 태그를 배열로 가져와서 forEach 반복문으로 각 인풋창에 엔터이벤트 걸어줌.
Array.from(totalInput).forEach((input, index) => {
  input.addEventListener("keyup", (e) => {
    const commentContent = uploadCmInput[index].value;
    const idContent = uploadIdInput[index].value;
      //  입력한 키보드 버튼이 엔터(키코드 13)일 때,
      //  id와 pw 값이 비어있지 않다면 댓글 업로드 기능 실행
    if (e.keyCode === 13) {
      if (idContent !== "" && commentContent !== "") {
        //댓글을 자식으로 포함할 부모 요소 불러오기
        const uploadCommentSpace =
          document.getElementsByClassName("comment-text-box");
         // <li><span>id값</span><p>댓글 값</P></li> 형태로 uploadCommentSpace에 넣어줄 것임. 
        const li = document.createElement("li");

        const id = document.createElement("span");
        id.innerHTML = idContent;

        const comment = document.createElement("p");
        comment.innerHTML = commentContent;

        li.append(id, comment);
        uploadCommentSpace[index].appendChild(li);
        // 업로드 후 input 태그 안의 입력값 비워주기.
        uploadIdInput[index].value = "";
        uploadCmInput[index].value = "";
      }
    }
  });
});

const comments = document.getElementsByClassName("comment-text-box");

Array.from(comments).forEach((el, index) => {
  let comment_list;

  fetch("/data/comment.json")
    .then((res) => res.json())
    .then((data) => {
      comment_list = data.comment;
      comment_list.forEach((comment) => {
        const liElement = document.createElement("li");

        const spanElement = document.createElement("span");
        spanElement.innerText = comment.userName;

        const pElement = document.createElement("p");
        pElement.innerText = comment.content;
        liElement.append(spanElement, pElement);
        comments[index].appendChild(liElement);
      });
    });
});
