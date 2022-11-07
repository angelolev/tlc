$(document).ready(function () {
    // Add smooth scrolling to all links
    $(".scrollable").on("click", function (e) {
      e.preventDefault();
        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $(".scrollable").click(function() {
              
      var listItems = $(".scrollable");
        
      for (let i = 0; i < listItems.length; i++) {
          listItems[i].classList.remove("active");
      }
        
      this.classList.add("active");
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 400, 3000);
    counter("count2", 100, 50, 2500);
    counter("count3", 0, 40, 3000);
   });
   