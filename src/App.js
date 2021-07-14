import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.maxContentId = 3;
    this.state = {
      mode: 'update',
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

  getReadContent() {
    const targetContent = this.state.contents.filter((content) => {
      return content.id === this.state.selectedContentId;
    });
    return targetContent[0];
  }

  getContent() {
    let _title,
      _desc,
      _article = null;

    const { state } = this;
    let _content = this.getReadContent();

    switch (state.mode) {
      case 'welcome':
        _title = state.welcome.title;
        _desc = state.welcome.desc;
        _article = <ReadContent title={_title} desc={_desc} />;
        break;

      case 'read':
        _article = <ReadContent title={_content.title} desc={_content.desc} />;
        break;

      case 'create':
        _article = (
          <CreateContent
            onSubmit={function (_title, _desc) {
              const newContents = Array.from(this.state.contents);
              this.maxContentId += 1;
              newContents.push({
                id: this.maxContentId,
                title: _title,
                desc: _desc,
              });
              this.setState({
                contents: newContents,
                mode: 'read',
                selectedContentId: this.maxContentId,
              });
            }.bind(this)}
          />
        );
        break;

      case 'update':
        _article = (
          <UpdateContent
            data={_content}
            onSubmit={function (_id, _title, _desc) {
              let _contents = Array.from(state.contents);
              let i = 0;
              while (i < _contents.length) {
                //TODO: map 이나 foreach 나 filter 를 이용 할 순 없을까???
                if (_contents[i].id === _id) {
                  _contents[i] = { id: _id, title: _title, desc: _desc };
                  break;
                }
                i = i + 1;
              }
              this.setState({ contents: _contents, mode: 'read' });
            }.bind(this)}
          />
        );
        break;

      default:
    }
    return _article;
  }

  render() {
    const { state } = this;
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
        {this.getContent()}
      </div>
    );
  }
}

export default App;
