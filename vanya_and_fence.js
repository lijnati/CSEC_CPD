function minimumRoadWidth(n, h, heights) {
    let width = 0;
    
    for (let i = 0; i < n; i++) {
        if (heights[i] > h) {
            width += 2; // Bending takes 2 width
        } else {
            width += 1; // Normal takes 1 width
        }
    }
    
    console.log(width);
}

const n = 3, h = 7;
const heights = [4, 5, 14];
minimumRoadWidth(n, h, heights); 
