// --------------------------------------------------------
//
// This file is to configure the configurable settings.
//
// --------------------------------------------------------
"use strict";
// -- Title Settings --------------------------------------
// Show number of aircraft and/or messages per second in the page title
PlaneCountInTitle = true;
MessageRateInTitle = true;

// -- Output Settings -------------------------------------
// The DisplayUnits setting controls whether nautical (ft, NM, knots),
// metric (m, km, km/h) or imperial (ft, mi, mph) units are used in the
// plane table and in the detailed plane info. Valid values are
// "nautical", "metric", or "imperial".
//DisplayUnits = "nautical";

// -- Map settings ----------------------------------------
// These settings are overridden by any position information
// provided by dump1090 itself. All positions are in decimal
// degrees.

// Default center of the map.
DefaultCenterLat = LATITUDE;
DefaultCenterLon = LONGITUDE;
// The google maps zoom level, 0 - 16, lower is further out
//DefaultZoomLvl   = 7;

// Center marker. If dump1090 provides a receiver location,
// that location is used and these settings are ignored.

SiteShow    = true;           // true to show a center marker
SiteLat     = LATITUDE;            // position of the marker
SiteLon     = LONGITUDE;
SiteName    = SITE_NAME; // tooltip of the marker

// Color controls for the range outline
//range_outline_color = '#0000DD';
//range_outline_width = 1.7;
//range_outline_colored_by_altitude = false;

// -- Marker settings -------------------------------------

// These settings control the coloring of aircraft by altitude.
// All color values are given as Hue (0-359) / Saturation (0-100) / Lightness (0-100)
//
// To enable these colors instead of the defaults, remove the /* and */ above and below the next block

/*

ColorByAlt = {
        // HSL for planes with unknown altitude:
        unknown : { h: 0,   s: 0,   l: 30 },

        // HSL for planes that are on the ground:
        ground  : { h: 0, s: 0, l: 45 },

        air : {
                // These define altitude-to-hue mappings
                // at particular altitudes; the hue
                // for intermediate altitudes that lie
                // between the provided altitudes is linearly
                // interpolated.
                //
                // Mappings must be provided in increasing
                // order of altitude.
                //
                // Altitudes below the first entry use the
                // hue of the first entry; altitudes above
                // the last entry use the hue of the last
                // entry.
                h: [ { alt: 2000,  val: 20 },    // orange
                         { alt: 10000, val: 140 },   // light green
                         { alt: 40000, val: 300 } ], // magenta
                s: 88,
                l: 44,
        },

        // Changes added to the color of the currently selected plane
        selected : { h: 0, s: -10, l: +20 },

        // Changes added to the color of planes that have stale position info
        stale :    { h: 0, s: -10, l: +30 },

        // Changes added to the color of planes that have positions from mlat
        mlat :     { h: 0, s: -10, l: -10 }
};

*/

// For a monochrome display try this:
// ColorByAlt = {
//         unknown :  { h: 0, s: 0, l: 40 },
//         ground  :  { h: 0, s: 0, l: 30 },
//         air :      { h: [ { alt: 0, val: 0 } ], s: 0, l: 50 },
//         selected : { h: 0, s: 0, l: +30 },
//         stale :    { h: 0, s: 0, l: +30 },
//         mlat :     { h: 0, s: 0, l: -10 }
// };

// Outline color for aircraft icons with an ADS-B position
//OutlineADSBColor = '#000000';

// Outline color for aircraft icons with a mlat position
//OutlineMlatColor = '#4040FF';

SiteCircles = true; // true to show circles (only shown if the center marker is shown)
// In miles, nautical miles, or km (depending settings value 'DisplayUnits')
SiteCirclesDistances = new Array(100,150,200,250);

// Controls page title, righthand pane when nothing is selected
PageName = "tar1090";

// Show country flags by ICAO addresses?
ShowFlags = true;

// Set to false to disable the ChartBundle base layers (US coverage only)
//ChartBundleLayers = true;

// Provide a Bing Maps API key here to enable the Bing imagery layer.
// You can obtain a free key (with usage limits) at
// https://www.bingmapsportal.com/ (you need a "basic key")
//
// Be sure to quote your key:
//   BingMapsAPIKey = "your key here";
//
BingMapsAPIKey = null;

// This determines what is up, default is north (0 degrees)
//mapOrientation = 0;

// Only display labels when zoomed in this far:
//labelZoom = 8;
//labelZoomGround = 12.5;