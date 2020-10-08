const mCoachProfileWrap = document.querySelector('.mCoachProfileWrap');
const eachCoachWrap = mCoachProfileWrap.querySelector('.eachCoachWrap');
const mCoachName = eachCoachWrap.querySelector('.mCoachName');
const mCoachCareer = eachCoachWrap.querySelector('.mCoachCareer');
const mCoachNameS = mCoachProfileWrap.querySelectorAll('.mCoachName');
const mCoachCareerS = mCoachProfileWrap.querySelectorAll('.mCoachCareer');

function handleShowCareer(event) {
    for (let i = 0; i < mCoachCareerS.length; i++) {
        mCoachCareerS[i].classList.remove('show');
        
    }
    console.log(mCoachCareerS);

    let targetClass = event.target;
    let targetNode = targetClass.nextElementSibling;
    let display = targetNode.classList;

    console.log(targetClass);

    if (display.contains('show')) {
        display.remove('show');
        console.log(`${targetClass}, if의 결과`);
        return;
    } else {
        display.add('show');
        console.log(`${targetClass}, else의 결과`);
    }

    console.log(targetClass);
    console.log(clickCount);
}


function main() {
    for (let i = 0; i < mCoachNameS.length; i++) {
        mCoachNameS[i].addEventListener('click', handleShowCareer);
    }
}

document.addEventListener('DOMContentLoaded', main);
