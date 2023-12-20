function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

mondayWork();
mondayWork("work from home");

function wrapAdjective(result = "*") {
  const innerFunction = function (emphatic = "special") {
    return `You are ${result}${emphatic}${result}!`;
  };
  return innerFunction;
}

wrapAdjective()("a hard worker");
wrapAdjective("||")("a dedicated programmer");
