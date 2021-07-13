import React, { Component } from 'react';

class UpdateContent extends Component {
  render() {
    const { props } = this;
    console.log(props.data);
    console.log(`UpdateContent Render`);
    return (
      <article>
        <h2>Update</h2>
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

export default UpdateContent;
