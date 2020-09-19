export default {
    methods: {
        redirect(n) {
            let el;
            
            switch (n) {
              case 1:
                el = document.getElementById("web-container");
                break;
              case 2:
                el = document.getElementById("about-me-container");
                break;
              case 3:
                el = document.getElementById("featured-projects-container");
                break;
              case 4:
                el = document.getElementById("experience-container");
                break;
              case 5:
                el = document.getElementById("contact-container");
                break;
            }
      
            //Calculate element coordinates
            for (
              var lx = 0, ly = 0;
              el != null;
              lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent
            );
      
            //Redirect to desired coordinate. We need the timeout to avoid window.scrollTo bug that redirects to the start of the page, ignoring the values given.
            setTimeout(() => {
              n !== 5 ? window.scrollTo(lx, ly - 90) : window.scrollTo(lx, ly);
            }, 1);
            // console.log({ x: lx, y: ly });
          },
    },
}