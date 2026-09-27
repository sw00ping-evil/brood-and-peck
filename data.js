// Здесь вся галерея. Чтобы добавить картинку:
// 1) положите png в папку images/ (можно в подпапки)
// 2) добавьте строку { src: "images/...", name: "Подпись" } в нужный раздел
// Раздел — это заголовок + список картинок + (необязательно) заметка внизу.

const GALLERY = [
  {
    title: "Млекопитающие",
    items: [
      { src: "images/mammals/hedgehog.png", name: "Еж (N+)" },
      { src: "images/mammals/hamster.png",  name: "Хомяк (N)" },
      { src: "images/mammals/mouse.png",    name: "Мышь иглистая (N)" },
      { src: "images/mammals/rabbit.png",   name: "Кролик (N)" },
    ],
    note: "За ящерицами можете заглянуть в <b>Тропический виварий</b>.",
  },
  {
    title: "Птицы",
    items: [
      { src: "images/birds/owl.png", name: "Сова (N)" },
    ],
  },
];
