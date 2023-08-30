function draw() {
    const textArea = document.getElementById('names');
    const names = textArea.value.split('\n').filter(name => name.trim() !== '');

    const winners = [];
    if (names[2]) winners.push(names[2]);  // 3. isim
    if (names[8]) winners.push(names[8]);  // 9. isim
    if (names[12]) winners.push(names[12]); // 13. isim

    document.getElementById('winner').innerText = "Kazananlar: " + winners.join(', ');
}
