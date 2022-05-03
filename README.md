# 📌 자신이 원하는 사이트 레이아웃 클론

- 과제 기한:
  - 과제 수행 기간: 2022년 04월 14일(목) 19시 ~ 2022년 04월 28일(목) 19시
  - 코드 리뷰 기간: 2022년 04월 28일(목) 19시 ~ 2022년 05월 06일(금) 19시
- 내용:
  - 원하는 사이트(페이지)를 자유롭게 선택하고 레이아웃을 클론 코딩하세요.
  - 평소에 도전해 보고 싶었거나 혹은 자신의 수준에 맞는 사이트(페이지)를 선택하세요.

## 필수 요구사항

- [x] 정리된 README.md 파일을 제공하세요!
- [x] 결과와 비교할 수 있는 선택 사이트의 주소를 명시하세요!
- [x] 제출 프로젝트에 확인 가능한 HTML, CSS 파일이 모두 있어야 합니다!
- [x] 브라우저에서 정상적으로 출력돼야 합니다!

## 선택 요구사항

- [ ] 시멘틱 태그를 최대한 활용해보세요.
- [x] 레거시 코드 활용보단 최신의 CSS Flex와 Grid를 활용해보세요.
- [ ] JS가 필요한 부분은 생략하고 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
- [x] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.
- [x] SCSS를 도입해보세요.
- [x] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.
- [ ] BEM 방법론을 도입해보세요.
<br>
<br>

# ![Speak](./favicon.png) Speak(영어 스피킹은 스픽) - Clone Coding
[![Netlify Status](https://api.netlify.com/api/v1/badges/86600506-34e0-488c-8748-ca9955bb0332/deploy-status)](https://app.netlify.com/sites/golden-palmier-4fef1e/deploys)
## Preview
![Preview](./Speak-clone-coding.gif)


<br>
<br>

## 과제 링크
>-클론 대상 홈페이지: [Speak](https://www.speak.com/ko)<br>
-netlify를 통해 배포한 페이지: [ChunHeeyoung](https://golden-palmier-4fef1e.netlify.app/)

<br>
<br>


# 🧐이번 프로젝트에서 사용했습니다..

## Reset.css

브라우저의 기본 스타일 초기화<br>
scss파일에서 `@import`방식으로 cdn을 통해 사용했습니다
>cdn 이란?<br>
Content-Delivery-Network 의 약자로,<br> 
특정 서버에 트래픽이 집중되지 않고 컨텐츠를
자동으로 가장 가까운 서버에서 다운받도록 하는 기술입니다<br>
이러한 방식을 통해 직접 파일을 저장하지 않고 사용이 가능합니다

>ref [HTML에서 CDN이란?](https://wotres.tistory.com/entry/html%EC%97%90%EC%84%9C-cdn%EC%9D%B4%EB%9E%80)

```scss
@import "https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css";
```
<br>
<br>

## Google Fonts

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
```
>'Pretendard', 'Poppins', 'Inter'<br>

세 가지의 웹폰트를 사용했습니다<br>
실제 Speak 에서는 Sdglt 라는 폰트까지 사용한 걸로 파악했으나,<br>
아쉽게도 해당 폰트는 구할 수 없었습니다😢

>ref [Pretendard](https://github.com/orioncactus/pretendard)

<br>
<br>

## ScrollMagic

스크롤을 통해 요소의 움직임을 제어하는데 도움을 주는 자바스크립트 라이브러리입니다<br>
[ScrollMagic](https://github.com/janpaepke/ScrollMagic)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```
```js
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
```
> 해당 부분은 **패스트캠퍼스-박영웅 강사**님의 프론트엔드 개발 초격차 패키지<br>
<u>'Part 1. Ch 10. 스타벅스 예제 - 요소 슬라이드 파트'</u>를 통해 학습하여 코드를 참조하였습니다

## Parcel
Parcel 번들러를 사용하여 웹에서 scss를 css로 변환하였습니다<br>
[Parcel](https://ko.parceljs.org/)

```bash
$ npm init -y # npm 프로젝트 시작 

$ npm i -D parcel-bundler # 개발 의존성으로 번들러 설치
```
```json
"scripts": {
  "dev": "parcel index.html",
  "build": "parcel build index.html"
}
```

## Parcel plugin static files copy

해당 프로젝트에서는 favicon을 png 파일 형태로 사용하였고<br>
parcel-plugin-static-files-copy를 설치하지 않았습니다<br>
만약 favicon.ico의 형태로 사용하게 될 경우<br>

[npmjs](https://www.npmjs.com/package/parcel-plugin-static-files-copy)<br>
위의 문서를 참고하여<br>
아래와 같이 설정하길 바랍니다
```bash
$ npm i -D parcel-plugin-static-files-copy
```

```json
"statciFiles": {
  "staticPath": "폴더명"
}
```
<br>
<br>

## Autoprefixer

표준기술이 동작하지 않는 환경에서 동작할 수 있도록<br>
공급 업체 접두사(Vender Prefix)를 붙이기 위해<br>
Autoprefixer를 설정하였습니다

```bash
$ npm i -D postcss autoprefixer
```

```json
"browserslist": [
    "> 1%",
    "last 2 versions"
  ]
```
package.json 파일에 다음과 같이 설정을 추가했습니다<br>
전 세계 점유율이 1% 이상인 모든 브라우저의 2개 버전까지 지원할 수 있게 설정하였습니다

```js
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-fail-on-warn')
  ]
}
```
postcssrc.js 파일을 생성하여 위와 같이 작성했습니다<br>
`postcss-fail-on-warn`플러그인의 경우 해당 플러그인 위에 적힌 플러그인이 실행될 때<br>
warning이 뜨는 경우 error를 내게 되므로<br>
error가 발생했을 때, 파악하기 위해서 설치하였습니다

[PostcssFailOnWarn](https://github.com/postcss/postcss-fail-on-warn)
```bash
$ npm install --save-dev postcss postcss-focus
```

## babel

ES6 이후의 버전이 동작하지 않는 구형 브라우저에서,<br>
코드를 컴파일 할 수 있게 babel를 설정하였습니다

```bash
$ npm i -D @babel/core @babel/preset-env
```
.babelrc.js 파일을 생성한 후

```js
module.exports = {
  presets: ['@babel/preset-env']
}
```
위와 같이 node.js의 내보내기 방식을 사용하였습니다

또한 
```bash
npm i -D @babel/plugin-transform-runtime
```
해당 플러그인을 통하여 `async`, `await` 문법도 적용 할 수 있도록 설정하였습니다<br>
현재 프로젝트에서는 해당 문법을 사용하지는 않았지만, 환경설정 연습을 위해 진행하였습니다

```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}
```
.babelrc.js 파일에 위와같이 설정해주었습니다
<br>
<br>


> babel 또한 browserslist의 영향을 받기 때문에<br>
Autoprefixer 부분에서 package.json에 추가하지 않았더라면,<br>
반드시 설정해줍시다


> parcel ~ babel 까지의 부분에 대한 자세한 정보는<br>
박영웅 강사님의 강의영상에서 만나보실 수 있습니다✌
<br>
<br>

# 주요 구현 기술

제목을 거창하게 지었지만, 실제로 구현한 부분은 **dropdown**에 관한 부분 밖에 없습니다😢<br>
구현이라고 하기에도 좀 초라하네요😅

```js
const korEl = document.querySelector('.dropdown__kor')
const engEl = document.querySelector('.dropdown__eng')
const korFooterEl = document.querySelector('.dropdown__kor__footer')
const engFooterEl = document.querySelector('.dropdown__eng__footer')
const footerArrowEl = document.querySelector('.footer-arrow')

// dropdown 메뉴 클릭시, eng 블록이 보이고, 사라지는 기능
korEl.addEventListener('click', () => {

  if (engEl.classList.contains('show')) {
  engEl.classList.remove('show')

  } else {
    engEl.classList.add('show')
    } 
})

// 하단 dropdown 메뉴 클릭시, eng 블록이 보이고, 사라지는 기능
// 동시에, arrowEl 가 180deg 회전한다
korFooterEl.addEventListener('click', () => {

  if (engFooterEl.classList.contains('show')) {
  engFooterEl.classList.remove('show')
  footerArrowEl.classList.remove('turn')

  } else {
    engFooterEl.classList.add('show')
    footerArrowEl.classList.add('turn')
    }
})
```
페이지에서 **dropdown**다운은 header와 footer 부분에 각 1개씩, 총 2개 존재하였고<br>
이를 동시에 제어하고자 노력했으나..<br>
역량 미달로 각 부분의 dropdown을 따로 제어하는 코드를 작성하였습니다<br>
해당 부분에 대한 많은 피드백 부탁드립니다! (너무 매운맛은.. 참아주세요!)
<br>
<br>

# 첫번째 과제를 제출하며..

정말 모르는게 많고, 공부해야 할 것들이 엄청나게 많다! 라는 것을 다시금 깨닫게 된 시간이었습니다

해당 페이지에 대한 모든 부분을 완벽하게 클론하진 못했지만,

그럼에도, 어떻게든 마무리 했다는 점에서 뿌듯하긴 하네요😁

이번 경험을 통해 조금이나마 발전을 했다고 생각하고 있습니다

# Ref
해당 repo는 학습을 목적으로 [Speak](https://www.speak.com/ko) 해당 사이트를 클론코딩하였습니다