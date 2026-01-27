// src/screens/Home/Home.jsx
import { useState, useEffect } from "react";
import colors from "../../styles/colors";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/splash/logo-text.png";
import MapView from "../../components/MapView";
import RecommendedRoutes from "../../components/RecommendedRoutes";
import RouteOverview from "../../components/RouteOverview";
import NavigationMode from "../../components/NavigationMode";
import LiveNavigation from "../../components/LiveNavigation";
import searchIcon from "../../assets/icons/searchIcon.png";

// Dummy PH places (expanded)
const PLACES = [
  // Metro Manila
  { id: "moa", name: "SM Mall of Asia", city: "Pasay, Metro Manila", lat: 14.5353, lng: 120.9822 },
  { id: "bgc", name: "BGC High Street", city: "Taguig, Metro Manila", lat: 14.5526, lng: 121.0443 },
  { id: "intramuros", name: "Intramuros", city: "Manila, Metro Manila", lat: 14.5896, lng: 120.9747 },
  { id: "rizal-park", name: "Rizal Park (Luneta)", city: "Manila, Metro Manila", lat: 14.5829, lng: 120.9790 },
  { id: "up-diliman", name: "UP Diliman", city: "Quezon City, Metro Manila", lat: 14.6549, lng: 121.0647 },
  { id: "quezon-memorial", name: "Quezon Memorial Circle", city: "Quezon City, Metro Manila", lat: 14.651, lng: 121.0486 },
  { id: "greenbelt", name: "Greenbelt Park", city: "Makati, Metro Manila", lat: 14.5518, lng: 121.0223 },
  { id: "ayala-museum", name: "Ayala Museum", city: "Makati, Metro Manila", lat: 14.5536, lng: 121.0225 },
  { id: "venice-grand-canal", name: "Venice Grand Canal Mall", city: "Taguig, Metro Manila", lat: 14.5439, lng: 121.0517 },
  { id: "sm-north", name: "SM North EDSA", city: "Quezon City, Metro Manila", lat: 14.6575, lng: 121.03 },
  { id: "trinoma", name: "Trinoma", city: "Quezon City, Metro Manila", lat: 14.6516, lng: 121.0321 },
  { id: "robinsons-manila", name: "Robinsons Place Manila", city: "Ermita, Metro Manila", lat: 14.5764, lng: 120.9835 },

  // Luzon
  { id: "tagaytay", name: "Tagaytay Ridge", city: "Tagaytay, Cavite", lat: 14.1153, lng: 120.9621 },
  { id: "skyranch-tagaytay", name: "Sky Ranch Tagaytay", city: "Tagaytay, Cavite", lat: 14.1194, lng: 120.9565 },
  { id: "baguio", name: "Session Road", city: "Baguio City, Benguet", lat: 16.412, lng: 120.596 },
  { id: "burnham-park", name: "Burnham Park", city: "Baguio City, Benguet", lat: 16.411, lng: 120.595 },
  { id: "mines-view", name: "Mines View Park", city: "Baguio City, Benguet", lat: 16.418, lng: 120.62 },
  { id: "vigan", name: "Calle Crisologo", city: "Vigan, Ilocos Sur", lat: 17.5747, lng: 120.386 },
  { id: "la-union", name: "San Juan Surf Town", city: "San Juan, La Union", lat: 16.6702, lng: 120.3186 },
  { id: "banaue", name: "Banaue Rice Terraces Viewpoint", city: "Banaue, Ifugao", lat: 16.9126, lng: 121.0584 },
  { id: "sagada", name: "Sagada Town Proper", city: "Sagada, Mountain Province", lat: 17.0885, lng: 120.8983 },
  { id: "hundred-islands", name: "Hundred Islands Wharf", city: "Alaminos, Pangasinan", lat: 16.176, lng: 119.951 },
  { id: "subic-bay", name: "Subic Bay Freeport", city: "Subic, Zambales", lat: 14.826, lng: 120.2828 },
  { id: "enchanted-kingdom", name: "Enchanted Kingdom", city: "Santa Rosa, Laguna", lat: 14.2792, lng: 121.097 },
  { id: "nuvali", name: "Nuvali Lakeside", city: "Santa Rosa, Laguna", lat: 14.2494, lng: 121.0526 },
  { id: "taal-lake", name: "Taal Lake View", city: "Talisay, Batangas", lat: 14.0952, lng: 121.0167 },
  { id: "anilao", name: "Anilao Diving Area", city: "Mabini, Batangas", lat: 13.7314, lng: 120.907 },
  { id: "mayon", name: "Mayon View Park", city: "Legazpi, Albay", lat: 13.1483, lng: 123.7353 },

  // Visayas
  { id: "cebu-it-park", name: "Cebu IT Park", city: "Cebu City, Cebu", lat: 10.3291, lng: 123.9054 },
  { id: "ayala-cebu", name: "Ayala Center Cebu", city: "Cebu City, Cebu", lat: 10.3173, lng: 123.9057 },
  { id: "sm-seaside", name: "SM Seaside City Cebu", city: "Cebu City, Cebu", lat: 10.283, lng: 123.878 },
  { id: "mactan-shrine", name: "Mactan Shrine", city: "Lapu-Lapu City, Cebu", lat: 10.3144, lng: 124.0194 },
  { id: "oslob", name: "Oslob Whale Sharks", city: "Oslob, Cebu", lat: 9.5215, lng: 123.4395 },
  { id: "bohol-choco", name: "Chocolate Hills Viewpoint", city: "Carmen, Bohol", lat: 9.8071, lng: 124.1763 },
  { id: "panglao", name: "Alona Beach", city: "Panglao, Bohol", lat: 9.5487, lng: 123.7641 },
  { id: "iloilo-esplanade", name: "Iloilo River Esplanade", city: "Iloilo City, Iloilo", lat: 10.7202, lng: 122.5621 },
  { id: "bacolod-lacson", name: "Lacson Street", city: "Bacolod City, Negros Occidental", lat: 10.6765, lng: 122.9509 },
  { id: "ruins", name: "The Ruins", city: "Talisay, Negros Occidental", lat: 10.7405, lng: 122.9674 },
  { id: "boracay", name: "White Beach Station 2", city: "Boracay, Aklan", lat: 11.9674, lng: 121.9248 },
  { id: "el-nido", name: "El Nido Town Beach", city: "El Nido, Palawan", lat: 11.2027, lng: 119.4124 },
  { id: "coron", name: "Coron Town Pier", city: "Coron, Palawan", lat: 12.0002, lng: 120.204 },

  // Mindanao
  { id: "davao-park", name: "People's Park", city: "Davao City, Davao del Sur", lat: 7.0733, lng: 125.6128 },
  { id: "samal", name: "Samal Island Beachfront", city: "Island Garden City of Samal, Davao", lat: 7.1167, lng: 125.7333 },
  { id: "cdo-centrio", name: "Centrio Mall", city: "Cagayan de Oro City, Misamis Oriental", lat: 8.479, lng: 124.6473 },
  { id: "siargao", name: "General Luna Beach", city: "Siargao Island, Surigao del Norte", lat: 9.7963, lng: 126.1653 },
];

// Use some of the first ones as "popular"
const POPULAR_DESTINATIONS = PLACES.slice(0, 14);

export default function Home() {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [showRoutes, setShowRoutes] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);

  const [showOverview, setShowOverview] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  const [showLiveNav, setShowLiveNav] = useState(false);

  // Search logic
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [typing, setTyping] = useState(false);

  const [showQuickExit, setShowQuickExit] = useState(true);

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

  useEffect(() => {
    const fromQuickExit = sessionStorage.getItem("liwa_quick_exit") === "1";

    if (fromQuickExit) {
      setShowQuickExit(false);

      // Reset Home to default calm state
      setSelectedLocation(null);
      setShowRoutes(false);
      setSelectedRoute(null);
      setShowOverview(false);
      setShowNavigation(false);
      setShowLiveNav(false);
      setSearch("");
      setSuggestions([]);
      setTyping(false);

      // Remove flag so refresh returns to normal state (Quick-exit visible)
      sessionStorage.removeItem("liwa_quick_exit");
    } else {
      setShowQuickExit(true);
    }
  }, []);

  const handleQuickExit = () => {
    // Optional: set flag for consistency (especially if you later navigate)
    sessionStorage.setItem("liwa_quick_exit", "1");

    // ✅ Immediately switch Home into "safe screen" mode
    setShowQuickExit(false);

    setSelectedLocation(null);
    setShowRoutes(false);
    setSelectedRoute(null);
    setShowOverview(false);
    setShowNavigation(false);
    setShowLiveNav(false);

    setSearch("");
    setSuggestions([]);
    setTyping(false);

    // ✅ Remove the flag right away so refresh returns to normal state (button visible)
    sessionStorage.removeItem("liwa_quick_exit");
  };

  function handleSearchChange(value) {
    setTyping(true);
    setSearch(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

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
    setTyping(false);
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
        <img
          src={searchIcon}
          alt="search icon"
          style={{
            position: "absolute",
            left: 15,
            top: "50%",
            transform: "translateY(-50%)",
            width: 15,
            height: 15,
            opacity: 0.6,
          }}
        />

        <input
          type="text"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search for a destination in the Philippines (e.g. 'Baguio', 'Boracay')"
          style={{
            width: "100%",
            height: 45,
            borderRadius: 12,
            border: "none",
            outline: "none",
            padding: "0 15px 0 45px",
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
              maxHeight: 260,
              overflowY: "auto",
            }}
          >
            <div
              style={{
                padding: "8px 15px",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: 1,
                opacity: 0.6,
              }}
            >
              {suggestions.length} destination
              {suggestions.length > 1 ? "s" : ""} found
            </div>

            {suggestions.map((place) => (
              <div
                key={place.id}
                onClick={() => handleSelectPlace(place)}
                style={{
                  padding: "10px 15px",
                  cursor: "pointer",
                  borderTop: "1px solid rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <div style={{ fontWeight: 600, fontSize: 14 }}>{place.name}</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>{place.city}</div>
              </div>
            ))}
          </div>
        )}

        {typing && search.trim() && suggestions.length === 0 && (
          <div
            style={{
              width: "100%",
              position: "absolute",
              top: 50,
              backgroundColor: "white",
              borderRadius: 10,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              zIndex: 50,
              padding: "12px 15px",
              fontSize: 13,
            }}
          >
            No destinations found. Try searching for a city, mall, or landmark.
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

          <div
            style={{
              width: "100%",
              maxWidth: 800,
              alignSelf: "flex-start",
              marginLeft: 20,
            }}
          >
            {renderSearchBar()}
          </div>

          {/* Map (ALWAYS VISIBLE) */}
          <div
            style={{
              width: "100%",
              maxWidth: 900,
              height: 430,
              borderRadius: 18,
              overflow: "hidden",
              margin: "0 auto",
              position: "relative",
            }}
          >
            {/* QUICK EXIT overlay (top of map) */}
            {showQuickExit && (
              <button
                type="button"
                onClick={handleQuickExit}
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  background: "#330972",
                  color: "#fff",
                  border: "none",
                  borderRadius: "20px",
                  padding: "10px 16px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  zIndex: 10,
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.18)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "block" }}
                >
                  <path
                    d="M13 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-3 17v-6l-2 2-2-2 3.5-3.5c.4-.4.9-.6 1.4-.6H13c.6 0 1.1.2 1.5.6L17 15l-2 2-2-2v7h-3Zm9-9h-4v-2h4v2Z"
                    fill="#FFFFFF"
                  />
                </svg>
                Quick-exit
              </button>
            )}

            <MapView
              latitude={selectedLocation?.lat || userLocation.lat}
              longitude={selectedLocation?.lng || userLocation.lng}
              userLocation={userLocation}
              routeGeometry={null}
            />
          </div>

          {/* Recommended Routes */}
          {showRoutes &&
            !selectedRoute &&
            !showOverview &&
            !showNavigation &&
            !showLiveNav && (
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
