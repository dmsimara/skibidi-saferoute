// src/components/MapView.jsx
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapView({
  latitude,
  longitude,
  userLocation,
  routeGeometry,
}) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  // CRA-compatible env variable
  const apiKey = process.env.REACT_APP_MAPTILER_KEY;

  // -----------------------------------------------------------
  // INITIALIZE MAP (RUNS ONCE)
  // -----------------------------------------------------------
  useEffect(() => {
    if (!apiKey || !mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapRef.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [0, 0], 
      zoom: 1,
    });

    mapInstance.current = map;

    map.once("load", () => {
      // 🔥 Move camera AFTER style load (production-safe)
      map.jumpTo({
        center: [longitude, latitude],
        zoom: 13,
      });

      // User location marker
      if (userLocation) {
        new maplibregl.Marker({ color: "#2E86FF" })
          .setLngLat([userLocation.lng, userLocation.lat])
          .addTo(map);
      }
    });

    return () => {
      map.remove();
    };
  }, [apiKey]);

  // -----------------------------------------------------------
  // UPDATE CENTER WHEN LOCATION CHANGES
  // -----------------------------------------------------------
  useEffect(() => {
    const map = mapInstance.current;
    if (!map || !map.isStyleLoaded()) return;

    map.easeTo({
      center: [longitude, latitude],
      zoom: 13,
      duration: 800,
    });
  }, [longitude, latitude]);

  // -----------------------------------------------------------
  // ADD / REMOVE ROUTE LINE
  // -----------------------------------------------------------
  useEffect(() => {
    const map = mapInstance.current;
    if (!map || !map.isStyleLoaded()) return;

    // Clean up existing route
    if (map.getLayer("route-line")) {
      map.removeLayer("route-line");
    }
    if (map.getSource("route-source")) {
      map.removeSource("route-source");
    }

    if (!routeGeometry) return;

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
        minHeight: 430,  
        borderRadius: 18,
      }}
    />
  );
}
