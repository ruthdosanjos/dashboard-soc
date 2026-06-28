export const metrics = {
  alertsCritical: 3,
  incidentsActive: 4,
  systemStatus: "Stable",
};

export const alerts = [
  {
    id: 1,
    title: "Multiple failed login attempts",
    severity: "critical",
    status: "open",
    source: "Firewall",
  },
  {
    id: 2,
    title: "Suspicious IP detected",
    severity: "high",
    status: "investigating",
    source: "IDS",
  },
  {
    id: 3,
    title: "Unusual traffic spike",
    severity: "medium",
    status: "open",
    source: "Network Monitor",
  },
];

export const logs = [
  {
    id: 101,
    time: "19:01",
    event: "User login successful",
    source: "Auth Server",
  },
  {
    id: 102,
    time: "19:03",
    event: "Failed password attempt",
    source: "Auth Server",
  },
  {
    id: 103,
    time: "19:05",
    event: "Port scan detected",
    source: "Firewall",
  },
  {
    id: 104,
    time: "19:07",
    event: "Blocked suspicious request",
    source: "WAF",
  },

  
];

export const activityData = [
  { day: "Mon", value: 120 },
  { day: "Tue", value: 180 },
  { day: "Wed", value: 90 },
  { day: "Thu", value: 200 },
  { day: "Fri", value: 160 },
];