import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Video from "./Video";

export default {
  title: "3DScrollSlider/Components/Video",
  component: Video,
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: 'media/video/video.mp4',
  position: 'center'
};
