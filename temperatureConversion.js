//converting celsius to fahrenheit
function celsiusToFahrenheit(celsius)
{
    var celsius;
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(fahrenheit);
}
celsiusToFahrenheit();

//converting celsius to kelvin
function celsiusToKelvin(celsius)
{
    var celsius;
    const kelvin = celsius + 273.15;
    console.log(kelvin);
}
celsiusToKelvin();

//converting fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit)
{
    var fahrenheit;
    const celsius = (fahrenheit - 32) * 5/9;
    console.log(celsius);
}
fahrenheitToCelsius();

//converting fahrenheit to kelvin
function fahrenheitToKelvin(fahrenheit)
{
    var fahrenheit;
    const kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    console.log(kelvin);
}
fahrenheitToKelvin();

//converting kelvin to fahrenheit
function kelvinToFahrenheit(kelvin)
{
    var kelvin;
    const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    console.log(fahrenheit);
}
kelvinToFahrenheit();

//converting kelvin to celsius
function kelvinToCelsius(kelvin)
{
    var kelvin;
    const celsius = kelvin - 273.15;
    console.log(celsius);
}
kelvinToCelsius();