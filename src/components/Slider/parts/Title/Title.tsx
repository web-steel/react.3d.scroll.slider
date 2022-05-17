import React from 'react'
import Frame, { IFrameProps } from '../../parts/Frame'

interface ITitleProps extends IFrameProps {
  text: string
}

class Title extends Frame<ITitleProps> {
  renderItem(): JSX.Element {
    return <h2>{this.props.text}</h2>
  }
}

export default Title
