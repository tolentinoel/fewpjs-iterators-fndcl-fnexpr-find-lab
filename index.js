const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let answer = record.find(obj => obj.result === "W")

  if (answer){
    return answer.year
  } else {
    return answer
  }
}

