import React from 'react'
import Frame, { IFrameProps } from '../../parts/Frame'

interface ITextProps extends IFrameProps {
  title: string,
  text: string
}

class Text extends Frame<ITextProps> {
  renderItem(): JSX.Element {
    return (
      <React.Fragment>
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
      </React.Fragment>
    )
  }
}

export default Text
