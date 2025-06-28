# 🎯 Aktivitas Kampus Merdeka Auto-Fill Script

A JavaScript console script to automatically fill the IPB Aktivitas Kampus Merdeka form with predefined values. This tool saves time and reduces errors when filling out repetitive form data.

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Detailed Usage Guide](#-detailed-usage-guide)
- [Configuration](#-configuration)
- [Field Mapping](#-field-mapping)
- [Utility Functions](#-utility-functions)
- [Troubleshooting](#-troubleshooting)
- [Notes & Limitations](#-notes--limitations)

## ✨ Features

- 🚀 **One-click auto-fill** for all major form fields
- ⚙️ **Fully configurable** values via config object
- 🎯 **Smart field detection** with error handling
- 📱 **Select2 compatibility** for dropdown menus
- 🔘 **Radio button support** for choice fields
- 🛠️ **Utility functions** for manual control
- 📊 **Current values display** for verification
- 🧹 **Form clearing** functionality

## 🚀 Quick Start

### Step 1: Open the Form
Navigate to the IPB Aktivitas Kampus Merdeka form in your web browser.

### Step 2: Open Browser Console
- **Chrome/Edge**: Press `F12` or `Ctrl+Shift+I`, then click "Console" tab
- **Firefox**: Press `F12` or `Ctrl+Shift+K`
- **Safari**: Press `Cmd+Option+I` (Mac), then click "Console" tab

### Step 3: Load the Script
1. Copy the entire script from [`src/scrape.js`](src/scrape.js)
2. Paste it into the browser console
3. Press `Enter` to load the script

### Step 4: Run Auto-Fill
Type the following command and press `Enter`:
```javascript
autoFillForm()
```

## 📖 Detailed Usage Guide

### Loading the Script

When you paste and run the script, you'll see confirmation messages:
```
[AutoFill] Form auto-fill script loaded! 🚀
[AutoFill] Commands available:
[AutoFill] - autoFillForm() - Fill form with predefined values
[AutoFill] - formUtils.showCurrentValues() - Show current form values
[AutoFill] - formUtils.clearForm() - Clear all form fields
[AutoFill] - formUtils.setField(fieldName, value) - Set individual field
```

### Running Auto-Fill

Execute the main auto-fill function:
```javascript
autoFillForm()
```

You'll see progress messages as each field is filled:
```
[AutoFill] Starting auto-fill process...
[AutoFill] Setting Tahun Semester...
[AutoFill] Setting Kelompok Kegiatan...
[AutoFill] Setting Nama Kegiatan...
...
[AutoFill] Auto-fill completed successfully! ✅
```

## ⚙️ Configuration

### Basic Configuration

Modify the `config` object at the top of the script to customize values:

```javascript
const config = {
    // Basic Information
    tahunSemester: "111", // 2024/2025 Semester Genap
    kelompokKegiatan: "1", // Magang/Praktek Kerja
    namaKegiatan: "Your Activity Name Here",
    deskripsiKegiatan: "Your detailed activity description...",
    penyelenggara: "Organization Name",
    
    // Location & Dates
    tanggalMulai: "01-01-2025", // DD-MM-YYYY format
    tanggalSelesai: "30-06-2025",
    lokasiKegiatan: "Jakarta, Indonesia",
    
    // Other settings...
};
```

### Common Configuration Examples

#### For Internship (Magang):
```javascript
kelompokKegiatan: "1", // Magang/Praktek Kerja
jabatanSaya: "4", // Peserta
jenisKepesertaan: "false", // Individu
```

#### For Research (Penelitian):
```javascript
kelompokKegiatan: "4", // Penelitian Riset
jabatanSaya: "1", // Ketua
jenisKepesertaan: "true", // Kelompok
```

#### For Teaching (Mengajar):
```javascript
kelompokKegiatan: "3", // Mengajar di sekolah
jabatanSaya: "4", // Peserta
jenisKepesertaan: "false", // Individu
```

## 🗺️ Field Mapping

### Dropdown Values

| Field                 | Key                | Available Values                                                                                             |
| --------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Tahun Semester**    | `tahunSemester`    | `"113"` (2025/2026 Ganjil), `"114"` (2025/2026 Genap), `"111"` (2024/2025 Genap), `"110"` (2024/2025 Ganjil) |
| **Kelompok Kegiatan** | `kelompokKegiatan` | `"1"` (Magang), `"3"` (Mengajar), `"4"` (Penelitian), `"5"` (Proyek Desa), `"11"` (Organisasi)               |
| **Skala Kegiatan**    | `skalaKegiatan`    | `"1"` (Internasional), `"2"` (Nasional), `"6"` (IPB), `"7"` (Fakultas), `"8"` (Departemen)                   |
| **Negara**            | `negara`           | `"98"` (Indonesia), `"125"` (Malaysia), `"192"` (Singapura), `"106"` (Jepang)                                |
| **Jabatan Saya**      | `jabatanSaya`      | `"1"` (Ketua), `"2"` (Wakil Ketua), `"3"` (Anggota), `"4"` (Peserta)                                         |

### Radio Button Values

| Field                    | Key                   | Values                                                |
| ------------------------ | --------------------- | ----------------------------------------------------- |
| **Tipe Penyelenggaraan** | `tipePenyelenggaraan` | `"true"` (Offline), `"false"` (Online), `""` (Hybrid) |
| **Jenis Kepesertaan**    | `jenisKepesertaan`    | `"false"` (Individu), `"true"` (Kelompok)             |

### Text Fields

| Field                  | Key                 | Example                      |
| ---------------------- | ------------------- | ---------------------------- |
| **Nama Kegiatan**      | `namaKegiatan`      | "Program Magang di PT ABC"   |
| **Deskripsi Kegiatan** | `deskripsiKegiatan` | "Program magang 6 bulan..."  |
| **Penyelenggara**      | `penyelenggara`     | "PT Teknologi Indonesia"     |
| **Lokasi Kegiatan**    | `lokasiKegiatan`    | "Jakarta Barat, DKI Jakarta" |
| **Tanggal Mulai**      | `tanggalMulai`      | "01-01-2025" (DD-MM-YYYY)    |
| **Tanggal Selesai**    | `tanggalSelesai`    | "30-06-2025" (DD-MM-YYYY)    |

## 🛠️ Utility Functions

### Show Current Values
Display all current form values in a table format:
```javascript
formUtils.showCurrentValues()
```

### Clear Form
Clear all form fields:
```javascript
formUtils.clearForm()
```

### Set Individual Field
Set a specific field manually:
```javascript
formUtils.setField('namaKegiatan', 'New Activity Name')
formUtils.setField('tahunSemester', '113')
formUtils.setField('tipePenyelenggaraan', 'false') // Online
```

## 🔧 Troubleshooting

### Common Issues

#### Script Not Loading
- **Problem**: No confirmation message appears
- **Solution**: Ensure you copied the entire script and pressed Enter

#### Fields Not Filling
- **Problem**: Some fields remain empty
- **Solution**: Check browser console for error messages. Fields might have different IDs.

#### Select2 Dropdowns Not Updating
- **Problem**: Dropdown shows old value visually
- **Solution**: The script handles this automatically. Check actual field value with `formUtils.showCurrentValues()`

#### Date Format Issues
- **Problem**: Date fields not accepting values
- **Solution**: Ensure dates are in DD-MM-YYYY format (e.g., "25-12-2024")

### Debug Commands

Check if form elements exist:
```javascript
console.log(document.querySelector('#TahunSemesterId')); // Should not be null
console.log(document.querySelector('#KategoriAktivitasKampusMerdekaId')); // Should not be null
```

Verify current form state:
```javascript
formUtils.showCurrentValues()
```

### Browser Compatibility

| Browser | Status             | Notes                      |
| ------- | ------------------ | -------------------------- |
| Chrome  | ✅ Fully Supported  | Recommended                |
| Firefox | ✅ Fully Supported  | Works well                 |
| Edge    | ✅ Fully Supported  | Modern versions            |
| Safari  | ⚠️ Mostly Supported | Some minor issues possible |

## 📝 Notes & Limitations

### What's Included
- ✅ All major form fields (16 fields total)
- ✅ Dropdown selections with Select2 support
- ✅ Radio button selections
- ✅ Text input fields
- ✅ Date input fields
- ✅ Error handling and validation

### What's NOT Included
- ❌ **Soft Skills selection** (requires complex interaction)
- ❌ **Hard Skills selection** (requires complex interaction)
- ❌ **File uploads** (if any)
- ❌ **Dynamic fields** that appear based on other selections

### Important Reminders

1. **Always review** the form before submitting
2. **Test first** on a development/test environment if available
3. **Save your config** if you plan to reuse with different values
4. **Check field accuracy** especially for dates and dropdown selections

### Manual Steps Required

After running the auto-fill script, you'll still need to manually:

1. **Select Soft Skills** from the dropdown/autocomplete field
2. **Select Hard Skills** from the dropdown/autocomplete field
3. **Upload any required documents** (if applicable)
4. **Review all fields** for accuracy
5. **Submit the form**

## 📄 File Structure

```
scrape-autofill-aktivitas/
├── src/
│   ├── scrape.js          # Main auto-fill script
│   └── autofill.js        # (If additional utilities)
├── docs/
│   ├── selector.md        # Field selector documentation
│   └── full_form.html     # Complete form HTML reference
└── README.md             # This guide
```

## 🤝 Contributing

To improve this script:

1. Test with different form configurations
2. Add support for additional fields
3. Improve error handling
4. Add new utility functions

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Verify your browser's developer console for error messages
3. Ensure the form structure hasn't changed
4. Test with a fresh page load

---

**Last Updated**: June 28, 2025  
**Version**: 1.0  
**Compatibility**: IPB Aktivitas Kampus Merdeka Form
