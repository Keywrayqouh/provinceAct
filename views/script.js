$('button').click(function(){
    var rate = $(this).attr('btn1');
    var province = $('');
    $.ajax({
        url:"/rate",
        data: JSON.stringify({
            rate:rate,
            province:province
        });
        success: function(average){
            $('average').text(avearage)

            
        }
    })
})