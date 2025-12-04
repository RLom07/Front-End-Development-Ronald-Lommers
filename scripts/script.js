// Selecteerd het icoontje van het HamburgerMenu
const hamburger = document.querySelector("header button:has(span)");

// Selecteerd de gehele navigatie van de header
const nav = document.querySelector("header nav");

// Wanneer er geklikt word op het hamburger menu icoontje word er verwezen naar de functie openClose
hamburger.onclick = openClose;

function openClose() {
	// 1. Zoekt het attribute data-open in de html en kijkt of de waarde gelijk is aan true. 
	// Hier word een boolean operator nagebootst, want in html kan geen boolean geschreven worden dus heb ik het zo gedaan:
	// "True" === "True" = True
	// "False" === "True" = False
	// Vervolgens word het resulaat opgeslagen in de variabelen
	// Simpel gezegd word er gekeken of het menu wel of niet open staat
	const isOpen = nav.getAttribute("data-open") === "true";
    
	// 2. Zet vervolgens data-open op de tegenovergestelde waarde als de huidige waarde
	// Dus true word false en false word true
	// Daarmee word het menu geopend en gesloten
	nav.setAttribute("data-open", isOpen ? "false" : "true");

	// 3. Zet vervolgens aria-expanded op dezelfde waarde wat bijdraagd aan toegangkelijkheid
	// Deze verteld aan screenreaders of het menu open of dichtgeklapt is
	// Ook word hierbij de animatie in gang gezet doordat deze waarde in de CSS word gecheckt
	hamburger.setAttribute("aria-expanded", isOpen ? "false" : "true");
}
