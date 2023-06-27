
// 메인 패이지 typing

let target = document.getElementById('typing')

function random(limit) {
  return Math.trunc(Math.random() * limit + 1)
}

function blink() {
  target.classList.toggle('active')
}

setInterval(blink, 400)


function string() {
  let stringArr = ["This is just my beginning."]
  let selecArr = stringArr[0].split("")

  return selecArr
}

function resetTyping() {
  target.textContent = ""

  typing(string())
}

function typing(arr) {
  if (arr.length > 0) {
    target.textContent += arr.shift()
    setTimeout(function () {
      typing(arr)
    }, random(2)*100)
  }
  else {
    scrollShow()
    setTimeout(resetTyping, 10000)
  }
}

setTimeout(function() {
  typing(string())

},1000)


// shootingstar end mouse show

$('.scroll').stop().hide()

function scrollShow() {
  $('.scroll').stop().fadeIn(1000)
}



// 메인페이지 원근감 scroll

const tree = document.getElementById('tree')
const star = document.querySelectorAll('.cls-2')
const back = document.getElementById('background')

window.addEventListener('scroll', () => {
  star.forEach((el) =>{
    el.style.transform = `translateY(${window.scrollY * -0.05}px)`
  })
  back.style.transform = `translateY(${window.scrollY * -1}px)`
  tree.style.transform = `translateY(${window.scrollY * -1}px)`
})


// section line 애니메이션

$('.section').waypoint(function() {
  $(this).find('.line').addClass('show')
}, {
  offset: '50%'
})



// menu fixed

$(window).on('scroll', function() {
  if(window.scrollY > $('#section1').offset().top) {
    $('#menu').addClass('fixed')
    $('#fixed_git').addClass('fixed')
  } else {
    $('#menu').removeClass('fixed')
    $('#fixed_git').removeClass('fixed')
  }

  // menu class 변경
  let sections = $('.event')

  for(let i = 0; i < sections.length; i++) {
    let sectionTop = sections.eq(i)
    if(window.scrollY > sectionTop.offset().top) {
      $('#menu li a').removeClass('active')
      $('#menu li').eq(i).find('a').addClass('active')
    }
  }
})

// menu click scroll

$('#menu li a').click(function(e) {
  e.preventDefault()

  move = $(this).attr('href')
  sectionTop = $(move).offset().top + 1 

  $('html, body').animate({
    scrollTop: sectionTop
  },1000)
  
})


// section2 icon scroll

const ticker = function() {
  setTimeout(() => {
    $('.slide_skill li:first'). animate({marginLeft: '-160px'}, 1000, function() {
      $(this).detach().appendTo('.slide_skill').removeAttr('style')
    })
    ticker()
  }, 3000);
}
ticker()

// section2 skill per

$('#skillper ul li:nth-child(1)~').stop().hide()

$('#section2').waypoint(function() {
  $('.percent li:nth-child(1) p').addClass('start')
}, {
  offset: "40%"
})

// section1 waypoint

$('#section1').waypoint(function() {
  $('#section1 .name').addClass('active')
  $('#section1 .desc').addClass('active')
}, {
  offset: "75%"
})


// section2 skill

$('#section2 input').click(function() {

  num = $(this).index()
  $('#skillper ul li').stop().hide()
  $('#skillper .percent li').eq(num).stop().fadeIn()
  $('#skillper .name li').eq(num).stop().show()
})




// 포폴 페이지 오픈






