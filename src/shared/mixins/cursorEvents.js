export default {
    methods: {
        cursorHover() {
            let innerCursor = document.querySelector(".inner-cursor");
            let outerCursor = document.querySelector(".outer-cursor");

            innerCursor.style.display = "none";
            outerCursor.style.width = 50 + "px";
            outerCursor.style.height = 50 + "px";
        },
        cursorLeave(){
            let innerCursor = document.querySelector(".inner-cursor");
            let outerCursor = document.querySelector(".outer-cursor");

            innerCursor.style.display = "block";
            outerCursor.style.width = 35 + "px";
            outerCursor.style.height = 35 + "px";
        }
    },
}