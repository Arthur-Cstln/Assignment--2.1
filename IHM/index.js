// function showData(RandomNumber){
//     $.ajax({
//         type: "POST",
//         url: "ajax.php",
//         data: {
//             action :"showData",
//             number : RandomNumber
//         },
//         dataType: "djson",
//         success: function (response) {
//             console.log(reponse);
//         }
//     });
// }


// btn.onclick = () => {
//     fetch("https://api.github.com/users/" + champ.value).then(reponse => reponse.json())
//     .then(data => {
//         output.textContent = '$(data.name)';
        
//     })
// }


btn.onclick = () =>{
    fetch("https://api.github.com/users/" + champ.value)
    .then(reponse => reponse.json())
    .then(data => {
        const string = JSON.stringify(data);
        output.textContent = string;
        console.table(string);
    }).catch(error => {
        console.error("Une erreur s'est produite :", error)});
}