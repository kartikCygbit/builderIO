import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { useEffect, useState } from "react";
import './styles/CardStyles.css';

type HeaderProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  attributes?: any;
}

const Card = (props: HeaderProps) => {
  console.log('[PROPS]')
  console.log(props)
  return (
    <div
      {...props.attributes}
      className='card'
    >
      <h1 className='cardText'>{props.title}</h1>
      <p className='cardDescription'>{props.description}</p>
      <img
        src={props.image}
        alt={props.imageAlt ?? 'image'}
        className='cardImage'
      />
    </div>
  )
}

export default Card;