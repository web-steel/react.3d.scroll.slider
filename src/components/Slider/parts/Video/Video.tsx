import React from 'react'
import Frame, { IFrameProps } from '../../parts/Frame'

interface IVideoProps extends IFrameProps {
  src: string,
}

class Video extends Frame<IVideoProps> {
  protected media = true

  renderItem() {
    return (
      <video src={this.props.src} autoPlay loop muted></video>
    )
  }
}

export default Video
