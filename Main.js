const toggleBtn = document.getElementById('mode');
const body = document.body;
const header = document.querySelector('header');
const daftarTugas = document.getElementById('daftarTugas');
const openLinkButton = document.getElementById('openLinkButton');
const love = "love.html"; // Ganti dengan tautan yang sesuai



toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    daftarTugas.classList.toggle('dark-mode');
});

document.getElementById('formTugas').addEventListener('submit', function (event) {
    event.preventDefault(); // Menghentikan pengiriman form (refresh halaman)

    let mataPelajaran = document.getElementById('mataPelajaran').value;
    let infoTugas = document.querySelector('input[name="infoTugas"]:checked').value;
    let tenggat = document.getElementById('tenggat').value;
    checkAndShowButton(tenggat);
    let keterangan = document.getElementById('keterangan').value.trim();

    if (mataPelajaran !== '' && tenggat !== '') {
        tambahTugasKeDaftar(mataPelajaran, infoTugas, tenggat, keterangan);
        document.getElementById('formTugas').reset(); // Mengosongkan form setelah disimpan
    }
});

function tambahTugasKeDaftar(mataPelajaran, infoTugas, tenggat, keterangan) {
    let daftarTugas = document.getElementById('daftarTugas');
    let li = document.createElement('li');

    li.textContent = `#${mataPelajaran}
                    #${infoTugas}
                    Tenggat: ${tenggat}
                    Keterangan: ${keterangan}`;

    daftarTugas.appendChild(li);
}
// menyalin teks ke clipboard
function salinTeks(tekstosalin) {
    const tempInput = document.createElement('textarea');
    tempInput.value = tekstosalin;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

// membuat tombol "Salin" pada hasil/elemen li
function tambahTombolSalin(liElement) {
    const salinButton = document.createElement('button');
    salinButton.textContent = 'Salin';
    salinButton.classList.add('salin-btn');
    liElement.appendChild(salinButton);
}

// Menambahkan event listener untuk tombol "Salin" pada setiap li
daftarTugas.addEventListener('click', function(event) {
    if (event.target.classList.contains('salin-btn')) {
        const liElement = event.target.closest('li');
        const tugasText = liElement.textContent.trim();
        salinTeks(tugasText);
    }
});

// Fungsi tambahTugasKeDaftar diperbarui untuk menyertakan tombol "Salin"
function tambahTugasKeDaftar(mataPelajaran, infoTugas, tenggat, keterangan) {
    let daftarTugas = document.getElementById('daftarTugas');
    let li = document.createElement('li');

    li.textContent = `#${mataPelajaran}
                    #${infoTugas}
                    Tenggat: ${tenggat}
                    Keterangan: ${keterangan}`;
    
    tambahTombolSalin(li);

    daftarTugas.appendChild(li);
}
// Fungsi untuk menyalin teks ke clipboard
function salinTeks(tekstosalin) {
    const tempInput = document.createElement('textarea');
    tempInput.value = tekstosalin;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

// Fungsi untuk menghasilkan format teks yang sesuai
function formatTugasText(mataPelajaran, infoTugas, tenggat, keterangan) {
    return `#${mataPelajaran}\n#${infoTugas}\nTenggat: ${tenggat}\nKeterangan: ${keterangan}`;
}

// Menambahkan event listener untuk tombol "Salin" pada setiap li
daftarTugas.addEventListener('click', function(event) {
    if (event.target.classList.contains('salin-btn')) {
        const liElement = event.target.closest('li');
        const mataPelajaran = liElement.querySelector('.mata-pelajaran').textContent.trim();
        const infoTugas = liElement.querySelector('.info-tugas').textContent.trim();
        const tenggat = liElement.querySelector('.tenggat').textContent.trim();
        const keterangan = liElement.querySelector('.keterangan').textContent.trim();
        const formattedText = formatTugasText(mataPelajaran, infoTugas, tenggat, keterangan);
        salinTeks(formattedText);
    }
});

// Fungsi tambahTugasKeDaftar diperbarui untuk menyertakan tombol "Salin"
function tambahTugasKeDaftar(mataPelajaran, infoTugas, tenggat, keterangan) {
    let daftarTugas = document.getElementById('daftarTugas');
    let li = document.createElement('li');
    
    const formattedText = formatTugasText(mataPelajaran, infoTugas, tenggat, keterangan);

    li.innerHTML = `<span class="mata-pelajaran">#${mataPelajaran}</span>
                    <span class="info-tugas">#${infoTugas}</span>
                    <span class="tenggat">Tenggat: ${tenggat}</span>
                    <span class="keterangan">Keterangan: ${keterangan}</span>`;
    
    const salinButton = document.createElement('button');
    salinButton.textContent = 'Salin';
    salinButton.classList.add('salin-btn');
    li.appendChild(salinButton);

    daftarTugas.appendChild(li);
}
// Fungsi untuk menyalin teks ke clipboard
function salinTeks(tekstosalin) {
    const tempInput = document.createElement('textarea');
    tempInput.value = tekstosalin;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

// Fungsi untuk menghasilkan format teks yang sesuai
function formatTugasText(mataPelajaran, infoTugas, tenggat, keterangan) {
    return `#${mataPelajaran}\n#${infoTugas}\nTenggat:${tenggat}\nKeterangan: ${keterangan}`;
}

// Menambahkan event listener untuk tombol "Salin" pada setiap li
daftarTugas.addEventListener('click', function(event) {
    if (event.target.classList.contains('salin-btn')) {
        const liElement = event.target.closest('li');
        const mataPelajaran = liElement.querySelector('.mata-pelajaran').textContent.trim();
        const infoTugas = liElement.querySelector('.info-tugas').textContent.trim();
        const tenggat = liElement.querySelector('.tenggat').textContent.trim();
        const keterangan = liElement.querySelector('.keterangan').textContent.trim();
        const formattedText = formatTugasText(mataPelajaran, infoTugas, tenggat, keterangan);
        salinTeks(formattedText);
    }
});

// Fungsi untuk menyalin teks ke clipboard
function salinTeks(tekstosalin) {
    const tempInput = document.createElement('textarea');
    tempInput.value = tekstosalin;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

// Fungsi untuk menghasilkan format teks yang sesuai
function formatTugasText(mataPelajaran, infoTugas, tenggat, keterangan) {
    return `#${mataPelajaran}\n#${infoTugas}\nTenggat: ${tenggat}\nKeterangan: ${keterangan}`;
}

// Menambahkan event listener untuk tombol "Salin" pada setiap li
daftarTugas.addEventListener('click', function(event) {
    if (event.target.classList.contains('salin-btn')) {
        const liElement = event.target.closest('li');
        const mataPelajaran = liElement.querySelector('.mata-pelajaran').textContent.trim();
        const infoTugas = liElement.querySelector('.info-tugas').textContent.trim();
        const tenggat = liElement.querySelector('.tenggat').textContent.trim();
        const keterangan = liElement.querySelector('.keterangan').textContent.trim();
        const formattedText = formatTugasText(mataPelajaran, infoTugas, tenggat, keterangan);
        salinTeks(formattedText);
    }
});

// Fungsi tambahTugasKeDaftar diperbarui untuk menyertakan tombol "Salin"
function tambahTugasKeDaftar(mataPelajaran, infoTugas, tenggat, keterangan) {
    let daftarTugas = document.getElementById('daftarTugas');
    let li = document.createElement('li');
    
    const formattedText = formatTugasText(mataPelajaran, infoTugas, tenggat, keterangan);

    li.innerHTML = `<span class="mata-pelajaran">${mataPelajaran}</span>
                    <span class="info-tugas">${infoTugas}</span>
                    <span class="tenggat">Tenggat: ${tenggat}</span>
                    <span class="keterangan">Keterangan: ${keterangan}</span>`;
    
    const salinButton = document.createElement('button');
    salinButton.textContent = 'Salin';
    salinButton.classList.add('salin-btn');
    li.appendChild(salinButton);

    daftarTugas.appendChild(li);
}

function tambahTugasKeDaftar(mataPelajaran, infoTugas, tenggat, keterangan) {
    let daftarTugas = document.getElementById('daftarTugas');
    let li = document.createElement('li');
    
    // Mengubah format tanggal dari yyyy-mm-dd menjadi dd/mm/yyyy
    const tanggalArray = tenggat.split('-');
    const tanggalFormatted = `${tanggalArray[2]}/${tanggalArray[1]}/${tanggalArray[0]}`;

    li.innerHTML = `<span class="mata-pelajaran">${mataPelajaran}</span>
                    <span class="info-tugas">${infoTugas}</span>
                    <span class="tenggat">Tenggat: ${tanggalFormatted}</span>
                    <span class="keterangan">Keterangan: ${keterangan}</span>`;
    
    const salinButton = document.createElement('button');
    salinButton.textContent = 'Salin';
    salinButton.classList.add('salin-btn');
    li.appendChild(salinButton);

    daftarTugas.appendChild(li);
}

daftarTugas.addEventListener('click', function(event) {
    if (event.target.classList.contains('salin-btn')) {
        const liElement = event.target.closest('li');
        const mataPelajaran = liElement.querySelector('.mata-pelajaran').textContent;
        const infoTugas = liElement.querySelector('.info-tugas').textContent;
        const tenggat = liElement.querySelector('.tenggat').textContent.replace('Tenggat: ', '');
        const keterangan = liElement.querySelector('.keterangan').textContent.replace('Keterangan: ', '');
        const formattedText = formatTugasText(mataPelajaran, infoTugas, tenggat, keterangan);
        salinTeks(formattedText);
    }
});

function formatTugasText(mataPelajaran, infoTugas, tenggat, keterangan) {
    return `#${mataPelajaran}\n#${infoTugas}\nTenggat: ${tenggat}\nKeterangan: ${keterangan}`;
}

function salinTeks(tekstosalin) {
    const tempInput = document.createElement('textarea');
    tempInput.value = tekstosalin;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

function checkAndShowButton(tenggat) {
    const targetTanggal = new Date('2006-05-20'); // Ganti dengan tanggal target yang diinginkan
    const inputTanggal = new Date(tenggat);

    if (inputTanggal.getTime() === targetTanggal.getTime()) {
        openLinkButton.style.display = 'block'; // Tampilkan tombol jika tanggal sesuai
    } else {
        openLinkButton.style.display = 'none'; // Sembunyikan tombol jika tanggal tidak sesuai
    }
}

openLinkButton.addEventListener('click', function() {
    window.open(love, '_blank'); // Buka tautan dalam jendela/tab baru
});

console.log("apa yang kamu cari ?");
var kesayangan = "https://drive.google.com/file/d/1-VmIENBS_8B2woDEpcB6y5BMA0iSuCDz/view?usp=sharing"
