const express = require("express");
const client = require("prom-client");

const app = express();

// Prometheus setup
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Example custom metric (valgfri men nice)
const httpRequestCounter = new client.Counter({
name: "http_requests_total",
help: "Total number of HTTP requests",
});
register.registerMetric(httpRequestCounter);

// Normal route (din app)
app.get("/", (req, res) => {
httpRequestCounter.inc(); // tæller requests
res.send("Hello World");
});

// Metrics endpoint (det Prometheus læser)
app.get("/metrics", async (req, res) => {
res.set("Content-Type", register.contentType);
res.end(await register.metrics());
});

// Start server
const PORT = 8080;
app.listen(PORT, () => {
console.log(`App running on http://localhost:${PORT}`);
});
