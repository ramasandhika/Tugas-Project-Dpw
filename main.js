function pembilang(Num){
    var angka = ["","Satu","Dua","Tiga","Empat","Lima","Enam","Tujuh","Delapan","Sembilan","Sepuluh","Sebelas"];
    var hasil = "" ;
    var n = parseInt(Num) ;
    if(n >- 0, n <= 11){
        hasil = angka[n]
    } else if (n < 20) {
        hasil = pembilang(n -10) + " Belas ";
    } else if (n < 100) {
        hasil = pembilang(n / 10) + " Puluh " + pembilang(n % 10);
    } else if (n < 200) {
        hasil = "Seratus " + pembilang(n - 100);
    } else if (n < 1000) {
        hasil = pembilang(n / 100) + " Ratus " + pembilang(n % 100);
    } else if (n < 2000) {
        hasil = " Seribu " + pembilang(n - 1000);
    } else if (n < 1000000) {
        hasil = pembilang(n / 1000) + " Ribu " + pembilang(n % 1000);
    } else if (n < 1000000000) {
        hasil = pembilang(n / 1000000) + " Juta " + pembilang(n % 1000000);
    } else if (n < 1000000000000) {
        hasil = pembilang( n / 1000000000) + " Milyar " + pembilang(n % 1000000000);
    } else if (n < 1000000000000000) {
        hasil = pembilang(n / 1000000000000) + " Triliyun " + pembilang(n % 1000000000000);
    } else if (n == 1000000000000000) {
        hasil = "Satu Kuadriliun" ;
    } else {
        hasil = "Angka Hanya Sampai Satu Kuadriliun" ;
    }
    return hasil
}


function klik(){
    var kurs = document.getElementById("Kurs").value ;
    var user = document.getElementById("Nominal").value ;
    var temp = pembilang(user) ;
    if(user == 0){
        document.getElementById("Result").innerHTML = 0 + kurs
    } else {
        document.getElementById("Result").innerHTML = temp + kurs
    }
}
