const setup = () => {
    const table = {
        columns: 1,
        rows: 1
    }

    makeTable(table);

    document.addEventListener('keydown',(e) => handleClickKey(table,e));



}

const makeTable = table => {
    let tableElement = document.getElementById("tableBody");
    tableElement.innerHTML = "";
    for(let i = 0; i < table.rows; i++){
        let tableRow = document.createElement('tr');
        for(let j = 0; j < table.columns; j++){
            let tableColumn = document.createElement('td');
            tableColumn.textContent = `${i}-${j}`;
            tableRow.append(tableColumn);

        }
        tableElement.append(tableRow);
    }
}

const handleClickKey = (table,e) =>{
    switch(e.key){
        case 'ArrowDown':
            table.rows++;
            makeTable(table);
            break;
        case 'ArrowUp':
            table.rows--;
            makeTable(table);
            break;
        case 'ArrowLeft':
            table.columns--;
            makeTable(table);
            break;
        case 'ArrowRight':
            table.columns++;
            makeTable(table);
            break;
    }
}

window.addEventListener("load", setup);