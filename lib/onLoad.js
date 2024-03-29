$(document).ready(function(){
  employeeInformation=[];
  if($.totalStorage.getItem("emp")){
    employeeInformation=$.totalStorage.getItem("emp");
  }else{
    employeeInformation.push([0,0,0,0,0,0,0]);
    $.totalStorage("emp",employeeInformation);
  }
  investorInformation=[];
  if($.totalStorage.getItem("inv")){
    investorInformation=$.totalStorage.getItem("inv");
  }else{
    investorInformation.push([0,0,0,0,0,0]);
    $.totalStorage("inv",investorInformation);
  }
  if(!$.totalStorage.getItem("stat_product"))
    $.totalStorage.setItem("stat_product", 0);
  statusbarProduct=$.totalStorage.getItem("stat_product");
  if(!$.totalStorage.getItem("stat_talent"))
    $.totalStorage.setItem("stat_talent", 0);
  statusbarTalent=$.totalStorage.getItem("stat_talent");
  if(!$.totalStorage.getItem("stat_equity"))
    $.totalStorage.setItem("stat_equity", 100);
  statusbarEquity=$.totalStorage.getItem("stat_equity");
  if(!$.totalStorage.getItem("stat_sat"))
    $.totalStorage.setItem("stat_sat", 0);
  statusbarSatisfaction=$.totalStorage.getItem("stat_sat");
  if(!$.totalStorage.getItem("stat_invint"))
    $.totalStorage.setItem("stat_invint", 0);
  statusbarInvInt=$.totalStorage.getItem("stat_invint");
  if(!$.totalStorage.getItem("stat_old_budget"))
    $.totalStorage.setItem("stat_old_budget", 0);
  if(!$.totalStorage.getItem("stat_budget"))
    $.totalStorage.setItem("stat_budget", 10000);
  statusbarBudget=$.totalStorage.getItem("stat_budget");
  if(!$.totalStorage.getItem("fixedCost"))
    $.totalStorage.setItem("fixedCost",0);
  if(!$.totalStorage.getItem("counter"))
    $.totalStorage.setItem("counter",0);

  paintEmpField();
  paintInvField();
  game();

  function getAllEmp(){
    return $.totalStorage.getAllEmp();
  }
  function trace(m){
    try {
      console.log(m);
    } catch(e){

    }
  }
  var nameArray=["Homer", "Bart", "Montgomery", "Peter", "Philip J.", "John", "Hermes", "Cleveland", "Glenn", "Joe", "Bender", "Sheldon","Zapp",];       
  var surnameArray=["Simpson", "Griffin", "Burns", "Zoidberg", "Conrad", "Doe", "Derp", "Dawg", "Cooper", "Rodriguez", "Quagmire", "Fry", "Brannigan"];

  $('.employee_hire_pic1').click(function(e){
      e.preventDefault();       
      var tmpPicId=$("#newEmpPicId1").val();
      var tmpName=nameArray[Math.floor(Math.random()*nameArray.length)]+" "+surnameArray[Math.floor(Math.random()*surnameArray.length)];
      var tmpSkill=$("#newEmpSkill1").val();
      var tmpSalary=$("#newEmpSalary1").val();
      investorDeny(1,tmpPicId,tmpName,tmpSkill,tmpSalary);//1 equals deny hire
      //hireEmployee(tmpPicId,tmpName,tmpSkill,tmpSalary);
    });
  $('.employee_hire_pic2').click(function(e){
    e.preventDefault();
    var tmpPicId=$("#newEmpPicId2").val();
    var tmpName=nameArray[Math.floor(Math.random()*nameArray.length)]+" "+surnameArray[Math.floor(Math.random()*surnameArray.length)];
    var tmpSkill=$("#newEmpSkill2").val();
    var tmpSalary=$("#newEmpSalary2").val();
    investorDeny(1,tmpPicId,tmpName,tmpSkill,tmpSalary);
    //hireEmployee(tmpPicId,tmpName,tmpSkill,tmpSalary);
  });
  $('.employee_hire_pic3').click(function(e){
    e.preventDefault();
    var tmpPicId=$("#newEmpPicId3").val();
    var tmpName=nameArray[Math.floor(Math.random()*nameArray.length)]+" "+surnameArray[Math.floor(Math.random()*surnameArray.length)];
    var tmpSkill=$("#newEmpSkill3").val();
    var tmpSalary=$("#newEmpSalary3").val();
    investorDeny(1,tmpPicId,tmpName,tmpSkill,tmpSalary);
    //hireEmployee(tmpPicId,tmpName,tmpSkill,tmpSalary);
  });
  $('.employee_hire_pic4').click(function(e){
    e.preventDefault();
    var tmpPicId=$("#newEmpPicId4").val();
    var tmpName=nameArray[Math.floor(Math.random()*nameArray.length)]+" "+surnameArray[Math.floor(Math.random()*surnameArray.length)];
    var tmpSkill=$("#newEmpSkill4").val();
    var tmpSalary=$("#newEmpSalary4").val();
    investorDeny(1,tmpPicId,tmpName,tmpSkill,tmpSalary);
    //hireEmployee(tmpPicId,tmpName,tmpSkill,tmpSalary);
  });

  $('.investor_hire_pic1').click(function(e){
      e.preventDefault();       
      var tmpPicId=$("#newInvPicId1").val();
      var tmpName=nameArray[Math.floor(Math.random()*nameArray.length)]+" "+surnameArray[Math.floor(Math.random()*surnameArray.length)];
      var tmpEquity=$("#newInvEquity1").val();
      var tmpOffer=$("#newInvOffer1").val();
      hireInvestor(tmpPicId,tmpName,tmpEquity,tmpOffer);
    });
  $('.investor_hire_pic2').click(function(e){
    e.preventDefault();
    var tmpPicId=$("#newInvPicId2").val();
    var tmpName=nameArray[Math.floor(Math.random()*nameArray.length)]+" "+surnameArray[Math.floor(Math.random()*surnameArray.length)];
    var tmpEquity=$("#newInvEquity2").val();
    var tmpOffer=$("#newInvOffer2").val();
    hireInvestor(tmpPicId,tmpName,tmpEquity,tmpOffer);
  });
  $('.investor_hire_pic3').click(function(e){
    e.preventDefault();
    var tmpPicId=$("#newInvPicId3").val();
    var tmpName=nameArray[Math.floor(Math.random()*nameArray.length)]+" "+surnameArray[Math.floor(Math.random()*surnameArray.length)];
    var tmpEquity=$("#newInvEquity3").val();
    var tmpOffer=$("#newInvOffer3").val();
    hireInvestor(tmpPicId,tmpName,tmpEquity,tmpOffer);
  });
  $('.investor_hire_pic4').click(function(e){
    e.preventDefault();
    var tmpPicId=$("#newInvPicId4").val();
    var tmpName=nameArray[Math.floor(Math.random()*nameArray.length)]+" "+surnameArray[Math.floor(Math.random()*surnameArray.length)];
    var tmpEquity=$("#newInvEquity4").val();
    var tmpOffer=$("#newInvOffer4").val();
    hireInvestor(tmpPicId,tmpName,tmpEquity,tmpOffer);
  });

  $('.new_game').click(function(e){
    e.preventDefault();
    newGame();
  });

  $('.add').click(function(e){
    e.preventDefault();
    generateNewEmp();
  });

  $('.fireEmp').click(function(e){
    e.preventDefault();
    fireEmp();
  });

  $('.fireInv').click(function(e){
    e.preventDefault();
    fireInv();
  });
});