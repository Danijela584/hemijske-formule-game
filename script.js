const formulas = ['HCl', 'NaOH', 'NaCl', 'CO₂'];
const names = ['Hydrochloric acid', 'Sodium hydroxide', 'Sodium chloride', 'Carbon dioxide'];

// Shuffle arrays
formulas.sort(() => Math.random() - 0.5);
names.sort(() => Math.random() - 0.5);

// Insert formulas into the HTML
const formulaDiv = document.getElementById('formulas');
formulas.forEach((formula, index) => {
    const label = document.createElement('label');
    label.textContent = formula;
    const input = document.createElement('input');
    input.type = 'text';
    input.id = `input-${index}`;
    formulaDiv.appendChild(label);
    formulaDiv.appendChild(input);
});

// Insert names into the HTML
const nameDiv = document.getElementById('names');
names.forEach(name => {
    const label = document.createElement('label');
    label.textContent = name;
    nameDiv.appendChild(label);
});

// Function to check matches
function checkMatch() {
    formulas.forEach((formula, index) => {
        const input = document.getElementById(`input-${index}`);
        const name = names[index];
        if (input.value.trim().toLowerCase() === name.toLowerCase()) {
            input.style.borderColor = 'green';
        } else {
            input.style.borderColor = 'red';
        }
    });
}
