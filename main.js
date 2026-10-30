import { animate, linear, onScroll, stagger} from 'animejs' ;
animate('#preview', {
    translateX: ['-200%', '0'],
    autoplay: onScroll(),
    duration: 1000,
    rotate: ['260deg', '0deg'],
})

animate('.digitacao', {
    duration: 700,
    opacity:['0','1'],
    translateY: ['-200%', '0'],
    autoplay: onScroll(),
})

animate('.deBaixoPraCima',{
    duration: 700,
    translateY: ['200%', '0'],
})

animate('.card', {
    boxShadow: ['0px 0px 0px #EA4B71','0px 0px 15px #EA4B71'],
    autoplay: onScroll(),
    ease: linear(),
    duration: 1000,
    opacity: [0, 1],
    translateY: ['70%','0']
})

animate('#automacao',{
    translateY:'-40%',
})

animate('.cardFluxo' , {
    autoplay: onScroll(),
    marginTop:'0px',
    marginBottom: '0px',
})

animate('.fundo', {
    delay:stagger(300),
    borderRadius: ['0px 0px 50% 50%', '0px 0px 0px 0px'],
    boxShadow: ['0px 0px 0px #EA4B71','0px 0px 15px #EA4B71'],
    height:['0px','100px'],
    autoplay:onScroll()
})