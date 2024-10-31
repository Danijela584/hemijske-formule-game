const compounds = [
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
    { formula: 'KBr', name: 'Kalijum-bromid' },
    { formula: 'CaCO₃', name: 'Kalcijum-karbonat' },
    { formula: 'Na₂SO₄', name: 'Natrijum-sulfat' },
    { formula: 'KNO₃', name: 'Kalijum-nitrat' },
    { formula: 'CO₂', name: 'Ugljenik(IV)-oksid' },
    { formula: 'SO₂', name: 'Sumpor(IV)-oksid' },
    { formula: 'NO₂', name: 'Azot(IV)-oksid' },
    { formula: 'N₂O', name: 'Azot(I)-oksid' },
    { formula: 'P₄O₁₀', name: 'Fosfor(V)-okside' },
    { formula: 'H₂O', name: 'Voda' },
    { formula: 'H₂O₂', name: 'Vodonik-peroksid' },
    { formula: 'NaHCO₃', name: 'Natrijum-hidrogenkarbonat' },
    { formula: 'CaCl₂', name: 'Kalcijum-hlorid' },
    { formula: 'MgSO₄', name: 'Magnezijum-sulfat' },
    { formula: 'Fe₂O₃', name: 'Gvožđe(III)-oksid' },
    { formula: 'CuSO₄', name: 'Bakar(II)-sulfat' },
    { formula: 'ZnO', name: 'Cink-oksid' },
    { formula: 'Al₂O₃', name: 'Alumnijum-oksid' },
    { formula: 'PbO₂', name: 'Olovo(IIV)-oksid' },
    { formula: 'H₃PO₄', name: 'Fosforna kiselina' },
    { formula: 'HBr', name: 'Bromovodonična kiselina' },
    { formula: 'HI', name: 'Jodovodonična kiselina' },
    { formula: 'H₂S', name: 'Vodonik-sulfid' },
    { formula: 'LiOH', name: 'Litijum hidroksid' },
    { formula: 'Ba(OH)₂', name: 'Barijum hidroksid' },
    { formula: 'CsOH', name: 'Cezijum hidroksid' },
    { formula: 'Sr(OH)₂', name: 'Stroncijum hidroksid' },
    { formula: 'K₂SO₃', name: 'Kalijum-sulfit' },
    { formula: 'AgNO₃', name: 'Srebro-nitrat' },
    { formula: 'Na₂CO₃', name: 'Natriju-karbonat' },
    { formula: 'K₂SO₄', name: 'Kalijum-sulfat' },
    { formula: 'NH₄Cl', name: 'Amonijum-hlorid' },
    { formula: 'CaSO₄', name: 'Kalcijum-sulfat' },
    { formula: 'FeCl₃', name: 'Gvožđe(III)-hlorid' },
    { formula: 'CuCl₂', name: 'Bakar(II)-hlorid' },
    { formula: 'ZnCl₂', name: 'Cink-hlorid' },
    { formula: 'AlCl₃', name: 'Aluminijum-hlorid' },
    { formula: 'PbCl₂', name: 'Olovo(II)-hlorid' }
];

// Shuffle arrays
const shuffledFormulas = [...compounds].sort(() => Math.random() - 0.5);
const shuffledNames = [...compounds].sort(() => Math.random() - 0.5);

// Insert formulas into the HTML
const formulaDiv = document.getElementById('formulas');
const nameDiv = document.getElementById('names');
shuffledFormulas.forEach((compound, index) => {
    const formulaButton = document.createElement('button');
    formulaButton.textContent = compound.formula;
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

let selectedFormula = null;
let selectedName = null;

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
        if (shuffledFormulas[selectedFormula].name === shuffledNames[selectedName].name) {
            formulaButton.style.backgroundColor = 'green';
            nameButton.style.backgroundColor = 'green';
        } else {
            formulaButton.style.backgroundColor = 'red';
            nameButton.style.backgroundColor = 'red';
        }
        selectedFormula = null;
        selectedName = null;
    }
}
