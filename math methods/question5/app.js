var value = Math.ceil(Math.random() * 2);

if (value == 2) {
    document.getElementById("result").innerText = value + "\n Random Coin Value : Heads";
} else if (value == 1) {
    document.getElementById("result").innerText = value + "\n Random Coin Value : Tails";
}