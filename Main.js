const toggleBtn = document.getElementById('mode');
const body = document.body;
const header = document.querySelector('header');
const daftarTugas = document.getElementById('daftarTugas');
const openLinkButton = document.getElementById('openLinkButton');
const love = "egg/love.html"; // Ganti dengan tautan yang sesuai
const hapusSemuaButton = document.getElementById('hapusSemuaBtn');

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    daftarTugas.classList.toggle('dark-mode');
});

document.getElementById('formTugas').addEventListener('submit', function(event) {
    event.preventDefault();

    let mataPelajaran = document.getElementById('mataPelajaran').value;
    let infoTugas = document.querySelector('input[name="infoTugas"]:checked').value;
    let tenggat = document.getElementById('tenggat').value;
    checkAndShowButton(tenggat);
    let keterangan = document.getElementById('keterangan').value.trim();

    if (mataPelajaran !== '' && tenggat !== '') {
        tambahTugasKeDaftar(mataPelajaran, infoTugas, tenggat, keterangan);
        document.getElementById('formTugas').reset();
    }
});

function tambahTugasKeDaftar(mataPelajaran, infoTugas, tenggat, keterangan) {
    Array.from(daftarTugas.children).forEach(li => {
        const existingMapel = li.querySelector('.mata-pelajaran').textContent;
        const existingInfoTugas = li.querySelector('.info-tugas').textContent;
        const existingTenggat = li.querySelector('.tenggat').textContent.replace('Tenggat: ', '');
        const existingKeterangan = li.querySelector('.keterangan').textContent.replace('Keterangan: ', '');

        if (
            existingMapel === mataPelajaran &&
            existingInfoTugas === infoTugas &&
            existingTenggat === tenggat &&
            existingKeterangan === keterangan
        ) {
            li.remove();
        }
    });

    let li = document.createElement('li');
    li.innerHTML = `<span class="mata-pelajaran">${mataPelajaran}</span>
                    <span class="info-tugas">${infoTugas}</span>
                    <span class="tenggat">Tenggat: ${formatTanggal(tenggat)}</span>
                    <span class="keterangan">Keterangan: ${keterangan}</span>`;

    const salinButton = document.createElement('button');
    salinButton.textContent = 'Salin';
    salinButton.classList.add('salin-btn');
    li.appendChild(salinButton);

    const hapusButton = document.createElement('button');
    hapusButton.textContent = 'Hapus';
    hapusButton.classList.add('hapus-btn');
    li.appendChild(hapusButton);

    daftarTugas.appendChild(li);

    const tugas = {
        mataPelajaran,
        infoTugas,
        tenggat,
        keterangan
    };

    const existingData = JSON.parse(localStorage.getItem('daftarTugas')) || [];
    const updatedData = existingData.filter(tugasData => {
        return (
            tugasData.mataPelajaran !== mataPelajaran ||
            tugasData.infoTugas !== infoTugas ||
            tugasData.tenggat !== tenggat ||
            tugasData.keterangan !== keterangan
        );
    });
    updatedData.push(tugas);
    localStorage.setItem('daftarTugas', JSON.stringify(updatedData));
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
    } else if (event.target.classList.contains('hapus-btn')) {
        const liElement = event.target.closest('li');
        const id = liElement.dataset.id;
        hapusTugas(id);

        liElement.remove();
    }
});

hapusSemuaButton.addEventListener('click', function() {
    const daftarTugas = document.getElementById('daftarTugas');
    while (daftarTugas.firstChild) {
        daftarTugas.removeChild(daftarTugas.firstChild);
    }
    localStorage.removeItem('daftarTugas');
});

function hapusTugas(id) {
    const existingData = JSON.parse(localStorage.getItem('daftarTugas')) || [];
    const updatedData = existingData.filter(tugas => tugas.id !== id);
    localStorage.setItem('daftarTugas', JSON.stringify(updatedData));
}

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

document.addEventListener('DOMContentLoaded', function() {
    const existingData = JSON.parse(localStorage.getItem('daftarTugas')) || [];

    existingData.forEach(tugas => {
        tambahTugasKeDaftar(tugas.mataPelajaran, tugas.infoTugas, tugas.tenggat, tugas.keterangan);
    });
});

function formatTanggal(tanggal) {
    const tanggalArray = tanggal.split('-');
    const tanggalFormatted = `${tanggalArray[2]}/${tanggalArray[1]}/${tanggalArray[0]}`;
    return tanggalFormatted;
}

function checkAndShowButton(tenggat) {
    const targetTanggal = new Date('2006-05-20');
    const inputTanggal = new Date(tenggat);

    if (inputTanggal.getTime() === targetTanggal.getTime()) {
        openLinkButton.style.display = 'block';
    } else {
        openLinkButton.style.display = 'none';
    }
}

openLinkButton.addEventListener('click', function() {
    window.open(love, '_blank');
});


var help = "write "update" to see what new, and write "indev" to see what is next update, or you can type "all" to see both"
var update = `update :\n1.local storage\n2.hapus button\n3.hapus semua button\n4.bug fixed\n`;
var indev = `\nindev:\n1.membuat tugas yang bisa upload dan download/bisa di lihat orang lain\n2.membuat tampilan pilihan antara kelas X,XI,XII\n3.membuat login page agar pihak tertentu dapet mengedit\n`;
var all = console.log(update + indev)
