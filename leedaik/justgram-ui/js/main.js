import getData from './getData.js';

const loadList = async () => {
  const skeleton = document.getElementById('skeleton');
  const feedUl = document.querySelector('ul.feed');
  const feedDataList = await (await getData()).json();

  feedDataList.forEach(feedData => {
    const feedList = document.createElement('li');

    feedList.innerHTML = `
    <div class="feedHeader">
    <div class="profileContainer">
      <img width="32" src="${feedData.profileImageURL}" alt="profile image" />
    </div>
    <h3>${feedData.displayName}</h3>
    <button><span class="material-symbols-outlined"> more_horiz </span></button>
    </div>
    <img src="${feedData.feedImageURL}" alt="" />
    <ul class="feedMenus">
      <li><span class="material-symbols-outlined"> favorite </span></li>
      <li><span class="material-symbols-outlined"> chat_bubble </span></li>
      <li><span class="material-symbols-outlined"> file_download </span></li>
      <li><span class="material-symbols-outlined"> bookmark_added </span></li>
    </ul>
    <div class="feedComment">
      <ul class="commentList">
        ${feedData.commentList
          .map(
            ({ commentName, commentContent }) => `
          <li><p><strong>${commentName}</strong>${commentContent}</p></li>`
          )
          .join('')}
      </ul>
      <form>
        <input type="text" name="comment" placeholder="댓글달기..." />
        <button>게시</button>
      </form>
    </div>
    `;

    skeleton.remove();
    feedUl.appendChild(feedList);
  });

  const formList = document.querySelectorAll('form');
  const commentList = document.querySelectorAll('ul.commentList');

  const writeComment = (content, writer, index) => {
    if (content) {
      const commentLiElement = document.createElement('li');
      commentLiElement.innerHTML = `<p><strong>${writer}</strong> ${content}</p>`;
      commentList[index].appendChild(commentLiElement);
    }
  };

  formList.forEach((form, i) => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      writeComment(e.target.comment.value, '닉네임', i);
      e.target.comment.value = '';
    });
  });
};

loadList();

const searchInput = document.querySelector('input#search');

if (searchInput instanceof HTMLInputElement) {
}
