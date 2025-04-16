const cmpContainers = document.querySelectorAll('.cmp-container');
cmpContainers.forEach(container => {
    const slider = container.querySelector('.cmp-slider');
    let active = false
    container.addEventListener('mouseenter', function(){
        active = true;
        slider.classList.add('sliding');

    });
    container.addEventListener('mouseleave', function(){
        active = false;
        slider.classList.remove('sliding');

    });
    container.addEventListener('mousemove', function(e){
        if(active){
            x = e.clientX - container.getBoundingClientRect().left;
            move(x);
        }
    });
    
    function move(x){
        x = Math.max(0, Math.min(x, container.offsetWidth));
        container.querySelector('.top').style.width = x + 'px'; 
        slider.style.left = x - 15 + 'px';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        './static/images/cmp/monosdf/scannetpp_1.png', './static/images/cmp/ours/scannetpp_1.png',
        './static/images/cmp/monosdf/scannetpp_2.png', './static/images/cmp/ours/scannetpp_2.png',
        './static/images/cmp/monosdf/scannetpp_3.png', './static/images/cmp/ours/scannetpp_3.png',
        './static/images/cmp/monosdf/scannetpp_4.png', './static/images/cmp/ours/scannetpp_4.png',
        './static/images/cmp/monosdf/scannetpp_5.png', './static/images/cmp/ours/scannetpp_5.png',
        './static/images/cmp/monosdf/scannetpp_6.png', './static/images/cmp/ours/scannetpp_6.png',
        './static/images/cmp/monosdf/scannet_1.png', './static/images/cmp/ours/scannet_1.png',
        './static/images/cmp/monosdf/scannet_2.png', './static/images/cmp/ours/scannet_2.png',
        './static/images/cmp/monosdf/scannet_3.png', './static/images/cmp/ours/scannet_3.png',
        './static/images/cmp/monosdf/scannet_4.png', './static/images/cmp/ours/scannet_4.png',
        './static/images/cmp/monosdf/tnt_1.png', './static/images/cmp/ours/tnt_1.png',
        './static/images/cmp/monosdf/tnt_2.png', './static/images/cmp/ours/tnt_2.png',
        './static/images/cmp/monosdf/tnt_3.png', './static/images/cmp/ours/tnt_3.png',
        './static/images/cmp/monosdf/tnt_4.png', './static/images/cmp/ours/tnt_4.png',
        './static/images/cmp/tnt_normal/tnt2048_normal_1.png', './static/images/cmp/tnt_2048/tnt2048_1.png',
        './static/images/cmp/tnt_normal/tnt2048_normal_2.png', './static/images/cmp/tnt_2048/tnt2048_2.png',
        './static/images/cmp/tnt_normal/tnt2048_normal_3.png', './static/images/cmp/tnt_2048/tnt2048_3.png',
        './static/images/cmp/tnt_normal/tnt2048_normal_4.png', './static/images/cmp/tnt_2048/tnt2048_4.png'
    ];
    

    images.forEach(src => preloadImage(src));
});

function preloadImage(src) {
    const img = new Image();
    img.src = src;
    img.onload = () => console.log(`${src} loaded successfully`);
    img.onerror = () => {
        console.error(`Failed to load ${src}, retrying...`);
        setTimeout(() => preloadImage(src), 1000); // Retry after 1 second
    };
}

function changeImages(event, cmpId, imgSrc1, imgSrc2) {
    const cmpContainer = document.getElementById(cmpId);
    if (!cmpContainer) return;
    
    const topImg = cmpContainer.querySelector('.top img');
    const bottomImg = cmpContainer.querySelector('.bottom img');
    if (!topImg || !bottomImg) return;
    topImg.src = imgSrc1;
    bottomImg.src = imgSrc2;
    const buttonContainer = event.target.parentElement;
    
    const buttons = buttonContainer.querySelectorAll('.cmp-button');
    buttons.forEach(button => {
        button.classList.remove('cmp-btn-checked');
    });

    event.target.classList.add('cmp-btn-checked');

}

