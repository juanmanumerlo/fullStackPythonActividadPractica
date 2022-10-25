const d = document;

export default function slider(){
    const $nextBtn = d.querySelector(".slider-btns .next"),
        $prevBtn = d.querySelector(".slider-btns .prev"),
        $slides = d.querySelector(".slider-slide");
    
    let i = 0;
    $slides[i].classList.add("active");

    d.addEventListener("click", e =>{
        if(e.target === $prevBtn){
            e.preventDefault();
            $slides[i].classList.remove("is-active");
            i--;

            if(i < 0){
                i = $slides.length -1;
            }

            $slides[i].classList.add("is-active");
        }

        if(e.target === $nextBtn){
            e.preventDefault();
            $slides[i].classList.remove("is-active");
            i++;

            if(i >= $slides.length){
                i = 0;
            }

            $slides[i].classList.add("is-active");
        }
    });
}