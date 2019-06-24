import PropTypes from 'prop-types';
import React from 'react';

import { addNewBlock } from '../../model';
import { Block } from '../../util/constants';

export default class VideoButton extends React.Component {

  static propTypes = {
    setEditorState: PropTypes.func,
    getEditorState: PropTypes.func,
    close: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick() {
    this.input.value = null;
    this.input.click();
  }


  /*
  This is an example of how an video button can be added
  on the side control. This Button handles the video addition locally
  by creating an object url. You can override this method to upload
  videos to your server first, then get the video url in return and then
  add to the editor.
  */
  onChange(e) {
    // e.preventDefault();
    const file = e.target.files[0];
    if (file.type.indexOf('video/') === 0) {
      // console.log(this.props.getEditorState());
      // eslint-disable-next-line no-undef
      const src = URL.createObjectURL(file);
      this.props.setEditorState(addNewBlock(
        this.props.getEditorState(),
        Block.VIDEO, {
          src,
        }
      ));
    }
    this.props.close();
  }

  render() {
    return (
      <button
        className="md-sb-button md-sb-img-button"
        type="button"
        onClick={this.onClick}
        title="Add an Video"
      >
        <i className="fa fa-video-camera" />
        <input
          type="file"
          accept="video/*"
          ref={(c) => { this.input = c; }}
          onChange={this.onChange}
          style={{ display: 'none' }}
        />
      </button>
    );
  }
}
