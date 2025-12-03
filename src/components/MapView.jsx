// src/components/MapView.jsx
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export default function MapView({ latitude, longitude, userLocation, routeGeometry }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const apiKey = process.env.REACT_APP_MAPTILER_KEY;

  // -----------------------------------------------------------
  // INITIALIZE MAP (runs only once)
  // -----------------------------------------------------------
  useEffect(() => {
    if (!apiKey) {
      console.error("❌ Missing REACT_APP_MAPTILER_KEY");
      return;
    }

    if (!mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapRef.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
      center: [longitude, latitude],
      zoom: 13,
    });

    mapInstance.current = map;

    map.on("load", () => {
      // USER LOCATION MARKER
      if (userLocation) {
        const marker = new maplibregl.Marker({ color: "#2E86FF" })
          .setLngLat([userLocation.lng, userLocation.lat])
          .addTo(map);

        mapInstance.current.userMarker = marker;
      }
    });

    return () => {
      map.remove();
    };
  }, [apiKey]);

  // -----------------------------------------------------------
  // UPDATE CENTER IF SELECTED PLACE CHANGES
  // -----------------------------------------------------------
  useEffect(() => {
    if (!mapInstance.current) return;
    mapInstance.current.setCenter([longitude, latitude]);
  }, [longitude, latitude]);

  // -----------------------------------------------------------
  // ADD / REMOVE ROUTE LINE (safe MVP version)
  // -----------------------------------------------------------
  useEffect(() => {
    const map = mapInstance.current;
    if (!map || !map.isStyleLoaded()) return;

    // remove existing route safely
    if (map.getLayer("route-line")) {
      map.removeLayer("route-line");
    }
    if (map.getSource("route-source")) {
      map.removeSource("route-source");
    }

    if (!routeGeometry) return; // nothing to draw, we're done

    // add new dummy/real route
    map.addSource("route-source", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: routeGeometry,
      },
    });

    map.addLayer({
      id: "route-line",
      type: "line",
      source: "route-source",
      paint: {
        "line-width": 6,
        "line-color": "#6A4ACD",
        "line-opacity": 0.9,
      },
    });
  }, [routeGeometry]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
