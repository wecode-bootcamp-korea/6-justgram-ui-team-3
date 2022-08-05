const commentInputByClass = document.getElementsByClassName("comment_input");
const postingBtnByClass =  document.getElementsByClassName("posting_btn");
const commentList = document.getElementsByClassName("feed_comment_list");


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