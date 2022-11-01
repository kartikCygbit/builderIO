import './styles/cardStyles.css';
type CardProps = {
  cardImg: string;
  cardImgAlt?: string;
  cardQuote: string;
  cardDescription: string;
}

const Testimonial = (props: CardProps) => {
  return (
    <div className='cardContainer'>
      <img className='cardImg'
        src={props.cardImg}
        alt={props.cardImgAlt ?? 'LOGO'}
      />
      <div className='paddingH20'>
        <div className='cardTitleText'>{props.cardQuote}</div>
        <div className='cardDescriptionText paddingH30'>{props.cardDescription}</div>
      </div>
    </div>
  )
}

export default Testimonial;