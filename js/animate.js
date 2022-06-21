function animate(obj,target,callback) {
    clearInterval(obj.times);
    obj.times = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step > 0 ? step = Math.ceil(step) : step = Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.times);
            if (callback) {
                callback();
            }
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    },15)
}