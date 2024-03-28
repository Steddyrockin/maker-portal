import { Box, Typography, Grid, Container } from "@mui/material";
import { useState, useEffect } from "react";

import Map from "./Map";
import Marker from "./Marker";
import MarkerMe from "./MarkerMe";
import youImage from "assets/PinYou.svg";
import pinImage from "assets/Pin.svg";

const apiKey = "AIzaSyAT9SH59Z75iR8OUEcfv-mTklD6xMDHs80";

export default function MapContainer() {
  const zoom = 4;

  const position = {
    lat: 35,
    lng: -100,
  };

  const position2 = {
    lat: 33.91747,
    lng: -108.22912,
  };
  // for my location
  const [location, setLocation] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      <Container maxWidth="100%">
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Box>
            <Map id="map" apiKey={apiKey} center={location} zoom={zoom}>
              <MarkerMe
                position={location}
                userImageURL={youImage}
                isYou
                onSelect={() => {
                  console.log("Clicked marker!");
                }}
              />
              <Marker position={position} sellerIcon={pinImage} />
              <Marker position={position2} sellerIcon={pinImage} />
            </Map>
          </Box>
        </Box>
      </Container>
    </>
  );
}
