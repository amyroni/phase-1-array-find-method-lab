function superbowlWin(array) {
  let win = array.find(element => element.result === "W");
  // if (win) {return win.year} 
  return (win && win.year)
}
