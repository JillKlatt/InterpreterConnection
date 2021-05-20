const interpreterAdapter = new InterpreterAdapter("http://localhost:3000")
const cityAdapter = new CityAdapter("http://localhost:3000")
const languageAdapter = new LanguageAdapter("http://localhost:3000")

document.addEventListener("DOMContentLoaded", () => {
    interpreterAdapter.getInterpreters();
    cityAdapter.getCities();
    languageAdapter.getLanguages();
})

