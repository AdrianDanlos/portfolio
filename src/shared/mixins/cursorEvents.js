export default {
    methods: {
        cursorHover() {
            let innerCursor = document.querySelector(".inner-cursor");
            let outerCursor = document.querySelector(".outer-cursor");

            innerCursor.style.display = "none";
            outerCursor.style.width = 45 + "px";
            outerCursor.style.height = 45 + "px";
        },
        cursorLeave() {
            let innerCursor = document.querySelector(".inner-cursor");
            let outerCursor = document.querySelector(".outer-cursor");

            innerCursor.style.display = "block";
            outerCursor.style.width = 35 + "px";
            outerCursor.style.height = 35 + "px";
        },
        setCursorContrast() {
            let outerCursor = document.querySelector(".outer-cursor");
            outerCursor.style.borderColor = "white";
        },
        removeCursorContrast() {
            let outerCursor = document.querySelector(".outer-cursor");
            outerCursor.style.borderColor = "#6b759c";
        },
    },
}