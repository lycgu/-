document.onreadystatechange = completeLoading;
function completeLoading() {
    if (document.readyState == "complete") {
        const loadingMask = document.getElementById('loading');
        loadingMask.parentNode.removeChild(loadingMask);
    }
}
window.addEventListener('load',function() {
    const header = document.querySelector('header');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click',function() {
        header.classList.toggle('open');
    });
});
window.addEventListener('load',function() {
    function animateTop(obj, target, callback) {
        clearInterval(obj.times);
        obj.times = setInterval(function () {
            var step = (target - window.pageYOffset) / 10;
            step > 0 ? step = Math.ceil(step) : step = Math.floor(step);
            if (window.pageYOffset == target) {
                clearInterval(obj.times);
                if (callback) {
                    callback();
                }
            } else {
                window.scroll(0, window.pageYOffset + step);
            }
        }, 15)
    }
    const goBack = document.querySelector('.goBack');
    const clientHeight = document.documentElement.clientHeight;
    window.addEventListener('scroll',function() {
        var goBackTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (goBackTop >= clientHeight) {
			goBack.style.display = 'block';
		} else {
			goBack.style.display = 'none';
		}
    });
    goBack.addEventListener('click',function() {
        animateTop(window, 0);
    });
});


    window.addEventListener('load',function() {
    const typewriter = document.querySelector('.typewriter');
    const textEl = typewriter.querySelector("#text");
    const texts = JSON.parse(textEl.getAttribute("data-text"));
    let index = 0;
    let charIndex = 0;
    let delta = 500;
    let start = null;
    let isDeleting = false;
    function type(time) {
        window.requestAnimationFrame(type);
        if (!start) start = time;
        let progress = time - start;
        if (progress > delta) {
            let text = texts[index];
            if (!isDeleting) {
                textEl.innerHTML = text.slice(0, ++charIndex);
                delta = 500 - Math.random() * 400;
            } else {
                textEl.innerHTML = text.slice(0, charIndex--);
            }
            start = time;
            if (charIndex === text.length) {
                isDeleting = true;
                delta = 200;
                start = time + 1200;
            }
            if (charIndex < 0) {
                isDeleting = false;
                start = time + 200;
                index = ++index % texts.length;
            }
        }
    }
    window.requestAnimationFrame(type);
});