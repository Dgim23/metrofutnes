function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value / 100;

    if (weight && height) {
        let bmi = weight / (height * height);
        document.getElementById('bmi-result').innerText = "Ваш ИМТ: " + bmi.toFixed(2);
    } else {
        document.getElementById('bmi-result').innerText = "Введите данные!";
    }
}