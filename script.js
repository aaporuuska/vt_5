'use strict';

let rand_num1 = 0;
let rand_num2 = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1, 10);
    rand_num2 = getRandomIntNumberInRange(1, 10);
    document.querySelector('#num1').innerHTML = rand_num1;
    document.querySelector('#num2').innerHTML = rand_num2;
};

const updateScore = () => {
    document.getElementById('correctAnswers').textContent = `Correct answers ${correctAnswers}`;
    document.getElementById('wrongAnswers').textContent = `Wrong answers ${wrongAnswers}`;
};

document.addEventListener("DOMContentLoaded", () => {
    randomizeNumbers();
});

document.querySelector('button').addEventListener('click', () => {
    const userAnswer = Number(document.getElementById('userAnswer').value);
    const correctAnswer = rand_num1 + rand_num2;
    if (userAnswer === correctAnswer) {
        correctAnswers++;
        alert('Correct!');
    } else {
        wrongAnswers++;
        alert('Incorrect!');
    }
    updateScore();
    randomizeNumbers();
    document.getElementById('userAnswer').value = '';
});