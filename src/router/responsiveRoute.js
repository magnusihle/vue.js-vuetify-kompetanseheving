/**
 * A helper to get a responsive route factory which renders different views based on the current view point
 * @param {{xs:[ViewFactory],sm:[ViewFactory],md:[ViewFactory],lg:[ViewFactory]}} map - A map of breakpoint key to a ViewFactory
 * @returns {ViewFactory} - A view factory which invokes and returns an item supplied in the map based on the current viewport size
 */
export default function responsiveRoute(map) {
    return function getResponsiveView() {
        const screenWidth = document.documentElement.clientWidth;

        // Find the matching index for the current screen width
        const matchIndex = BREAKPOINTS.VALUES.findIndex((item, idx) => {
            if (idx === 0) {
                return false;
            }
            return screenWidth >= BREAKPOINTS.VALUES[idx - 1] && screenWidth < BREAKPOINTS.VALUES[idx];
        }) - 1;


        if (map[BREAKPOINTS.LABELS[matchIndex]]) {
            // Perfect match, use it
            return map[BREAKPOINTS.LABELS[matchIndex]]();
        } else {
            // Go down the responsive break points list until a match is found
            let counter = matchIndex;
            while (counter-- > 0) {
                if (map[BREAKPOINTS.LABELS[counter]]) {
                    return map[BREAKPOINTS.LABELS[counter]]();
                }
            }
            return Promise.reject({
                code: 500,
                info: 'No component matched the breakpoint - probably a configuration error'
            });
        }
    };
} 