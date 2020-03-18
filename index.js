// const testVar = {}

// function testFunc() {
//   return "hi"
// } why does this exist??????

function superbowlWin(record){
  const a = record.find(({result}) => result === "W") 
  return !!a ? a.year : undefined
}
