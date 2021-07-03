import React, { Component } from 'react';

class TOC extends Component {
  render() {
    let lists = [];
    const data = this.props.data;
    data.map((dataItem) =>
      lists.push(
        <li key={dataItem.id}>
          <a href={`/content/${dataItem.id}`}>{dataItem.title}</a>
        </li>
      )
    );

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
