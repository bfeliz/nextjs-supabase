import Loader from 'react-loader-spinner';

// set up loader component
const CustomLoader = () => {
  return (
    <div className='has-text-centered'>
      <Loader
        type='Rings'
        color='#A6C2D3'
        height={100}
        width={100}
        className='is-inline-block'
      />
    </div>
  );
};

export default CustomLoader;
