function animation(obj,target,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        
        var step = (target-obj.offsetLeft)/10;
        step = step>0 ? Math.ceil(step) : Math.floor(step);
        // step有可能出现无理数的情况所以我们应该将其取整
        // step宁可多也不能少当正的时候向上取整当负的时候向下取整
        if (obj.offsetLeft==target) {
            clearInterval(obj.timer);
            //回调函数写到定时器结束里面当定时器结束执行
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        }else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    },30)
}
