"use strict";

let board = document.getElementById("board");
let map = document.getElementById("map");
let statusBar = document.getElementById("status-bar");

// Render the map
window.renderMap = function (rowsCount, colsCount) {
    let html = "";
    for (let i = 0; i < rowsCount; i++) {
        html += "<tr>";
        for (let j = 0; j < colsCount; j++) {
            html += `<td class="cell"></td>`;
        }
        html += "</tr>";
    }
    map.innerHTML = html;
};

// Clear the map
window.clearMap = function () {
    let cells = map.querySelectorAll(".cell");
    for (let cell of cells) {
        cell.remove();
    }
};

// Call the render map function
window.renderMap(5, 5);

// Clear the map on page load
// window.onload = function () {
//   window.clearMap();
// };

// window.clearMap();


