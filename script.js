const mario= document.querySelector('.mario')
const tubo= document.querySelector('.tubo')
const fim=document.querySelector('.fim')
const nuvem=document.querySelector('.nuvem')
const placarreal=document.getElementById("placarreal");
let placar=0;
let tubopassoumario=false;
const pulo=()=>{
mario.classList.add('pulo')
    setTimeout(()=>{
        mario.classList.remove('pulo')
    },900)
}
function atualizarplacar(){
    placar++;

    placarreal.innerHTML=placar;


}
const loop = setInterval(()=>{

    const posicaotubo= tubo.offsetLeft;

    const posicaomario=+window.getComputedStyle(mario).bottom.replace('px','');
const posicaonuvem=nuvem.offsetLeft;
    if(posicaotubo<=80&&posicaotubo>0&&posicaomario<85){
        tubo.style.animation = 'none';
        tubo.style.left=`${posicaotubo}px`;
        mario.style.animation='none';
        mario.style.bottom=`${posicaomario}px`;
        mario.src="fotos/mario-gameover.png";
        fim.src="fotos/gameover.png";
        nuvem.style.animation='none';
        nuvem.style.left=`${posicaonuvem}px`;
        clearInterval(loop)
    }
    if(posicaotubo<0){
        tubopassoumario=true
    }
    else if(posicaotubo>0 && tubopassoumario){
        atualizarplacar();
        tubopassoumario=false;
    }
},10)
document.addEventListener('keydown',pulo);