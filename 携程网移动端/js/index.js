window.addEventListener('load',function(){
    var banner = document.querySelector('.banner');
    var banner_width = banner.offsetWidth;
    var ol = banner.querySelector('ol');
    var ul = banner.querySelector('ul');
    var index = 0;
    var timer = setInterval(function(){
        index++;
        var translatex = -index * banner_width;
        ul.style.transform = 'translateX('+translatex+'px)';
        ul.style.transition = 'all .3s';
    },2000)
    //transitioned事件是等待监听事件完成后的执行的
    ul.addEventListener('transitionend',function(){
        if (index>=3) {
            index=0;
            ul.style.transition = 'none';
            var translatex = -index * banner_width;
            ul.style.transform = 'translateX('+translatex+'px)';
        }else if (index<0) {
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * banner_width;
            ul.style.transform = 'translateX('+translatex+'px)';
        }
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    })
    var startX = 0;
    var moveX = 0;
    var flag = false;
    ul.addEventListener('touchstart',function(e){
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    })
    ul.addEventListener('touchmove',function(e){
        flag = true;
        moveX = e.targetTouches[0].pageX - startX;
        var translatex = -index * banner_width + moveX;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX('+translatex+'px)';
        
    })
    ul.addEventListener('touchend',function(){
        if (flag) {
            if (Math.abs(moveX)>50) {
                if (moveX>0) {
                    index--;
                }else {
                    index++;
                }
                var translatex = -index*banner_width;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX('+translatex+'px)';
            }else {
                var translatex = -index*banner_width;
                ul.style.transform = 'translateX('+translatex+'px)';
            } 
        }
        clearInterval('timer');
        timer = setInterval(function(){
            index++;
            var translatex = -index * banner_width;
            ul.style.transform = 'translateX('+translatex+'px)';
            ul.style.transition = 'all .3s';
        },2000)
    })
})