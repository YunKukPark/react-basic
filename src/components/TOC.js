import React, { Component } from 'react';

class TOC extends Component {
  render() {
    let lists = [];
    const { data } = this.props;
    data.map((dataItem) =>
      lists.push(
        <li key={dataItem.id}>
          <a
            data-id={dataItem.id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
            href={`/content/${dataItem.id}`}
          >
            {dataItem.title}
          </a>
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
