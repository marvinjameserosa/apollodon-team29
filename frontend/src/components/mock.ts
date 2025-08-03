export const historicalReadings = [
  {
    id: "1",
    stationId: "WS001",
    stationName: "Downtown River Station",
    timestamp: "2024-01-07 14:30:00",
    ph: 7.2,
    temperature: 18.5,
    dissolvedOxygen: 8.3,
    turbidity: 2.1,
    conductivity: 450,
    tds: 225,
    wqi: 87,
  },
  {
    id: "2",
    stationId: "WS001",
    stationName: "Downtown River Station",
    timestamp: "2024-01-07 14:25:00",
    ph: 7.1,
    temperature: 18.3,
    dissolvedOxygen: 8.2,
    turbidity: 2.2,
    conductivity: 455,
    tds: 228,
    wqi: 86,
  },
  {
    id: "3",
    stationId: "WS002",
    stationName: "Industrial Park Monitor",
    timestamp: "2024-01-07 14:30:00",
    ph: 6.8,
    temperature: 22.1,
    dissolvedOxygen: 6.2,
    turbidity: 4.8,
    conductivity: 680,
    tds: 340,
    wqi: 65,
  },
  {
    id: "4",
    stationId: "WS003",
    stationName: "Residential Area Sensor",
    timestamp: "2024-01-07 14:30:00",
    ph: 7.4,
    temperature: 19.2,
    dissolvedOxygen: 9.1,
    turbidity: 1.8,
    conductivity: 380,
    tds: 190,
    wqi: 92,
  },
  {
    id: "5",
    stationId: "WS001",
    stationName: "Downtown River Station",
    timestamp: "2024-01-07 14:20:00",
    ph: 7.0,
    temperature: 18.1,
    dissolvedOxygen: 8.1,
    turbidity: 2.3,
    conductivity: 460,
    tds: 230,
    wqi: 85,
  },
  {
    id: "6",
    stationId: "WS002",
    stationName: "Industrial Park Monitor",
    timestamp: "2024-01-07 14:25:00",
    ph: 6.9,
    temperature: 21.8,
    dissolvedOxygen: 6.4,
    turbidity: 4.5,
    conductivity: 675,
    tds: 338,
    wqi: 67,
  },
  // Additional mock data for better visualization
  {
    id: "7",
    stationId: "WS001",
    stationName: "Downtown River Station",
    timestamp: "2024-01-07 14:15:00",
    ph: 6.9,
    temperature: 17.8,
    dissolvedOxygen: 8.0,
    turbidity: 2.4,
    conductivity: 465,
    tds: 232,
    wqi: 84,
  },
  {
    id: "8",
    stationId: "WS001",
    stationName: "Downtown River Station",
    timestamp: "2024-01-07 14:10:00",
    ph: 7.3,
    temperature: 17.5,
    dissolvedOxygen: 7.9,
    turbidity: 2.0,
    conductivity: 440,
    tds: 220,
    wqi: 88,
  },
  {
    id: "9",
    stationId: "WS002",
    stationName: "Industrial Park Monitor",
    timestamp: "2024-01-07 14:20:00",
    ph: 6.7,
    temperature: 21.5,
    dissolvedOxygen: 6.1,
    turbidity: 4.9,
    conductivity: 685,
    tds: 342,
    wqi: 64,
  },
  {
    id: "10",
    stationId: "WS003",
    stationName: "Residential Area Sensor",
    timestamp: "2024-01-07 14:25:00",
    ph: 7.5,
    temperature: 19.0,
    dissolvedOxygen: 9.0,
    turbidity: 1.9,
    conductivity: 375,
    tds: 188,
    wqi: 91,
  }, // Add more readings for comprehensive testing - 200+ readings total
  ...Array.from({ length: 50 }, (_, i) => ({
    id: `${11 + i}`,
    stationId: "WS001",
    stationName: "Downtown River Station",
    timestamp: `2024-01-0${Math.max(1, 7 - Math.floor(i / 12))} ${String(
      23 - Math.floor(i % 12)
    ).padStart(2, "0")}:${String(55 - (i % 4) * 15).padStart(2, "0")}:00`,
    ph: 7.0 + (Math.random() - 0.5) * 0.6,
    temperature: 18.0 + Math.random() * 4,
    dissolvedOxygen: 8.0 + (Math.random() - 0.5) * 1.2,
    turbidity: 2.0 + Math.random() * 1.0,
    conductivity: 450 + (Math.random() - 0.5) * 50,
    tds: 225 + (Math.random() - 0.5) * 25,
    wqi: 80 + Math.floor(Math.random() * 15),
  })),

  // Add readings for WS002
  ...Array.from({ length: 40 }, (_, i) => ({
    id: `ws002_${i + 1}`,
    stationId: "WS002",
    stationName: "Industrial Park Monitor",
    timestamp: `2024-01-0${Math.max(1, 7 - Math.floor(i / 10))} ${String(
      23 - Math.floor(i % 10)
    ).padStart(2, "0")}:${String(50 - (i % 5) * 10).padStart(2, "0")}:00`,
    ph: 6.8 + (Math.random() - 0.5) * 0.8,
    temperature: 21.0 + Math.random() * 6,
    dissolvedOxygen: 6.0 + (Math.random() - 0.5) * 1.5,
    turbidity: 4.5 + Math.random() * 2.0,
    conductivity: 670 + (Math.random() - 0.5) * 80,
    tds: 335 + (Math.random() - 0.5) * 40,
    wqi: 55 + Math.floor(Math.random() * 20),
  })),

  // Add readings for WS003
  ...Array.from({ length: 35 }, (_, i) => ({
    id: `ws003_${i + 1}`,
    stationId: "WS003",
    stationName: "Residential Area Sensor",
    timestamp: `2024-01-0${Math.max(1, 7 - Math.floor(i / 8))} ${String(
      22 - Math.floor(i % 8)
    ).padStart(2, "0")}:${String(45 - (i % 3) * 20).padStart(2, "0")}:00`,
    ph: 7.4 + (Math.random() - 0.5) * 0.4,
    temperature: 19.0 + Math.random() * 3,
    dissolvedOxygen: 9.0 + (Math.random() - 0.5) * 0.8,
    turbidity: 1.8 + Math.random() * 0.6,
    conductivity: 380 + (Math.random() - 0.5) * 30,
    tds: 190 + (Math.random() - 0.5) * 15,
    wqi: 88 + Math.floor(Math.random() * 8),
  })),

  // Add readings for WS004
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `ws004_${i + 1}`,
    stationId: "WS004",
    stationName: "Estero de Paco",
    timestamp: `2024-01-0${Math.max(1, 7 - Math.floor(i / 7))} ${String(
      21 - Math.floor(i % 7)
    ).padStart(2, "0")}:${String(40 - (i % 4) * 10).padStart(2, "0")}:00`,
    ph: 6.8 + (Math.random() - 0.5) * 0.6,
    temperature: 30.0 + Math.random() * 4,
    dissolvedOxygen: 4.5 + (Math.random() - 0.5) * 1.0,
    turbidity: 6.0 + Math.random() * 1.5,
    conductivity: 750 + (Math.random() - 0.5) * 60,
    tds: 375 + (Math.random() - 0.5) * 30,
    wqi: 50 + Math.floor(Math.random() * 18),
  })),

  // Add extensive historical data for all stations (100+ more readings)
  ...Array.from({ length: 100 }, (_, i) => {
    const stationIds = ["WS001", "WS002", "WS003", "WS004"];
    const stationId = stationIds[i % 4];
    const day = Math.max(1, 7 - Math.floor(i / 24));
    const hour = 23 - (i % 24);

    return {
      id: `hist_${i + 1}`,
      stationId,
      stationName:
        stationId === "WS001"
          ? "Downtown River Station"
          : stationId === "WS002"
          ? "Industrial Park Monitor"
          : stationId === "WS003"
          ? "Residential Area Sensor"
          : "Estero de Paco",
      timestamp: `2024-01-0${day} ${String(hour).padStart(2, "0")}:${String(
        Math.floor(Math.random() * 60)
      ).padStart(2, "0")}:00`,
      ph:
        stationId === "WS001"
          ? 7.1 + (Math.random() - 0.5) * 0.6
          : stationId === "WS002"
          ? 6.7 + (Math.random() - 0.5) * 0.8
          : stationId === "WS003"
          ? 7.3 + (Math.random() - 0.5) * 0.4
          : 6.9 + (Math.random() - 0.5) * 0.6,
      temperature:
        stationId === "WS001"
          ? 18.5 + Math.random() * 4
          : stationId === "WS002"
          ? 22.0 + Math.random() * 6
          : stationId === "WS003"
          ? 19.5 + Math.random() * 3
          : 30.5 + Math.random() * 4,
      dissolvedOxygen:
        stationId === "WS001"
          ? 8.2 + (Math.random() - 0.5) * 1.2
          : stationId === "WS002"
          ? 6.1 + (Math.random() - 0.5) * 1.5
          : stationId === "WS003"
          ? 9.0 + (Math.random() - 0.5) * 0.8
          : 4.6 + (Math.random() - 0.5) * 1.0,
      turbidity:
        stationId === "WS001"
          ? 2.1 + Math.random() * 1.0
          : stationId === "WS002"
          ? 4.7 + Math.random() * 2.0
          : stationId === "WS003"
          ? 1.9 + Math.random() * 0.6
          : 6.2 + Math.random() * 1.5,
      conductivity:
        stationId === "WS001"
          ? 455 + (Math.random() - 0.5) * 50
          : stationId === "WS002"
          ? 675 + (Math.random() - 0.5) * 80
          : stationId === "WS003"
          ? 385 + (Math.random() - 0.5) * 30
          : 755 + (Math.random() - 0.5) * 60,
      tds:
        stationId === "WS001"
          ? 227 + (Math.random() - 0.5) * 25
          : stationId === "WS002"
          ? 337 + (Math.random() - 0.5) * 40
          : stationId === "WS003"
          ? 192 + (Math.random() - 0.5) * 15
          : 377 + (Math.random() - 0.5) * 30,
      wqi:
        stationId === "WS001"
          ? 82 + Math.floor(Math.random() * 15)
          : stationId === "WS002"
          ? 57 + Math.floor(Math.random() * 20)
          : stationId === "WS003"
          ? 89 + Math.floor(Math.random() * 8)
          : 52 + Math.floor(Math.random() * 18),
    };
  }),
];

export const chartData = {
  wqiTrend: [
    { time: "00:00", WS001: 85, WS002: 67, WS003: 92 },
    { time: "04:00", WS001: 86, WS002: 65, WS003: 91 },
    { time: "08:00", WS001: 87, WS002: 68, WS003: 93 },
    { time: "12:00", WS001: 88, WS002: 66, WS003: 92 },
    { time: "16:00", WS001: 87, WS002: 65, WS003: 91 },
    { time: "20:00", WS001: 86, WS002: 67, WS003: 92 },
  ],
  parameterDistribution: [
    { parameter: "Excellent", value: 60, color: "#10b981" },
    { parameter: "Good", value: 25, color: "#3b82f6" },
    { parameter: "Fair", value: 12, color: "#f59e0b" },
    { parameter: "Poor", value: 3, color: "#ef4444" },
  ],
  predictiveInsights: [
    {
      station: "WS001",
      parameter: "pH",
      current: 7.2,
      predicted: 7.1,
      confidence: 85,
      trend: "decreasing",
    },
    {
      station: "WS001",
      parameter: "WQI",
      current: 87,
      predicted: 85,
      confidence: 88,
      trend: "decreasing",
    },
    {
      station: "WS002",
      parameter: "pH",
      current: 6.8,
      predicted: 6.9,
      confidence: 82,
      trend: "increasing",
    },
    {
      station: "WS002",
      parameter: "WQI",
      current: 65,
      predicted: 67,
      confidence: 80,
      trend: "increasing",
    },
    {
      station: "WS003",
      parameter: "pH",
      current: 7.4,
      predicted: 7.3,
      confidence: 95,
      trend: "stable",
    },
    {
      station: "WS003",
      parameter: "WQI",
      current: 92,
      predicted: 93,
      confidence: 93,
      trend: "increasing",
    },
  ],
};

export const predictiveData = {
  WS001: {
    ph: { current: 7.2, predicted: 7.1, trend: "decreasing", confidence: 85 },
    temperature: {
      current: 18.5,
      predicted: 19.2,
      trend: "increasing",
      confidence: 92,
    },
    dissolvedOxygen: {
      current: 8.3,
      predicted: 8.1,
      trend: "decreasing",
      confidence: 78,
    },
    wqi: { current: 87, predicted: 85, trend: "decreasing", confidence: 88 },
  },
  WS002: {
    ph: { current: 6.8, predicted: 6.9, trend: "increasing", confidence: 82 },
    temperature: {
      current: 22.1,
      predicted: 22.5,
      trend: "increasing",
      confidence: 89,
    },
    dissolvedOxygen: {
      current: 6.2,
      predicted: 6.0,
      trend: "decreasing",
      confidence: 75,
    },
    wqi: { current: 65, predicted: 67, trend: "increasing", confidence: 80 },
  },
  WS003: {
    ph: { current: 7.4, predicted: 7.3, trend: "stable", confidence: 95 },
    temperature: {
      current: 19.2,
      predicted: 19.0,
      trend: "stable",
      confidence: 91,
    },
    dissolvedOxygen: {
      current: 9.1,
      predicted: 9.2,
      trend: "increasing",
      confidence: 87,
    },
    wqi: { current: 92, predicted: 93, trend: "increasing", confidence: 93 },
  },
};

// Mock data for reports
export const reportData = {
  monthlyTrends: [
    { month: "Dec", avgWQI: 82, alerts: 15, stations: 4 },
    { month: "Jan", avgWQI: 85, alerts: 12, stations: 4 },
  ],
  parameterAnalysis: {
    ph: { avg: 7.1, trend: "stable", compliance: 95 },
    temperature: { avg: 19.9, trend: "increasing", compliance: 100 },
    dissolvedOxygen: { avg: 7.9, trend: "stable", compliance: 90 },
    turbidity: { avg: 2.7, trend: "decreasing", compliance: 85 },
  },
};

export const stations = [
  {
    id: "WS001",
    name: "Pasig River - Bagumbayan",
    location: "Bagumbayan, Marikina",
    coordinates: { lat: 14.6507, lng: 121.1052 }, // Near Bagumbayan Bridge
    status: "online",
    lastUpdate: "2 minutes ago",
    wqi: 87,
    health: "Good",
    parameters: {
      ph: {
        value: 7.2,
        status: "normal",
        unit: "pH",
        threshold: { min: 6.5, max: 8.5 },
      },
      temperature: {
        value: 28.5,
        status: "normal",
        unit: "°C",
        threshold: { min: 0, max: 35 },
      },
      dissolvedOxygen: {
        value: 6.3,
        status: "normal",
        unit: "mg/L",
        threshold: { min: 5, max: 15 },
      },
      turbidity: {
        value: 4.1,
        status: "warning",
        unit: "NTU",
        threshold: { min: 0, max: 5 },
      },
      conductivity: {
        value: 520,
        status: "normal",
        unit: "µS/cm",
        threshold: { min: 0, max: 1000 },
      },
      tds: {
        value: 260,
        status: "normal",
        unit: "ppm",
        threshold: { min: 0, max: 500 },
      },
    },
    alerts: 1,
    description:
      "Monitoring station near Bagumbayan Bridge - upstream location",
    installDate: "2023-03-15",
    lastMaintenance: "2024-01-01",
    nextMaintenance: "2024-04-01",
    calibration: {
      lastCalibrated: "2024-01-01",
      nextCalibration: "2024-02-01",
      status: "calibrated",
    },
  },
  {
    id: "WS002",
    name: "Pasig River - Guadalupe",
    location: "Guadalupe Bridge, Makati",
    coordinates: { lat: 14.5654, lng: 121.0454 }, // Near Guadalupe Bridge
    status: "warning",
    lastUpdate: "5 minutes ago",
    wqi: 45,
    health: "Poor",
    parameters: {
      ph: {
        value: 6.2,
        status: "warning",
        unit: "pH",
        threshold: { min: 6.5, max: 8.5 },
      },
      temperature: {
        value: 30.1,
        status: "high",
        unit: "°C",
        threshold: { min: 0, max: 35 },
      },
      dissolvedOxygen: {
        value: 3.8,
        status: "low",
        unit: "mg/L",
        threshold: { min: 5, max: 15 },
      },
      turbidity: {
        value: 8.2,
        status: "high",
        unit: "NTU",
        threshold: { min: 0, max: 5 },
      },
      conductivity: {
        value: 850,
        status: "high",
        unit: "µS/cm",
        threshold: { min: 0, max: 1000 },
      },
      tds: {
        value: 425,
        status: "high",
        unit: "ppm",
        threshold: { min: 0, max: 500 },
      },
    },
    alerts: 3,
    description:
      "Critical monitoring point near industrial area - pollution concerns",
    installDate: "2023-05-20",
    lastMaintenance: "2023-12-15",
    nextMaintenance: "2024-03-15",
    calibration: {
      lastCalibrated: "2023-12-15",
      nextCalibration: "2024-01-15",
      status: "needs_calibration",
    },
  },
  {
    id: "WS003",
    name: "Pasig River - Lambingan",
    location: "Lambingan Bridge, Pasig",
    coordinates: { lat: 14.5871, lng: 121.0813 }, // Near Lambingan Bridge
    status: "online",
    lastUpdate: "1 minute ago",
    wqi: 72,
    health: "Fair",
    parameters: {
      ph: {
        value: 7.0,
        status: "normal",
        unit: "pH",
        threshold: { min: 6.5, max: 8.5 },
      },
      temperature: {
        value: 29.2,
        status: "normal",
        unit: "°C",
        threshold: { min: 0, max: 35 },
      },
      dissolvedOxygen: {
        value: 5.1,
        status: "normal",
        unit: "mg/L",
        threshold: { min: 5, max: 15 },
      },
      turbidity: {
        value: 5.8,
        status: "warning",
        unit: "NTU",
        threshold: { min: 0, max: 5 },
      },
      conductivity: {
        value: 680,
        status: "normal",
        unit: "µS/cm",
        threshold: { min: 0, max: 1000 },
      },
      tds: {
        value: 340,
        status: "normal",
        unit: "ppm",
        threshold: { min: 0, max: 500 },
      },
    },
    alerts: 1,
    description: "Mid-stream monitoring station for trend analysis",
    installDate: "2023-04-10",
    lastMaintenance: "2024-01-05",
    nextMaintenance: "2024-04-05",
    calibration: {
      lastCalibrated: "2024-01-05",
      nextCalibration: "2024-02-05",
      status: "calibrated",
    },
  },
  {
    id: "WS004",
    name: "Pasig River - Estero de Paco",
    location: "Estero de Paco, Manila",
    coordinates: { lat: 14.5995, lng: 120.9842 }, // Near Manila Bay confluence
    status: "online",
    lastUpdate: "3 minutes ago",
    wqi: 58,
    health: "Fair",
    parameters: {
      ph: {
        value: 6.8,
        status: "normal",
        unit: "pH",
        threshold: { min: 6.5, max: 8.5 },
      },
      temperature: {
        value: 31.5,
        status: "high",
        unit: "°C",
        threshold: { min: 0, max: 35 },
      },
      dissolvedOxygen: {
        value: 4.5,
        status: "low",
        unit: "mg/L",
        threshold: { min: 5, max: 15 },
      },
      turbidity: {
        value: 6.5,
        status: "high",
        unit: "NTU",
        threshold: { min: 0, max: 5 },
      },
      conductivity: {
        value: 750,
        status: "normal",
        unit: "µS/cm",
        threshold: { min: 0, max: 1000 },
      },
      tds: {
        value: 375,
        status: "normal",
        unit: "ppm",
        threshold: { min: 0, max: 500 },
      },
    },
    alerts: 2,
    description:
      "Downstream monitoring before Manila Bay - tidal influence area",
    installDate: "2023-06-01",
    lastMaintenance: "2023-12-20",
    nextMaintenance: "2024-03-20",
    calibration: {
      lastCalibrated: "2023-12-20",
      nextCalibration: "2024-01-20",
      status: "calibrated",
    },
  },
];

export const teamMembers = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    role: "Water Quality Specialist",
    email: "sarah.chen@aquasen.com",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    lastActive: "2 minutes ago",
    permissions: ["read", "write", "admin"],
  },
  {
    id: "2",
    name: "Mike Rodriguez",
    role: "Field Technician",
    email: "mike.rodriguez@aquasen.com",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    lastActive: "15 minutes ago",
    permissions: ["read", "write"],
  },
  {
    id: "3",
    name: "Emma Thompson",
    role: "Data Analyst",
    email: "emma.thompson@aquasen.com",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "offline",
    lastActive: "2 hours ago",
    permissions: ["read"],
  },
];

export const downloadsData = {
  firmware: [
    {
      id: "fw001",
      name: "Water Quality Sensor Firmware v2.1.3",
      version: "2.1.3",
      size: "2.4 MB",
      date: "2024-01-05",
      type: "firmware",
      description:
        "Latest firmware update with improved pH sensor accuracy and temperature compensation",
      compatible: ["WS001", "WS002", "WS003"],
    },
    {
      id: "fw002",
      name: "Turbidity Sensor Firmware v1.8.2",
      version: "1.8.2",
      size: "1.2 MB",
      date: "2023-12-20",
      type: "firmware",
      description: "Bug fixes for turbidity readings in low-light conditions",
      compatible: ["WS001", "WS003"],
    },
    {
      id: "fw003",
      name: "Communication Module Firmware v3.0.1",
      version: "3.0.1",
      size: "3.1 MB",
      date: "2024-01-02",
      type: "firmware",
      description:
        "Enhanced wireless connectivity and data transmission reliability",
      compatible: ["WS001", "WS002", "WS003"],
    },
  ],
  software: [
    {
      id: "sw001",
      name: "AquaMonitor Desktop Client v4.2.0",
      version: "4.2.0",
      size: "45.2 MB",
      date: "2024-01-07",
      type: "software",
      description:
        "Desktop application for advanced data analysis and station configuration",
      platform: "Windows/Mac/Linux",
    },
    {
      id: "sw002",
      name: "Station Configuration Tool v2.5.1",
      version: "2.5.1",
      size: "12.8 MB",
      date: "2023-12-28",
      type: "software",
      description:
        "Utility for configuring sensor parameters and calibration settings",
      platform: "Windows",
    },
    {
      id: "sw003",
      name: "Data Export Plugin v1.3.0",
      version: "1.3.0",
      size: "5.4 MB",
      date: "2024-01-03",
      type: "software",
      description:
        "Plugin for exporting data to various formats including CSV, Excel, and JSON",
      platform: "Cross-platform",
    },
  ],
  documentation: [
    {
      id: "doc001",
      name: "Installation Guide v3.1",
      version: "3.1",
      size: "8.2 MB",
      date: "2024-01-01",
      type: "documentation",
      description:
        "Complete installation and setup guide for water monitoring stations",
      format: "PDF",
    },
    {
      id: "doc002",
      name: "API Documentation v2.0",
      version: "2.0",
      size: "4.1 MB",
      date: "2023-12-15",
      type: "documentation",
      description: "Comprehensive API documentation for developers",
      format: "PDF",
    },
    {
      id: "doc003",
      name: "Troubleshooting Manual v1.8",
      version: "1.8",
      size: "6.7 MB",
      date: "2023-12-22",
      type: "documentation",
      description: "Common issues and solutions for water monitoring systems",
      format: "PDF",
    },
  ],
};
