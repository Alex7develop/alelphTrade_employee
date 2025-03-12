document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);

  // Извлекаем параметры из URL
  let name = params.get('name');
  let second_name = params.get('second_name');
  let last_name = params.get('last_name');
  let phone = params.get('phone');
  let email = params.get('email');
  let photo = params.get('photo');
  if (phone) {
    phone = phone.replace(/[^+\d]/g, ''); // Оставляем только + и цифры
  }
  // Вставляем значения в соответствующие поля
  document.querySelector('h2').textContent = `${name} ${last_name}`;
  document.querySelector('.position').textContent = 'менеджер'; // Можно заменить на другой параметр, если нужно
  document.querySelectorAll("a[href^='tel:']").forEach((link) => {
    link.href = `tel:${phone}`;
    if (link.id === 'mainPhone' || link.id == 'officePhone') {
      link.textContent = phone;
    }
  });
  document.querySelectorAll("img[alt='Телефон']").forEach((img) => {
    img.alt = phone;
  });
  document.querySelector("a[href^='mailto:']").textContent = email;
  document.querySelector("a[href^='mailto:']").href = `mailto:${email}`;
  document.querySelector('img.profile-photo').src = photo;

  // Вставляем номер телефона в alt для Telegram и WhatsApp
  document.querySelectorAll("img[alt='Telegram']").forEach((img) => {
    img.alt = phone;
  });
  document.querySelectorAll("img[alt='WhatsApp']").forEach((img, a) => {
    img.alt = phone;
  });
  document.querySelectorAll("a[href^='https://t.me/']").forEach((link) => {
    link.textContent = phone;
    link.href = `https://t.me/${phone}`;
  });
  document.querySelectorAll("a[href^='https://wa.me/']").forEach((link) => {
    link.textContent = phone;
    link.href = `https://wa.me/${phone}`;
  });

  // Если есть возможность загрузить фотографию профиля
  if (photo) {
    document.querySelector('img.profile-photo').setAttribute('src', photo);
  }
  document.getElementById('Contact').addEventListener('click', function () {
    const params = new URLSearchParams(window.location.search);

    let name = params.get('name') || "Имя";
    let last_name = params.get('last_name') || "Фамилия";
    let phone = params.get('phone') || "+70000000000";
    let email = params.get('email') || "example@email.com";
    let photo = params.get('photo') || "";

    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${name} ${last_name}
N:${last_name};${name};;;
TEL;TYPE=CELL:${phone}
EMAIL;TYPE=INTERNET:${email}
PHOTO;TYPE=JPEG:${photo}
END:VCARD
    `.trim();

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${name}_${last_name}.vcf`;

    // Автооткрытие файла на Android
    if (/android/i.test(navigator.userAgent)) {
        a.target = "_blank";
    }

    a.click();
    URL.revokeObjectURL(url);
});

});

function showMap() {
  // Переход по указанной ссылке
  window.location.href =
    'https://yandex.ru/maps/213/moscow/house/khoroshyovskoye_shosse_32a/Z04YcwNiS0EHQFtvfXt2dHVmYQ==/?ll=37.542473%2C55.775910&z=19.09';
}
