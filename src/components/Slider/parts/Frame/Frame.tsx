import React from 'react'
import './Frame.css'
import cn from 'classnames'
import { positionType } from '../../types'

export interface IFrameProps {
  overlay?: boolean,
  position?: positionType,
}

class Frame<T extends IFrameProps> extends React.Component<T, {}> {
  protected media = false

  render(): JSX.Element {
    const children = this.renderItem()

    const isMedia = this.media
    const isRight = this.props.position === 'right'
    const isLeft = this.props.position === 'left'

    return (
      <div className={cn('frame', {
        'frame_bg': this.props.overlay
      })}>
        <div className={cn('frame__content', {
          'text-right': !isMedia && isRight,
          'text-left': !isMedia && isLeft,
        })}>
          {React.cloneElement(children, {
            className: isMedia ? cn( 'frame-media', {
              'frame-media_right': isRight,
              'frame-media_left': isLeft,
            }) : ''
          })}
        </div>
      </div>
    )
  }

  renderItem(): JSX.Element {
    return <div />
  }
}

export default Frame
