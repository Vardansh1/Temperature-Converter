function convert() {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const resultElement = document.getElementById('result');
  
    if (temperatureInput.value === '') {
      resultElement.textContent = 'Please enter a temperature.';
      return;
    }
  
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    let convertedTemperature, convertedUnit;
  
    if (unit === 'celsius') {
      convertedTemperature = (temperature * 9/5) + 32;
      convertedUnit = 'Fahrenheit';
    } else {
      convertedTemperature = (temperature - 32) * 5/9;
      convertedUnit = 'Celsius';
    }
  
    resultElement.textContent = `${temperature.toFixed(2)}°${unit.toUpperCase()} is ${convertedTemperature.toFixed(2)}°${convertedUnit}`;
  }
  