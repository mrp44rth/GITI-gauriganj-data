// Sample data (you can replace this with your actual data)
const data = [
     ["Priya", "1 SMI", "./SMI 1-10/1 SMI Priya/1.bmp", "./SMI 1-10/1 SMI Priya/2.bmp", "./SMI 1-10/1 SMI Priya/3.bmp", "./SMI 1-10/1 SMI Priya/4.bmp", "./SMI 1-10/1 SMI Priya/5.bmp"],
  ["Nidhi", "2 SMI", "./SMI 1-10/2 SMI Nidhi/1.bmp", "./SMI 1-10/2 SMI Nidhi/2.bmp", "./SMI 1-10/2 SMI Nidhi/3.bmp", "./SMI 1-10/2 SMI Nidhi/4.bmp", "./SMI 1-10/2 SMI Nidhi/5.bmp"],
  ["Shradha", "3 SMI", "./SMI 1-10/3 SMI Shradha/1.bmp", "./SMI 1-10/3 SMI Shradha/2.bmp", "./SMI 1-10/3 SMI Shradha/3.bmp", "./SMI 1-10/3 SMI Shradha/4.bmp", "./SMI 1-10/3 SMI Shradha/5.bmp"],
  ["Ritika", "4 SMI", "./SMI 1-10/4 SMI Ritika/1.bmp", "./SMI 1-10/4 SMI Ritika/2.bmp", "./SMI 1-10/4 SMI Ritika/3.bmp", "./SMI 1-10/4 SMI Ritika/4.bmp", "./SMI 1-10/4 SMI Ritika/5.bmp"],
  ["Jyoti", "5 SMI", "./SMI 1-10/5 SMI Jyoti/1.bmp", "./SMI 1-10/5 SMI Jyoti/2.bmp", "./SMI 1-10/5 SMI Jyoti/3.bmp", "./SMI 1-10/5 SMI Jyoti/4.bmp", "./SMI 1-10/5 SMI Jyoti/5.bmp"],
  ["Fooljahan", "6 SMI", "./SMI 1-10/6 SMI Fooljahan/1.bmp", "./SMI 1-10/6 SMI Fooljahan/2.bmp", "./SMI 1-10/6 SMI Fooljahan/3.bmp", "./SMI 1-10/6 SMI Fooljahan/4.bmp", "./SMI 1-10/6 SMI Fooljahan/5.bmp"],
  ["Aditya", "7 SMI", "./SMI 1-10/7 SMI Aditya/1.bmp", "./SMI 1-10/7 SMI Aditya/2.bmp", "./SMI 1-10/7 SMI Aditya/3.bmp", "./SMI 1-10/7 SMI Aditya/4.bmp", "./SMI 1-10/7 SMI Aditya/5.bmp"],
  ["Shalu", "8 SMI", "./SMI 1-10/8 SMI Shalu/1.bmp", "./SMI 1-10/8 SMI Shalu/2.bmp", "./SMI 1-10/8 SMI Shalu/3.bmp", "./SMI 1-10/8 SMI Shalu/4.bmp", "./SMI 1-10/8 SMI Shalu/5.bmp"],
  ["Manju", "9 SMI", "./SMI 1-10/9 SMI Manju/1.bmp", "./SMI 1-10/9 SMI Manju/2.bmp", "./SMI 1-10/9 SMI Manju/3.bmp", "./SMI 1-10/9 SMI Manju/4.bmp", "./SMI 1-10/9 SMI Manju/5.bmp"],
  ["Shivani", "10 SMI", "./SMI 1-10/10 SMI Shivani/1.bmp", "./SMI 1-10/10 SMI Shivani/2.bmp", "./SMI 1-10/10 SMI Shivani/3.bmp", "./SMI 1-10/10 SMI Shivani/4.bmp", "./SMI 1-10/10 SMI Shivani/5.bmp"]
    // Add more rows...
];


let currentSortColumn = -1; // Initially, no column is sorted
let isAscending = true; // Initially, sorting is in ascending order

document.addEventListener('DOMContentLoaded', function () {
    renderTable(data);
    
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredData = data.filter(row => row.some(cell => cell.toLowerCase().includes(searchTerm)));
        renderTable(filteredData);
    });
});

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach((cell, index) => {
            const td = document.createElement('td');

            if (index >= 2 && index <= 6) {
                const img = document.createElement('img');
                img.src = cell;
                img.alt = `Finger ${index - 1}`;
                img.style.width = '100px'; // Set width to auto for actual size
                img.style.height = '100px'; // Set height to auto for actual size
                img.style.transform = 'scaleX(-1)'; // Mirror horizontally
                img.style.filter = 'invert(100%)'; // Color invert
                td.appendChild(img);
            } else {
                td.textContent = cell;
            }

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });

    updateTotalCount(data.length);
}

function updateTotalCount(count) {
    const totalCountElement = document.getElementById('totalCount');
    totalCountElement.textContent = `Total Count: ${count}`;
}

function sortTable(columnIndex) {
    if (currentSortColumn === columnIndex) {
        // If the same column is clicked again, reverse the sorting order
        isAscending = !isAscending;
    } else {
        // If a new column is clicked, set the sorting order to ascending
        isAscending = true;
        currentSortColumn = columnIndex;
    }

    data.sort((a, b) => {
        const valueA = a[currentSortColumn];
        const valueB = b[currentSortColumn];

        // Customize the comparison logic based on the data type (string, number, etc.)
        return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    renderTable(data);
}
