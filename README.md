# window-sync

## 스크립트 파일 추가

```html
<script src="window-sync.js"></script>
```

## 메인 브라우저

```javascript
// 초기 세팅
const popup = windowSync.opener({
  key: 'matching-key' // 메인과 팝업을 연결할 키
  url: '/example/popup', // 팝업 페이지 주소
  options: {
    top: 100, // 팝업 y 좌표
    left: 100, // 팝업 x 좌표
    width: 400, // 팝업 넓이
    height: 400, // 팝업 높이
    autoFocus: true // 팝업 자동 포커스 유무
  }
});

// 팝업 열기
popup.open();

// 팝업에 메시지 보내기
popup.send({ foo: 'bar' });

// 팝업 닫기
popup.close();

// 팝업에서 보낸 메시지 받기
popup.onReceive((message) => console.log(message));

// 팝업 닫힘 확인
popup.onClose((key) => console.log(`'${key}' 팝업이 닫혔습니다!`));

```

## 팝업 브라우저

```javascript
// 초기 세팅
const opener = windowSync.popup({
  key: 'matching-key' // 메인과 팝업을 연결할 키
});

// 메인 브라우저에서 보낸 메시지 받기
opener.onReceive((message) => console.log(message));

// 메인 브라우저에 메시지 보내기
opener.send({ foo: 'bar' });

```
