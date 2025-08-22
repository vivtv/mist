'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Card } from '@/components/ui/card';
import { MapPin, Lightbulb } from 'lucide-react';

// --- MOCK DATA FUNCTIONS ---
type AQIReading = {
  name: string;
  lat: number;
  lng: number;
  aqi: number;
  pm25: number;
  updatedAt: string;
};

const generateMockBangkokAQI = (): AQIReading[] => [
  {
    name: 'Central Bangkok',
    lat: 13.7563,
    lng: 100.5018,
    aqi: Math.floor(Math.random() * 200),
    pm25: parseFloat((Math.random() * 50).toFixed(1)),
    updatedAt: new Date().toISOString(),
  },
  {
    name: 'Ladprao',
    lat: 13.805,
    lng: 100.5539,
    aqi: Math.floor(Math.random() * 200),
    pm25: parseFloat((Math.random() * 50).toFixed(1)),
    updatedAt: new Date().toISOString(),
  },
  {
    name: 'Bang Na',
    lat: 13.6682,
    lng: 100.614,
    aqi: Math.floor(Math.random() * 200),
    pm25: parseFloat((Math.random() * 50).toFixed(1)),
    updatedAt: new Date().toISOString(),
  },
];

const getSeverity = (aqi: number): 'good' | 'moderate' | 'danger' => {
  if (aqi < 51) return 'good';
  if (aqi < 101) return 'moderate';
  return 'danger';
};

const severityToColor = (aqi: number, dark = false): string => {
  const severity = getSeverity(aqi);
  if (severity === 'good') return dark ? '#4ade80' : '#22c55e';
  if (severity === 'moderate') return dark ? '#facc15' : '#eab308';
  return dark ? '#f87171' : '#ef4444';
};

// --- MAIN COMPONENT ---
const DemoSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<L.Map | null>(null);
  const [data, setData] = useState<AQIReading[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const fetchAQI = () => {
    const mocked = generateMockBangkokAQI();
    setData(mocked);
    setLastUpdated(new Date().toISOString());
  };

  const BKK_CENTER: [number, number] = [13.7563, 100.5018];
  const dark = useMemo(() => document.documentElement.classList.contains('dark'), []);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || leafletRef.current) return;
    const map = L.map(mapRef.current).setView(BKK_CENTER, 11);
    leafletRef.current = map;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);
    return () => {
      map.remove();
      leafletRef.current = null;
    };
  }, []);

  // Add markers
  useEffect(() => {
    if (!leafletRef.current) return;
    const map = leafletRef.current;
    const layerGroup = L.layerGroup().addTo(map);

    data.forEach((p) => {
      const color = severityToColor(p.aqi, dark);
      const sev = getSeverity(p.aqi);

      const icon = L.divIcon({
        html: `<div style="width:16px;height:16px;border-radius:9999px;background:${color};box-shadow:0 0 0 6px ${color}22;${sev === 'danger' ? 'animation:mistPulse 1.2s ease-in-out infinite;' : ''}"></div>`,
        className: '',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      const marker = L.marker([p.lat, p.lng], { icon }).addTo(layerGroup);
      marker.bindPopup(`
        <div style="min-width:180px">
          <div style="font-weight:600">${p.name}</div>
          <div style="font-size:12px">AQI: <b>${p.aqi}</b></div>
          <div style="font-size:12px">PM2.5: ${p.pm25} µg/m³</div>
          <div style="font-size:11px;opacity:.7">${new Date(p.updatedAt).toLocaleString()}</div>
          <div style="margin-top:6px;font-size:12px">
            ${getSeverity(p.aqi) === 'danger'
          ? 'Air quality is unhealthy. Wear a mask and limit time outside.'
          : getSeverity(p.aqi) === 'moderate'
            ? 'Air is acceptable. Sensitive groups should take care.'
            : 'Air is good. Enjoy the outdoors!'
        }
          </div>
        </div>
      `);
    });

    return () => {
      map.removeLayer(layerGroup);
    };
  }, [data, dark]);

  // Auto-refresh
  useEffect(() => {
    fetchAQI();
    const id = setInterval(fetchAQI, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  // Get Central Bangkok data
  const centralData = data.find((d) => d.name === 'Central Bangkok');
  const color = centralData ? severityToColor(centralData.aqi, dark) : '#ccc';
  const severity = centralData ? getSeverity(centralData.aqi) : 'moderate';

  return (
    <section id="demo" className="py-20 bg-gradient-mist">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Live Air Quality Demo</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience real-time air pollution tracking for Bangkok. This interactive demo shows how MIST monitors air quality data and provides actionable insights for healthier living.
          </p>
        </div>

        {/* MAP */}
        <Card className="p-6 mb-6 shadow-card hover:shadow-glow transition-all duration-500">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold">Bangkok AQI Map</h3>
            <span className="text-sm text-muted-foreground">
              Updated: {new Date(lastUpdated || Date.now()).toLocaleTimeString()}
            </span>
          </div>
          <div ref={mapRef} className="rounded-xl overflow-hidden h-[420px] w-full" />
        </Card>

        {/* AQI Info Card */}
        {centralData && (
          <Card className="flex flex-col md:flex-row items-stretch justify-between gap-6 p-6 mb-12 transition-all duration-300">
            {/* Name + Live AQI */}
            <div className="flex flex-col md:flex-row md:items-center justify-between flex-1">
              <div className="flex items-center gap-4">
                <MapPin className="w-12 h-12 flex-shrink-0" style={{ color }} />
                <div>
                  <h4 className="text-xl font-bold text-foreground">{centralData.name}</h4>
                  <p className="text-sm text-muted-foreground">Live Air Quality</p>
                </div>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <div className="text-2xl font-bold text-foreground">AQI: {centralData.aqi}</div>
                <div className="text-sm text-muted-foreground">PM2.5: {centralData.pm25} µg/m³</div>
                <div
                  className={`text-xs mt-1 ${severity === 'danger'
                    ? 'text-red-600'
                    : severity === 'moderate'
                      ? 'text-yellow-600'
                      : 'text-green-600'
                    }`}
                >
                  {severity === 'danger'
                    ? 'Unhealthy'
                    : severity === 'moderate'
                      ? 'Moderate'
                      : 'Good'}
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* DESCRIPTION + DOWNLOAD CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-soft transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-primary">Real-time Monitoring</h3>
            <p className="text-muted-foreground">
              Our demo tracks live air quality data across Bangkok, including PM2.5, PM10, ozone levels, and visibility metrics.
              Data is updated every 5 minutes from official monitoring stations.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">See How It Works</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Watch a quick 30 second video to learn how to use MIST and get the most
                  out of its features in your daily life.
                </p>
              </div>
              <a
                href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition text-center"
              >
                Watch Preview
              </a>
            </Card>

          {/* Download App Card */}
          <Card className="p-6 hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Get the Full Experience</h3>
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Note:</strong> This demo only shows Bangkok's air quality.
                To see other provinces and unlock all features, download the full app below.
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Lightbulb className="w-4 h-4 text-yellow-500" />
                Tip: Click the colored circles on the map for more info about each location.
              </p>
            </div>
            <a
              href="https://github.com/FadedAwayIntoNothingness/mist/releases/download/0.0.5/MIST.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition text-center"
            >
              Download MIST App
            </a>


          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
