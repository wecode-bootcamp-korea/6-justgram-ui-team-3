const writeinputById = document.getElementById('repl')
const createcomment = document.getElementsByClassName('feedbackbar2')[0]
const clickbtton = document.getElementById('addcommentbtton')

function cmmentchanger() {
  const comment = writeinputById.value
  const adddiv = document.createElement('div')
  const commentspan = document.createElement('span')
  const idspan = document.createElement('span')
  idspan.textContent = 'chan'
  idspan.className = 'boldid'
  commentspan.textContent = comment
  createcomment.appendChild(adddiv)
  adddiv.append(idspan, commentspan)
}

clickbtton.addEventListener('click', cmmentchanger)

/*
겟엘레먼드 바이 인풋부터 가져온다. 
버튼. 애드이벤트리스너 함수 생성.
append 는 배열을 낳을수있고
appendchild 는 하나씩만 낳을수있다.
forEach 3개의 피드에 모두 코드를 적용하기위해
*/
