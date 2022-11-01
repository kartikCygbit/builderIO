import './styles/HeroStyles.css';
type HeaderProps = {
  heroImg: string;
  heroImgAlt?: string;
  heroTitle: string;
  heroDescription: string;
  buttonText: string;
  buttonUrl: string;
}

const Hero = (props: HeaderProps) => {
  return (
    <div className='heroContainer'>
      <img className='heroImg'
        src={props.heroImg}
        alt={props.heroImgAlt ?? 'LOGO'}
      />
      <div className='paddingH20'>
        <div className='heroTitleText'>{props.heroTitle}</div>
        <div className='heroDescriptionText paddingH30'>{props.heroDescription}</div>
      </div>
      <a className='heroBtn' href={props.buttonUrl}>
        <p className='heroBtnText'>{props.buttonText}</p>
      </a>
    </div>
  )
}

export default Hero;