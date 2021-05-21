$(document).ready(function () {
    $.ajax({
      method: "GET",
      // url: "https://randomuser.me/api/",
      // url: "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6",
      url: "./json/course.json",
      dataType: 'json',
      data: '',
      async: true,
      // data: "data",
      // dataType: "dataType",
      // success: function (response) {
      // }
    })
      .done(function (msg) {
        // console.log('全部: ' + msg)
        // console.log(msg)
        // console.log(msg.results[0].email)
        // console.log('信箱: ' + msg.results[0].email)
        // $('.font1x').append(msg.results[i].email);
  
  
  
  
  
        for (let index1 = 0; index1 < msg.length; index1++) {
          // $('.newTbody').append('<tr> <th scope="row">' + (index+4) + '</th><th scope="col">' + msg[index].endDate + '</th> <th scope="col">' + msg[index].sourceWebName + '</th> <th scope="col">' + msg[index].title +'</th></tr>');
          // $('.newTbody').append("<tr><th scope='row' rowspan='4'>" + msg[index].schoolName +"</th><td>"+msg[index].fourGrades[index].grades+"</td><td>"+msg[index].fourGrades[index].courseContent+"</td></tr>");


          $('.newTbody').append("<tr><th scope='row' rowspan='5'>" + msg[index1].schoolName +"</th></tr>")
          for (let index2 = 0; index2 < 4; index2++) {
          $('.newTbody').append("<tr><td>"+msg[index1].fourGrades[index2].grades+"</td><td>"+msg[index1].fourGrades[index2].courseContent+"</td></tr>");
          }

        }
        console.log(msg[0])
  
        // $("#myInput").on("keyup", function() {
        //   var value = $(this).val().toLowerCase();
        //   $("#myTable tr").filter(function() {
        //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        //   });
        // });
  
  
  
  
      })
      // $('#table').bootstrapTable()
  });
  
