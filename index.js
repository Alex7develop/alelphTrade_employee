document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);

  // Фиксированные данные для тестирования
  let name = "Иван";
  let last_name = "Иванов";
  let phone = "+79123456789";
  let email = "ivan.ivanov@example.com";
  let photo = "https://via.placeholder.com/150"; // Заглушка для фото

  // Вставляем значения в соответствующие поля
  document.querySelector('h2').textContent = `${name} ${last_name}`;
  document.querySelector('.position').textContent = 'менеджер';
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
  document.querySelectorAll("img[alt='WhatsApp']").forEach((img) => {
    img.alt = phone;
  });
  document.querySelectorAll("a[href^='https://t.me/']").forEach((link) => {
    link.textContent = phone;
    link.href = `https://t.me/${phone.replace('+', '')}`;
  });
  document.querySelectorAll("a[href^='https://wa.me/']").forEach((link) => {
    link.textContent = phone;
    link.href = `https://wa.me/${phone.replace('+', '')}`;
  });

  // Если есть возможность загрузить фотографию профиля
  if (photo) {
    document.querySelector('img.profile-photo').setAttribute('src', photo);
  }

  document.getElementById('Contact').addEventListener('click', function () {
    // Фиксированные данные для тестирования
    let name = "Иван";
    let last_name = "Иванов";
    let phone = "+79123456789";
    let email = "ivan.ivanov@example.com";
    let photo = "https://via.placeholder.com/150"; // Заглушка для фото

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

    const vCardBlob = new Blob([vCardData], { type: 'text/vcard' });
    const vCardUrl = URL.createObjectURL(vCardBlob);

    const a = document.createElement('a');
    a.href = vCardUrl;
    a.download = `${name}_${last_name}.vcf`;

    // Проверяем, является ли устройство iOS
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

    if (isIOS) {
      // Для iOS открываем vCard в новой вкладке
      window.open(vCardUrl, '_blank');
    } else {
      // Для Android и других устройств скачиваем vCard
      a.click();
    }

    URL.revokeObjectURL(vCardUrl);
  });
});

function showMap() {
  // Переход по указанной ссылке
  window.location.href =
    'https://yandex.ru/maps/213/moscow/house/khoroshyovskoye_shosse_32a/Z04YcwNiS0EHQFtvfXt2dHVmYQ==/?ll=37.542473%2C55.775910&z=19.09';
}