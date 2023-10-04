let lng_code = prompt("Please enter language code(\"en\", \"fr\", \"de\", \"es\")")
switch (lng_code) {
    case 'es':
        console.log("Hello World translated in Spanish is: ¡Hola Mundo!");
        break;
    case 'fr':
        console.log("Hello World translated in French is: Bonjour le monde!")
        break;
    case 'de':
        console.log("Hello World translated in German is: Hallo Welt!")
        break;
    default:
        console.log("Hello World translated in English is: Hello World")
}