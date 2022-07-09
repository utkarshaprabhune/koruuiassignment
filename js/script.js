var data= [
    {"id": 1,"name": "Andrews Phillip","description": "Contrary to popular belief, Lorem","webReference": "Sam X Williams"},
    {"id": 2,"name": "Dillard Mauleen","description": "Contrary to popular belief, Lorem","webReference": "Andy Anthony"},
    {"id": 3,"name": "Miller Jessica","description": "Contrary to popular belief, Lorem","webReference": "Mark Twian"},
    {"id": 4,"name": "Marcus Brownless","description": "Contrary to popular belief, Lorem","webReference": "Phillip Melo"},
    {"id": 5,"name": "Jake Peralta","description": "Contrary to popular belief, Lorem","webReference": "Andy Anthony"},
    {"id": 6,"name": "Adam Lewy","description": "Contrary to popular belief, Lorem","webReference": "Andy Anthony"},
    {"id": 7,"name": "Anthony Hopkins","description": "Contrary to popular belief, Lorem","webReference": "Terry Christie"},
    {"id": 8,"name": "Sebastian Vettel","description": "Contrary to popular belief, Lorem","webReference": "George Lecrec"},
    {"id": 9,"name": "John Ralfion","description": "Contrary to popular belief, Lorem","webReference": "Andy Anthony"},
    {"id": 10,"name": "Leslie Knope","description": "Contrary to popular belief, Lorem","webReference": "April Ludgate"},
    {"id": 11,"name": "Rom Swanson","description": "Contrary to popular belief, Lorem","webReference": "Andrew Bernard"},
    {"id": 12,"name": "Jimothy Halpert","description": "Contrary to popular belief, Lorem","webReference": "Jack Ryan"},
    {"id": 13,"name": "Michael Scott","description": "Contrary to popular belief, Lorem","webReference": "Prison Mike"},
    {"id": 14,"name": "Walter White","description": "Contrary to popular belief, Lorem","webReference": "Albert S Crews"},
    {"id": 15,"name": "Sheldon Cooper","description": "Contrary to popular belief, Lorem","webReference": "Craig McMullam"}
]

    function loadData(){
        for(var i=0;i<data.length;i++)
        {
            var newRow=document.getElementById('tbodydata').insertRow();
            newRow.innerHTML="<td><input type='checkbox' name='im_alert' class='im_alert' value='"+data[i]['id']+"'/></td> <td>"+data[i]['name']+"</td> <td>"+data[i]['description']+"</td> <td>"+data[i]['webReference']+"</td>"
        }
        totalRecordsCount()
    }
    loadData()

    // sorting of the data
    function sortTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("table-list");
        switching = true;
        dir = "asc"; 
        while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch= true;
                break;
            }
            } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;      
        } else {
            if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
            }
        }
        }
    }

    // delete the selected row
    function deleteSelectedRecords() {
        var result = confirm("Are you sure to delete?");
        if(result){

            var table = document.getElementById("table-list");
            var row = table.rows.length;
            var counter = 0;
            if (table.rows.length > 1) {
                for (var i = 0; i < table.rows.length; i++) {
                    var chk = table.rows[i].cells[0].childNodes[0];
                    if (chk.checked) {
                        table.deleteRow(i);
                        row--;
                        i--;
                        counter = counter + 1;
                    }
                }
                if (counter == 0) {
                    alert("Please select the row that you want to delete.");
                }
            } else {
                alert("There are no rows being added");
            }
            totalRecordsCount()
        }
    }

    // selecting all the rows
    checked=false;
    function selectAll(){
        var ele=document.getElementsByName('im_alert');
        if(checked==false){
            checked=true;
        }
        else{
            checked=false
        }
    
        for(var i=0;i<ele.length;i++){
            ele[i].checked=checked;   
        }
    }

    // adding the new data
    function addTableRow(event) {
        var addResult = confirm("Added Successfully!")
        if (addResult){
        var table = document.getElementById('table-list');
        var row_count = document.getElementById('tbodydata').childElementCount;
        var newRow = table.insertRow();
        var new_row_count = row_count+1;
        newRow.innerHTML="<td><input type='checkbox' name='im_alert' class='im_alert' value='"+new_row_count+"'/></td> <td>"+event.target.name.value+"</td> <td>"+event.target.description.value+"</td> <td>"+event.target.webReference.value+"</td>"
        document.getElementById("form-id").reset(); 
        }
        totalRecordsCount();
    }

    // total no of count
    function totalRecordsCount(){
        var totalRowCount= document.getElementById("tbodydata").childElementCount;
        //var totalRowCount = totalRowCount.rows.length-1;
        document.getElementById("total-results").innerHTML = totalRowCount;
         
    }

    // search
    function doSearch() {
        const searchBox = document.getElementById('search-input');
        const table = document.getElementById("table-list");
        const tableRowSearch = table.tBodies[0].getElementsByTagName("tr");
        var filter = searchBox.value.toUpperCase();
        for (var rowI = 0; rowI < tableRowSearch.length; rowI++) { 
          var tds = tableRowSearch[rowI].getElementsByTagName("td");
          tableRowSearch[rowI].style.display = "none";
          for (var cellI = 0; cellI < tds.length; cellI++) {
            if (tds[cellI].innerHTML.toUpperCase().indexOf(filter) > -1) {
              tableRowSearch[rowI].style.display = "";  
              continue;
            }
          }
        }
      }






