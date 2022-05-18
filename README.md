# React 3D Scroll Slider

## Installation

```bash
npm install @web_steel/react-3d-scroll-slider
```

or

```bash
yarn add @web_steel/react-3d-scroll-slider
```

## Usage

```jsx
// App.jsx
import Slider, { Title, Img, Empty, Video } from '@web_steel/react-3d-scroll-slider';

const App = () => {
  return (
    <Slider>
      <Title text={'3D Scroll Slider'} />

      <Img src={'/images/demo.jpg'} position={'left'} />
      <Video src={'/video/demo.mp4'} position={'right'} />

      <Empty />
    </Slider>
  );
}

export default App
```

## License

MIT
