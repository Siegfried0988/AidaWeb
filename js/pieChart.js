




function use(url, getId) {
    $(document).ready(function () {
        /*
                -> #47A508 = green (wins)
                -> #ff6a00 = orange (losses)
                -> #ffd800 = yellow (draws)
           */
        var DataArray = [];
        var ctx = document.getElementById(getId);

        $.ajax({
            url: url,
            dataType: 'json',
            type: 'GET',
        }).done(function (result) {
            //    $.each(result.standing, function () {
            //        var name ="Manchester United FC";
            //        if (this.teamName == name) {
            //            DataArray.push([this.department, this.id, this.name]);
            //        }
            //    });
            for (var i = 0; i < result.length; i++) {

                //    console.log(result[i].department)
                // DataArray.push(result[i].department, result[i].id, result[i].name);
                DataArray.push(result[i].department);
                //    console.log(DataArray)
                // console.log(DataArray)


            }
            console.log(DataArray);
            console.log(DataArray.length);

            //  var arr1= [12, 5, 8, 130, 44,5,51,5];
            function count(arr, num) {
                var i = 0;
                arr.find(function (ele) {
                    ele === num ? i++ : '';
                })
                // console.log(i)
                return i
            }

            //   count(DataArray,"資訊工程學系")
            data = [count(DataArray, "資訊工程學系"), count(DataArray, "資訊管理學系"), count(DataArray, "電機工程學系"), count(DataArray, "工業工程與管理學系"), count(DataArray, "機械工程學系"), count(DataArray, "藝術與設計學系"), count(DataArray, "財務金融學系"), count(DataArray, "管院英專")]
            console.log(data)

            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    label: 'Manchester United Current Form',
                    labels: ["資訊工程學系", "資訊管理學系", "電機工程學系", "工業工程與管理學系", "機械工程學系", "藝術與設計學系", "財務金融學系", "管院英專"],
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
                                "#bc9200",
                                "#ffff00",

                                "#cadff1",
                                "#6da6d7",
                                "#2176c0"
                            ],
                            hoverBackgroundColor: [

                                "#000000",
                                //   "#FF6384",
                                //   "#36A2EB",
                                //   "#FFCE56",
                                //   "#47A508",
                                //   "#ff6a00",
                                //   "#ffd800",
                                //   "#47A508",
                                //   "#ff6a00",
                                //   "#ffd800",
                            ]
                        }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,


                    plugins: {

                        //圖例設定
                        legend: {
                            display: true,
                            position: "right",
                        }
                    },

                    //加上比例尺的線
                    // scales: {

                    //     yAxes: [{
                    //         ticks: {
                    //             min: 0,
                    //             //max: 100,
                    //             callback: function(value) {
                    //                 return value + "%"
                    //             }
                    //         },
                    //         scaleLabel: {
                    //             display: true
                    //             //labelString: "Percentage"
                    //         }
                    //     }]
                    // }

                },

            });
        });
    })


}



// road="./json/110MembersList.json"
use("./json/110MembersList.json", "myChart1");

use("./json/allMembersList.json", "myChart2");
    // use("./json/110MembersList.json");