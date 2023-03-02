alert('GAME TEBAK ANGKA! \nTebak Angka 1 - 10 \nKamu Punya 3 Kesempatan');

const angkaYangBenar = Math.floor(Math.random() * 10) + 1;

for (let nyawa = 3; nyawa >= 1; nyawa--) {

    const angkaTebakan = prompt('Masukkan tebakan angka');

    if(angkaTebakan == angkaYangBenar){
        alert(`Tebakan anda BENAR! \nAngka yang dicari adalah : ${angkaYangBenar}`);
        break;
    } else if(angkaTebakan > angkaYangBenar){
        alert(`Tebakan anda terlalu TINGGI! \nAnda masih punya ${nyawa - 1} kesempatan`);
    } else if(angkaTebakan < angkaYangBenar){
        alert(`Tebakan anda terlalu RENDAH! \nAnda masih punya ${nyawa - 1} kesempatan`);
    }

    if(nyawa == 1){
        alert(`Anda GAGAL! \nAngka yang dicari adalah : ${angkaYangBenar}`);
    }
}
