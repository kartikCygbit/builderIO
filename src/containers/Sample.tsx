import { BuilderComponent, builder} from '@builder.io/react';
import { useEffect, useState } from "react";
import './styles/SampleStyles.css'

function Sample() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    builder
      .get("hero", {
        userAttributes: {
          // To allow targeting different announcements at different pages (URLs)
          urlPath: window.location.pathname,
        },
      })
      .toPromise()
      .then((heroComp) => setHero(heroComp));
  }, []);

  return (
    <div className='cardSection'>
      {hero && (
        <BuilderComponent model="hero" content={hero} />
      )}
    </div>
  );
}

export default Sample;
