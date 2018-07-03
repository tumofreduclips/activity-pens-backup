width(3)

function drawTriagnle(side){
  forward(side)
  left(120)
  forward(side)
  left(120)
  forward(side)
  left(120)
  
}


color("green")
goto(-202,192)
drawTriagnle(100)

color("blue")
goto(177,-134)
drawTriagnle(150)

color("red")
goto(226,191)
drawTriagnle(60)

color("magenta")
goto(-217,-80)
drawTriagnle(75)

goto(0,0)
strangeCircle(150)