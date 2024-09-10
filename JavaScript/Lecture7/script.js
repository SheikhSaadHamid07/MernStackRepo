

function getPercent(){
    let totalMarks = document.getElementById("tm1").value;
    let marksObtained = document.getElementById("mo1").value;
    let result = (marksObtained / totalMarks) * 100;
    document.getElementById("change1").innerHTML=(`You have got ${result}% `);
    console.log(`You have got ${result}%`);
}
