import { getFeedData } from './getData.js';

(async () => {
  const feedUl = document.querySelector('ul.feed');
  const feedContainer = document.querySelector('div.feedContainer');

  const skeletonUl = document.createElement('ul');
  skeletonUl.id = 'skeleton';
  skeletonUl.classList.add('skeleton');
  skeletonUl.innerHTML = `
  <li>
    <div class="title"></div>
    <div class="image"></div>
    <div class="skComment">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="input"></div>
  </li>
  <li>
    <div class="title"></div>
    <div class="image"></div>
    <div class="skComment">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="input"></div>
  </li>
  `;
  feedContainer.appendChild(skeletonUl);

  const feedDataList = await (await getFeedData()).json();

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

    skeletonUl.remove();
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
})();

window.addEventListener('click', ({ target }) => {
  const searchContainer = document.querySelector('div.searchContainer');
  if (target.closest('input#search')) {
    searchContainer.style.visibility = 'visible';
    searchContainer.style.opacity = 1;
  } else if (!target.closest('div.searchContainer') && !target.closest('input#search')) {
    searchContainer.style.visibility = 'hidden';
    searchContainer.style.opacity = 0;
  }
});

let timeoutId;
const searchInput = document.querySelector('input#search');
const loadDiv = document.querySelector('div.loading');

searchInput.addEventListener('input', ({ target: { value } }) => {
  loadDiv.style.visibility = 'visible';
  loadDiv.innerHTML = 'Loading...';
  clearTimeout(timeoutId);

  const searchUl = document.querySelector('ul.searchList');
  searchUl.querySelectorAll('li').forEach(li => {
    li.remove();
  });

  timeoutId = setTimeout(async () => {
    const profileDatas = await (await fetch('../data/profiles.json')).json();
    const filteredDatas = profileDatas.filter(data => data.displayName.includes(value));

    filteredDatas.forEach(({ displayName, name }) => {
      const searchLi = document.createElement('li');
      searchLi.innerHTML = `
      <p>${displayName}</p>
      <p>${name}</p>
      `;
      loadDiv.style.visibility = 'hidden';
      searchUl.appendChild(searchLi);
    });

    if (!filteredDatas.length) {
      loadDiv.innerHTML = '검색결과 없음';
    }
  }, 600);
});
