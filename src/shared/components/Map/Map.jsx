import React, { useRef, useEffect, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const mapRender = (status) => {
  if (status === Status.LOADING) return <p>Loading...</p>;
  if (status === Status.FAILURE) return <p>Error...</p>;
  return null;
};

const MapDom = ({ id, children, ...props }) => {
  const ref = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, props));
    }
  }, [ref, map, props]);

  return (
    <>
      <div ref={ref} id={id}></div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Map = ({ apiKey, render = mapRender, children, ...props }) => {
  return (
    <Wrapper apiKey={apiKey} render={render}>
      <MapDom {...props}>{children}</MapDom>
    </Wrapper>
  );
};

export default Map;
