const commentInputByClass = document.getElementsByClassName("comment_input");
const postingBtnByClass =  document.getElementsByClassName("posting_btn");
const commentList = document.getElementsByClassName("feed_comment_list");


fetch("./data/comments.json")
    .then((res) => res.json())
    .then((data) =>{
        //데이터를 받아서 배열로 다시 할당하기                             
       let commentArray = data.comments;
       //배열에 담긴 댓글을 하나하나 반복문 돌기
       commentArray.forEach((comment)=>{
        //먼저 commentsList 반복문을 돌면서 피드 하나하나에 댓글을 하나씩 넣어주기
        for (let i = 0; i < commentArray.length; i++) {
            //댓글을 넣을 div
            const commentElem = document.createElement("div");
            //댓글 닉네임을 넣을 span
            const nameSpan = document.createElement("span");
            nameSpan.className = "comment-name";
            nameSpan.textContent = comment.username;
            //댓글 내용을 넣어주기 
            const content = comment.content;
            commentElem.append(nameSpan, content);
            //피드 하나하나에 댓글 넣기 
            commentList[i].append(commentElem);
        }

       });
    })

Array.from(postingBtnByClass).forEach((button, index )=> {
    button.addEventListener("click",() => {
        const content = commentInputByClass[index].value;
    
        const childElem = document.createElement('div');
        
    
        const nameSpan = document.createElement('span');
        nameSpan.className = "comment-name";
        nameSpan.textContent = 'yoon';
    
        //닉네임 붙이기
        childElem.append(nameSpan,content);
    
    
        commentList[index].appendChild(childElem);
    
    });

});