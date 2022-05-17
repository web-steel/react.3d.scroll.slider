import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Img from "./Img";

export default {
  title: "3DScrollSlider/Components/Img",
  component: Img,
} as ComponentMeta<typeof Img>;

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: '/media/images/1.jpg',
  position: 'center'
};
