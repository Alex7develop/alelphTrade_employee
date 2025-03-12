document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);

  // Извлекаем параметры из URL
  const name = params.get("name");
  const second_name = params.get("second_name");
  const last_name = params.get("last_name");
  const phone = params.get("phone");
  const email = params.get("email");
  const photo = params.get("photo");

  // Вставляем значения в соответствующие поля
  document.querySelector("h2").textContent = `${name} ${last_name}`;
  document.querySelector(".position").textContent = "менеджер"; // Можно заменить на другой параметр, если нужно
  document.querySelectorAll("a[href^='tel:']").forEach(link => {
      link.textContent = phone;
      link.href = `tel:${phone}`;
  });
  document.querySelectorAll("img[alt='Телефон']").forEach(img => {
      img.alt = phone;
  });
  document.querySelector("a[href^='mailto:']").textContent = email;
  document.querySelector("a[href^='mailto:']").href = `mailto:${email}`;
  document.querySelector("img.profile-photo").src = photo;

  // Вставляем номер телефона в alt для Telegram и WhatsApp
  document.querySelectorAll("img[alt='Telegram']").forEach(img => {
      img.alt = phone;
  });
  document.querySelectorAll("img[alt='WhatsApp']").forEach((img, a) => {
      img.alt = phone;
  });
  document.querySelectorAll("a[href^='https://t.me/']").forEach(link => {
      link.textContent = phone;
  });
  document.querySelectorAll("a[href^='https://wa.me/']").forEach(link => {
      link.textContent = phone;
  });

  // Если есть возможность загрузить фотографию профиля
  if (photo) {
      document.querySelector("img.profile-photo").setAttribute("src", photo);
  }
});

function showMap() {
  // Переход по указанной ссылке
  window.location.href = "https://yandex.ru/maps/213/moscow/house/khoroshyovskoye_shosse_32a/Z04YcwNiS0EHQFtvfXt2dHVmYQ==/?ll=37.542473%2C55.775910&z=19.09";
}