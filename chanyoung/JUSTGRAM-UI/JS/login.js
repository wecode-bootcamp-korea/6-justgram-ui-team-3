const inputIdbycs = document.getElementsByClassName('inputstyleid')[0]
//[0]<뒤에 붙는 요거는 같은 클래스네임 배열데이터일때 쓴다.
//element's' = 배열
const inputPwbycs = document.getElementsByClassName('inputstylepw')[0]
const loginbtnbyid = document.getElementById('loginbutton')
//class로 스타일설정시 콘솔로그로 찍히나 id로 설정시 null값이 나온다.
//class로 설정시에는 개발자 소통을 위해 메뉴얼 문서화 필요하다.
console.log('test', inputIdbycs)
console.log('test', inputPwbycs)
console.log('test', loginbtnbyid)

function onInput() {
  const id = inputIdbycs.value
  const pw = inputPwbycs.value

  if (id.length > 1 && pw.length > 1) {
    console.log('bttonworking')
    loginbtnbyid.style.backgroundColor = '#6aafff'
    loginbtnbyid.style.cursor = 'pointer'
    loginbtnbyid.Disabled = false //button에 있는 추가적인 옵션
  } else {
    console.log('bttonnotworking')
    loginbtnbyid.style.cursor = 'not-allowed'
    loginbtnbyid.Disabled = true
  } //분기문을 콘솔로그로 확인하면 어떻게 해야할지 명확해진다.
}
//함수내에서 한번더 변수 선언하여 if문 간편하게 작성
//html각 태그들 마다 가질수 있는 이벤트 속성이 다르고 다양하다. 그떄그때마다 구글에서 찾아쓴다.

inputIdbycs.addEventListener('input', onInput) //콘솔창에 target 안에 타겟팅된걸 확인가능
inputPwbycs.addEventListener('input', onInput)

//addeventlistener는 주로 익명함수로 많이씀(재사용이 없어서)
