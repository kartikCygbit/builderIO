type CardProps = {
  cardImg?: string;
  cardImgAlt?: string;
  cardTitle?: string;
  backgroundColor: string;
  textColor: string;
}

const ScrollCard = (props: CardProps) => {
  console.log('[PROPS] ===>',props)
  return (
    <div className='scrollCardContainer' style={{backgroundColor:props?.backgroundColor }}>
      <img className="scrollIconImg" src={props.cardImg} />
      <div className='scrollCardText' style={{color:props?.textColor }}>{props.cardTitle}</div>
    </div>
  )
}

export default ScrollCard;