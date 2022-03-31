//轮播图
let banner = document.getElementById("banner");
let imglist = banner.children[0].getElementsByTagName("li");
let ollist = banner.children[1].getElementsByTagName("li");
let leftbtn = document.getElementById("leftbtn");
let rightbtn = document.getElementById("rightbtn");
let btns = document.getElementsByClassName("btn");

//设置图片列表的数组
let imgArr = [];
//设置小圆点的数组
let dotArr = [];
let temp = []; //为后面点击小圆点切换图片做备份
for (let i = 0; i < imglist.length; i++) {
  imgArr.push(imglist[i].className);
  dotArr.push(ollist[i].className);
  temp.push(imglist[i].className);
}

let timer = [];
//设置五秒切换图片
function autoplay() {
  timer = setInterval(function () {
    nextImg();
  }, 5000);
}

autoplay(); //一开始就自动播放

//鼠标放上面不再轮播 移开开始轮播
banner.addEventListener("mouseover", function () {
  clearInterval(timer);
});
banner.addEventListener("mouseout", function () {
  autoplay();
});

//设置函数节流锁 目的是当按钮点击太快时 让图片完全显示出来再切换
let lock = true;
function nextImg() {
  if (!lock) return;
  //把最后一项增加到数组最前面unshift()
  imgArr.unshift(imgArr[imgArr.length - 1]);
  //删除最后一项pop()
  imgArr.pop();

  dotArr.unshift(dotArr[dotArr.length - 1]);
  dotArr.pop();
  for (let i = 0; i < imglist.length; i++) {
    imglist[i].className = imgArr[i];
    ollist[i].className = dotArr[i];
  }
  lock = false;
  setTimeout(function () {
    //因为设置的过渡时间为0.5s 所以等待0.5s
    lock = true;
  }, 500);
}

//点击左边按钮切换图片
leftbtn.onclick = function () {
  clearInterval(timer);
  if (!lock) return;
  imgArr.push(imgArr[0]); //把第一项增加到数组最后面push()
  imgArr.shift(); //删除第一项shift()
  dotArr.push(dotArr[0]);
  dotArr.shift();
  for (let i = 0; i < imglist.length; i++) {
    imglist[i].className = imgArr[i];
    ollist[i].className = dotArr[i];
  }
  lock = false;
  setTimeout(function () {
    //因为设置的过渡时间为0.5s 所以等待0.5s
    lock = true;
  }, 500);
};

//点击右边按钮切换图片 实际上就是下一张图片
rightbtn.onclick = function () {
  clearInterval(timer);
  nextImg();
};

const ol = document.getElementsByTagName("ol")[0];
//鼠标放在小圆点上就切换(mouseover) 如果是点击切换(click)
ol.addEventListener("mouseover", function (e) {
  if (e.target.nodeName.toLowerCase() === "li") {
    const n = Number(e.target.getAttribute("data-n"));
    const len = imglist.length;
    let j = 0;
    //点击的小圆点的类名设置为cur
    for (let i = n; i < len; i++, j++) {
      imglist[i].className = temp[j];
      ollist[i].className = temp[j];
    }
    for (let i = 0; i < n; i++, j++) {
      imglist[i].className = temp[j];
      ollist[i].className = temp[j];
    }
    //然后设置自动轮播从当前开始
    for (let i = 0; i < len; i++) {
      imgArr[i] = imglist[i].className;
      dotArr[i] = ollist[i].className;
    }
  }
});

//给网页文档添加事件监听 可见性改变 即打开网页才轮播 不打开不轮播
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    clearInterval(timer);
  } else {
    autoplay();
  }
});
