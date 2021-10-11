const HeroImage = (props) => {
  return (
    <>
      <section
        style={{ backgroundImage: 'url("' + props.url + '")' }}
        className='hero is-medium image-background'
        role='img'
        aria-label='page hero'
      >
        <div className='hero-body'></div>
      </section>
    </>
  );
};

export default HeroImage;
