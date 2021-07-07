import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Control from './components/Control';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: '',
      selectedContentId: 2,
      subject: { title: 'WEB', sub: 'World Wide Web' },
      welcome: { title: 'Welcom', desc: 'Hello react' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HyperText...', url: '1.html' },
        {
          id: 2,
          title: 'CSS',
          desc: 'CSS is Cascading Style Sheet',
          url: '2.html',
        },
        {
          id: 3,
          title: 'JavaScript',
          desc: 'JS is for interactive',
          url: '3.html',
        },
      ],
    };
  }

  render() {
    // TODO:  let으로 선언된 부분 Object 로 관리하기.
    let _title,
      _desc,
      _article = null;

    const { state } = this;

    switch (state.mode) {
      case 'welcome':
        _title = state.welcome.title;
        _desc = state.welcome.desc;
        _article = <ReadContent title={_title} desc={_desc} />;
        break;
      case 'read':
        state.contents.filter((data) => {
          if (data.id === state.selectedContentId) {
            _title = data.title;
            _desc = data.desc;
          }
          _article = <ReadContent title={_title} desc={_desc} />;
          return [_title, _desc];
        });
        break;

      case 'create':
        _article = <CreateContent />;
        break;

      default:
    }

    return (
      <div className="App">
        <Subject
          title={state.subject.title}
          sub={state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        />
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selectedContentId: Number(id),
            });
          }.bind(this)}
          data={state.contents}
        />
        <Control
          onChangeMode={function (mode) {
            this.setState({
              mode,
            });
          }.bind(this)}
        />
        {_article}
      </div>
    );
  }
}

export default App;
