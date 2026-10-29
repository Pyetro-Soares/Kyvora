import { animate, linear, onScroll } from 'animejs' ;
animate('#preview', {
    translateX: ['-200%', '0'],
    autoplay: onScroll(),
    duration: 1000,
    rotate: ['260deg', '0deg'],
})
animate('.digitacao', {
    translateY: ['-200%', '0%']
})
animate('.card', {
    boxShadow: ['0px 0px 0px #333333','0px 0px 10px #EA4B71'],
    autoplay: onScroll(),
    ease: linear(),
    duration: 1000,
    opacity: [0, 1],
    translateY: ['70%','0']
})
animate('#automacao',{
    translateY:'-20%',
})