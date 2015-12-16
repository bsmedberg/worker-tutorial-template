var gURL = "http://analysis-output.telemetry.mozilla.org/stability-rollups/2015/20151128-active-weekly.csv.gz";

// Using workers
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

// Worker reference
// https://developer.mozilla.org/en-US/docs/Web/API/Worker

// XMLHttpRequest tutorial
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

// XMLHttpRequest reference
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

// Debugging tip, Firefox dev edition
// open about:config, set "devtools.debugger.workers" to true
// You can use console.log from a worker as a cheap debugger

// General steps:
// * create a worker and a script to run in the worker
// * in the worker script, load the XMLHttpRequest data
// * Parse the data into an array or map of OS -> count
// * Send that data back to this DOM script
// * Write a function here which adds that data to the DOM
