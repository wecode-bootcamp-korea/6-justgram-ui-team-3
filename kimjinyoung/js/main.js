fetch("./data/feedData.json")
  .then((res) => res.json())
  .then((data) => {
    let dataList = data;
    dataList.forEach(function (feedData, i) {
      // === 피드 제작 및 mock data 가져오기 === //
      const section = document.querySelector("#section");
      const article = document.createElement("article");
      article.className = "article";
      article.innerHTML = `
      <div class="articleTop flexCenter">
        <div class="flexCenter">
          <img src="${feedData.articleProfile}" alt="profile image" class="articleProfile flexCenter">
          <span class="articleIdTop articleId bold">${feedData.articleId}</span>
        </div>
        <div>
          <img src="img/more.png" alt="more" class="articleMore">
        </div>
      </div>
    
    <img src="${feedData.articleImg}" alt="article image" class="articleImg">
    
    <div class="articleMiddle flexCenter">
      <div class="articleIcons">
        <img src="img/heart.png" alt="heart" class="articleHeart">
        <img src="img/chat.png" alt="chat" class="articleChat">
        <img src="img/share.png" alt="share" class="articleShare">
      </div>
      <img src="img/bookmark.png" alt="bookmark" class="articleBookmark">
    </div>
    
    <div class="articleBottom">
    
      <div class="chatBox like">
        <span class="bold liker">${feedData.liker}</span>님 <span class="bold">외 <span class="likers">${feedData.likers}</span>명</span>이 좋아합니다.
      </div>
    
      <div class="commentBox">
        <div class="chatBox writer">
          <span class="bold articleId">${feedData.articleId}</span> <span class="articleText">${feedData.articleText}</span>
        </div>
      </div>
    
      <div class="commentInputWrapper flexCenter">
        <div class="commentInputBox">
          <input type="text" placeholder="댓글 달기..." class="commentInput">
        </div>
        <button class="commentBtn bold">게시</button>
      </div>
    </div>
    `;
      section.append(article);

      // === 댓글 가져오기 == //

      const commentBoxes = document.querySelectorAll(".commentBox");

      for (let j = 0; j < feedData.comment.length; j++) {
        const commentWrapper = document.createElement("div");
        commentWrapper.className = "commentWrapper";
        commentWrapper.innerHTML = `
          <div class="chatBox comment">
            <span class="bold commentId">${feedData.comment[j].commentId}</span> <span class="commentText">${feedData.comment[j].commentText}</span>
          </div>
          <img src="img/heart.png" alt="heart" class="commentHeart">
        `;
        commentBoxes[i].append(commentWrapper);
      }

      // === 댓글 달기 로직 === //

      const commentBtns = document.querySelectorAll(".commentBtn");
      const commentInputs = document.querySelectorAll(".commentInput");

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
  });
