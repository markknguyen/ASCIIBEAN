// bean_animation.js

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const rotate = function(x, y, z, a, b) {
    var yOffset = 0.5; 
    y += yOffset;

    var x_rot_y = x * Math.cos(a) - z * Math.sin(a);
    var y_rot_y = y;
    var z_rot_y = x * Math.sin(a) + z * Math.cos(a);

    var x_rot_z = x_rot_y * Math.cos(b) - y_rot_y * Math.sin(b);
    var y_rot_z = x_rot_y * Math.sin(b) + y_rot_y * Math.cos(b);
    var z_rot_z = z_rot_y;

    y_rot_z -= yOffset;

    return {
        x: x_rot_z,
        y: y_rot_z,
        z: z_rot_z
    };
};

let A = 0, B = 0;

const asciiframe = function() {
    var b = Array(2200).fill(' ');
    var z = Array(2200).fill(0);
    for (var k = 0; k < 2200; k++) {
        b[k] = k % 100 == 99 ? "\n" : " ";
        z[k] = 0;
    }
    var chars = ".,-~:;=!*#$@";
    A += 0.07;
    B += 0.03;
    var cA = Math.cos(A), sA = Math.sin(A),
        cB = Math.cos(B), sB = Math.sin(B);
    for (var k = 0; k < 1760; k++) {
        b[k] = k % 80 == 79 ? "\n" : " ";
        z[k] = 0;
    }
    for (var x = -2; x < 2; x += 0.05) {
        for (var y = -2; y < 2; y += 0.05) {
            var z_upper = (1 / 1.3) * Math.sqrt(-(x * x + y * y - 1 / 1.5) * (x * x + y * y - 1 / 1.5) - y);
            var z_lower = -(1 / 1.3) * Math.sqrt(-(x * x + y * y - 1 / 1.5) * (x * x + y * y - 1 / 1.5) - y);
                    
            var rotated_upper = rotate(x, y, z_upper, A, B);
            var rotated_lower = rotate(x, y, z_lower, A, B);
                    
            var ooz_upper = 1 / (1.7 + rotated_upper.z);
            var xp_upper = 0 | (40 + 30 * ooz_upper * rotated_upper.x);
            var yp_upper = 0 | (22 + 15 * ooz_upper * rotated_upper.y); 
            var L_upper = Math.floor(ooz_upper * (chars.length - 1) * 1.3); 
            if (L_upper >= chars.length) L_upper = chars.length - 2;
            var idx_upper = xp_upper + 80 * yp_upper;
            if (1760 > idx_upper && idx_upper >= 0 && ooz_upper > z[idx_upper]) {
                z[idx_upper] = ooz_upper;
                b[idx_upper] = chars.charAt(L_upper);
            }

            var ooz_lower = 1 / (1.7 + rotated_lower.z);
            var xp_lower = 0 | (40 + 30 * ooz_lower * rotated_lower.x);
            var yp_lower = 0 | (22 + 15 * ooz_lower * rotated_lower.y);
            var L_lower = Math.floor(ooz_lower * (chars.length - 1) * 1.3);
            if (L_lower >= chars.length) L_lower = chars.length - 2;
            var idx_lower = xp_lower + 80 * yp_lower;
            if (1760 > idx_lower && idx_lower >= 0 && ooz_lower > z[idx_lower]) {
                z[idx_lower] = ooz_lower;
                b[idx_lower] = chars.charAt(L_lower);
            }
        }
    }
    console.clear();
    console.log(b.join(''));
};

(async function animate() {
    while (true) {
        asciiframe();
        await sleep(50); 
    }
})();
