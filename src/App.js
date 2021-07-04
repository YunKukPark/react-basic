import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
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
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.content[0].title;
      _desc = this.state.content[0].desc;
    }

    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        /> */}
        <header>
          <h1>
            <a
              href="/"
              onClick={(e) => {
                console.log(e);
                e.preventDefault();
              }}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents} />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
