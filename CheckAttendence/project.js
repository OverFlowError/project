function checkAttendance(){

    let name = document.getElementById("name").value;

    let total = Number(document.getElementById("total").value);

    let attended = Number(document.getElementById("attended").value);

    let percentage = (attended / total) * 100;

    let status = "";

    if(percentage >= 75){
        status = "✅ Eligible";
    }
    else{
        status = "❌ Short Attendance";
    }

    document.getElementById("result").innerHTML =
    `
    Student: ${name}<br>
    Attendance: ${percentage.toFixed(2)}%<br>
    Status: ${status}
    `;
}