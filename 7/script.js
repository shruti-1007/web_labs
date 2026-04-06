let numRows = 0, numCols = 0;

function generateTable() {
    numRows = parseInt(document.getElementById('rows').value);
    numCols = parseInt(document.getElementById('cols').value);

    if (!numRows || !numCols || numRows < 1 || numCols < 1) {
        alert('Enter valid rows and columns!');
        return;
    }

    let html = '<table id="dynTable"><thead><tr>';

    for (let c = 1; c <= numCols; c++) {
        html += '<th>Col ' + c + '</th>';
    }

    html += '</tr></thead><tbody>';

    for (let r = 1; r <= numRows; r++) {
        html += '<tr>';
        for (let c = 1; c <= numCols; c++) {
            html += '<td>R' + r + 'C' + c + '</td>';
        }
        html += '</tr>';
    }

    html += '</tbody></table>';

    document.getElementById('tableContainer').innerHTML = html;
}

function addRow() {
    const tbody = document.querySelector('#dynTable tbody');

    if (!tbody) {
        alert('Generate a table first!');
        return;
    }

    numRows++;

    const tr = document.createElement('tr');

    for (let c = 1; c <= numCols; c++) {
        const td = document.createElement('td');
        td.textContent = 'R' + numRows + 'C' + c;
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
}

function deleteRow() {
    const tbody = document.querySelector('#dynTable tbody');

    if (!tbody || tbody.rows.length === 0) {
        alert('No rows to delete!');
        return;
    }

    tbody.deleteRow(tbody.rows.length - 1);
    numRows--;
}

function highlightEvenRows() {
    const rows = document.querySelectorAll('#dynTable tbody tr');

    rows.forEach((row, i) => {
        row.classList.toggle('even-row', (i + 1) % 2 === 0);
    });
}