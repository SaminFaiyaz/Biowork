# Biowork
## Methodological Architecture

This tool automates human biometrics analysis by translating physiological data points into objective clinical outputs via two distinct computational pipelines:

1. **Body Mass Index (BMI):** Computed via the standard anthropometric ratio:
   $$\text{BMI} = \frac{\text{weight in kg}}{(\text{height in m})^2}$$

2. **Basal Metabolic Rate (BMR):** Calculated using the **Mifflin-St Jeor Equation**, selected for its verified modern precision over legacy formulas:
   * **Male:** $10(W) + 6.25(H) - 5(A) + 5$
   * **Female:** $10(W) + 6.25(H) - 5(A) - 161$
   *(Where $W = \text{weight in kg}$, $H = \text{height in cm}$, and $A = \text{age in years}$)*

**Implementation Note:** Independent architectural logic designed by the repository owner; automated system scripts utilized to render standard structural markup (HTML5) and procedural scripting (Vanilla JavaScript).
