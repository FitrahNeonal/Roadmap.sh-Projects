const changelogData = [
  {
    version: "v2.1.0",
    date: "24 Mei 2024",
    changes: [
      "Menambahkan fitur dark mode",
      "Perbaikan performa pada halaman dashboard",
      "Update dokumentasi API"
    ]
  },
  {
    version: "v2.0.5",
    date: "10 Mei 2024",
    changes: [
      "Fix bug pada tombol login",
      "Menambahkan validasi input email",
      "Perbaikan typo pada halaman home"
    ]
  },
  {
    version: "v2.0.0",
    date: "1 Mei 2024",
    changes: [
      "Rilis besar fitur baru analytics",
      "Redesign tampilan utama",
      "Integrasi dengan payment gateway"
    ]
  }
];

// Coba cek di console browser untuk memastikan data sudah ada
console.log("Data Changelog:", changelogData);

// Ambil elemen container dari HTML
const container = document.getElementById('changelog-container');

// Fungsi untuk membuat HTML setiap item changelog
function renderChangelog(data) {
  // Loop melalui setiap item di data
  data.forEach(item => {
    // 1. Buat elemen pembungkus (card)
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('changelog-item');

    // 2. Buat bagian header (version & date)
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('item-header');

    const versionSpan = document.createElement('span');
    versionSpan.classList.add('version-badge');
    versionSpan.textContent = item.version;

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('item-date');
    dateSpan.textContent = item.date;

    // 3. Buat list perubahan
    const ul = document.createElement('ul');
    ul.classList.add('changes-list');

    item.changes.forEach(change => {
      const li = document.createElement('li');
      li.textContent = change;
      ul.appendChild(li);
    });

    // 4. Gabungkan semua elemen
    headerDiv.appendChild(versionSpan);
    headerDiv.appendChild(dateSpan);
    itemDiv.appendChild(headerDiv);
    itemDiv.appendChild(ul);

    // 5. Masukkan ke dalam container utama
    container.appendChild(itemDiv);
  });
}

// Jalankan fungsi render
renderChangelog(changelogData);