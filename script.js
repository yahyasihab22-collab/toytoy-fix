const message = `hmm.. aku gatau harus mulai darimana, aku bener bener minta maaf sama kesalahan aku waktu itu, aku sadar bahwa aku ga ngehargain waktu dimana kita bisa main bareng bareng, selalu buka hp kalo lagi kumpul sama kalian, bahkan mungkin kesalahan aku ga cuman itu, banyak yang dimaklumin sama kalian.

kalian sampe ngerasa aku kaya terpaksa main sama kalian, itu ga bener yaa, meskipun aku kalau main keliatannya kaya ga excited atau apa, tapi aku selalu enjoy kalau main bareng kalian.

maaf aku ga ngertiin kalian, egois dan apatis, aku juga makasih karna kalian ngertiin aku. sekali lagi aku minta maaf sama kesalahanku kemarin, kalo tau ini kejadian mah aku harusnya gaikut waktu itu biar kalian seneng seneng bertiga, maaf aku ngacauin semuanya, aku harap semuanya bisa kembali kaya biasa lagi, ga harus sekarang kalian maafin aku, sekiranya kalian mau aja, makasih ya.`;

function showLetter() {
  const introText = document.getElementById("introText");
  const button = document.querySelector(".btn");

  introText.style.opacity = 0;
  button.style.opacity = 0;

  setTimeout(() => {
    introText.style.display = "none";
    button.style.display = "none";

    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");

    letterBox.style.display = "flex";
    letterBox.style.opacity = 1;

    let i = 0;
    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }
    typeWriter();
  }, 600);
}
