// Simple interactive script for demo: renders list and quiz, adds nav toggle
// document.addEventListener('DOMContentLoaded', () => {
//   // NAV TOGGLE (mobile)
//   const navToggle = document.querySelector('.nav-toggle');
//   const mainNav = document.getElementById('main-nav');
//   navToggle.addEventListener('click', () => {
//     const expanded = navToggle.getAttribute('aria-expanded') === 'true';
//     navToggle.setAttribute('aria-expanded', String(!expanded));
//     if (expanded) {
//       mainNav.hidden = true;
//     } else {
//       mainNav.hidden = false;
//     }
//   });

// Data for macam-macam prisma
const data = [
  {
    nama: "Prisma Segitiga",
    image:
      "https://cdn-web-2.ruangguru.com/landing-pages/assets/19eadb1e-174d-4063-9d59-a727b01cec5c.png",
    deskripsi: "Alas dan tutup berbentuk segitiga; total sisi = 5.",
  },
  {
    nama: "Prisma Segiempat",
    image:
      "https://cdn-web-2.ruangguru.com/landing-pages/assets/dd0baa77-e5af-4ab7-b59e-52d604164746.png",
    deskripsi:
      "Alas dan tutup berbentuk segiempat; total sisi = 6 (termasuk balok dan kubus).",
  },
  {
    nama: "Prisma Segilima",
    image:
      "https://cdn-web-2.ruangguru.com/landing-pages/assets/fd59cb69-4c8f-41f3-a8cd-652958a2de46.png",
    deskripsi: "Alas dan tutup berbentuk segilima; total sisi = 7.",
  },
  {
    nama: "Prisma Segienam",
    image:
      "https://cdn-web-2.ruangguru.com/landing-pages/assets/717c8997-e616-4efe-b4e1-e8f731044a47.png",
    deskripsi: "Alas dan tutup berbentuk segienam; total sisi = 8.",
  },

  {
    nama: "Tabung (prisma melengkung)",
    image:
      "https://cdn-web-2.ruangguru.com/landing-pages/assets/2ac82f82-9a48-465b-b099-4a552178034d.png",
    deskripsi:
      "Tabung mempunyai alas dan tutup lingkaran; sisi tegak berupa selimut.",
  },
];

const listContainer = document.getElementById("list");
listContainer.innerHTML = data
  .map(
    (p) => `\
    <li>\
      <h4>${p.nama}</h4>\
      <img src="${p.image}" alt="Gambar ${p.nama}">\
      <p>${p.deskripsi}</p>\
    </li>`
  )
  .join("");

// QUIZ
const questions = [
  {
    id: "q1",
    text: "1. Prisma dengan alas segilima (n=5) memiliki berapa jumlah RUSUK?",
    options: [
      { v: "10", l: "A. 10" },
      { v: "7", l: "B. 7" },
      { v: "15", l: "C. 15" },
      { v: "12", l: "D. 12" },
    ],
    correct: "15",
  },
  {
    id: "q2",
    text: "2. Sebuah prisma segitiga (n=3) memiliki total berapa SISI?",
    options: [
      { v: "3", l: "A. 3" },
      { v: "9", l: "B. 9" },
      { v: "6", l: "C. 6" },
      { v: "5", l: "D. 5" },
    ],
    correct: "5",
  },
  {
    id: "q3",
    text: "3. Manakah benda di sekitar kita yang bentuknya paling mendekati prisma segitiga?",
    options: [
      { v: "Bola sepak", l: "A. Bola sepak" },
      { v: "Atap rumah", l: "B. Atap rumah" },
      { v: "Topi ulang tahun", l: "C. Topi ulang tahun" },
      { v: "Kaleng susu", l: "D. Kaleng susu" },
    ],
    correct: "Atap rumah",
  },
];

const quizForm = document.getElementById("quizForm");
quizForm.innerHTML =
  questions
    .map(
      (q) => `\
    <div class="question-block">\
      <p>${q.text}</p>\
      <div class="options-group">\
        ${q.options
          .map(
            (opt, i) =>
              `<label><input type="radio" name="${q.id}" value="${opt.v}"> ${opt.l}</label>`
          )
          .join("")}\
      </div>\
    </div>`
    )
    .join("") +
  '<button type="submit" class="submit-button">Kumpulkan Jawaban!</button>';

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const results = [];
  questions.forEach((q, i) => {
    const sel = quizForm.querySelector(`input[name="${q.id}"]:checked`);
    if (sel) {
      if (sel.value === q.correct) {
        score++;
        results.push(`${i + 1}. Benar`);
      } else {
        results.push(
          `${i + 1}. Salah (jawaban: ${sel.value}, benar: ${q.correct})`
        );
      }
    } else {
      results.push(`${i + 1}. Belum dijawab`);
    }
  });
  alert(`Hasil: ${score}/${questions.length}\n\n${results.join("\n")}`);
});
// });
