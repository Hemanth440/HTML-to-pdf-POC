function memo(func) {
    var cache = {};
    return function () {
        var key = JSON.stringify(arguments);
        if (cache[key]) {
            return cache[key];
        } else {
            var val = func.apply(this, arguments);
            cache[key] = val;
            return val;
        }
    }
}

function TenPowerToOne(n) {
    if (n === 0) {
        return 0;
    }

    return Math.pow(10, n) + TenPowerToOne(n-1);
}

function countInCBNS(num) {
    if (num < 1) {
        return 0;
    } else if (num === 1) {
        return 2;
    }

    var combinations = [];
    var lastCombination = Math.pow(10, num - 1) + num > 1 ? Number.parseInt('1'.repeat(num)) : 0;
    combinations.push(lastCombination.toString());
    for (var pow = 1, val = -1; val > -lastCombination;) {
        console.log('val', val);
        var finalVal = (lastCombination + val).toString();
        console.log('finalVal', finalVal);
        finalVal = "0".repeat(num-finalVal.length) + finalVal;
        if (!finalVal.includes('00')) {
            combinations.push(finalVal);
        }

        if (val % 100 === 0) {
            val = val - 1;
        } else if (val % 10 === 0) {
            pow += 1;
            if (pow < num) {
                console.log('pow', pow);
                var minusVal = Math.pow(10, pow) - memo(TenPowerToOne)(pow - 1);     
                console.log('minusVal', minusVal);
                val = val - minusVal
                console.log('val', val);
            } else {
                break;
            }           
        } else {
            val = val - 9;
        }
    }

    return combinations;
}