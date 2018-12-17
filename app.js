// $('#MyGrid').datagrid({ dataSource: dataSource, stretchHeight: true })


console.log("data----", geoData[0])

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

        //columnsSelected by check box
        var columnsSelected = ['toponymName', 'population', 'fcodeName'];

        //store that all colom in colsToRender
        var colsToRender = [{
            property: 'toponymName',
            label: 'Name',
            sortable: true
        }, {
            property: 'population',
            label: 'population',
            sortable: true
        }
            ,
        {
            property: 'fcodeName',
            label: 'Type',
            sortable: true
        }];

        var $gridInstance = $('#MyGrid').datagrid({
            dataSource: dataSource,
            stretchHeight: false
        });

        window._$gridInstance = $gridInstance;
      //Updatin the Table with selected value from check box
        var UpdateTable = function(){
            var _grid = $('#MyGrid').data('datagrid');
            console.log(colsToRender)
            _grid.columns = _grid.options.dataSource._columns = colsToRender;
            _grid.$colheader.empty();
            _grid.renderColumns();
            _grid.reload()
        }






    //    $('#datagrid-reload').on('click', function () {
           // $('#MyGrid').datagrid('reload');
       // });
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

        });

