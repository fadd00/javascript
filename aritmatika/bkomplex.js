// Membuat kelas BilanganKompleks
class BilanganKompleks {
    constructor(real, imaginari) {
        this.real = real;
        this.imaginari = imaginari;
    }

    // Operasi tambah bilangan kompleks
    tambah(bilKompleks) {
        let real = this.real + bilKompleks.real;
        let imaginari = this.imaginari + bilKompleks.imaginari;
        return new BilanganKompleks(real, imaginari);
    }

    // Operasi kurang bilangan kompleks
    kurang(bilKompleks) {
        let real = this.real - bilKompleks.real;
        let imaginari = this.imaginari - bilKompleks.imaginari;
        return new BilanganKompleks(real, imaginari);
    }

    // Operasi kali bilangan kompleks
    kali(bilKompleks) {
        let real = this.real * bilKompleks.real - this.imaginari * bilKompleks.imaginari;
        let imaginari = this.real * bilKompleks.imaginari + this.imaginari * bilKompleks.real;
        return new BilanganKompleks(real, imaginari);
    }

    // Operasi bagi bilangan kompleks
    bagi(bilKompleks) {
        let a = this.real;
        let b = this.imaginari;
        let c = bilKompleks.real;
        let d = bilKompleks.imaginari;

        let real = (a * c + b * d) / (c * c + d * d);
        let imaginari = (b * c - a * d) / (c * c + d * d);
        return new BilanganKompleks(real, imaginari);
    }

    // Menampilkan bilangan kompleks
    tampil() {
        if (this.imaginari == 0) {
            return this.real;
        } else if (this.real == 0) {
            return this.imaginari + "i";
        } else {
            return this.real + " + " + this.imaginari + "i";
        }
    }
}

// Contoh penggunaan
let bil1 = new BilanganKompleks(2, 3);
let bil2 = new BilanganKompleks(1, 2);
console.log("Tambah: ", bil1.tambah(bil2).tampil());
console.log("Kurang: ", bil1.kurang(bil2).tampil());
console.log("Kali: ", bil1.kali(bil2).tampil());
console.log("Bagi: ", bil1.bagi(bil2).tampil());