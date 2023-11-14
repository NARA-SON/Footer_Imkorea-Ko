$(document).ready(function () { 

    // 패밀리사이트
    $(".family").click(function() {
        $(".family ul").toggleClass("on");
        $(".icon").toggleClass("rotate");
      });
    
    // 슬라이드
    let count=0;

  if (matchMedia("screen and (min-width: 1024px)").matches) {
    $(".btnNext").click(function(e){
        count++
        e.preventDefault()
        if(count>1){count=1}
        moveSlider(count)
    })

    $(".btnPrev").click(function(e){
        count--
        e.preventDefault()
        if(count<0){count=0}
        moveSlider(count)
    })

    function moveSlider(idx){
        $(".train").css("transform", "translateX(" + (-50 * idx) + "%)")
    }
    }

    if (matchMedia("screen and (min-width:768px) and (max-width:1023px)").matches) {
        $(".btnNext").click(function(e){
            count++
            e.preventDefault()
            if(count>1){count=1}
            moveSlider(count)
        })
    
        $(".btnPrev").click(function(e){
            count--
            e.preventDefault()
            if(count<0){count=0}
            moveSlider(count)
        })
    
        function moveSlider(idx){
            $(".train").css("transform", "translateX(" + (-50 * idx) + "%)")
        }
        }

    if (matchMedia("screen and (max-width:767px)").matches) {
            $(".btnNext").click(function(e){
                count++
                e.preventDefault()
                if(count>4){count=4}
                moveSlider(count)
            })
        
            $(".btnPrev").click(function(e){
                count--
                e.preventDefault()
                if(count<0){count=0}
                moveSlider(count)
            })
        
            function moveSlider(idx){
                $(".train").css("transform", "translateX(" + (-10 * idx) + "%)")
            }
            }

  })