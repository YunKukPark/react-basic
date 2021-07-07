import React, { Component } from 'react';

class Control extends Component {
  render() {
    const { props } = this;
    return (
      <nav>
        <h2 className="visually-hidden">CRUD Menu</h2>
        <ul>
          <li>
            <a
              href="/create"
              onClick={function (e) {
                e.preventDefault();
                props.onChangeMode('create');
              }}
            >
              create
            </a>
          </li>
          <li>
            <a
              href="/update"
              onClick={function (e) {
                e.preventDefault();
                props.onChangeMode('update');
              }}
            >
              update
            </a>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={function (e) {
                e.preventDefault();
                props.onChangeMode('delete');
              }}
            />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Control;
