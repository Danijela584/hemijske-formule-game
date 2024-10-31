const levels = [
    [
        { formula: 'HCl', name: 'Hlorovodonična kiselina' },
        { formula: 'H₂SO₄', name: 'Sumporna kiselina' },
        { formula: 'HNO₃', name: 'Azotna kiselina' },
        { formula: 'CH₃COOH', name: 'Sirćetna kiselina' },
        { formula: 'H₂CO₃', name: 'Ugljena kiselina' },
        { formula: 'NaOH', name: 'Natrijum hidroksid' },
        { formula: 'KOH', name: 'Kalijum hidroksid' },
        { formula: 'Ca(OH)₂', name: 'Kalcijum hidroksid' },
        { formula: 'NH₃', name: 'Amonijak' },
        { formula: 'Mg(OH)₂', name: 'Magnezijum hidroksid' },
        { formula: 'NaCl', name: 'Natrijum-hlorid' },
        { formula: 'KBr', name: 'Kalijum-bromid' }
    ],
    [
        { formula: 'CaCO₃', name: 'Kalcijum-karbonat' },
        { formula: 'Na₂SO₄', name: 'Natrijum-sulfat' },
        { formula: 'KNO₃', name: 'Kalijum-nitrat' },
        { formula: 'CO₂', name: 'Ugljenik(IV)-oksid' },
        { formula: 'SO₂', name: 'Sumpor(IV)-oksid' },
        { formula: 'NO₂', name: 'Azot(IV)-oksid' },
        { formula: 'N₂O', name: 'Azot(I)-oksid' },
        { formula: 'P₄O₁₀', name: 'Fosfor(V)-oksid' },
        { formula: 'H₂O', name: 'Voda' },
        { formula: 'H₂O₂', name: 'Vodonik-peroksid' },
        { formula: 'NaHCO₃', name: 'Natrijum-hidrogenkarbonat' },
        { formula: 'CaCl₂', name: 'Kalcijum-hlorid' }
    ],
    [
        { formula: 'MgSO₄', name: 'Magnezijum-sulfat' },
        { formula: 'Fe₂O₃', name: 'Gvožđe(III)-oksid' },
        { formula: 'CuSO₄', name: 'Bakar(II)-sulfat' },
        { formula: 'ZnO', name: 'Cink-oksid' },
        { formula: 'Al₂O₃', name: 'Aluminijum-oksid' },
        { formula: 'PbO₂', name: 'Olovo(IV)-oksid' },
        { formula: 'H₃PO₄', name: 'Fosforna kiselina' },
        { formula: 'HBr', name: 'Bromovodonična kiselina' },
        { formula: 'HI', name: 'Jodovodonična kiselina' },
        { formula: 'H₂S', name: 'Vodonik-sulfid' },
        { formula: 'LiOH', name: 'Litijum hidroksid' },
        { formula: 'Ba(OH)₂', name: 'Barijum hidroksid' }
    ]
];

let currentLevel = 0;
let selectedFormula = null;
let selectedName = null;

function loadLevel(level) {
    const formulaDiv = document.getElementById('formulas');
    const nameDiv = document.getElementById('names');
    formulaDiv.innerHTML = '';
    nameDiv.innerHTML = '';

    const shuffledFormulas = [...levels[level]].sort(() => Math.random() - 0.5);
    const shuffledNames = [...levels[level]].sort(() => Math.random() - 0.5);

    shuffledFormulas.forEach((compound, index) => {
        const formulaButton = document.createElement('button');
        formulaButton.textContent = compound.formula;
        formulaButton.dataset.name = compound.name;
        formulaButton.id = `formula-${index}`;
        formulaButton.onclick = () => selectFormula(index);
        formulaDiv.appendChild(formulaButton);
    });

    shuffledNames.forEach((compound, index) => {
        const nameButton = document.createElement('button');
        nameButton.textContent = compound.name;
        nameButton.id = `name-${index}`;
        nameButton.onclick = () => selectName(index);
        nameDiv.appendChild(nameButton);
    });
}

function selectFormula(index) {
    if (selectedFormula !== null) {
        document.getElementById(`formula-${selectedFormula}`).classList.remove('selected');
    }
    selectedFormula = index;
    document.getElementById(`formula-${index}`).classList.add('selected');
    checkMatch();
}

function selectName(index) {
    if (selectedName !== null) {
        document.getElementById(`name-${selectedName}`).classList.remove('selected');
    }
    selectedName = index;
    document.getElementById(`name-${index}`).classList.add('selected');
    checkMatch();
}

function checkMatch() {
    if (selectedFormula !== null && selectedName !== null) {
        const formulaButton = document.getElementById(`formula-${selectedFormula}`);
        const nameButton = document.getElementById(`name-${selectedName}`);
        if (formulaButton.dataset.name === nameButton.textContent) {
            formulaButton.style.backgroundColor = 'green';
            nameButton.style.backgroundColor = 'green';
            setTimeout(() => {
                formulaButton.style.display = 'none';
                nameButton.style.display = 'none';
                checkLevelCompletion();
            }, 500);
        } else {
            formulaButton.style.backgroundColor = 'red';
            nameButton.style.backgroundColor = 'red';
            setTimeout(() => {
                formulaButton.style.backgroundColor = '';
                nameButton.style.backgroundColor = '';
            }, 500);
        }
        selectedFormula = null;
        selectedName = null;
    }
}

function checkLevelCompletion() {
    const remainingFormulas = document.querySelectorAll('#formulas button:not([style*="display: none"])');
    if (remainingFormulas.length === 0) {
        currentLevel++;
        if (currentLevel < levels.length) {
            let affirmation = '';
            if (currentLevel === 1) {
                affirmation = 'Svaki izazov koji sretnem u hemiji je prilika za rast i učenje.';
            } else if (currentLevel === 2) {
                affirmation = 'Posvećen/posvećena sam i uporan/uporna, i moj trud u učenju hemije će dovesti do uspeha.';
            }
            alert(`Great job! ${affirmation} Get ready for Level ${currentLevel + 1}`);
            loadLevel(currentLevel);
        } else {
            alert('Congratulations! Sposoban/sposobna sam da razumem i savladam složene hemijske pojmove.');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadLevel(currentLevel);
});
