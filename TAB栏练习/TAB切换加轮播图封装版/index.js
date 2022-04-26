
// window.onload = function() {
    var boxArr = document.getElementsByClassName("box");

    for (var i = 0;i < boxArr.length;i++) {
        fn(boxArr[i]);
    }

    function fn(element) {
        var liArr = element.getElementsByTagName("li");
        var spanArr = element.getElementsByTagName("span");
        var div = element;

        // TAB栏切换
        for (var i = 0;i < liArr.length;i++) {
            liArr[i].index = i;
            liArr[i].onmouseover = function() {
                for (var j = 0;j < liArr.length;j++) {
                    liArr[j].className = "";
                    spanArr[j].className = "";
                }
                n = this.index;
                this.className = "current";
                spanArr[this.index].className = "show";
                
            }
        }
        // 轮播图启动停止控制        
        div.onmouseover = function() {
            clearInterval(timer);
        }

        div.onmouseout = function() {
                timer = setInterval(autoplay,1000);
            }


        var timer = setInterval(autoplay,1000);
        // 计数器
        var n = 0;
        // 自动播放
        function autoplay(){
            n ++;
            if (n == liArr.length)  {
                n = 0;
            }
            for (var i = 0;i < liArr.length;i++) {
                liArr[i].className = "";
                spanArr[i].className = "";
            }
            liArr[n].className = "current";
            spanArr[n].className = "show";
        }
    }    
// }
