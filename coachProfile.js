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
    let targetClass = event.target;
    let targetNode = targetClass.nextElementSibling; // targetClass대신 this를 사용해도됨
    let display = targetNode.classList;

    
    if (display.contains('show')) {
        display.remove('show');

    } else{
        display.add('show');
    }

}


function main() {
    for (let i = 0; i < mCoachNameS.length; i++) {
        mCoachNameS[i].addEventListener('click', handleShowCareer);
    }

}

document.addEventListener('DOMContentLoaded', main);

/* <script type="text/javascript" charset="utf-8">
	jQuery(document).ready(function($) {
		$(".mCoachName").click(function() {
           $(".mCoachCareer").removeClass(".show");
		   $(this.nextElementSibling).slideToggle('.show');
		});
	});
</script>
실제 홈페이지에서는 제이쿼리 사용
*/