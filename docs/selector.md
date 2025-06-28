1. Tahun Semester
Selector: #TahunSemesterId

Values:

113: 2025/2026 Semester Ganjil
114: 2025/2026 Semester Genap
110: 2024/2025 Semester Ganjil
111: 2024/2025 Semester Genap
107: 2023/2024 Semester Ganjil

2. Kelompok Kegiatan
Selector: #KategoriAktivitasKampusMerdekaId

Values:
1: Magang/Praktek Kerja
3: Mengajar di sekolah
4: Penelitian Riset
5: Proyek Desa
11: Organisasi/Kepanitiaan

3. Nama Kegiatan
Selector: #Judul
Note: This is a standard text input field.

4. Deskripsi Kegiatan
Selector: #Deskripsi
Note: This is a standard textarea field.

5. Penyelenggara
Selector: #Penyelenggara
Note: This is a standard text input field.

6. Skala Kegiatan
Selector: #LevelAktivitasKampusMerdekaId

Values:
1: Internasional (> 3 Negara)
2: Nasional (>5 Provinsi)
6: IPB
7: Fakultas
8: Departemen

7. Mitra
Selector: #MitraId
4: Bank Indonesia
15: Kementerian Komunikasi dan Informatika
103: PT Kimia Farma Tbk

8. Soft Skill & Hard Skill
Selectors: #ListSoftSkillId and #ListHardSkillSelected
Note: These are complex, multi-select fields that are likely populated dynamically with JavaScript after you type. Automating these is advanced and would require a different approach than simple value setting.

9. Waktu Kegiatan
Tanggal Mulai Selector: #Tmt
Tanggal Selesai Selector: #Tst
Note: These are date input fields. You'll likely need to provide the date as a string in the format the field expects (e.g., "DD-MM-YYYY").

10. Negara
Selector: #NegaraId
Values:

98: Indonesia (Indonesia)
125: Malaysia (Malaysia)
192: Singapura (Singapore)
106: Jepang (Japan)

11. Kota Kabupaten (Only visible if Negara is Indonesia)
Selector: #KotaKabupatenId
Note: This dropdown's options are loaded based on the selected country. Example values:

122: Kabupaten Bogor - Provinsi Jawa Barat
104: Kota Jakarta Barat - Provinsi Dki Jakarta
140: Kota Bandung - Provinsi Jawa Barat

12. Lokasi Kegiatan
Selector: #Lokasi
Note: This is a standard text input field.

13. Tipe Penyelenggaraan
Selector: [name="IsLuring"]
Note: This is a radio button group. To select one, you find the specific input and use .click().

Hybrid: document.querySelector('[name="IsLuring"][value=""]')
Offline: document.querySelector('[name="IsLuring"][value="true"]')
Online: document.querySelector('[name="IsLuring"][value="false"]')

14. Jenis Kepesertaan
Selector: [name="IsKelompok"]

Note: This is also a radio button group.
Individu: document.querySelector('#IsKelompokFalse')
Kelompok: document.querySelector('#IsKelompokTrue')

15. Jabatan Saya
Selector: #JabatanKeikutSertaanKegiatanId
Values:
1: Ketua
2: Wakil Ketua
3: Anggota
4: Peserta

16. Jumlah Peserta
Selector: #JumlahPeserta
Note: This is a number input field.