document.getElementById('metricsForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Retrieve inputs from the DOM
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    // Validate inputs
    if (isNaN(age) || isNaN(weight) || isNaN(heightCm)) {
        alert("Please enter valid numerical parameters.");
        return;
    }

    // 2. Core Mathematical Executions
    
    // BMI Calculation: weight (kg) / [height (m)]^2
    const heightMeters = heightCm / 100;
    const bmi = weight / (heightMeters * heightMeters);

    // BMR Calculation: Mifflin-St Jeor Equation
    let bmr = 0;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * heightCm) - (5 * age) + 5;
    } else if (gender === 'female') {
        bmr = (10 * weight) + (6.25 * heightCm) - (5 * age) - 161;
    }

    // 3. Determine BMI Classification (WHO Standards)
    let bmiStatus = "";
    let statusColor = "#2c3e50";

    if (bmi < 18.5) {
        bmiStatus = "Underweight";
        statusColor = "#e67e22";
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiStatus = "Normal Weight";
        statusColor = "#2ecc71";
    } else if (bmi >= 25 && bmi < 30) {
        bmiStatus = "Overweight";
        statusColor = "#f1c40f";
    } else {
        bmiStatus = "Obese";
        statusColor = "#e74c3c";
    }

    // 4. Update DOM / Output Presentation
    document.getElementById('bmiValue').innerText = bmi.toFixed(1);
    
    const bmiStatusEl = document.getElementById('bmiStatus');
    bmiStatusEl.innerText = bmiStatus;
    bmiStatusEl.style.color = statusColor;

    document.getElementById('bmrValue').innerText = Math.round(bmr) + " kcal";

    // Reveal the results panel cleanly
    document.getElementById('resultsSection').classList.remove('results-hidden');
});
