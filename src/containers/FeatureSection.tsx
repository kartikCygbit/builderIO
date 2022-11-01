import { BuilderComponent, builder } from '@builder.io/react';
import { useEffect, useState } from "react";
import '@builder.io/widgets';
import './styles/FeaturesSectionStyles.css'
function FeaturesSection() {
  const [features, setFeatures] = useState(null);

  useEffect(() => {
    builder
      .get("features", {
        userAttributes: {
          // To allow targeting different announcements at different pages (URLs)
          urlPath: window.location.pathname,
        },
      })
      .toPromise()
      .then((featureComp) => setFeatures(featureComp));
  }, []);

  return (
    <div className='featuresContainer'>
      <div className='textContainer'>
        <div className='title'>Adipiscing Inceptos Vehicula</div>
        <div className='description'>Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      {features && (
        <BuilderComponent model="features" content={features} />
      )}
    </div>
  );
}

export default FeaturesSection;
