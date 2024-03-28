import { React, useEffect, useState } from "react";

// Function to generate a rounded and colored marker image using async/await
async function generateUserMarkerImage(userImageURL, markerColor) {
  const canvas = document.createElement("canvas");
  canvas.width = 70; // Adjust the canvas size as needed
  canvas.height = 70;

  const ctx = canvas.getContext("2d");

  // Draw the outer circle as a balloon-like border
  ctx.fillStyle = markerColor;

  // Create an image element and wait for it to load
  const img = new Image();
  img.src = userImageURL;
  img.crossOrigin = "anonymous";

  await new Promise((resolve) => {
    img.onload = resolve;
  });

  // Clip the user's photo to fit within the inner circle
  ctx.save();
  ctx.beginPath();
  ctx.arc(35, 35, 30, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(img, 0, 0, 70, 70); // Adjust the image size and position
  ctx.restore();

  ctx.beginPath();
  ctx.arc(35, 35, 30, 0, Math.PI * 2);
  ctx.strokeStyle = markerColor; // Border color
  ctx.lineWidth = 3; // Border width
  ctx.stroke();
  ctx.closePath();

  // Return the data URL of the canvas
  console.log("Image Url: ", userImageURL);
  return canvas.toDataURL("image/png");
}

const MarkerMe = ({
  userImageURL,
  markerColor,
  isYou = false,
  onSelect,
  ...props
}) => {
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (!marker && isYou) {
      setMarker(
        new window.google.maps.Marker({
          position: props.position,
          icon: {
            url: userImageURL,
            scaledSize: new window.google.maps.Size(36, 29),
          },
        })
      );
    } else if (!marker && userImageURL) {
      generateUserMarkerImage(userImageURL, markerColor)
        .then((iconUrl) => {
          setMarker(
            new window.google.maps.Marker({
              position: props.position,
              icon: {
                url: iconUrl,
                scaledSize: new window.google.maps.Size(50, 50), // Adjust the icon size
              },
            })
          );
        })
        .catch((error) => {
          console.error("Error generating user marker image:", error);
        });
    }
  }, [marker, userImageURL, markerColor, props.position]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(props);

      // Add click event listener to the marker
      marker.addListener("click", () => {
        if (onSelect) {
          onSelect(marker);
        }
      });
    }
  }, [marker, props, onSelect]);

  return null;
};

export default MarkerMe;
