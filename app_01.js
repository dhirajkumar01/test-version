// $('#MyGrid').datagrid({ dataSource: dataSource, stretchHeight: true })


        console.log("data----",geoData[0])
        // INITIALIZING THE DATAGRID
        var dataSource = new StaticDataSource({
            columns: [
                {
                    property: 'toponymName',
                    label: 'Name',
                    sortable: true
                },
                {
                    property: 'countrycode',
                    label: 'country',
                    sortable: true
                },
                {
                    property: 'population',
                    label: 'population',
                    sortable: true
                },
                {
                    property: 'fcodeName',
                    label: 'Type',
                    sortable: true
                },
       			{
                    property: 'fcl',
                    label: 'fcl',
                    sortable: true
                },
                {
                    property: 'fclName',
                    label: 'fclName',
                    sortable: true
                },


                {
                    property: 'lng',
                    label: 'lng',
                    sortable: true
                },
                {
                    property: 'fcode',
                    label: 'fcode',
                    sortable: true
                },
                {
                    property: 'geonameId',
                    label: 'geonameId',
                    sortable: true
                },
                {
                    property: 'lat',
                    label: 'lat',
                    sortable: true
                }
            ],
            data: geoData,
            delay: 250
        });

        $('#MyGrid').datagrid({
            dataSource: dataSource,
            stretchHeight: false
        });

        $('#datagrid-reload').on('click', function () {
            $('#MyGrid').datagrid('reload');
        });
 $('.dropdown-toggle').dropdown();

// INITIALIZING CHECKBOX
// $('#myCheckbox').checkbox();

// $('#myCombobox').combobox();

var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        console.log("hello")
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        console.log("hiiii")
        checkboxes.style.display = "none";
        expanded = false;
    }
};
$("input[type='checkbox']").change(function () {
    var val = $(this).val();
    console.log("val----", val)
    // toggling column headers 
    $("#MyGrid thead tr").find("th:eq(" + val + ")").toggle();

    // toggling table columns - tbody
    $("#MyGrid tbody tr").each(function () {
        $(this).find("td:eq(" + val + ")").toggle();
    });
     if ($("#MyGrid thead tr").find("th:visible").length >=0) {
        $("#MyGrid").removeClass("noborder");
     }
     else {
         $("#MyGrid").addClass("noborder");
    }
});
// function hideCol($table, myIndex){
//     $table.find("tr").each(function(){
//         $(this).find("th:eq("+myIndex+"), td:eq("+myIndex+")").not('.footer').hide();
//     });
// }

// function showCol($table, myIndex){
//     $table.find("tr").each(function(){
//         $(this).find("th:eq("+myIndex+"), td:eq("+myIndex+")").not('.footer').show();
//     });
// }

// $(".checkbox").change(function(){
//     var $table = $("#MyGrid"),
//         cols = $(this).val();
//     for (var i = 1; i <= $table.find("th").length; i++){
//         if (cols.indexOf(i+'') === -1) {
//             hideCol($table, i-1);
//         } else {
//             showCol($table, i-1);
//         }
//     }
//     $table.find("tfoot td").attr('colspan', cols.length);
// });


// $("#selector").click(function () {
//     $("#main").toggle();
//     // $("p").toggle();
// });
