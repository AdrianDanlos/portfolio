export default {
    data() {
        return {
            isSmallScreen: null,
        }
    },
    methods: {
        cursorHover() {
            if (!this.isSmallScreen) {
                let innerCursor = document.querySelector(".inner-cursor");
                let outerCursor = document.querySelector(".outer-cursor");

                innerCursor.style.display = "none";
                outerCursor.style.width = 45 + "px";
                outerCursor.style.height = 45 + "px";
            }
        },
        cursorLeave() {
            if (!this.isSmallScreen) {
                let innerCursor = document.querySelector(".inner-cursor");
                let outerCursor = document.querySelector(".outer-cursor");

                innerCursor.style.display = "block";
                outerCursor.style.width = 35 + "px";
                outerCursor.style.height = 35 + "px";
            }
        },
        setCursorContrast() {
            if (!this.isSmallScreen) {
                let outerCursor = document.querySelector(".outer-cursor");
                outerCursor.style.borderColor = "white";
            }
        },
        removeCursorContrast() {
            if (!this.isSmallScreen) {
                let outerCursor = document.querySelector(".outer-cursor");
                outerCursor.style.borderColor = "#6b759c";
            }
        },
    },
    mounted() {
        screen.width > 1264 ? this.isSmallScreen = false : this.isSmallScreen = true;
    },
}