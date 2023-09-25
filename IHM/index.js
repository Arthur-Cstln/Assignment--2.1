function showData(RandomNumber){
    $.ajax({
        type: "POST",
        url: "ajax.php",
        data: {
            action :"showData",
            number : RandomNumber
        },
        dataType: "djson",
        success: function (response) {
            console.log(reponse);
        }
    });
}