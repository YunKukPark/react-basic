# Implement React CRUD System

> React 로 간단한 Create, Read, Update, Delete 시스템을 직접 구현해 본다.

# Ⅰ. Implementation

## 1. FlowChart

<img src="./readmeImg/image1.png" alt="flowchart image1">
<img src="./readmeImg/flowchart.jpeg" alt="flowchart image2">

## 2. Component

- Subject.js

  - 상호작용 : WEB 클릭 시 state.mode 가 welcome 으로 변경

  > `App.js` 는 `title, sub, onChagePage` props 를 `Subject.js` 로 보내준다.

  > 서로간의 Event 의 경우 `App.js` 에서 `onChangePage` 라는 function 을 props 로`Subject.js` 에게 보내주고, Subject.js 는 onChangePage 함수를 `onClick` 내에서처리한다.  
  > 이유 1: **실제 Client 는 Subject.js 와 소통**  
  > 이유 2: **state.mode는 App.js 에서 선언하여 setState는 App.js 에서 가능**

  ```jsx
  // App.js 일부
  <Subject
    title={state.subject.title}
    sub={state.subject.sub}
    onChangePage={function () {
      this.setState({ mode: 'welcome' });
    }.bind(this)}
  />
  ```

  ```jsx
  // Subject.js 일부
  <a
    href="/"
    onClick={function (e) {
      e.preventDefault();
      this.props.onChangePage();
    }.bind(this)}
  >
    {this.props.title}
  </a>
  ```

- TOC.js

  - 상호작용 : 각 목차 클릭 시 `<ReadContent/>` 에 해당 목차에 해당하는 Title 과 Description 출력

  > TOC 에서 눌러진 내용을 확인 하고, TOC 에서 눌러진 요소의 id 값(`selectedContentId`)을 ReadContent 에게 전달 해야 한다.

  ```jsx
  // App.js TOC 부분
  <TOC
    onChangePage={function (id) {
      this.setState({
        mode: 'read',
        selectedContentId: Number(id),
      });
    }.bind(this)}
    data={state.contents}
  />
  ```

  **TOC.js** 는 그냥 `data`라는 `props` 를 전달받아 list 로 출력하는 역할이므로 코드 생략

- ReadContent.js

  - 상호작용 : TOC.js 와 Subject.js 에서 눌러진 요소에 대한 `title` 과 `desc` 를 출력한다.

  ```javascript
  // App.js ReadContent 부분
  getReadContent() {
    const targetContent = this.state.contents.filter((content) => {
      return content.id === this.state.selectedContentId;
    });
    return targetContent[0];

  getContent() {
    case 'read':
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
      break;
    }
  return _article;
  }
  ```

- Control.js
  //TODO: 여기서 부터 다시 작성.
- CreateContent.js
- UpdateContent.js

## 3. Functions

| Where? | name               | desc                                                                       |
| ------ | ------------------ | -------------------------------------------------------------------------- |
| App.js | `getReadContent()` | 사용자가 **마지막으로 선택한** `Contents` 에 대한 `data` 를 `return` 한다. |
| App.js | `getContent()`     | state변수 `mode` 에 따라 각기 다른 `_article` 을 `return` 한다.            |

getContent 에서 return 하는 \_article 예시

```jsx
_article = <ReadContent title={_title} desc={_desc} />;
```

## 4. State 변수

**App.js**  
|name|type|default|desc|
|-|-|-|-|
|mode|`String`|welcome|welcome, read, create, update 4가지로 이루어 져있다.|
|selectedContentId|`Number`||사용자가 마지막에 선택한 contents의 id 값 저장|
|welcome|Object|welcome Message|welcome 메세지 출력|
|contents|Object||contents 의 id , tilte, desc, url 정보가 담겨있다.|

# Ⅱ. What I learned

# Ⅲ. Improvements

# Ⅳ. Retrospective
