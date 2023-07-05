(function () {
    "use strict";

    window.addEventListener("load", initialize);

    // ~*~*~ BAD PRACTICE WARNING ~*~*~
    // For simplicity, these are a personal set of spotify credentials for this project
    // You can generate your own by logging into developer.spotify.com
    const SPOTIFY_CRED = {
        "clientId": "3e209d85c944484595d441a1fc564a71",
        "clientSecret": "a2fc08972cd6407c95371b8a3bb7bb01"
    };

    // URLs for fetch calls
    const tokenURL = "https://accounts.spotify.com/api/token";
    const searchURL = "https://api.spotify.com/v1/search?q=";

    // Store the access token
    let accessToken = null;

    // Manages possible year queries
    const EARLIEST_YEAR = 1950;
    const CURRENT_YEAR = 2023;

    // List of possible genres
    const GENRES = ["Acid-Techno", "Acoustic-Blues", "Acid-House", "Acid-Jazz", 
                    "Alternative-Dance", "Alternative-Metal", "Americana", 
                    "African-Jazz", "Appalachian-Folk", "AustroPop", "Album-Rock", 
                    "Beach", "Big-Beat", "Alternative-CCM", "Bluegrass", 
                    "Alternative-Country", "Blues", "Blues-Rock", "Bolero", 
                    "Boogaloo", "Brill-Building-Pop", "British-Blues", "British-Folk", 
                    "British-Invasion", "Britpop", "Bubblegum", "Alternative-Pop-Rock", 
                    "Bulgarian-Folk", "Canterbury-Scene", "Ambient", "CCM", "Celtic", 
                    "Ambient-Dub", "Celtic-Rock", "Chamber-Pop", "Ambient-Techno", 
                    "Chicago-Blues", "Chicago-Soul", "Christian-Metal", "Christian-Punk", 
                    "Christian-Rock", "Christmas", "Anti-Folk", "Armenian", 
                    "Armenian-Folk", "Asian-Folk", "Avant-Garde", "Avant-Garde-Jazz", 
                    "Comedy", "Bachata", "Banda", "Baroque", "Bass-Music", "Bhangra", 
                    "Big-Band", "Blues-Gospel", "Bollywood", "Boogie-Woogie", "Bop", 
                    "Bossa-Nova", "Brass-Band", "Brazilian-Pop", "British-Metal", 
                    "Broken-Beat", "Cabaret", "Cajun", "Calypso", "Carnatic", "Chant", 
                    "Chinese-Classical", "Chinese-Pop", "Choral", "Choro", "Classical", 
                    "Classical-Guitar", "Comedy-Rock", "Contemporary-Country", 
                    "Contemporary-Folk", "Contemporary-R-B", "Contemporary-Jazz", 
                    "Country", "Country-Blues", "Cool", "Country-Rock", "Cowboy", 
                    "Cumbia", "Dance-Rock", "Delta-Blues", "Country-Folk", "Country-Gospel", 
                    "Doom-Metal", "Doo-Wop", "Downtempo", "Dream-Pop", "Dub", "Dutch-Pop", 
                    "Cowpunk", "Dancehall", "Dance-Pop", "Dark-Ambient", "Deep-Funk", 
                    "Deep-Soul", "Detroit-Techno", "Electro-Industrial", "Dirty-Rap", 
                    "Dirty-South", "Disco", "Dixieland", "Drama", "Early-Music", 
                    "Easy-Listening", "Electric-Blues", "Electro", "Electro-Jazz", 
                    "Electronic", "Electronica", "Emo", "Enka", "Environmental", 
                    "Erotica", "Ethiopian-Pop", "Exotica", "Experimental", "Fado", 
                    "Finnish-Folk", "Experimental-Rock", "Flamenco", "Folk", 
                    "Freakbeat", "Fuji", "Folklore", "French-Folk", "Funky-Breaks", 
                    "Free-Jazz", "Free-Improvisation", "Forro", "French-Pop", 
                    "French-Rock", "Folk-Pop", "Gabba", "Freestyle", "Goa-Trance", 
                    "G-Funk", "Gamelan", "Grindcore", "Girl-Group", "Glitch", 
                    "Glitter", "Fusion", "Hi-NRG", "Gypsy", "Funk-Metal", "Healing", 
                    "Hardcore-Punk", "Hebrew", "Heartland-Rock", "Grunge", "Garage-Rock", 
                    "Heavy-Metal", "Funk", "Highlife", "Garage-Punk", "Harmony-Vocal-Group", 
                    "Happy-Hardcore", "Folk-Rock", "Go-Go", "Hardcore-Techno", 
                    "Folk-Revival", "Hip-Hop", "Harmonica-Blues", "Hard-Bop", 
                    "Hard-Rock", "Halloween", "Gospel", "Glam-Rock", "Honky-Tonk", 
                    "Indie-Rock", "Industrial", "Industrial-Metal", "Instrumental-Rock", 
                    "Irish-Folk", "House", "Jangle-Pop", "Jazz-Blues", "IDM", "Improvisation", 
                    "Indian-Classical", "Indian-Folk", "Karaoke", "Indian-Pop", "Indie-Pop", 
                    "Kayokyoku", "Indigenous", "Italian-Folk", "Italian-Pop", "Japanese-Pop", 
                    "Japanese-Rock", "Jazz", "Jazz-Funk", "Jazz-Rap", "Jug-Band", "Jump-Blues", 
                    "Latin-Rock", "Louisiana-Blues", "Klezmer", "Korean-Pop", "Lounge", 
                    "Lovers-Rock", "Latin", "Madchester", "Mambo", "Latin-Jazz", "Latin-Pop", 
                    "Lo-Fi", "Merengue", "Makossa", "Merseybeat", "Mariachi", "Math-Rock", 
                    "Mbalax", "Mod", "Medieval", "Meditation", "Memphis-Soul", "Motown", 
                    "MPB", "Memphis-Blues", "Microhouse", "Microtonal", "Military", 
                    "Minimal-Techno", "New-Jack-Swing", "Neo-Classical-Metal", 
                    "Neo-Soul", "New-Romantic", "New-Wave", "New-Orleans-Blues", 
                    "Neo-Classical", "Modern-Free", "Morna", "Musique-Concrete", "Neo-Prog", 
                    "New-Age", "Mod-Revival", "Noise", "Neo-Traditional", "Mbira", 
                    "New-Orleans-Jazz", "Noise-Pop", "Noise-Rock", "Northern-Soul", 
                    "No-Wave", "Outlaw-Country", "Norwegian-Folk", "Piano-Blues", 
                    "Polka", "Pop-Rock", "Pop-Underground", "Post-Disco", "Post-Grunge", 
                    "Nu-Breaks", "Power-Metal", "Power-Pop", "Nueva-Cancion", 
                    "Progressive-Metal", "Psychedelic", "Pub-Rock", "Oi!", "Punk-Blues", 
                    "Quiet-Storm", "Ranchera", "Rap-Metal", "Rap-Rock", "Rave", "Rock", 
                    "Romantic", "Roots-Reggae", "Roots-Rock", "Russian-Folk", "Opera", 
                    "Samba", "Scottish-Folk", "Orchestral", "Singer-Songwriter", 
                    "Rockabilly", "Rock---Roll", "Piedmont-Blues", "Poetry", "Shoegaze", 
                    "Soundtrack", "Pop", "Pop-Idol", "Pop-Rap", "Portuguese-Music", 
                    "Post-Bop", "Post-Hardcore", "Post-Punk", "Post-Romantic", "Sludge-Metal", 
                    "Ska-Punk", "Progressive-Alternative", "Progressive-Bluegrass", 
                    "Progressive-House", "Progressive-Trance", "Ska", "Psychobilly", 
                    "Punk", "Ska-Revival", "Punk-Pop", "Qawwali", "Ragga", "Ragtime", 
                    "Rai", "Smooth-Jazz", "Rap", "R-B", "Reggae", "Reggae-Gospel", 
                    "Reggaeton", "Riot-Grrrl", "Salsa", "Shibuya-Kei", "Renaissance", 
                    "Screamo", "Slack-Key-Guitar", "Show-Tunes", "Skiffle", "Son", 
                    "Soul-Blues", "Soca", "Soft-Rock", "Soukous", "Soul-Jazz", "Sound-Art", 
                    "Soul", "Southern-Gospel", "Sound-Effects", "South-African-Pop", 
                    "Southern-Rock", "Stoner-Metal", "Surf", "Swamp-Blues", "Swamp-Pop", 
                    "Swedish-Folk", "Swing", "Symphonic-Black-Metal", "Tejano", 
                    "Spoken-Word", "Thrash", "Traditional", "Traditional-Country", 
                    "Traditional-Folk", "Straight-Edge", "Stride", "Trip-Hop", "Tango", 
                    "Tech-House", "Techno", "Techno-Dub", "Teen-Pop", "Twee-Pop", 
                    "Texas-Blues", "Thai-Pop", "Throat-Singing", "Timba", "Traditional-Chinese", 
                    "Traditional-Japanese", "Traditional-Korean", "Traditional-Scottish-Folk", 
                    "Trance", "Tribal-House", "Tropical", "Trova", "Turkish-Folk", 
                    "Turntablism", "Underground-Rap", "Urban", "Vallenato", "Vaudeville", 
                    "Zydeco", "Video-Game-Music", "Video", "Vocal-Jazz", "Vocal", 
                    "West-Coast-Rap", "Western-Swing", "Zouk", "World-Fusion", "World", "Space", 
                    "Space-Age-Pop", "Space-Rock", "Spanish-Folk", "Southern-Soul", "Speed-Metal"];

    /**
     * Fills user selections with options and adds event listeners to UI
     */
    function initialize() {
        setToken();
        fillDropdownYear();
        fillDropdownGenre();
        let submit = document.getElementById("submit");
        submit.addEventListener("click", getPlaylist);
    }

    /**
     * Fills dropdown options with years 1950-2017 and None
     */
    function fillDropdownYear() {
        let dropdown = document.getElementById("select-year");
        let noChoice = document.createElement('option');
        noChoice.value = "none";
        noChoice.innerText = "Any Year";
        dropdown.appendChild(noChoice);
        for (let i = CURRENT_YEAR; i >= EARLIEST_YEAR; i--) {
            let option = document.createElement('option');
            option.value = i;
            option.innerText = i;
            dropdown.appendChild(option);
        }
    }

    /**
     * Fills dropdown options with GENRES
     */
    function fillDropdownGenre() {
        let dropdown = document.getElementById("select-genre");
        let noChoice = document.createElement('option');
        noChoice.value = "none";
        noChoice.innerText = "Any Genre";
        dropdown.appendChild(noChoice);
        for (let i = 0; i < GENRES.length; i++) {
            let option = document.createElement('option');
            option.value = GENRES[i];
            option.innerText = GENRES[i];
            dropdown.appendChild(option);
        }
    }

    /**
     * Formats genre names into html appropriate values
     */
    function getPlaylist() {
        let year = document.getElementById("select-year").value;
        let genre = document.getElementById("select-genre").value;

        let query = "";

        // Formats user selections into query format
        if (year !== "none" && genre !== "none") { // year yes, genre yes
            query = "year:" + year + "%20genre:%22" + genre + "%22";
        } else if (genre !== "none") { // year no, genre yes
            query = "genre:%22" + genre + "%22";
        } else if (year !== "none") { // year yes, genre no
            query = "year:" + year;
        }

        fetch(searchURL + query + "&type=track",
            {
                headers: {
                    "Authorization": "Bearer " + accessToken
                }
            })
            .then(checkStatus)
            .then(JSON.parse)
            .then(showPlaylist)
            .catch(fetchError);
    }

    /**
     * If the fetch for getting playlist fails, display message on page
     */
    function fetchError() {
        let display = document.getElementById("playlist");
        display.innerText = "Problem fetching songs";
    }

    /**
     * Updates ordered list on page with array of songs
     * @param {Object} results an array of Spotify track objects
     */
    function showPlaylist(results) {
        let playlist = results.tracks.items;
        let list = document.getElementById("playlist");
        if (playlist.length < 1) {
            list.innerText = "No songs found, try something else!";
        } else {
            list.innerText = ""; // Reset previous generated list

            for (let i = 0; i < playlist.length; i++) {
                let listItem = document.createElement('li');
                let track = playlist[i];

                // Formats all artists if there are more than one
                listItem.innerText += track.artists[0].name;
                for (let i = 1; i < track.artists.length; i++) {
                    listItem.innerText += ", " + track.artists[i].name;
                }

                listItem.innerText += " - " + track.name;
                list.appendChild(listItem);
            }
        }
    }

    /**
     * Sets accessToken to returned access_token after POST request
     */
    function setToken() {

        
        fetch(tokenURL,
            {
                method: "POST",
                body: // Can't use FormData(), probably something with spotify api
                    "grant_type=client_credentials",
                headers: { // btoa() encodes a string in base64
                    "Authorization": "Basic " + btoa(SPOTIFY_CRED.clientId + ":" +
                                                     SPOTIFY_CRED.clientSecret),
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                
            })
            .then(checkStatus)
            .then(JSON.parse)
            .then(storeToken)
            .catch(tokenError);
    }

    /**
     * Saves the access token as a module-global variable
     * @param {Object} tokenObject JSON object representing Spotify access token
     */
    function storeToken(tokenObject) {
        if (tokenObject !== null) {
            accessToken = tokenObject.access_token;
        }
    }

    /**
     * If there was a problem getting an access token, display a message on the page
     */
    function tokenError() {
        let display = document.getElementById("playlist");
        display.innerText = "Problem getting token";
    }

    /**
     * CSE154 Helper function to return the response's result text if successful, otherwise
     * returns the rejected Promise result with an error status and corresponding text
     * @param {object} response - response to check for success/error
     * @returns {object} - valid result text if response was successful, otherwise rejected
     *                     Promise result
     */
    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300 || response.status == 0) {
            return response.text();
        } else {
            return Promise.reject(new Error(response.status + ": " + response.statusText));
        }
    }
})();