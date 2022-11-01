import { BuilderComponent, builder} from '@builder.io/react';
import { useEffect, useState } from "react";
import '@builder.io/widgets';

function HeroSection() {
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
    <div>
      {hero && (
        <BuilderComponent model="hero" content={hero} />
      )}
    </div>
  );
}

export default HeroSection;
