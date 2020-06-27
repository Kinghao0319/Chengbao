var app = getApp()

function carMoveForward(step) {
  var i = 0
  for (i = 0; i < step; i++) {
    switch (app.globalData.carDirection) {
      case 0:
        app.globalData.carPosition[0].y++
        break
      case 1:
        app.globalData.carPosition[0].x++
        break;
      case 2:
        app.globalData.carPosition[0].y--
        break;
      case 3:
        app.globalData.carPosition[0].x--
        break;
    }
    app.globalData.carPath.push({ x: app.globalData.carPosition[0].x, y: app.globalData.carPosition[0].y })
  }
}

module.exports = {
  carMoveForward: carMoveForward
};

function carMoveBackward(step) {
  var i = 1
  for (i = 0; i < step; i++) {
    switch (app.globalData.carDirection) {
      case 0:
        app.globalData.carPosition[0].y--
        break
      case 1:
        app.globalData.carPosition[0].x--
        break
      case 2:
        app.globalData.carPosition[0].y++
        break
      case 3:
        app.globalData.carPosition[0].x++
        break
    }
    app.globalData.carPath.push({ x: app.globalData.carPosition[0].x, y: app.globalData.carPosition[0].y })
  }
}
function carTurnRight(step) {
  app.globalData.carDirection += step
  app.globalData.carDirection = (app.globalData.carDirection + 4) % 4;
}
function carTurnLeft(step) {
  app.globalData.carDirection--
  app.globalData.carDirection = (app.globalData.carDirection + 4) % 4;
}

function carMove() {

  var arrStart = 0
  var arrEnd = 0
  var len = app.globalData.ans.length

  for (arrStart = len - 1; arrStart > 0; arrStart--) {
    if (app.globalData.ans[arrStart] == 255 && app.globalData.ans[arrStart - 1] == 255) {
      arrStart++
      break;
    }
  }
  for (arrEnd = len - 1; arrEnd > 0; arrEnd--) {
    if (app.globalData.ans[arrEnd] == 0 && app.globalData.ans[arrEnd - 1] == 0) {
      arrEnd--
      break;
    }
  }
  var opt = 0
  var step = 0
  console.log(arrStart + '-' + arrEnd)
  for (var i = arrStart; i < arrEnd; i++) {
    opt = parseInt(app.globalData.ans[i] / 16)
    step = app.globalData.ans[i] % 16
    if (step < 1 || step > 6) {
      console.log("步数错误")
      continue
    }
    switch (opt) {
      case 1:
        carTurnLeft(step)
        console.log("左转" + step)
        app.globalData.path.push({ op: "左转", step: step })
        break
      case 2:
        carTurnRight(step)
        console.log("右转" + step)
        app.globalData.path.push({ op: "右转", step: step })
        break
      case 3:
        carMoveForward(step)
        console.log("前进" + step)
        app.globalData.path.push({ op: "前进", step: step })
        break
      case 4:
        carMoveBackward(step)
        console.log("后退" + step)
        app.globalData.path.push({ op: "后退", step: step })
        break
      default:
        console.log("未知指令")
        break
    }
    console.log("车坐标：" + app.globalData.carPosition[0].x + ',' + app.globalData.carPosition[0].y + "面朝" + app.globalData.carDirection)
  }
  console.log(app.globalData.carPath)
}
module.exports = {
  carMove: carMove
};
function Judge() {

}
