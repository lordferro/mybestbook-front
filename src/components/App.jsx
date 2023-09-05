import './App.css';
import { Form } from './form/Form';

export const App = () => {
  return (
    <div className="wrapper">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video"
        style={{
          objectFit: 'cover',
          width: '99.1%',
          height: '99.1%',
        }}
      >
        <source
          src="https://images.minbedstebog.dk/assets/videos/frontpage/frontpageFlipH265-600.en-US.mp4"
          type="video/mp4"
        />
        <source
          src="https://images.minbedstebog.dk/assets/videos/frontpage/frontpageFlipV9-700.en-US.webm"
          type="video/webm"
        />
        <source
          src="https://images.minbedstebog.dk/assets/videos/frontpage/frontpageFlipH264-1000.en-US.mp4"
          type="video/mp4"
        />
      </video>
      <div className="content">
        <img
          height={76}
          src="https://images.minbedstebog.dk/assets/images/logo/MyBestBook_crown_navy_664.en.png"
          alt="logo"
        />
        <h1 className='header'>PERSONALIZED CHILDREN'S BOOKS</h1>
        <span className='text'>
          Children's books that take the reading experience to a whole new level
        </span>
        <Form/>
      </div>
    </div>
  );
};
