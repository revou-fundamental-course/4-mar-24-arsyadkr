const form = document.querySelector("form");
const hasil = document.querySelector("#hasil");
const pesan = document.querySelector("#pesan");
const gambarContainer = document.querySelector("#gambar-container");
const nasihatContainer = document.querySelector("#nasihat-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const tb = parseInt(document.querySelector("#tb").value);
  const bb = parseInt(document.querySelector("#bb").value);

  if (tb === "" || tb < 0 || isNaN(tb)) {
    hasil.innerHTML = "Berikan tinggi badan yang benar";
  } else if (bb === "" || bb < 0 || isNaN(bb)) {
    hasil.innerHTML = "Berikan berat badan yang benar";
  } else {
    const bmi = (bb / ((tb * tb) / 10000)).toFixed(2);
    hasil.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.5) {
      pesan.innerHTML = "Kekurangan Berat Badan";
      showAdditionalInfo(
        "kurang",
        "https://imgur.com/9GBukNt.jpg",
        "Anda memiliki kekurangan berat badan. Sarankan untuk meningkatkan asupan nutrisi."
      );
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      pesan.innerHTML = "Normal";
      showAdditionalInfo(
        "normal",
        "https://imgur.com/SKoBaI8.jpg",
        "Berat badan Anda normal. Lanjutkan gaya hidup sehat Anda!"
      );
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      pesan.innerHTML = "Kelebihan Berat Badan";
      showAdditionalInfo(
        "berlebih",
        "https://imgur.com/5PBHwHS.jpg",
        "Anda memiliki kelebihan berat badan. Sarankan untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik."
      );
    } else {
      pesan.innerHTML = "Kegemukan Obsesitas";
      showAdditionalInfo(
        "obsesitas",
        "https://imgur.com/f8I0U1w.jpg",
        "Anda memiliki kegemukan obsesitas. Sarankan untuk konsultasi dengan dokter dan mengikuti program penurunan berat badan yang sehat."
      );
    }
  }
});

function showAdditionalInfo(imageType, imageUrl, advice) {
  gambarContainer.innerHTML = `<img src="${imageUrl}" alt="${imageType}">`;
  nasihatContainer.innerHTML = `<p>${advice}</p>`;
}
