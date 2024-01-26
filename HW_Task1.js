// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = {
  alboms: [
    {
      title: "MyAlbom",
      artist: "Adele",
      year: "2020",
    },
    {
      title: "Another",
      artist: "Rihana",
      year: "2023",
    },
  ],
  [Symbol.iterator]() {
    let current = 0;
    let albums = this.albums;
    return {
      next() {
        if (current < albums.length) {
          return { value: albums[current++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};
for (let album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
