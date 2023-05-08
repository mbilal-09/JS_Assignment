var num = [24, 53, 78, 91, 12];
var a = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] > a) {
        a = num[i]
    }
}
alert(a)