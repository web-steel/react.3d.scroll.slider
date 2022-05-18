import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Slider from './Slider'
import Title from './parts/Title'
import Img from './parts/Img'
import Text from './parts/Text'
import Empty from './parts/Empty'
import Video from './parts/Video'

export default {
  title: '3DScrollSlider/Slider',
  component: Slider,
  subcomponents: { Title },
} as ComponentMeta<typeof Slider>

export const Default: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args}>
    <Title text={'3D Scroll Slider'} overlay />

    <Img src={'media/images/1.jpg'} position={'left'} />
    <Img src={'media/images/2.jpg'} position={'right'} overlay />

    <Empty />

    <Text title={'Motorbike is freedom'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          position={'right'} />
    <Img src={'media/images/3.jpg'} position={'left'} overlay />

    <Empty />

    <Video src={'media/video/video.mp4'} />

    <Empty />
    <Empty />

    <Img src={'media/images/4.jpg'} position={'left'} overlay />

    <Empty />

    <Img src={'media/images/6.jpg'} position={'right'} />
    <Text title={'Motorbike - Just you and the road'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'} overlay position={'left'}/>

    <Empty />
    <Empty />

    <Img src={'media/images/7.jpg'} position={'right'} />
    <Video src={'media/video/video.mp4'} position={'left'} overlay />

    <Empty />

    <Img src={'media/images/5.jpg'} position={'right'} />
    <Img src={'media/images/8.jpg'} position={'left'} />

  </Slider>
)
