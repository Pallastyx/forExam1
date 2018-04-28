//შლის სურათებს მათზე დაკლიკებისას
const imgs = document.getElementById("imgDelete");
function cleanS(event){
  var x = event.target.nodeName;
  if(x == "IMG")
  {
  event.target.remove(); 
  }
  //როცა სურათების რაოდენობა = 0 გამოაქვს დამალული დივი
  if(imgs.children.length == 0 || null){
        document.getElementById("vualla").style.display= "inline";
    } 
}

//გვერდის ჩატვირთვისას გამოაქვს ალერტი
function fivepoint(){
alert('ალერტი ალერტისთვის +5 ქულა (⌐■_■) ♋');
}
// სტრიქონის დამატების ფუნქცია
function addRow()
{ 
  var score =+ document.getElementById('score').value;
  var credit =+ document.getElementById('credit').value;
  var table = document.getElementsByTagName('table')[0];
  //ამოწმებს შეყვანილი მონაცემის სიწორეს
  if(score<=100 && credit <=5 ){
        var newRow = table.insertRow(1);
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        cel1.innerHTML = score;
        cel2.innerHTML = credit;
        cel3.innerHTML = calc();
          var sumVal =0;
          var credSum = 0;
          var scoreSum = 0;
            for(var i = 1; i < table.rows.length; i++)
              {
              scoreSum = scoreSum + parseInt(table.rows[i].cells[2].innerHTML);
              credSum = credSum + parseInt(table.rows[i].cells[1].innerHTML);
              if (i>=2 && credSum >0) 
                {   
                  sumVal = scoreSum/credSum;
                }
                else if (i==1 && credSum >0) 
                {
                  sumVal =+ parseInt(table.rows[i].cells[0].innerHTML)
                }
              }
      }
      else{ sumVal =0;
        alert("არასწორი მონაცემი! ცადეთ თავიდან");
      }
//ამრავლებს სტრიქონში პირველ 2 სვეტს
function calc() {
               var score = document.getElementById('score').value;
               var credit = document.getElementById('credit').value;
               return score*credit;  
             }
             //გამოაქვს საბოლოო შედეგი
             document.getElementById("val").innerHTML = "დათვლის შედეგი: " + sumVal + " ქულა";
}
//სტრიქონის წაშლის ფუნქცია
function deleteRow() {
    var allrows = document.getElementById("table").getElementsByTagName("tr").length;
                if(allrows > 1){
                        document.getElementById("table").deleteRow(1);
                }
           }