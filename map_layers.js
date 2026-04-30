// ── RASTER / HEATMAP LAYER BUILDERS ──────────────────────────────────────

function buildRasterLayers() {
  // ── SOURCE: Field Measurements (registered here, layer added last so it's on top) ──
  map.addSource('sampling-src', { type: 'geojson', data: GEOJSON_L1 });

  // ── SOURCE: Release Models (PEC) (registered here, layer added last so it's on top) ──
  map.addSource('model-src', { type: 'geojson', data: GEOJSON_L2 });

  // ── SOURCE: Ocean grid background — smooth heatmap, no visible pixels ──
  // Uses 5760-point IDW grid. Heatmap kernel produces continuous Gaussian field.
  // Split into 5 salinizing-intensity bands so we can color them independently.
  // delta stored on each point; we use it as heatmap-weight after normalizing 0–1.
  map.addSource('ocean-grid-src', { type: 'geojson', data: GEOJSON_OCEAN_GRID });

  // Single smooth heatmap — weight driven by delta magnitude, color by salinity risk
  map.addLayer({
    id: 'climate-ocean-grid',
    type: 'heatmap',
    source: 'ocean-grid-src',
    maxzoom: 7,
    paint: {
      // weight = normalized delta (0–25 range → 0–1)
      'heatmap-weight': [
        'interpolate', ['linear'],
        ['max', ['get', 'delta'], 0],
        0, 0.05,
        3, 0.3,
        8, 0.65,
        15, 0.9,
        25, 1.0
      ],
      // large radius = smooth, no dot matrix
      'heatmap-radius': [
        'interpolate', ['linear'], ['zoom'],
        0, 28,
        2, 40,
        4, 55,
        6, 75,
        7, 90
      ],
      'heatmap-intensity': [
        'interpolate', ['linear'], ['zoom'],
        0, 0.4,
        3, 0.65,
        6, 0.9
      ],
      'heatmap-opacity': [
        'interpolate', ['linear'], ['zoom'],
        1, 0.55,
        5, 0.45,
        7, 0
      ],
      // Salinity risk color ramp: baseline grey → teal → yellow → orange → red
      'heatmap-color': [
        'interpolate', ['linear'], ['heatmap-density'],
        0,    'rgba(0,0,0,0)',
        0.05, 'rgba(20,184,166,0.15)',
        0.2,  'rgba(132,204,57,0.35)',
        0.4,  'rgba(234,179,8,0.5)',
        0.6,  'rgba(251,146,60,0.65)',
        0.8,  'rgba(239,68,68,0.75)',
        1.0,  'rgba(185,28,28,0.85)'
      ]
    }
  });

  // ── Land mask — paints over heatmap on continents, ocean-only effect ──
  map.addSource('land-mask-src', { type: 'geojson', data: NE_LAND_MASK });
  map.addLayer({
    id: 'climate-land-mask',
    type: 'fill',
    source: 'land-mask-src',
    maxzoom: 7,
    paint: {
      'fill-color': '#1a1a2e',   // matches CARTO Dark land tone closely
      'fill-opacity': [
        'interpolate', ['linear'], ['zoom'],
        1, 0.82,
        4, 0.88,
        6, 0.95,
        7, 1.0
      ]
    }
  });

  // ── SOURCE: Climate Shifts — pre-colored coastline + river lines ──
  // geojson_climate_lines.js contains 6k+ segments pre-colored by IDW interpolation
  // Each segment has { color, opacity, delta, is_river } properties
  map.addSource('climate-lines-src', { type: 'geojson', data: GEOJSON_CLIMATE_LINES });

  // Glow pass — wide blurry line underneath, creates the soft ocean bleed
  map.addLayer({
    id: 'climate-coast-glow',
    type: 'line',
    source: 'climate-lines-src',
    filter: ['==', ['get', 'is_river'], false],
    paint: {
      'line-color': ['get', 'color'],
      'line-opacity': [
        'interpolate', ['linear'], ['zoom'],
        1, 0.28,
        4, 0.35,
        7, 0.22,
        10, 0.12
      ],
      'line-width': [
        'interpolate', ['linear'], ['zoom'],
        1, 18,
        3, 22,
        5, 20,
        8, 16,
        12, 12
      ],
      'line-blur': [
        'interpolate', ['linear'], ['zoom'],
        1, 14,
        4, 10,
        8, 6,
        12, 3
      ]
    }
  });

  // Coastline segments — crisp line on top
  map.addLayer({
    id: 'climate-coast-lines',
    type: 'line',
    source: 'climate-lines-src',
    filter: ['==', ['get', 'is_river'], false],
    paint: {
      'line-color': ['get', 'color'],
      'line-opacity': [
        'interpolate', ['linear'], ['zoom'],
        2, ['*', ['get', 'opacity'], 0.75],
        6, ['get', 'opacity'],
        10, ['min', ['*', ['get', 'opacity'], 1.15], 0.95]
      ],
      'line-width': [
        'interpolate', ['linear'], ['zoom'],
        2, 1.2,
        5, 1.8,
        8, 2.8,
        12, 4.0
      ],
      'line-blur': 0
    }
  });

  // River segments
  map.addLayer({
    id: 'climate-river-lines',
    type: 'line',
    source: 'climate-lines-src',
    filter: ['==', ['get', 'is_river'], true],
    paint: {
      'line-color': ['get', 'color'],
      'line-opacity': [
        'interpolate', ['linear'], ['zoom'],
        2, ['*', ['get', 'opacity'], 0.45],
        6, ['*', ['get', 'opacity'], 0.75],
        10, ['get', 'opacity']
      ],
      'line-width': [
        'interpolate', ['linear'], ['zoom'],
        2, 0.8,
        5, 1.2,
        8, 2.0,
        12, 3.0
      ],
      'line-blur': [
        'interpolate', ['linear'], ['zoom'],
        2, 2,
        6, 1,
        10, 0
      ]
    }
  });

  // ── Data point circles: show at zoom ≥ 5 as "you have a citation here" markers ──
  map.addSource('climate-src', { type: 'geojson', data: GEOJSON_L4 });
  // Primary tier: solid filled circles
  map.addLayer({
    id: 'climate-circles-primary',
    type: 'circle',
    source: 'climate-src',
    minzoom: 5,
    filter: ['==', ['get', 'source_tier'], 'primary'],
    paint: {
      'circle-radius': ['interpolate',['linear'],['zoom'], 5,3, 8,5, 14,12],
      'circle-color': ['case', ['get','enters_danger_zone'], '#fb923c', '#6ee7b7'],
      'circle-opacity': ['interpolate',['linear'],['zoom'], 5,0.5, 7,0.85],
      'circle-stroke-width': 1.5,
      'circle-stroke-color': ['case', ['get','enters_danger_zone'], '#ff6b35', '#34d399']
    }
  });
  // Secondary/grey tier: hollow circles
  map.addLayer({
    id: 'climate-circles-secondary',
    type: 'circle',
    source: 'climate-src',
    minzoom: 5,
    filter: ['in', ['get', 'source_tier'], ['literal', ['secondary', 'grey']]],
    paint: {
      'circle-radius': ['interpolate',['linear'],['zoom'], 5,3, 8,5, 14,12],
      'circle-color': 'rgba(0,0,0,0)',
      'circle-opacity': 1,
      'circle-stroke-width': 1.5,
      'circle-stroke-color': ['case', ['get','enters_danger_zone'], '#fb923c', '#6ee7b7'],
      'circle-stroke-opacity': ['interpolate',['linear'],['zoom'], 5,0.5, 7,0.85]
    }
  });

  // ── Field Measurement + PEC circles: added LAST so they render above land mask ──
  map.addLayer({
    id: 'sampling-circles',
    type: 'circle',
    source: 'sampling-src',
    minzoom: 1,
    paint: {
      'circle-radius': ['interpolate',['linear'],['zoom'], 1,5, 2,6, 4,7, 5,7, 7,8, 14,14],
      'circle-color': ['interpolate',['linear'],['get','intensity'],
        0,   '#4ecdc4',
        0.25,'#ffd700',
        0.5, '#ffb347',
        0.75,'#ff6b35',
        1.0, '#ff2d2d'
      ],
      'circle-opacity': 1.0,
      'circle-stroke-width': 2,
      'circle-stroke-color': 'rgba(255,255,255,0.85)'
    }
  });
  map.addLayer({
    id: 'model-circles',
    type: 'circle',
    source: 'model-src',
    minzoom: 1,
    paint: {
      'circle-radius': ['interpolate',['linear'],['zoom'], 1,5, 2,6, 4,7, 5,7, 7,8, 14,14],
      'circle-color': '#a78bfa',
      'circle-opacity': 1.0,
      'circle-stroke-width': 2,
      'circle-stroke-color': 'rgba(255,255,255,0.85)'
    }
  });

  // ── CLICK HANDLERS for raster layers ──
  ['sampling-circles','sampling-heat'].forEach(layer => {
    map.on('click', layer, (e) => {
      const p = e.features[0].properties;
      const conc = p.conc_ng_L;
      const concStr = conc < 0.001 ? `${(conc*1e6).toFixed(1)} fg/L`
                    : conc < 1    ? `${(conc*1000).toFixed(1)} pg/L`
                    : conc < 1000 ? `${conc.toFixed(2)} ng/L`
                    : `${(conc/1000).toFixed(3)} µg/L`;
      const risk = p.intensity;
      const isAgNP = p.is_agnp === true || p.is_agnp === 'true';
      const agnpBadge = isAgNP
        ? `<div style="margin-top:6px;padding:5px 8px;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.3);border-radius:5px;font-size:10px;color:#34d399">✅ Confirmed AgNP measurement (sp-ICP-MS or equivalent)</div>`
        : `<div style="margin-top:6px;padding:5px 8px;background:rgba(255,179,71,0.1);border:1px solid rgba(255,179,71,0.35);border-radius:5px;font-size:10px;color:#ffb347">⚠️ Total dissolved Ag⁺ — not confirmed AgNP. Use as background Ag loading context only.</div>`;
      const popup_html = `
        ${tagHtml('sampling','Field Measurement')}
        <h4>${p.name}</h4>
        ${popupRow('Water Type', p.water_type === 'FW' ? '🔵 Freshwater' : p.water_type === 'estuarine' ? '🟡 Estuarine' : '🟢 Saltwater')}
        ${popupRow('[Ag] measured', concStr)}
        ${p.salinity_ppt != null ? popupRow('Salinity', `${p.salinity_ppt} ‰`) : ''}
        ${popupRow('Method', p.measurement_type || 'Total dissolved Ag')}
        ${agnpBadge}
        ${riskBadgeHtml(risk)}
        ${citeHtml(p.citation, p.doi)}
      `;
      showPopup(e.lngLat, popup_html);
    });
    map.on('mouseenter', layer, () => map.getCanvas().style.cursor = 'pointer');
    map.on('mouseleave', layer, () => map.getCanvas().style.cursor = '');
  });

  ['model-circles','model-heat'].forEach(layer => {
    map.on('click', layer, (e) => {
      const p = e.features[0].properties;
      const med = p.pec_median_ng_L;
      const hi = p.pec_high_ng_L;
      const fmtNg = (v) => v < 0.001 ? `${(v*1e6).toFixed(1)} fg/L` : v < 1 ? `${(v*1000).toFixed(1)} pg/L` : v < 1000 ? `${v.toFixed(4)} ng/L` : `${(v/1000).toFixed(4)} µg/L`;
      const popup_html = `
        ${tagHtml('model','Release Model / PEC')}
        <h4>${p.name}</h4>
        ${popupRow('Water Type', p.water_type === 'FW' ? '🔵 Freshwater' : '🟢 Saltwater')}
        ${popupRow('PEC Median', fmtNg(med))}
        ${popupRow('PEC High (85th %ile)', fmtNg(hi))}
        ${popupRow('Model', p.model)}
        ${riskBadgeHtml(p.intensity)}
        ${citeHtml(p.citation, p.doi)}
      `;
      showPopup(e.lngLat, popup_html);
    });
    map.on('mouseenter', layer, () => map.getCanvas().style.cursor = 'pointer');
    map.on('mouseleave', layer, () => map.getCanvas().style.cursor = '');
  });

  ['climate-circles-primary','climate-circles-secondary','climate-heat'].forEach(layer => {
    map.on('click', layer, (e) => {
      const p = e.features[0].properties;
      const isDanger = p.enters_danger_zone;
      const color = isDanger ? '#fb923c' : '#6ee7b7';
      const tier = p.source_tier || 'primary';
      const scenario = p.scenario || 'SSP5-8.5';
      const horizon  = p.horizon || p.year || 2100;

      // ── Scenario / tier confidence note ──────────────────────────────────
      let confNote = '';
      if (tier === 'grey') {
        confNote = `<div style="margin-top:7px;padding:6px 9px;background:rgba(148,163,184,0.1);border:1px solid rgba(148,163,184,0.35);border-radius:6px;font-size:10px;color:#94a3b8">
          ⚠️ <strong>Grey literature source</strong> — included for regional completeness; interpret with caution.
        </div>`;
      } else if (scenario === 'SSP2-4.5' && horizon <= 2050) {
        confNote = `<div style="margin-top:7px;padding:6px 9px;background:rgba(148,163,184,0.1);border:1px solid rgba(148,163,184,0.35);border-radius:6px;font-size:10px;color:#94a3b8">
          ○ <strong>SSP2-4.5 / ${horizon} projection.</strong> Near-term horizon — scenario divergence from SSP5-8.5 is minimal at this timescale (Hausfather &amp; Peters 2020, <em>Nature</em>).
        </div>`;
      } else if (scenario === 'SSP2-4.5') {
        confNote = `<div style="margin-top:7px;padding:6px 9px;background:rgba(148,163,184,0.1);border:1px solid rgba(148,163,184,0.35);border-radius:6px;font-size:10px;color:#94a3b8">
          ○ <strong>SSP2-4.5 / ${horizon} projection.</strong> Moderate-emissions scenario; salinity shift magnitude ~60–70% of SSP5-8.5 estimate. Included for regional completeness.
        </div>`;
      } else if (tier === 'secondary' && horizon <= 2050) {
        confNote = `<div style="margin-top:7px;padding:6px 9px;background:rgba(148,163,184,0.1);border:1px solid rgba(148,163,184,0.35);border-radius:6px;font-size:10px;color:#94a3b8">
          ○ <strong>Near-term projection (${horizon}).</strong> Scenario divergence from SSP5-8.5 is minimal at this horizon (Hausfather &amp; Peters 2020).
        </div>`;
      } else if (tier === 'secondary') {
        confNote = `<div style="margin-top:7px;padding:6px 9px;background:rgba(148,163,184,0.1);border:1px solid rgba(148,163,184,0.35);border-radius:6px;font-size:10px;color:#94a3b8">
          ○ <strong>Secondary source</strong> — projection from regional literature without peer-reviewed DOI. Included for geographic coverage; treat as indicative.
        </div>`;
      }

      const popup_html = `
        ${tagHtml('climate', isDanger ? '⚠️ Climate Risk' : 'Climate Shift')}
        <h4>${p.name}</h4>
        ${popupRow('Current Salinity', `${p.current_sal} ‰`)}
        ${popupRow(`Projected (${horizon})`, `${p.projected_sal} ‰ — ${p.direction}`)}
        ${popupRow('Scenario', scenario)}
        ${popupRow('Risk Change', p.risk_change === 'increasing' ? '📈 Increasing' : '📉 Decreasing')}
        <div style="margin-top:8px;padding:7px 10px;background:${isDanger ? 'rgba(251,146,60,0.12)' : 'rgba(52,211,153,0.1)'};border:1px solid ${isDanger ? 'rgba(251,146,60,0.4)' : 'rgba(52,211,153,0.3)'};border-radius:6px;font-size:11px;color:${color}">
          <strong>${isDanger ? '⚠️ Entering AgNP danger zone' : '✓ Moving away from danger zone'}</strong><br>
          ${p.direction === 'salinizing' ? `Rising into ${p.projected_sal <= 5 ? '0–5‰ peak toxicity window' : '5–10‰ moderate risk zone'}` : `Freshening toward ${p.projected_sal <= 5 ? '0–5‰ high-risk zone' : 'lower salinity'}`}
        </div>
        ${confNote}
        ${citeHtml(p.citation, p.doi)}
      `;
      showPopup(e.lngLat, popup_html);
    });
    map.on('mouseenter', layer, () => map.getCanvas().style.cursor = 'pointer');
    map.on('mouseleave', layer, () => map.getCanvas().style.cursor = '');
  });
}

// ── LAYER VISIBILITY TOGGLE (for raster layers) ───────────────────────────
function setRasterLayerVisibility(layerName, visible) {
  const vis = visible ? 'visible' : 'none';
  const layerIds = {
    sampling: ['sampling-circles'],
    model:    ['model-circles'],
    climate:  ['climate-ocean-grid','climate-land-mask','climate-coast-glow','climate-coast-lines','climate-river-lines','climate-circles-primary','climate-circles-secondary'],
  };
  (layerIds[layerName] || []).forEach(id => {
    if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', vis);
  });
}
