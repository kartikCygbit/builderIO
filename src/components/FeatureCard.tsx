import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { useEffect, useState } from "react";
import './styles/FeatureCardStyles.css';
import CheckImage from '../assets/images/Check.png';

type CardProps = {
  featureDescription: string;
  image: string;
  imageAlt: string;
  attributes?: any;
  alignImageRight?: boolean;
}

const renderImage = (props: CardProps) => {
  return (
    <img
      src={props.image}
      alt={props.imageAlt ?? 'image'}
      className={`cardImage ${props.alignImageRight ? 'ml15' : 'mr15'}`}
    />
  )
}

const renderText = (props: CardProps) => {
  return (
    <div
      className={`descContainer ${props.alignImageRight ? 'mr15' : 'ml15'}`}
    >
      <img
        src={CheckImage}
        className='checkImage'
      />
      <p className='cardDescription'>{props.featureDescription}</p>
    </div>
  )
}

const FeatureCard = (props: CardProps) => {
  console.log('[PROPS]')
  console.log(props)
  console.log('-->', props.alignImageRight)
  return (
    <div
      {...props.attributes}
      className={`card ${props.alignImageRight ? '' : 'reverse'}`}
    >
      {renderText(props)}
      {renderImage(props)}
    </div>
  )
}

export default FeatureCard;