import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'WEB', sub: 'World Wide Web' },
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
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        />
        <TOC data={this.state.contents} />
        <Content title="HTML" desc="HTML is HyperText Markup Language." />
      </div>
    );
  }
}

export default App;
