function solution(weights) {
    var answer = 0;
    const cal = [3/2, 2, 4/3];
    const weightsList = new Map();
    
    weights.sort((a, b) => a - b).forEach((element) => {
        if (!weightsList.has(element)) {
            weightsList.set(element, 1);
        }
        else {
            weightsList.set(element, weightsList.get(element) + 1);
        }
    });

    for (let weight of weightsList.keys()) {
        let num = weightsList.get(weight);

        if (num > 1) {
            answer += parseInt(num * (num - 1) / 2);
        }

        cal.forEach((c) => {
            let temp = weight * c;

            if (weightsList.has(temp)) {
                answer += num * weightsList.get(temp);
            }
        });
    }
    return answer;
}

const weights = [100, 180, 360, 100, 270];
console.log(solution(weights));