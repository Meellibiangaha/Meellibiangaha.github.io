//Карусель



let carousel = document.querySelector('.carusel');
let caruselItem = document.querySelectorAll('.carusel_item_li').length - 3;
    let width; //size kartinki
    let count = 1;  //na skolko img prokrutka
    let list = carousel.querySelector('.carusel_item_ul');
    let listElems = carousel.querySelectorAll('.carusel_item_li');
    let position = 0;

    carousel.querySelector('.item_prev').onclick = function() {
      width = document.querySelector('.carusel_item_li').clientWidth;
      if(position == 0){
        position = -width * caruselItem;
        list.style.marginLeft = position + 'px';
      }
      else{
        position += width * count;
        position = Math.min(position, 0);
        list.style.marginLeft = position + 'px';
      }
      
    };

    carousel.querySelector('.item_next').onclick = function() {
      width = document.querySelector('.carusel_item_li').clientWidth;
      if(position == -(width * caruselItem)){
        position = 0;
        list.style.marginLeft = position + 'px';
      }
      else{
        position -= width * count;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
      }
      
    };


    //slider2

    let slider_2_next = document.querySelector('.sldider_2_next');
    let slider_2_imgs = document.querySelectorAll('.slider_2_imgs');
    let slider_2_texts = document.querySelectorAll('.slider_2_text');
    let j = 0; //current_img
    slider_2_next.addEventListener('click', function() {
      ++j;
      if(j >= slider_2_imgs.length){
        slider_2_imgs[j-1].classList.add('slide_img_diplay');
        slider_2_texts[j-1].classList.add('block_3_sliderText_diplay');
        j = 0;
        slider_2_imgs[j].classList.remove('slide_img_diplay');
        slider_2_texts[j].classList.remove('block_3_sliderText_diplay');
      }

      else{
        slider_2_imgs[j-1].classList.add('slide_img_diplay');
        slider_2_texts[j-1].classList.add('block_3_sliderText_diplay');
        slider_2_imgs[j].classList.remove('slide_img_diplay');
        slider_2_texts[j].classList.remove('block_3_sliderText_diplay');
      }

    });

    let slider_2_prev = document.querySelector('.sldider_2_prev');
    slider_2_prev.addEventListener('click', function() {
      --j;
      if(j < 0){
        slider_2_imgs[j+1].classList.add('slide_img_diplay');
        slider_2_texts[j+1].classList.add('block_3_sliderText_diplay');
        j = slider_2_imgs.length - 1;
        slider_2_imgs[j].classList.remove('slide_img_diplay');
        slider_2_texts[j].classList.remove('block_3_sliderText_diplay');
      }

      else{
        slider_2_imgs[j+1].classList.add('slide_img_diplay');
        slider_2_texts[j+1].classList.add('block_3_sliderText_diplay');
        slider_2_imgs[j].classList.remove('slide_img_diplay');
        slider_2_texts[j].classList.remove('block_3_sliderText_diplay');
      }
    });


//slider_3

     let slider_3_next = document.querySelector('.sldider_3_next');
    let slider_3_imgs = document.querySelectorAll('.slider_3_imgs');
    let slider_3_texts = document.querySelectorAll('.slider_3_text');
    let k = 0; //current_img
    slider_3_next.addEventListener('click', function() {
      ++k;
      if(k >= slider_3_imgs.length){
        slider_3_imgs[k-1].classList.add('slide_img_diplay');
        slider_3_texts[k-1].classList.add('block_3_sliderText_diplay');
        k = 0;
        slider_3_imgs[k].classList.remove('slide_img_diplay');
        slider_3_texts[k].classList.remove('block_3_sliderText_diplay');
      }

      else{
        slider_3_imgs[k-1].classList.add('slide_img_diplay');
        slider_3_texts[k-1].classList.add('block_3_sliderText_diplay');
        slider_3_imgs[k].classList.remove('slide_img_diplay');
        slider_3_texts[k].classList.remove('block_3_sliderText_diplay');
      }
    });

    let slider_3_prev = document.querySelector('.sldider_3_prev');
    slider_3_prev.addEventListener('click', function() {
      --k;
      if(k < 0){
        slider_3_imgs[k+1].classList.add('slide_img_diplay');
        slider_3_texts[k+1].classList.add('block_3_sliderText_diplay');
        k = slider_3_imgs.length - 1;
        slider_3_imgs[k].classList.remove('slide_img_diplay');
        slider_3_texts[k].classList.remove('block_3_sliderText_diplay');
      }

      else{
        slider_3_imgs[k+1].classList.add('slide_img_diplay');
        slider_3_texts[k+1].classList.add('block_3_sliderText_diplay');
        slider_3_imgs[k].classList.remove('slide_img_diplay');
        slider_3_texts[k].classList.remove('block_3_sliderText_diplay');
      }
    });