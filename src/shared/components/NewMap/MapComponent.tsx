import { FC } from "react";
import { useEffect, useRef, useState } from "react";
//import { MarkerClusterer } from "@googlemaps/markerclusterer";
//import { Map } from "google.maps";

interface MapComponentProps {
  fullWidth?: boolean;
  fullHeight?: boolean;
}

const MapComponent: FC<MapComponentProps> = ({}) => {
  const [map, setMap] = useState<google.maps.Map>();
  const ref = useRef<HTMLDivElement>();
  // New Code Markers: 1
  // const [markerCluster, setMarkerClusters] = useState<MarkerClusterer>();


  useEffect(() => {
    if (ref.current && !map) {
      const initialMap = new window.google.maps.Map(ref.current, {
        center: { lat: 4.4333479181711075, lng: -75.21505129646759 },
        zoom: 10,
      });

      // Pre-defined marker positions
      // const predefinedMarkers: google.maps.LatLngLiteral[] = [
      //   { lat: 4.45, lng: -75.2 },
      //   { lat: 4.46, lng: -75.21 },
      //   // Add more pre-defined marker positions as needed
      // ];

      // Create pre-defined markers
      // const markers = predefinedMarkers.map((position) => {
      //   return new google.maps.Marker({
      //     position,
      //     map: initialMap,
      //     icon: {
      //       url:"assets/Pin.svg",
      //       scaledSize: new window.google.maps.Size(40, 40), 
      //     }
      //   });
      // });

      setMap(initialMap);

      // Initialize MarkerClusterer with pre-defined markers and marker added on click
      // setMarkerClusters(
      //   new MarkerClusterer({ map: initialMap, markers: markers })
      // );
    }
  }, [map]);

  return (
    <>
      <div
        ref={ref as any}
        style={{
          height: "100%",
          width: "100%",
          minHeight: "290px",
          minWidth: "100px",
          flexGrow: "1",
          border: "1px solid",
          borderRadius: "28px",
        }}
      ></div>
    </>
  );
};

export default MapComponent;
