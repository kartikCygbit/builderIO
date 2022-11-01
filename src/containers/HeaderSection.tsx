import { BuilderComponent, builder} from '@builder.io/react';
import { useEffect, useState } from "react";
// import './styles/HeaderStyles.css'
import '@builder.io/widgets';

function HeaderSection() {
  const [header, setHeader] = useState(null);

  useEffect(() => {
    builder
      .get("header", {
        userAttributes: {
          // To allow targeting different announcements at different pages (URLs)
          urlPath: window.location.pathname,
        },
      })
      .toPromise()
      .then((headerComp) => setHeader(headerComp));
  }, []);

  return (
    <div>
      {header && (
        <BuilderComponent model="header" content={header} />
      )}
    </div>
  );
}

export default HeaderSection;
