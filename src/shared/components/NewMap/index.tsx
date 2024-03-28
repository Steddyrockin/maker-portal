import { FC } from "react";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import MapComponent from "./MapComponent";

const apiKey = "AIzaSyAT9SH59Z75iR8OUEcfv-mTklD6xMDHs80";

interface MapProps {
  fullWidth?: boolean;
  fullHeight?: boolean;
}

const NewMap: FC<MapProps> = ({ fullWidth, fullHeight }) => {
  const render = (status: Status) => <h1>{status}</h1>;
  return (
    <Wrapper apiKey={apiKey} render={render}>
      <MapComponent fullWidth={fullWidth} fullHeight={fullHeight} />
    </Wrapper>
  );
};

export default NewMap;
