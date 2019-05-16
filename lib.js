function openPages(selectedYearFrom, selectedYearTo, selectedCar) {

 function createParamAvitoUrlF(selectedYearFrom, selectedYearTo)
  {
       var f='';
       var t='';

  switch (selectedYearFrom) {
     case '2005':
     f='898';
     break;
     case '2006':
     f='899';
     break;
     case '2007':
     f='900';
     break;
     case '2007':
     f='901';
     break;
     case '2009':
     f='902';
     break;
     case '2010':
     f='2844';
     break;
     case '2011':
     f='2845';
     break;
     case '2012':
     f='6045';
     break;
     case '2013':
     f='8581';
     break;
     case '2014':
     f='11017';
     break;
     case '2015':
     f='13978';
     break;
     case '2016':
     f='16381';
     break;
     case '2017':
     f='19775';
     break;
     case '2018':
     f='20303';
     break;
   default:
     f='0';
}

  switch (selectedYearTo) {
     case '2005':
     t='898';
     break;
     case '2006':
     t='899';
     break;
     case '2007':
     t='900';
     break;
     case '2007':
     t='901';
     break;
     case '2009':
     t='902';
     break;
     case '2010':
     t='2844';
     break;
     case '2011':
     t='2845';
     break;
     case '2012':
     t='6045';
     break;
     case '2013':
     t='8581';
     break;
     case '2014':
     t='11017';
     break;
     case '2015':
     t='13978';
     break;
     case '2016':
     t='16381';
     break;
     case '2017':
     t='19775';
     break;
     case '2018':
     t='20303';
     break;
   default:
     t='0';
}


       return "188_"+f+"b"+t;
  }

    var addInfoAvito = "";
    var addInfoDrom = "";
    var addInfoAuto = "";

    switch (selectedCar) {
        case 'mazda':
            addInfoAvito = selectedCar + "/3";
            addInfoDrom = selectedCar + "/mazda3";
            addInfoAuto = selectedCar + "/3/all";
            break;
        case 'opel':
            addInfoAvito = selectedCar + "/mokka";
            addInfoDrom = selectedCar + "/mokka";
            addInfoAuto = selectedCar + "/mokka/all";
            break;
        case 'ford':
            addInfoAvito = selectedCar + "/ecosport";
            addInfoDrom = selectedCar + "/ecosport";
            addInfoAuto = selectedCar + "/ecosport/all";
            break;
        case 'mitsubishi':
            addInfoAvito = selectedCar + "/asx";
            addInfoDrom = selectedCar + "/asx";
            addInfoAuto = selectedCar + "/asx/all";
            break;
        default:
            alert('Непонятное значение');
}   
    var fParam=createParamAvitoUrlF(selectedYearFrom, selectedYearTo);
    var urlAvito = "https://www.avito.ru/kazan/avtomobili/" + addInfoAvito + "?radius=0&s_trg=7&f="+fParam;
    var urlDrom = "https://kazan.drom.ru/" + addInfoDrom + "?minyear=" + selectedYearFrom + "&maxyear=" + selectedYearTo+"&go_search=2";
    var urlAuto = "https://auto.ru/kazan/cars/" + addInfoAuto + "?year_from=" + selectedYearFrom + "&year_to=" + selectedYearTo+"&sort=cr_date-desc";
    var avito = window.open(urlAvito,'_blank');
    var drom = window.open(urlDrom,'_blank');
    var auto = window.open(urlAuto,'_blank');

}

