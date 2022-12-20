let nums1 = [1, 4, 11, 2, 37, -4];
let nums2 = [0, 21, 33, 6, 0, -9];
let nums3 = [0, 1, 2, 3, 4, 5];
let addsToZero = false;

for (let i = 0; i < nums1.length; i++) {
    for (let j = i + 1; j < nums1.length; j++) {
        if (nums1[i] + nums1[j] === 0 ) {
            addsToZero = true;
        }
    }
}

console.log(addsToZero);