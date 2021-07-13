import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };

    this.inputFormHandler = this.inputFormHandler.bind(this);
  }

  inputFormHandler(e) {
    //TODO: ES 최신문법 대괄호 문법 관련 자료 찾아보기.
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { state, props } = this;

    return (
      <article>
        <h2>Update</h2>
        <form
          action="./create_process"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit(state.id, state.title, state.desc);
          }}
        >
          <input type="hidden" name="id" value={this.state.id} />

          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFormHandler}
            ></input>
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="description"
              value={this.state.desc}
              onChange={this.inputFormHandler}
            ></textarea>
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
