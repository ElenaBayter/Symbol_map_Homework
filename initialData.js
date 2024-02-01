// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const fetchData = () => {
  return new Promise((resolve, reject) => {
    if (resolve) {
      resolve(initialData);
    } else {
      reject("Data loading error");
    }
  });
};
const renderReviews = (review) => {
  let str = `<h2>${review.product}</h2>`;
  review.reviews.forEach((element) => {
    str += `<h4>${element.id}:</h4>
      <div>${element.text}</div>`;
  });
  return str;
};

const btn = document.querySelector("#addReview");
const reviewsDiv = document.querySelector(".reviews");
btn.addEventListener("click", () => {
  fetchData()
    .then((data) => {
      data.forEach((review) => {
        console.log(review);
        reviewsDiv.insertAdjacentHTML("beforeend", renderReviews(review));
      });
    })
    .catch((error) => {
      alert(error);
    });
});
