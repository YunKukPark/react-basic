import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
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
    let _title,
      _desc = null;

    const { state } = this;

    if (state.mode === 'welcome') {
      _title = state.welcome.title;
      _desc = state.welcome.desc;
    } else if (state.mode === 'read') {
      state.contents.filter((data) => {
        if (data.id === state.selectedContentId) {
          _title = data.title;
          _desc = data.desc;
        }
        return [_title, _desc];
      });
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
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
