window.onload = function () {
    let btn = document.getElementById('btn');
    btn.addEventListener("click", function() {
        functions.init();
    })
}

const functions = {
    kmp : (resultString) => {
        let pi = new Array(resultString.length).fill(0);

        for (let i = 1; i < resultString.length; i++) {
            let j = pi[i-1];

            while ((j > 0) && (resultString[i] != resultString[j])) {
                j = pi[j - 1];
            }

            if (resultString[i] == resultString[j]) {
                j++;
            }

            pi[i] = j;
        }
        return pi;
    },

    findIndex: (str, substr) => {
        let resultString = substr + "$" + str;
        let indexArray = [];
        let treatment = functions.kmp(resultString);

        for (let i = 0; i < treatment.length; i++) {
            if (treatment[i] == substr.length) {
                indexArray.push(i - 2 * substr.length);
            }
        }
        return indexArray;
    },

    init: () => {
        let inputA = '';
        let pInput = document.getElementById('p-input');
        let tInput = document.getElementById('t-input');

        let str = tInput.value;
        let substr = pInput.value;
        let answ = functions.findIndex(str, substr);

        if (answ.length == 0) {
            inputA = "-1";
        } else {
            inputA = answ.join(",");
        }

        document.getElementById('dv-answ').innerHTML = inputA;
    }
};

module.exports = functions;
