// src/screens/Home/Home.jsx
import { useState, useEffect } from "react";
import colors from "../../styles/colors";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/splash/logo-text.png";
import MapView from "../../components/MapView";
import RecommendedRoutes from "../../components/RecommendedRoutes";
import RouteOverview from "../../components/RouteOverview";
import NavigationMode from "../../components/NavigationMode";
import LiveNavigation from "../../components/LiveNavigation"; // ✅ NEW IMPORT

// Dummy PH places
const PLACES = [
  { id: "moa", name: "SM Mall of Asia", city: "Pasay, Metro Manila", lat: 14.5353, lng: 120.9822 },
  { id: "bgc", name: "BGC High Street", city: "Taguig, Metro Manila", lat: 14.5526, lng: 121.0443 },
  { id: "intramuros", name: "Intramuros", city: "Manila", lat: 14.5896, lng: 120.9747 },
  { id: "upd", name: "UP Diliman", city: "Quezon City, Metro Manila", lat: 14.6549, lng: 121.0647 },
];

export default function Home() {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [showRoutes, setShowRoutes] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);

  const [showOverview, setShowOverview] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  const [showLiveNav, setShowLiveNav] = useState(false); // ✅ NEW STATE

  // User location setup
  useEffect(() => {
    const fallback = { lat: 14.5995, lng: 120.9842 };

    try {
      const stored = localStorage.getItem("liwa_privacy");
      const parsed = stored ? JSON.parse(stored) : {};

      if (parsed.location === true && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) =>
            setUserLocation({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            }),
          () => setUserLocation(fallback)
        );
      } else {
        setUserLocation(fallback);
      }
    } catch {
      setUserLocation(fallback);
    }
  }, []);

  // Search logic
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function handleSearchChange(value) {
    setSearch(value);
    if (!value.trim()) return setSuggestions([]);

    const lower = value.toLowerCase();
    setSuggestions(
      PLACES.filter(
        (p) =>
          p.name.toLowerCase().includes(lower) ||
          p.city.toLowerCase().includes(lower)
      )
    );
  }

  function handleSelectPlace(place) {
    setSelectedLocation(place);
    setSearch(`${place.name}, ${place.city}`);
    setSuggestions([]);
    setShowRoutes(true);
  }

  if (!userLocation) return <div style={{ padding: 40 }}>Loading map…</div>;

  // Search bar UI
  function renderSearchBar() {
    return (
      <div style={{ width: "100%", position: "relative" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="🔍  Search for a Destination in the Philippines"
          style={{
            width: "100%",
            height: 45,
            borderRadius: 12,
            border: "none",
            outline: "none",
            padding: "0 15px",
            fontSize: 15,
            backgroundColor: colors.offWhite,
            boxShadow: "0px 3px 10px rgba(0,0,0,0.10)",
          }}
        />

        {suggestions.length > 0 && (
          <div
            style={{
              width: "100%",
              position: "absolute",
              top: 50,
              backgroundColor: "white",
              borderRadius: 10,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              zIndex: 50,
            }}
          >
            {suggestions.map((place) => (
              <div
                key={place.id}
                onClick={() => handleSelectPlace(place)}
                style={{
                  padding: "12px 15px",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <div style={{ fontWeight: 600 }}>{place.name}</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>{place.city}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        overflowY: "auto",
        background: `radial-gradient(circle, ${colors.offWhite} 0%, ${colors.purpleLight} 100%)`,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Main purple container */}
      <div
        style={{
          width: "80%",
          minHeight: "100vh",
          backgroundColor: colors.purpleMid,
          borderRadius: "0 0 18px 18px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 30,
          paddingBottom: 30,
          justifyContent: "space-between",
        }}
      >
        {/* CONTENT AREA */}
        <div
          style={{
            width: "85%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 25,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <img src={logo} alt="Liwa" style={{ width: 120 }} />

          {/* Search */}
          <div style={{ width: "100%", maxWidth: 800 }}>{renderSearchBar()}</div>

          {/* Map (ALWAYS VISIBLE) */}
          <div
            style={{
              width: "100%",
              maxWidth: 900,
              height: 430,
              borderRadius: 18,
              overflow: "hidden",
              margin: "0 auto",
            }}
          >
            <MapView
              latitude={selectedLocation?.lat || userLocation.lat}
              longitude={selectedLocation?.lng || userLocation.lng}
              userLocation={userLocation}
              routeGeometry={null}
            />
          </div>

          {/* Recommended Routes */}
          {showRoutes && !selectedRoute && !showOverview && !showNavigation && !showLiveNav && (
            <RecommendedRoutes
              place={selectedLocation}
              onSelectRoute={(route) => {
                setSelectedRoute(route);
                setShowOverview(true);
              }}
              onBack={() => setShowRoutes(false)}
            />
          )}

          {/* Route Overview */}
          {showOverview && selectedRoute && !showNavigation && !showLiveNav && (
            <RouteOverview
              place={selectedLocation}
              route={selectedRoute}
              onBack={() => {
                setShowOverview(false);
                setSelectedRoute(null);
              }}
              onStartNavigation={() => setShowNavigation(true)}
            />
          )}

          {/* Navigation Mode (step list) */}
          {showNavigation && !showLiveNav && (
            <NavigationMode
              place={selectedLocation}
              route={selectedRoute}
              onBack={() => setShowNavigation(false)}
              onStart={() => setShowLiveNav(true)}  
            />
          )}

          {/* Live Navigation */}
          {showLiveNav && (
            <LiveNavigation
              place={selectedLocation}
              route={selectedRoute}
              onExit={() => {
                setShowLiveNav(false);
                setShowNavigation(false);
              }}
            />
          )}
        </div>

        {/* NAVBAR */}
        <div
          style={{
            width: "85%",
            maxWidth: 900,
            margin: "0 auto",
            transform: "translateX(35px)",
          }}
        >
          <Navbar active="Home" />
        </div>
      </div>
    </div>
  );
}
