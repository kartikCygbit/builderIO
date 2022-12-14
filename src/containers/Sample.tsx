import { BuilderComponent, builder} from '@builder.io/react';
import { useEffect, useState } from "react";
import './styles/SampleStyles.css'
import '@builder.io/widgets';

function Sample() {
  const [sample, setSample] = useState(null);

  useEffect(() => {
    builder
      .get("landing", {
        userAttributes: {
          // To allow targeting different announcements at different pages (URLs)
          urlPath: window.location.pathname,
        },
      })
      .toPromise()
      .then((heroComp) => setSample(heroComp));
  }, [window.location.pathname]);

  return (
    <div className='cardSection'>
      {sample && (
        <BuilderComponent model="landing" content={sample} />
      )}
    </div>
  );
}

export default Sample;
