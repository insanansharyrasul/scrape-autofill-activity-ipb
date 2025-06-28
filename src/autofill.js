// Aktivitas Kampus Merdeka Form Auto-Fill Script

(() => {
    // You can get this part from formUtils.showCurrentValues(), and then copy object
    const config = {
        tahunSemester: "111",
        kelompokKegiatan: "11",
        namaKegiatan: "Ilkomerz Night 2024",
        deskripsiKegiatan: "Ilkomerz Night merupakan program kerja tahunan Himalkom IPB yang berupa ajang apresiasi kepada seluruh mahasiswa Ilmu Komputer dan penampilan-penampilan dari Ilkomerz itu sendiri. Terdapat tujuan utama dalam Ilkomerz Night tahun ini, yaitu sebagai perayaan demisioner kepengurusan Himalkom IPB kabinet Synapse, serta sebagai momen pengakraban Ilkomerz antar angkatan bahkan dengan para alumni dan dosen.\nPada tahun ini, Ilkomerz Night akan diselenggarakan pada hari Sabtu, 14 Desember 2024 dengan lokasi di Auditorium Toyib Hadiwijaya, Fakultas Pertanian, IPB University. Untuk rangkaian acaranya sendiri akan dibagi menjadi 2 sesi. Sesi 1 terdiri dari pembukaan, sambutan-sambutan, pemberian apresiasi ISC, Spirit, Mega Proker, dan Himalkom. Selama sesi 1 ini akan disisipkan pula video, penampilan, nominasi serta game untuk meningkatkan interaksi dengan peserta. Sedangkan pada sesi 2 yaitu sesi puncak akan ada penampilan dari berbagai angkatan, nominasi, serta acara farewell untuk angkatan 57.\n",
        penyelenggara: " Himpunan Mahasiswa Ilmu Komputer ",
        skalaKegiatan: "8",
        mitra: "",
        tanggalMulai: "17/10/2024",
        tanggalSelesai: "14/12/2024",
        negara: "98",
        kotaKabupaten: "122",
        lokasiKegiatan: "Kampus IPB Dramaga, Bogor",
        tipePenyelenggaraan: "true",
        jabatanSaya: "3",
        jumlahPeserta: "265"
    };

    // Utility functions
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const log = (message, type = 'info') => {
        const colors = {
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FF9800',
            error: '#F44336'
        };
        console.log(`%c[AutoFill] ${message}`, `color: ${colors[type]}; font-weight: bold;`);
    };

    const setSelectValue = async (selector, value) => {
        const element = document.querySelector(selector);
        if (!element) {
            log(`Element not found: ${selector}`, 'warning');
            return false;
        }

        element.value = value;
        element.dispatchEvent(new Event('change', { bubbles: true }));

        // Handle Select2 dropdowns
        const select2Container = element.nextElementSibling;
        if (select2Container && select2Container.classList.contains('select2')) {
            const selectedOption = element.querySelector(`option[value="${value}"]`);
            if (selectedOption) {
                const renderedElement = select2Container.querySelector('.select2-selection__rendered');
                if (renderedElement) {
                    renderedElement.textContent = selectedOption.textContent;
                    renderedElement.setAttribute('title', selectedOption.textContent);
                }
            }
        }

        await wait(100);
        return true;
    };

    const setInputValue = async (selector, value) => {
        const element = document.querySelector(selector);
        if (!element) {
            log(`Element not found: ${selector}`, 'warning');
            return false;
        }

        element.value = value;
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
        await wait(100);
        return true;
    };

    const setRadioValue = async (name, value) => {
        const element = document.querySelector(`input[name="${name}"][value="${value}"]`);
        if (!element) {
            log(`Radio button not found: ${name} = ${value}`, 'warning');
            return false;
        }

        element.checked = true;
        element.dispatchEvent(new Event('change', { bubbles: true }));
        await wait(100);
        return true;
    };

    // Main auto-fill function
    const autoFillForm = async () => {
        log('Starting auto-fill process...', 'info');

        try {
            // 1. Tahun Semester
            log('Setting Tahun Semester...');
            await setSelectValue('#TahunSemesterId', config.tahunSemester);

            // 2. Kelompok Kegiatan
            log('Setting Kelompok Kegiatan...');
            await setSelectValue('#KategoriAktivitasKampusMerdekaId', config.kelompokKegiatan);

            // 3. Nama Kegiatan
            log('Setting Nama Kegiatan...');
            await setInputValue('#Judul', config.namaKegiatan);

            // 4. Deskripsi Kegiatan
            log('Setting Deskripsi Kegiatan...');
            await setInputValue('#Deskripsi', config.deskripsiKegiatan);

            // 5. Penyelenggara
            log('Setting Penyelenggara...');
            await setInputValue('#Penyelenggara', config.penyelenggara);

            // 6. Skala Kegiatan
            log('Setting Skala Kegiatan...');
            await setSelectValue('#LevelAktivitasKampusMerdekaId', config.skalaKegiatan);

            // 7. Mitra (optional)
            if (config.mitra) {
                log('Setting Mitra...');
                await setSelectValue('#MitraId', config.mitra);
            }

            // 8. Tanggal Mulai
            log('Setting Tanggal Mulai...');
            await setInputValue('#Tmt', config.tanggalMulai);

            // 9. Tanggal Selesai
            log('Setting Tanggal Selesai...');
            await setInputValue('#Tst', config.tanggalSelesai);

            // 10. Negara
            log('Setting Negara...');
            await setSelectValue('#NegaraId', config.negara);

            // Wait a bit for country-dependent fields to load
            await wait(500);

            // 11. Kota/Kabupaten (only if Indonesia is selected)
            if (config.negara === "98" && config.kotaKabupaten) {
                log('Setting Kota/Kabupaten...');
                await setSelectValue('#KotaKabupatenId', config.kotaKabupaten);
            }

            // 12. Lokasi Kegiatan
            log('Setting Lokasi Kegiatan...');
            await setInputValue('#Lokasi', config.lokasiKegiatan);

            // 13. Tipe Penyelenggaraan
            log('Setting Tipe Penyelenggaraan...');
            await setRadioValue('IsLuring', config.tipePenyelenggaraan);

            // 14. Jenis Kepesertaan
            log('Setting Jenis Kepesertaan...');
            await setRadioValue('IsKelompok', config.jenisKepesertaan);

            // 15. Jabatan Saya
            log('Setting Jabatan Saya...');
            await setSelectValue('#JabatanKeikutSertaanKegiatanId', config.jabatanSaya);

            // 16. Jumlah Peserta
            log('Setting Jumlah Peserta...');
            await setInputValue('#JumlahPeserta', config.jumlahPeserta);

            log('Auto-fill completed successfully! ✅', 'success');
            log('Note: Please review all fields before submitting the form.', 'warning');
            log('Fields not auto-filled: Soft Skills, Hard Skills (these require manual selection)', 'warning');

        } catch (error) {
            log(`Error during auto-fill: ${error.message}`, 'error');
            console.error(error);
        }
    };

    // Helper functions for manual use
    window.formUtils = {
        // Show current form values
        showCurrentValues: () => {
            const values = {
                tahunSemester: document.querySelector('#TahunSemesterId')?.value,
                kelompokKegiatan: document.querySelector('#KategoriAktivitasKampusMerdekaId')?.value,
                namaKegiatan: document.querySelector('#Judul')?.value,
                deskripsiKegiatan: document.querySelector('#Deskripsi')?.value,
                penyelenggara: document.querySelector('#Penyelenggara')?.value,
                skalaKegiatan: document.querySelector('#LevelAktivitasKampusMerdekaId')?.value,
                mitra: document.querySelector('#MitraId')?.value,
                tanggalMulai: document.querySelector('#Tmt')?.value,
                tanggalSelesai: document.querySelector('#Tst')?.value,
                negara: document.querySelector('#NegaraId')?.value,
                kotaKabupaten: document.querySelector('#KotaKabupatenId')?.value,
                lokasiKegiatan: document.querySelector('#Lokasi')?.value,
                tipePenyelenggaraan: document.querySelector('input[name="IsLuring"]:checked')?.value,
                jenisKepesertaan: document.querySelector('input[name="IsKelompok"]:checked')?.value,
                jabatanSaya: document.querySelector('#JabatanKeikutSertaanKegiatanId')?.value,
                jumlahPeserta: document.querySelector('#JumlahPeserta')?.value
            };
            console.table(values);
        },

        // Clear all form fields
        clearForm: () => {
            const inputs = document.querySelectorAll('input[type="text"], textarea, select');
            inputs.forEach(input => {
                input.value = '';
                input.dispatchEvent(new Event('change', { bubbles: true }));
            });
            log('Form cleared', 'info');
        },

        // Set individual field
        setField: async (fieldName, value) => {
            const fieldMap = {
                tahunSemester: '#TahunSemesterId',
                kelompokKegiatan: '#KategoriAktivitasKampusMerdekaId',
                namaKegiatan: '#Judul',
                deskripsiKegiatan: '#Deskripsi',
                penyelenggara: '#Penyelenggara',
                skalaKegiatan: '#LevelAktivitasKampusMerdekaId',
                mitra: '#MitraId',
                tanggalMulai: '#Tmt',
                tanggalSelesai: '#Tst',
                negara: '#NegaraId',
                kotaKabupaten: '#KotaKabupatenId',
                lokasiKegiatan: '#Lokasi',
                jabatanSaya: '#JabatanKeikutSertaanKegiatanId',
                jumlahPeserta: '#JumlahPeserta'
            };

            if (fieldMap[fieldName]) {
                if (fieldName.includes('tanggal') || fieldName === 'namaKegiatan' ||
                    fieldName === 'deskripsiKegiatan' || fieldName === 'penyelenggara' ||
                    fieldName === 'lokasiKegiatan' || fieldName === 'jumlahPeserta') {
                    await setInputValue(fieldMap[fieldName], value);
                } else {
                    await setSelectValue(fieldMap[fieldName], value);
                }
                log(`Set ${fieldName} to: ${value}`, 'success');
            } else if (fieldName === 'tipePenyelenggaraan') {
                await setRadioValue('IsLuring', value);
                log(`Set ${fieldName} to: ${value}`, 'success');
            } else if (fieldName === 'jenisKepesertaan') {
                await setRadioValue('IsKelompok', value);
                log(`Set ${fieldName} to: ${value}`, 'success');
            } else {
                log(`Unknown field: ${fieldName}`, 'error');
            }
        }
    };

    // Show available commands
    log('Form auto-fill script loaded! 🚀', 'success');
    log('Commands available:', 'info');
    log('- autoFillForm() - Fill form with predefined values', 'info');
    log('- formUtils.showCurrentValues() - Show current form values', 'info');
    log('- formUtils.clearForm() - Clear all form fields', 'info');
    log('- formUtils.setField(fieldName, value) - Set individual field', 'info');

    // Make functions globally available
    window.autoFillForm = autoFillForm;

    // Auto-start if you want (uncomment the line below)
    // autoFillForm();

})();

// Uncomment to auto-run immediately:
// autoFillForm();
