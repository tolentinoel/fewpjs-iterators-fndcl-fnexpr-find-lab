const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let answer = record.find(obj => obj.result === "W")
  // return answer ? answer.year : answer
  if (answer){
    return answer.year
  } else {
    return answer
  }
}

