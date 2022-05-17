import React from 'react'
import Frame, { IFrameProps } from '../../parts/Frame'

interface ImageProps extends IFrameProps {
  src: string,
}

class Img extends Frame<ImageProps> {
  protected media = true

  renderItem() {
    return (
        <div style={{ backgroundImage: `url(${this.props.src})` }}></div>
    )
  }
}

export default Img
