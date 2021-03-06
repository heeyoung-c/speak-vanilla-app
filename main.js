const korEl = document.querySelector('.dropdown__kor')
const engEl = document.querySelector('.dropdown__eng')
const korFooterEl = document.querySelector('.dropdown__kor__footer')
const engFooterEl = document.querySelector('.dropdown__eng__footer')
const footerArrowEl = document.querySelector('.footer-arrow')

// dropdown 메뉴 클릭시, eng 블록이 보이고, 사라지는 기능
korEl.addEventListener('click', () => {
  engEl.classList.toggle('show')  
})

// 하단 dropdown 메뉴 클릭시, eng 블록이 보이고, 사라지는 기능
// 동시에, arrowEl 가 180deg 회전한다
korFooterEl.addEventListener('click', () => {
engFooterEl.classList.toggle('show') 
  footerArrowEl.classList.toggle('turn')
})

const spyEls = document.querySelectorAll('.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller())
})
