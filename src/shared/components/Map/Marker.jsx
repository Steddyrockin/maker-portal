import { useEffect, useState } from "react";

const Marker = ({ children, ...props }) => {
  const { position, sellerIcon } = props;

  const pos = new window.google.maps.LatLng(position.lat, position.lng);

  const [marker, setMarker] = useState();
  const icons = {
    parking: {
      icon: "/images/marker.png",
    },
    library: {
      icon: "library_maps.png",
    },
    info: {
      icon: "info-i_maps.png",
    },
  };
  const features = [
    {
      position: new window.google.maps.LatLng(-33.91721, 151.2263),
      type: "info",
    },
    {
      position: new window.google.maps.LatLng(-33.91539, 151.2282),
      type: "info",
    },
    {
      position: new window.google.maps.LatLng(-33.91747, 151.22912),
      type: "info",
    },
  ];

  useEffect(() => {
    if (!marker) {
      setMarker(
        new window.google.maps.Marker({
          position: pos,
          //icon: icons["parking"].icon,
          icon: sellerIcon,
        })
      );
    }
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(props);
    }
  }, [marker, props]);
};
export default Marker;
