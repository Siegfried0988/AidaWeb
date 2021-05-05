





    $(document).ready(function () {
        /*
                -> #47A508 = green (wins)
                -> #ff6a00 = orange (losses)
                -> #ffd800 = yellow (draws)
           */
           var DataArray = [];
           var ctx = document.getElementById("myChart");
       
           $.ajax({
               url: "./json/membersList.json",
               dataType: 'json',
               type: 'GET',
           }).done(function (result) {
            //    $.each(result.standing, function () {
            //        var name ="Manchester United FC";
            //        if (this.teamName == name) {
            //            DataArray.push([this.department, this.id, this.name]);
            //        }
            //    });
            for(var i = 0; i < 36; i++){
                
                    //    console.log(result[i].department)
                    // DataArray.push(result[i].department, result[i].id, result[i].name);
                    DataArray.push(result[i].department);
                    //    console.log(DataArray)
                    // console.log(DataArray)
                    
                    
             }
             console.log(DataArray);
             console.log(DataArray.length);

            //  var arr1= [12, 5, 8, 130, 44,5,51,5];
             function count(arr,num){
                var i = 0;
                arr.find(function(ele){
                  ele === num ? i++ : ''; 
                })
                // console.log(i)
                return i
              }

            //   count(DataArray,"資訊工程學系")
                data= [count(DataArray,"資訊工程學系"), count(DataArray,"資訊管理學系"), count(DataArray,"電機工程學系(甲組)"), count(DataArray,"電機工程學系(乙組)"), count(DataArray,"工業工程與管理學系"), count(DataArray,"機械工程學系"), count(DataArray,"藝術與設計學系"), count(DataArray,"財務金融學系"), count(DataArray,"管院英專") ]
                console.log(data)

               var myChart = new Chart(ctx, {
                   type: 'pie',
                   data: {
                       label: 'Manchester United Current Form',
                       labels: ["資訊工程學系", "資訊管理學系", "電機工程學系(甲組)", "電機工程學系(乙組)", "工業工程與管理學系", "機械工程學系", "藝術與設計學系", "財務金融學系", "管院英專"],
                       datasets: [
                           {
                            // data: [12, 19, 3, 5, 2, 3],
                               data: data,
                             
                            //    data: DataArray,
                               backgroundColor: [
                                  "#fed22b",
                                  "#feba29",
                                  "#e56e06",
                                  "#cc4e01",
                                  "#ffc801",
                                  "#ffff00",

                                  "#cadff1",
                                  "#6da6d7",
                                  "#2176c0"
                               ],
                               hoverBackgroundColor: [
                                  "#FF6384",
                                  "#36A2EB",
                                  "#FFCE56",
                                  "#47A508",
                                  "#ff6a00",
                                  "#ffd800",
                                  "#47A508",
                                  "#ff6a00",
                                  "#ffd800",
                               ]
                           }]
                   },
                   options: { responsive: true }
               });
           });
        })



