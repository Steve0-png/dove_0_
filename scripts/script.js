/**
 * @author Steve-0
 * File: script.js
 * Date: 11/25/2025
 */

// Global Variables

var music = document.getElementById("music-sample");
var musicSource = document.getElementById("mus-src");

// Display INFoMO snippet
function infomo()
{
    musicSource.src = "./music/infomo_snippet.mp3";
    music.style.display = "block";
    music.load();
}

function crashlogPiano()
{
    musicSource.src = "./music/Crush_XP_CRASHLOG_PIANO.mp3";
    music.style.display = "block";
    music.load();
}

function desertStarfall()
{
    musicSource.src = "./music/Desert Starfall.mp3";
    music.style.display = "block";
    music.load();
}

function objectImpermanence()
{
    musicSource.src = "./music/RTC_Michael_Object_Impermanence.mp3";
    music.style.display = "block";
    music.load();
}