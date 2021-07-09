import React, { Component } from 'react';

class CreateContent extends Component {
  render() {
    const { props } = this;
    return (
      <article>
        <h2>Create</h2>
        <form
          action="./create_process"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit(e.target.title.value, e.target.desc.value);
          }}
        >
          <p>
            <input type="text" name="title" placeholder="title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
