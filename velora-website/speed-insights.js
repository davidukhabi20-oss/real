// Vercel Speed Insights
// This script initializes Speed Insights tracking for the website
(function() {
  // Initialize the Speed Insights queue if it doesn't exist
  window.si = window.si || function () { 
    (window.siq = window.siq || []).push(arguments); 
  };
  
  // Load the Speed Insights script from Vercel's CDN
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  
  // Insert the script into the document head
  document.head.appendChild(script);
})();
