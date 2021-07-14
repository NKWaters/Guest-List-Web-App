
var Guestname = document.getElementById("nameinput").value;
function submitnames() {
    document.getElementById("name1").innerHTML=names_of_people.push(GuestName);
}

names_of_people.sort();

function search() {
    var s = document.getElementById("searchinput").value;
    var found = 0;
    var j;
    for (j=0; j<names_of_people.length; j++)
    {
        if (s == names_of_people[j]) {
            found = found+1;
        }
    }
    document.getElementById("name4").innerHTML="Name Found "+found+" Time/s";
    console.log("Found Name "+found+" Time/s");
}