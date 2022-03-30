var id1, id2;
//一开始就加载时间表和倒计时
window.onload = function () {
  var year, month, date, hour, minute, second, day;
  //当前时间
  id1 = setInterval(function () {
    var Date = gettime(year, month, date, hour, minute, second, day);
    document.getElementById("date").innerHTML = Date; //显示当前时间
  }, 0);
  //距离明天的时间
  setInterval(function () {
    var countdown1 = countdown();
    document.getElementById("countdown").innerHTML = countdown1; //显示倒计时
  }, 0);
};

//打开时间表
document.getElementById("btn1").onclick = function () {
  var div = document.getElementsByClassName("time")[0];
  var h2 = "<h2 id='date'/>";
  div.innerHTML = h2;

  id2 = setInterval(function () {
    var year, month, date, hour, minute, second, day;
    var Date = gettime(year, month, date, hour, minute, second, day);
    document.getElementById("date").innerHTML = Date;
  }, 0);
};

//封装日期函数
function gettime(year, month, date, hour, minute, second, day) {
  var time = new Date();
  var week = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  year = time.getFullYear();
  month = time.getMonth() + 1;
  date = time.getDate();
  hour = time.getHours();
  minute = time.getMinutes();
  second = time.getSeconds();
  day = time.getDay();
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  return (
    year +
    "年" +
    month +
    "月" +
    date +
    "日" +
    week[day] +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second
  );
}

//删除时间表
document.getElementById("btn2").onclick = function () {
  var div = document.getElementsByClassName("time")[0];
  h2 = document.getElementById("date");
  clearInterval(id1); //清除
  clearInterval(id2); //清除
  div.removeChild(h2); //移除h2标签
};

//封装倒计时函数
function countdown() {
  // var nowtime = +new Date(); //当前时间
  // var settime = +new Date(time); //设置的时间
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var nowzero = (60 * 60 * hour + 60 * minute + second) * 1000; //距离今天零点的时间
  var tomorrowzero = 24 * 60 * 60 * 1000; //从今天零点到明天零点的时间 相当于一天
  var times = (tomorrowzero - nowzero) / 1000; //转化为秒
  var day = parseInt(times / 60 / 60 / 24);
  hour = parseInt((times / 60 / 60) % 24);
  minute = parseInt((times / 60) % 60);
  second = parseInt(times % 60);
  day = day < 10 ? "0" + day : day;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  return (
    "距离明天" + day + "天" + hour + "小时" + minute + "分钟" + second + "秒"
  );
}
