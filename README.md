# prometheus_grafana_setup_for_fun
mini eksempel for first time use of prometheus grafana


# Verison one - on main branch
Startes med 
pyhton python-metrics.py

Metrics server running on http://localhost:8080/metrics


Start monitoring stack
cd monitoring
docker compose up -d
Prometheus on http://localhost:9090



How?
metrics.py  →  /metrics endpoint
      ↓
Prometheus scraper
      ↓
Grafana visualiserer


# Version two - on branch with-app
Start med
npm install prom-client


run with
node app.js
App running on http://localhost:8080

*Hello world

Monitoring er på
http://prometheus:9090
Her kan du lave queries som http_requests_total

Og fra Grafana (mere grafisk), hvor du kan oprette en bruger efter at have logget ind med admin, admin
http://localhost:3000

og redigere dashboard :)