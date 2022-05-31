    function calcSalary() {

      var sallaryTable = document.getElementById("sallaryTable");
      var thTable = sallaryTable.getElementsByTagName("th");
      var year = parseInt(document.getElementById('years').value);

      var worktime1 = parseInt(document.getElementById('days1').value);
      var worktime2 = parseInt(document.getElementById('days2').value);
      var worktime3 = parseInt(document.getElementById('days3').value);
      var worktime4 = parseInt(document.getElementById('days4').value);
      var worktime5 = parseInt(document.getElementById('days5').value);
      var worktime6 = parseInt(document.getElementById('days6').value);
      var worktime7 = parseInt(document.getElementById('days7').value);
      var worktime8 = parseInt(document.getElementById('days8').value);
      var worktime9 = parseInt(document.getElementById('days9').value);
      var worktime10 = parseInt(document.getElementById('days10').value);
      var worktime11 = parseInt(document.getElementById('days11').value);
      var worktime12 = parseInt(document.getElementById('days12').value);      

      var sicktime1 = parseInt(document.getElementById('sickleave1').value);
      var sicktime2 = parseInt(document.getElementById('sickleave2').value);
      var sicktime3 = parseInt(document.getElementById('sickleave3').value);
      var sicktime4 = parseInt(document.getElementById('sickleave4').value);
      var sicktime5 = parseInt(document.getElementById('sickleave5').value);
      var sicktime6 = parseInt(document.getElementById('sickleave6').value);
      var sicktime7 = parseInt(document.getElementById('sickleave7').value);
      var sicktime8 = parseInt(document.getElementById('sickleave8').value);
      var sicktime9 = parseInt(document.getElementById('sickleave9').value);
      var sicktime10 = parseInt(document.getElementById('sickleave10').value);
      var sicktime11 = parseInt(document.getElementById('sickleave11').value);
      var sicktime12 = parseInt(document.getElementById('sickleave12').value);

      var LengthOfService = parseInt(document.getElementById('workyears').value);
      var MaterialHelpMonth = parseInt(document.getElementById('MonthOfMaterialHelp').value);
      var HelpMaterial = parseInt(document.getElementById('MaterialHelp').value);

      var vacations1 = parseInt(document.getElementById('vacation1').value);
      var vacations2 = parseInt(document.getElementById('vacation2').value);
      var vacations3 = parseInt(document.getElementById('vacation3').value);      
      var vacations4 = parseInt(document.getElementById('vacation4').value);
      var vacations5 = parseInt(document.getElementById('vacation5').value);
      var vacations6 = parseInt(document.getElementById('vacation6').value);
      var vacations7 = parseInt(document.getElementById('vacation7').value);
      var vacations8 = parseInt(document.getElementById('vacation8').value);
      var vacations9 = parseInt(document.getElementById('vacation9').value);
      var vacations10 = parseInt(document.getElementById('vacation10').value);
      var vacations11 = parseInt(document.getElementById('vacation11').value);
      var vacations12 = parseInt(document.getElementById('vacation12').value);      

      if (isNaN(year)) year = 0;
      if (year > 1950) { 
        thTable[5].innerHTML = "Січень " + year;
        thTable[10].innerHTML = "Лютий " + year;
        thTable[15].innerHTML = "Березень " + year;
        thTable[20].innerHTML = "Квітень " + year;
        thTable[25].innerHTML = "Травень " + year;
        thTable[30].innerHTML = "Червень " + year;
        thTable[35].innerHTML = "Липень " + year;
        thTable[40].innerHTML = "Серпень " + year;
        thTable[45].innerHTML = "Вересень " + year;
        thTable[50].innerHTML = "Жовтень " + year;
        thTable[55].innerHTML = "Листопад " + year;
        thTable[60].innerHTML = "Грудень " + year;         
    }

      if (isNaN(worktime1)) worktime1 = 0;
      var presalary1 = worktime1 * 600;
      if (isNaN(worktime2)) worktime2 = 0;
      var presalary2 = worktime2 * 600;
      if (isNaN(worktime3)) worktime3 = 0;
      var presalary3 = worktime3 * 600;      
      if (isNaN(worktime4)) worktime4 = 0;
      var presalary4 = worktime4 * 600;
      if (isNaN(worktime5)) worktime5 = 0;
      var presalary5 = worktime5 * 600;
      if (isNaN(worktime6)) worktime6 = 0;
      var presalary6 = worktime6 * 600;
      if (isNaN(worktime7)) worktime7 = 0;
      var presalary7 = worktime7 * 600;
      if (isNaN(worktime8)) worktime8 = 0;
      var presalary8 = worktime8 * 600;
      if (isNaN(worktime9)) worktime9 = 0;
      var presalary9 = worktime9 * 600;
      if (isNaN(worktime10)) worktime10 = 0;
      var presalary10 = worktime10 * 600;
      if (isNaN(worktime11)) worktime11 = 0;
      var presalary11 = worktime11 * 600;
      if (isNaN(worktime12)) worktime12 = 0;
      var presalary12 = worktime12 * 600;      





      if (isNaN(sicktime1)) sicktime1 = 0;
      var sickpay1 = 0, countsickpay1;
        if (sicktime1 > 0 && sicktime1 <= 5) {
            sickpay1 = 600
        countsickpay1 = sickpay1 * sicktime1;
    } else if (sicktime1 >= 6) { 
            countsickpay1 = ((sicktime1 - 5) * 300) + 3000;
        } else {
            countsickpay1 = 0;
        } 

      if (isNaN(sicktime2)) sicktime2 = 0;
      var sickpay2 = 0, countsickpay2;
        if (sicktime2 > 0 && sicktime2 <= 5) {
            sickpay2 = 600
        countsickpay2 = sickpay2 * sicktime2;
    } else if (sicktime2 >= 6) { 
            countsickpay2 = ((sicktime2 - 5) * 300) + 3000;
        } else {
            countsickpay2 = 0;
        } 

      if (isNaN(sicktime3)) sicktime3 = 0;
      var sickpay3 = 0, countsickpay3;
        if (sicktime3 > 0 && sicktime3 <= 5) {
            sickpay3 = 600
        countsickpay3 = sickpay3 * sicktime3;
    } else if (sicktime3 >= 6) { 
            countsickpay3 = ((sicktime3 - 5) * 300) + 3000;
        } else {
            countsickpay3 = 0;
        } 

      if (isNaN(sicktime4)) sicktime4 = 0;
      var sickpay4 = 0, countsickpay4;
        if (sicktime4 > 0 && sicktime4 <= 5) {
            sickpay4 = 600
        countsickpay4 = sickpay4 * sicktime4;
    } else if (sicktime4 >= 6) { 
            countsickpay4 = ((sicktime4 - 5) * 300) + 3000;
        } else {
            countsickpay4 = 0;
        } 

      if (isNaN(sicktime5)) sicktime5 = 0;
      var sickpay5 = 0, countsickpay5;
        if (sicktime5 > 0 && sicktime5 <= 5) {
            sickpay5 = 600
        countsickpay5 = sickpay5 * sicktime5;
    } else if (sicktime5 >= 6) { 
            countsickpay5 = ((sicktime5 - 5) * 300) + 3000;
        } else {
            countsickpay5 = 0;
        } 

      if (isNaN(sicktime6)) sicktime6 = 0;
      var sickpay6 = 0, countsickpay6;
        if (sicktime6 > 0 && sicktime6 <= 5) {
            sickpay6 = 600
        countsickpay6 = sickpay6 * sicktime6;
    } else if (sicktime6 >= 6) { 
            countsickpay6 = ((sicktime6 - 5) * 300) + 3000;
        } else {
            countsickpay6 = 0;
        } 

      if (isNaN(sicktime7)) sicktime7 = 0;
      var sickpay7 = 0, countsickpay7;
        if (sicktime7 > 0 && sicktime7 <= 5) {
            sickpay7 = 600
        countsickpay7 = sickpay7 * sicktime7;
    } else if (sicktime7 >= 6) { 
            countsickpay7 = ((sicktime7 - 5) * 300) + 3000;
        } else {
            countsickpay7 = 0;
        } 

      if (isNaN(sicktime8)) sicktime8 = 0;
      var sickpay8 = 0, countsickpay8;
        if (sicktime8 > 0 && sicktime8 <= 5) {
            sickpay8 = 600
        countsickpay8 = sickpay8 * sicktime8;
    } else if (sicktime8 >= 6) { 
            countsickpay8 = ((sicktime8 - 5) * 300) + 3000;
        } else {
            countsickpay8 = 0;
        } 

      if (isNaN(sicktime9)) sicktime9 = 0;
      var sickpay9 = 0, countsickpay9;
        if (sicktime9 > 0 && sicktime9 <= 5) {
            sickpay9 = 600
        countsickpay9 = sickpay9 * sicktime9;
    } else if (sicktime9 >= 6) { 
            countsickpay9 = ((sicktime9 - 5) * 300) + 3000;
        } else {
            countsickpay9 = 0;
        } 

      if (isNaN(sicktime10)) sicktime10 = 0;
      var sickpay10 = 0, countsickpay10;
        if (sicktime10 > 0 && sicktime10 <= 5) {
            sickpay10 = 600
        countsickpay10 = sickpay10 * sicktime10;
    } else if (sicktime10 >= 6) { 
            countsickpay10 = ((sicktime10 - 5) * 300) + 3000;
        } else {
            countsickpay10 = 0;
        } 

      if (isNaN(sicktime11)) sicktime11 = 0;
      var sickpay11 = 0, countsickpay11;
        if (sicktime11 > 0 && sicktime11 <= 5) {
            sickpay11 = 600
        countsickpay11 = sickpay11 * sicktime11;
    } else if (sicktime11 >= 6) { 
            countsickpay11 = ((sicktime11 - 5) * 300) + 3000;
        } else {
            countsickpay11 = 0;
        } 

      if (isNaN(sicktime12)) sicktime12 = 0;
      var sickpay12 = 0, countsickpay12;
        if (sicktime12 > 0 && sicktime12 <= 5) {
            sickpay12 = 600
        countsickpay12 = sickpay12 * sicktime12;
    } else if (sicktime12 >= 6) { 
            countsickpay12 = ((sicktime12 - 5) * 300) + 3000;
        } else {
            countsickpay12 = 0;
        } 





        var PremiumForWork1;
switch (LengthOfService) {
  case 1:
    PremiumForWork1 = 0;
    break;
  case 2:
    PremiumForWork1 = presalary1 * 0.1;
    break;
  case 3:
    PremiumForWork1 = presalary1 * 0.25;
    break;
  case 4:
    PremiumForWork1 = presalary1 * 0.5;
    break;
  default:
    PremiumForWork1 = 0;
}
if (isNaN(PremiumForWork1)) PremiumForWork1 = 0;

        var PremiumForWork2;
switch (LengthOfService) {
  case 1:
    PremiumForWork2 = 0;
    break;
  case 2:
    PremiumForWork2 = presalary2 * 0.1;
    break;
  case 3:
    PremiumForWork2 = presalary2 * 0.25;
    break;
  case 4:
    PremiumForWork2 = presalary2 * 0.5;
    break;
  default:
    PremiumForWork2 = 0;
}
if (isNaN(PremiumForWork2)) PremiumForWork2 = 0;

        var PremiumForWork3;
switch (LengthOfService) {
  case 1:
    PremiumForWork3 = 0;
    break;
  case 2:
    PremiumForWork3 = presalary3 * 0.1;
    break;
  case 3:
    PremiumForWork3 = presalary3 * 0.25;
    break;
  case 4:
    PremiumForWork3 = presalary3 * 0.5;
    break;
  default:
    PremiumForWork3 = 0;
}
if (isNaN(PremiumForWork3)) PremiumForWork3 = 0;

        var PremiumForWork4;
switch (LengthOfService) {
  case 1:
    PremiumForWork4 = 0;
    break;
  case 2:
    PremiumForWork4 = presalary4 * 0.1;
    break;
  case 3:
    PremiumForWork4 = presalary4 * 0.25;
    break;
  case 4:
    PremiumForWork4 = presalary4 * 0.5;
    break;
  default:
    PremiumForWork4 = 0;
}
if (isNaN(PremiumForWork4)) PremiumForWork4 = 0;

        var PremiumForWork5;
switch (LengthOfService) {
  case 1:
    PremiumForWork5 = 0;
    break;
  case 2:
    PremiumForWork5 = presalary5 * 0.1;
    break;
  case 3:
    PremiumForWork5 = presalary5 * 0.25;
    break;
  case 4:
    PremiumForWork5 = presalary5 * 0.5;
    break;
  default:
    PremiumForWork5 = 0;
}
if (isNaN(PremiumForWork5)) PremiumForWork5 = 0;

        var PremiumForWork6;
switch (LengthOfService) {
  case 1:
    PremiumForWork6 = 0;
    break;
  case 2:
    PremiumForWork6 = presalary6 * 0.1;
    break;
  case 3:
    PremiumForWork6 = presalary6 * 0.25;
    break;
  case 4:
    PremiumForWork6 = presalary6 * 0.5;
    break;
  default:
    PremiumForWork6 = 0;
}
if (isNaN(PremiumForWork6)) PremiumForWork6 = 0;

        var PremiumForWork7;
switch (LengthOfService) {
  case 1:
    PremiumForWork7 = 0;
    break;
  case 2:
    PremiumForWork7 = presalary7 * 0.1;
    break;
  case 3:
    PremiumForWork7 = presalary7 * 0.25;
    break;
  case 4:
    PremiumForWork7 = presalary7 * 0.5;
    break;
  default:
    PremiumForWork7 = 0;
}
if (isNaN(PremiumForWork7)) PremiumForWork7 = 0;

        var PremiumForWork8;
switch (LengthOfService) {
  case 1:
    PremiumForWork8 = 0;
    break;
  case 2:
    PremiumForWork8 = presalary8 * 0.1;
    break;
  case 3:
    PremiumForWork8 = presalary8 * 0.25;
    break;
  case 4:
    PremiumForWork8 = presalary8 * 0.5;
    break;
  default:
    PremiumForWork8 = 0;
}
if (isNaN(PremiumForWork8)) PremiumForWork8 = 0;

        var PremiumForWork9;
switch (LengthOfService) {
  case 1:
    PremiumForWork9 = 0;
    break;
  case 2:
    PremiumForWork9 = presalary9 * 0.1;
    break;
  case 3:
    PremiumForWork9 = presalary9 * 0.25;
    break;
  case 4:
    PremiumForWork9 = presalary9 * 0.5;
    break;
  default:
    PremiumForWork9 = 0;
}
if (isNaN(PremiumForWork9)) PremiumForWork9 = 0;

        var PremiumForWork10;
switch (LengthOfService) {
  case 1:
    PremiumForWork10 = 0;
    break;
  case 2:
    PremiumForWork10 = presalary10 * 0.1;
    break;
  case 3:
    PremiumForWork10 = presalary10 * 0.25;
    break;
  case 4:
    PremiumForWork10 = presalary10 * 0.5;
    break;
  default:
    PremiumForWork10 = 0;
}
if (isNaN(PremiumForWork10)) PremiumForWork10 = 0;

        var PremiumForWork11;
switch (LengthOfService) {
  case 1:
    PremiumForWork11 = 0;
    break;
  case 2:
    PremiumForWork11 = presalary11 * 0.1;
    break;
  case 3:
    PremiumForWork11 = presalary11 * 0.25;
    break;
  case 4:
    PremiumForWork11 = presalary11 * 0.5;
    break;
  default:
    PremiumForWork1 = 0;
}
if (isNaN(PremiumForWork11)) PremiumForWork11 = 0;

        var PremiumForWork12;
switch (LengthOfService) {
  case 1:
    PremiumForWork12 = 0;
    break;
  case 2:
    PremiumForWork12 = presalary12 * 0.1;
    break;
  case 3:
    PremiumForWork12 = presalary12 * 0.25;
    break;
  case 4:
    PremiumForWork12 = presalary12 * 0.5;
    break;
  default:
    PremiumForWork12 = 0;
}
if (isNaN(PremiumForWork12)) PremiumForWork12 = 0;






if (isNaN(vacations1)) vacations1 = 0;
var CountVacation1;
    if (LengthOfService == 4) {
        CountVacation1 = vacations1 * 600;
    } else CountVacation1 = (vacations1 * 600) * 0.8;

if (isNaN(vacations2)) vacations2 = 0;
var CountVacation2;
    if (LengthOfService == 4) {
        CountVacation2 = vacations2 * 600;
    } else CountVacation2 = (vacations2 * 600) * 0.8;

if (isNaN(vacations3)) vacations3 = 0;
var CountVacation3;
    if (LengthOfService == 4) {
        CountVacation3 = vacations3 * 600;
    } else CountVacation3 = (vacations3 * 600) * 0.8; 

if (isNaN(vacations4)) vacations4 = 0;
var CountVacation4;
    if (LengthOfService == 4) {
        CountVacation4 = vacations4 * 600;
    } else CountVacation4 = (vacations4 * 600) * 0.8;

if (isNaN(vacations5)) vacations5 = 0;
var CountVacation5;
    if (LengthOfService == 4) {
        CountVacation5 = vacations5 * 600;
    } else CountVacation5 = (vacations5 * 600) * 0.8;

if (isNaN(vacations6)) vacations6 = 0;
var CountVacation6;
    if (LengthOfService == 4) {
        CountVacation6 = vacations6 * 600;
    } else CountVacation6 = (vacations6 * 600) * 0.8;

if (isNaN(vacations7)) vacations7 = 0;
var CountVacation7;
    if (LengthOfService == 4) {
        CountVacation7 = vacations7 * 600;
    } else CountVacation7 = (vacations7 * 600) * 0.8;

if (isNaN(vacations8)) vacations8 = 0;
var CountVacation8;
    if (LengthOfService == 4) {
        CountVacation8 = vacations8 * 600;
    } else CountVacation8 = (vacations8 * 600) * 0.8;

if (isNaN(vacations9)) vacations9 = 0;
var CountVacation9;
    if (LengthOfService == 4) {
        CountVacation9 = vacations9 * 600;
    } else CountVacation9 = (vacations9 * 600) * 0.8;

if (isNaN(vacations10)) vacations10 = 0;
var CountVacation10;
    if (LengthOfService == 4) {
        CountVacation10 = vacations10 * 600;
    } else CountVacation10 = (vacations10 * 600) * 0.8;

if (isNaN(vacations11)) vacations11 = 0;
var CountVacation11;
    if (LengthOfService == 4) {
        CountVacation11 = vacations11 * 600;
    } else CountVacation11 = (vacations11 * 600) * 0.8;

if (isNaN(vacations12)) vacations12 = 0;
var CountVacation12;
    if (LengthOfService == 4) {
        CountVacation12 = vacations12 * 600;
    } else CountVacation12 = (vacations12 * 600) * 0.8;



        var CountPremium1 = 0 
    if (document.getElementById('premium1').checked) {
            CountPremium1 = presalary1 * 0.2;
        }
        var CountPremium2 = 0 
    if (document.getElementById('premium2').checked) {
            CountPremium2 = presalary2 * 0.2;
        }        
        var CountPremium3 = 0 
    if (document.getElementById('premium3').checked) {
            CountPremium3 = presalary3 * 0.2;
        }
        var CountPremium4 = 0 
    if (document.getElementById('premium4').checked) {
            CountPremium4 = presalary4 * 0.2;
        }
        var CountPremium5 = 0 
    if (document.getElementById('premium5').checked) {
            CountPremium5 = presalary5 * 0.2;
        }
        var CountPremium6 = 0 
    if (document.getElementById('premium6').checked) {
            CountPremium6 = presalary6 * 0.2;
        }
        var CountPremium7 = 0 
    if (document.getElementById('premium7').checked) {
            CountPremium7 = presalary7 * 0.2;
        }
        var CountPremium8 = 0 
    if (document.getElementById('premium8').checked) {
            CountPremium8 = presalary8 * 0.2;
        }
        var CountPremium9 = 0 
    if (document.getElementById('premium9').checked) {
            CountPremium9 = presalary9 * 0.2;
        }
        var CountPremium10 = 0 
    if (document.getElementById('premium10').checked) {
            CountPremium10 = presalary10 * 0.2;
        }
        var CountPremium11 = 0 
    if (document.getElementById('premium11').checked) {
            CountPremium11 = presalary11 * 0.2;
        }
        var CountPremium12 = 0 
    if (document.getElementById('premium12').checked) {
            CountPremium12 = presalary12 * 0.2;
        }


        var FullPay1 = presalary1 + countsickpay1 + PremiumForWork1 + CountVacation1 + CountPremium1;
        var FullPay2 = presalary2 + countsickpay2 + PremiumForWork2 + CountVacation2 + CountPremium2;           
        var FullPay3 = presalary3 + countsickpay3 + PremiumForWork3 + CountVacation3 + CountPremium3;
        var FullPay4 = presalary4 + countsickpay4 + PremiumForWork4 + CountVacation4 + CountPremium4;
        var FullPay5 = presalary5 + countsickpay5 + PremiumForWork5 + CountVacation5 + CountPremium5;
        var FullPay6 = presalary6 + countsickpay6 + PremiumForWork6 + CountVacation6 + CountPremium6;
        var FullPay7 = presalary7 + countsickpay7 + PremiumForWork7 + CountVacation7 + CountPremium7;
        var FullPay8 = presalary8 + countsickpay8 + PremiumForWork8 + CountVacation8 + CountPremium8;
        var FullPay9 = presalary9 + countsickpay9 + PremiumForWork9 + CountVacation9 + CountPremium9;
        var FullPay10 = presalary10 + countsickpay10 + PremiumForWork10 + CountVacation10 + CountPremium10;
        var FullPay11 = presalary11 + countsickpay11 + PremiumForWork11 + CountVacation11 + CountPremium11;
        var FullPay12 = presalary12 + countsickpay12 + PremiumForWork12 + CountVacation12 + CountPremium12;


    var MilitaryTax1 = FullPay1 * 0.015;
    if (isNaN(MilitaryTax1)) MilitaryTax1 = 0;
    thTable[9].innerHTML = MilitaryTax1.toFixed(2) + " ₴";
        var MilitaryTax2 = FullPay2 * 0.015;
    if (isNaN(MilitaryTax2)) MilitaryTax2 = 0;
    thTable[14].innerHTML = MilitaryTax2.toFixed(2) + " ₴";
        var MilitaryTax3 = FullPay3 * 0.015;
    if (isNaN(MilitaryTax3)) MilitaryTax3 = 0;
    thTable[19].innerHTML = MilitaryTax3.toFixed(2) + " ₴";
        var MilitaryTax4 = FullPay4 * 0.015;
    if (isNaN(MilitaryTax4)) MilitaryTax4 = 0;
    thTable[24].innerHTML = MilitaryTax4.toFixed(2) + " ₴";
        var MilitaryTax5 = FullPay5 * 0.015;
    if (isNaN(MilitaryTax5)) MilitaryTax5 = 0;
    thTable[29].innerHTML = MilitaryTax5.toFixed(2) + " ₴";
        var MilitaryTax6 = FullPay6 * 0.015;
    if (isNaN(MilitaryTax6)) MilitaryTax6 = 0;
    thTable[34].innerHTML = MilitaryTax6.toFixed(2) + " ₴";
        var MilitaryTax7 = FullPay7 * 0.015;
    if (isNaN(MilitaryTax7)) MilitaryTax7 = 0;
    thTable[39].innerHTML = MilitaryTax7.toFixed(2) + " ₴";
        var MilitaryTax8 = FullPay8 * 0.015;
    if (isNaN(MilitaryTax8)) MilitaryTax8 = 0;
    thTable[44].innerHTML = MilitaryTax8.toFixed(2) + " ₴";
        var MilitaryTax9 = FullPay9 * 0.015;
    if (isNaN(MilitaryTax9)) MilitaryTax9 = 0;
    thTable[49].innerHTML = MilitaryTax9.toFixed(2) + " ₴";
        var MilitaryTax10 = FullPay10 * 0.015;
    if (isNaN(MilitaryTax10)) MilitaryTax10 = 0;
    thTable[54].innerHTML = MilitaryTax10.toFixed(2) + " ₴";
        var MilitaryTax11 = FullPay11 * 0.015;
    if (isNaN(MilitaryTax11)) MilitaryTax11 = 0;
    thTable[59].innerHTML = MilitaryTax11.toFixed(2) + " ₴";
        var MilitaryTax12 = FullPay12 * 0.015;
    if (isNaN(MilitaryTax12)) MilitaryTax12 = 0;
    thTable[64].innerHTML = MilitaryTax12.toFixed(2) + " ₴";
    var SumOfMilitaryTax = MilitaryTax1 + MilitaryTax2 + MilitaryTax3 + MilitaryTax4 + MilitaryTax5 + MilitaryTax6 + MilitaryTax7 + MilitaryTax8 + MilitaryTax9 + MilitaryTax10 + MilitaryTax11 + MilitaryTax12;
    thTable[69].innerHTML = SumOfMilitaryTax.toFixed(2) + " ₴";

    var Taxes1 = FullPay1 * 0.2;
    if (isNaN(Taxes1)) Taxes1 = 0;
    thTable[8].innerHTML = Taxes1.toFixed(2) + " ₴";
    var Taxes2 = FullPay2 * 0.2;
    if (isNaN(Taxes2)) Taxes2 = 0;
    thTable[13].innerHTML = Taxes2.toFixed(2) + " ₴";
    var Taxes3 = FullPay3 * 0.2;
    if (isNaN(Taxes3)) Taxes3 = 0;
    thTable[18].innerHTML = Taxes3.toFixed(2) + " ₴";
    var Taxes4 = FullPay4 * 0.2;
    if (isNaN(Taxes4)) Taxes4 = 0;
    thTable[23].innerHTML = Taxes4.toFixed(2) + " ₴";
    var Taxes5 = FullPay5 * 0.2;
    if (isNaN(Taxes5)) Taxes5 = 0;
    thTable[28].innerHTML = Taxes5.toFixed(2) + " ₴";
    var Taxes6 = FullPay6 * 0.2;
    if (isNaN(Taxes6)) Taxes6 = 0;
    thTable[33].innerHTML = Taxes6.toFixed(2) + " ₴";
    var Taxes7 = FullPay7 * 0.2;
    if (isNaN(Taxes7)) Taxes7 = 0;
    thTable[38].innerHTML = Taxes7.toFixed(2) + " ₴";
    var Taxes8 = FullPay8 * 0.2;
    if (isNaN(Taxes8)) Taxes8 = 0;
    thTable[43].innerHTML = Taxes8.toFixed(2) + " ₴";
    var Taxes9 = FullPay9 * 0.2;
    if (isNaN(Taxes9)) Taxes9 = 0;
    thTable[48].innerHTML = Taxes9.toFixed(2) + " ₴";
    var Taxes10 = FullPay10 * 0.2;
    if (isNaN(Taxes10)) Taxes10 = 0;
    thTable[53].innerHTML = Taxes10.toFixed(2) + " ₴";
    var Taxes11 = FullPay11 * 0.2;
    if (isNaN(Taxes11)) Taxes11 = 0;
    thTable[58].innerHTML = Taxes11.toFixed(2) + " ₴";
    var Taxes12 = FullPay12 * 0.2;
    if (isNaN(Taxes12)) Taxes12 = 0;
    thTable[63].innerHTML = Taxes12.toFixed(2) + " ₴";               
    var SumOfTaxes = Taxes1 + Taxes2 + Taxes3 + Taxes4 +  Taxes5 +  Taxes6 +  Taxes7 +  Taxes8 +  Taxes9 +  Taxes10 +  Taxes11 +  Taxes12;
    thTable[68].innerHTML = SumOfTaxes.toFixed(2) + " ₴";

    var SumOfTax1 = MilitaryTax1 + Taxes1;
    if (isNaN(SumOfTax1)) SumOfTax1 = 0;
    var SumOfTax2 = MilitaryTax2 + Taxes2;
    if (isNaN(SumOfTax2)) SumOfTax2 = 0;
    var SumOfTax3 = MilitaryTax3 + Taxes3;
    if (isNaN(SumOfTax3)) SumOfTax3 = 0;
    var SumOfTax4 = MilitaryTax4 + Taxes4;
    if (isNaN(SumOfTax4)) SumOfTax4 = 0;
    var SumOfTax5 = MilitaryTax5 + Taxes5;
    if (isNaN(SumOfTax5)) SumOfTax5 = 0;
    var SumOfTax6 = MilitaryTax6 + Taxes6;
    if (isNaN(SumOfTax6)) SumOfTax6 = 0;
    var SumOfTax7 = MilitaryTax7 + Taxes7;
    if (isNaN(SumOfTax7)) SumOfTax7 = 0;
    var SumOfTax8 = MilitaryTax8 + Taxes8;
    if (isNaN(SumOfTax8)) SumOfTax8 = 0;
    var SumOfTax9 = MilitaryTax9 + Taxes9;
    if (isNaN(SumOfTax9)) SumOfTax9 = 0;
    var SumOfTax10 = MilitaryTax10 + Taxes10;
    if (isNaN(SumOfTax10)) SumOfTax10 = 0;
    var SumOfTax11 = MilitaryTax11 + Taxes11;
    if (isNaN(SumOfTax11)) SumOfTax11 = 0;
    var SumOfTax12 = MilitaryTax12 + Taxes12;
    if (isNaN(SumOfTax12)) SumOfTax12 = 0;

    var payment1 = FullPay1 - SumOfTax1;
    if (isNaN(payment1)) payment1 = 0;
    thTable[6].innerHTML = payment1.toFixed(2) + " ₴";
    var payment2 = FullPay2 - SumOfTax2;
    if (isNaN(payment2)) payment2 = 0;
    thTable[11].innerHTML = payment2.toFixed(2) + " ₴";
    var payment3 = FullPay3 - SumOfTax3;
    if (isNaN(payment3)) payment3 = 0;
    thTable[16].innerHTML = payment3.toFixed(2) + " ₴";
    var payment4 = FullPay4 - SumOfTax4;
    if (isNaN(payment4)) payment4 = 0;
    thTable[21].innerHTML = payment4.toFixed(2) + " ₴";
    var payment5 = FullPay5 - SumOfTax5;
    if (isNaN(payment5)) payment5 = 0;
    thTable[26].innerHTML = payment5.toFixed(2) + " ₴";
    var payment6 = FullPay6 - SumOfTax6;
    if (isNaN(payment6)) payment6 = 0;
    thTable[31].innerHTML = payment6.toFixed(2) + " ₴";
    var payment7 = FullPay7 - SumOfTax7;
    if (isNaN(payment7)) payment7 = 0;
    thTable[36].innerHTML = payment7.toFixed(2) + " ₴";
    var payment8 = FullPay8 - SumOfTax8;
    if (isNaN(payment8)) payment8 = 0;
    thTable[41].innerHTML = payment8.toFixed(2) + " ₴";
    var payment9 = FullPay9 - SumOfTax9;
    if (isNaN(payment9)) payment9 = 0;
    thTable[46].innerHTML = payment9.toFixed(2) + " ₴";
    var payment10 = FullPay10 - SumOfTax10;
    if (isNaN(payment10)) payment10 = 0;
    thTable[51].innerHTML = payment10.toFixed(2) + " ₴";
    var payment11 = FullPay11 - SumOfTax11;
    if (isNaN(payment11)) payment11 = 0;
    thTable[56].innerHTML = payment11.toFixed(2) + " ₴";
    var payment12 = FullPay12 - SumOfTax12;
    if (isNaN(payment12)) payment12 = 0;
    thTable[61].innerHTML = payment12.toFixed(2) + " ₴";
    var SumOfPayment = payment1 +  payment2 +  payment3 +  payment4 +  payment5 +  payment6 +  payment7 +  payment8 +  payment9 +  payment10 +  payment11 +  payment12;
    thTable[66].innerHTML = SumOfPayment.toFixed(2) + " ₴";

switch (MaterialHelpMonth) {
  case 1:
    thTable[7].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    thTable[67].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    break;
  case 2:
    thTable[12].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    thTable[67].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    break;
  case 3:
    thTable[17].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    thTable[67].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    break;
  case 4:
    thTable[22].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    thTable[67].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    break;
  case 5:
    thTable[27].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    thTable[67].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    break;
  case 6:
    thTable[32].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    thTable[67].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    break;
  case 7:
    thTable[37].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    thTable[67].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    break;
  case 8:
    thTable[42].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    thTable[67].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    break;
  case 9:
    thTable[47].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    thTable[67].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    break;
  case 10:
    thTable[52].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    thTable[67].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    break;               
  case 11:
    thTable[57].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    thTable[67].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    break;
  case 12:
    thTable[62].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    thTable[67].innerHTML = HelpMaterial.toFixed(0) + " ₴";
    break;             
  default:
    thTable[67].innerHTML = 0 + " ₴";
}

}


function navitomonth() {
  window.location = "https://alexeyhutsalo.github.io/month-calculate/"
}

function navitoyear() {
  window.location = "https://alexeyhutsalo.github.io/year-calculate/"
}