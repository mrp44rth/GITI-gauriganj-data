// Sample data (you can replace this with your actual data)
const data = [
     ["Priya", "38810892", "./SMI 1-10/1 SMI Priya/1.bmp", "./SMI 1-10/1 SMI Priya/2.bmp", "./SMI 1-10/1 SMI Priya/3.bmp", "./SMI 1-10/1 SMI Priya/4.bmp", "./SMI 1-10/1 SMI Priya/5.bmp"],
  ["Nidhi", "67321737", "./SMI 1-10/2 SMI Nidhi/1.bmp", "./SMI 1-10/2 SMI Nidhi/2.bmp", "./SMI 1-10/2 SMI Nidhi/3.bmp", "./SMI 1-10/2 SMI Nidhi/4.bmp", "./SMI 1-10/2 SMI Nidhi/5.bmp"],
  ["Shradha", "01781272", "./SMI 1-10/3 SMI Shradha/1.bmp", "./SMI 1-10/3 SMI Shradha/2.bmp", "./SMI 1-10/3 SMI Shradha/3.bmp", "./SMI 1-10/3 SMI Shradha/4.bmp", "./SMI 1-10/3 SMI Shradha/5.bmp"],
  ["Ritika", "06345135", "./SMI 1-10/4 SMI Ritika/1.bmp", "./SMI 1-10/4 SMI Ritika/2.bmp", "./SMI 1-10/4 SMI Ritika/3.bmp", "./SMI 1-10/4 SMI Ritika/4.bmp", "./SMI 1-10/4 SMI Ritika/5.bmp"],
  ["Jyoti", "98031573", "./SMI 1-10/5 SMI Jyoti/1.bmp", "./SMI 1-10/5 SMI Jyoti/2.bmp", "./SMI 1-10/5 SMI Jyoti/3.bmp", "./SMI 1-10/5 SMI Jyoti/4.bmp", "./SMI 1-10/5 SMI Jyoti/5.bmp"],
  ["Fooljahan", "65251833", "./SMI 1-10/6 SMI Fooljahan/1.bmp", "./SMI 1-10/6 SMI Fooljahan/2.bmp", "./SMI 1-10/6 SMI Fooljahan/3.bmp", "./SMI 1-10/6 SMI Fooljahan/4.bmp", "./SMI 1-10/6 SMI Fooljahan/5.bmp"],
  ["Aditya", "62030274", "./SMI 1-10/7 SMI Aditya/1.bmp", "./SMI 1-10/7 SMI Aditya/2.bmp", "./SMI 1-10/7 SMI Aditya/3.bmp", "./SMI 1-10/7 SMI Aditya/4.bmp", "./SMI 1-10/7 SMI Aditya/5.bmp"],
  ["Shalu", "37575451", "./SMI 1-10/8 SMI Shalu/1.bmp", "./SMI 1-10/8 SMI Shalu/2.bmp", "./SMI 1-10/8 SMI Shalu/3.bmp", "./SMI 1-10/8 SMI Shalu/4.bmp", "./SMI 1-10/8 SMI Shalu/5.bmp"],
  ["Manju", "78391223", "./SMI 1-10/9 SMI Manju/1.bmp", "./SMI 1-10/9 SMI Manju/2.bmp", "./SMI 1-10/9 SMI Manju/3.bmp", "./SMI 1-10/9 SMI Manju/4.bmp", "./SMI 1-10/9 SMI Manju/5.bmp"],
  ["Shivani", "79274559", "./SMI 1-10/10 SMI Shivani/1.bmp", "./SMI 1-10/10 SMI Shivani/2.bmp", "./SMI 1-10/10 SMI Shivani/3.bmp", "./SMI 1-10/10 SMI Shivani/4.bmp", "./SMI 1-10/10 SMI Shivani/5.bmp"],
["Seema Rajak", "77890517", "./SMI 10-20/SeemaRajak/1.bmp", "./SMI 10-20/SeemaRajak/2.bmp", "./SMI 10-20/SeemaRajak/3.bmp", "./SMI 10-20/SeemaRajak/4.bmp","./SMI 10-20/SeemaRajak/5.bmp"],
["Suman Yadav", "09624184", "./SMI 10-20/SumanYadav/1.bmp", "./SMI 10-20/SumanYadav/2.bmp", "./SMI 10-20/SumanYadav/3.bmp", "./SMI 10-20/SumanYadav/4.bmp", "./SMI 10-20/SumanYadav/5.bmp"],
["Vikas", "63664907", "./SMI 10-20/Vikas/1.bmp", "./SMI 10-20/Vikas/2.bmp", "./SMI 10-20/Vikas/3.bmp", "./SMI 10-20/Vikas/4.bmp", "./SMI 10-20/Vikas/5.bmp"],
["Priya Maurya", "54387097", "./SMI 10-20/PriyaMaurya/1.bmp", "./SMI 10-20/PriyaMaurya/2.bmp", "./SMI 10-20/PriyaMaurya/3.bmp", "./SMI 10-20/PriyaMaurya/4.bmp", "./SMI 10-20/PriyaMaurya/5.bmp"],
["Itee Singh", "88885746", "./SMI 10-20/ITEESINGH/1.bmp", "./SMI 10-20/ITEESINGH/2.bmp", "./SMI 10-20/ITEESINGH/3.bmp", "./SMI 10-20/ITEESINGH/4.bmp", "./SMI 10-20/ITEESINGH/5.bmp"],
["Pankaj Kumar", "00471133", "./SMI 10-20/**/1.bmp", "./SMI 10-20/**/2.bmp", "./SMI 10-20/**/3.bmp", "./SMI 10-20/**/4.bmp", "./SMI 10-20/**/5.bmp"],
["Sadhana Saroj", "70204567", "./SMI 10-20/SADHNASAROJ/1.bmp", "./SMI 10-20/SADHNASAROJ/2.bmp", "./SMI 10-20/SADHNASAROJ/3.bmp", "./SMI 10-20/SADHNASAROJ/4.bmp", "./SMI 10-20/SADHNASAROJ/5.bmp"],
["POOJA PANDEY", "64829767", "./SMI 10-20/POOJAPANDAY/1.bmp", "./SMI 10-20/POOJAPANDAY/2.bmp", "./SMI 10-20/POOJAPANDAY/3.bmp", "./SMI 10-20/POOJAPANDAY/4.bmp", "./SMI 10-20/POOJAPANDAY/5.bmp"],
["Khushi Kashyap", "99950887", "./SMI 10-20/KHUSHIKASHAP/1.bmp", "./SMI 10-20/KHUSHIKASHAP/2.bmp", "./SMI 10-20/KHUSHIKASHAP/3.bmp", "./SMI 10-20/KHUSHIKASHAP/4.bmp", "./SMI 10-20/KHUSHIKASHAP/5.bmp"],
["Purnima Maurya", "56657604", "./SMI 10-20/PURNIMAMAURYA/1.bmp", "./SMI 10-20/PURNIMAMAURYA/2.bmp", "./SMI 10-20/PURNIMAMAURYA/3.bmp", "./SMI 10-20/PURNIMAMAURYA/4.bmp", "./SMI 10-20/PURNIMAMAURYA/5.bmp"],
["Ankit Mishra", "CAN_28191800", "./SMI 20-30/ANKITMISHRA/1.bmp", "./SMI 20-30/ANKITMISHRA/2.bmp", "./SMI 20-30/ANKITMISHRA/3.bmp", "./SMI 20-30/ANKITMISHRA/4.bmp","./SMI 20-30/ANKITMISHRA/5.bmp"],
["Deepak Kumar", "CAN_28191347", "./SMI 20-30/Deepakkumar/1.bmp", "./SMI 20-30/Deepakkumar/2.bmp", "./SMI 20-30/Deepakkumar/3.bmp", "./SMI 20-30/Deepakkumar/4.bmp","./SMI 20-30/Deepakkumar/5.bmp"],
["Deepak Vishwakarma", "CAN_28191987", "./SMI 20-30/DEEPAKVISHWAKARMA/1.bmp", "./SMI 20-30/DEEPAKVISHWAKARMA/2.bmp", "./SMI 20-30/DEEPAKVISHWAKARMA/3.bmp", "./SMI 20-30/DEEPAKVISHWAKARMA/4.bmp","./SMI 20-30/DEEPAKVISHWAKARMA/5.bmp"],
["Mala Verma", "CAN_4190567", "./SMI 20-30/MALAVARMA/1.bmp", "./SMI 20-30/MALAVARMA/2.bmp", "./SMI 20-30/MALAVARMA/3.bmp", "./SMI 20-30/MALAVARMA/4.bmp","./SMI 20-30/MALAVARMA/5.bmp"],
["Neha Yadav", "CAN_28191912", "./SMI 20-30/NEHAYADAV/1.bmp", "./SMI 20-30/NEHAYADAV/2.bmp", "./SMI 20-30/NEHAYADAV/3.bmp", "./SMI 20-30/NEHAYADAV/4.bmp","./SMI 20-30/NEHAYADAV/5.bmp"],
["Reena", "CAN_28192101", "./SMI 20-30/REENA/1.bmp", "./SMI 20-30/REENA/2.bmp", "./SMI 20-30/REENA/3.bmp", "./SMI 20-30/REENA/4.bmp","./SMI 20-30/REENA/5.bmp"],
["SACHINKUMAR105", "CAN_28191456", "./SMI 20-30/SACHINKUMAR105/1.bmp", "./SMI 20-30/SACHINKUMAR105/2.bmp", "./SMI 20-30/SACHINKUMAR105/3.bmp", "./SMI 20-30/SACHINKUMAR105/4.bmp","./SMI 20-30/SACHINKUMAR105/5.bmp"],
["SACHINKUMAR113", "CAN_28191599", "./SMI 20-30/SACHINKUMAR113/1.bmp", "./SMI 20-30/SACHINKUMAR113/2.bmp", "./SMI 20-30/SACHINKUMAR113/3.bmp", "./SMI 20-30/SACHINKUMAR113/4.bmp","./SMI 20-30/SACHINKUMAR113/5.bmp"],
["Suraj Saroj", "CAN_8243869", "./SMI 20-30/surajsaroj/1.bmp", "./SMI 20-30/surajsaroj/2.bmp", "./SMI 20-30/surajsaroj/3.bmp", "./SMI 20-30/surajsaroj/4.bmp","./SMI 20-30/surajsaroj/5.bmp"],
["name", "pmkvy", "./SMI 20-30/fname/1.bmp", "./SMI 20-30/fname/2.bmp", "./SMI 20-30/fname/3.bmp", "./SMI 20-30/fname/4.bmp","./SMI 20-30/fname/5.bmp"],
    // 1-30 are done....
// adding more rows..

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
