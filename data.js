
/










Data · JS
// Вся галерея. Чтобы добавить картинку: загрузите png в папку images/
// и допишите строку { src: "images/имя.png", name: "Подпись" } в нужный раздел.
// Имя файла должно совпадать точно, с учётом больших и маленьких букв.
 
const GALLERY = [
  {
    title: "Магические существа",
    items: [
      { src: "images/авгур.png", name: "Авгур" },
      { src: "images/Diricawl1.png", name: "Дириколь" },
      { src: "images/Diricawl2.png", name: "Дириколь" },
      { src: "images/Jobberknoll1.png", name: "Джобберноль" },
      { src: "images/клабберт.png", name: "Клабберт" },
      { src: "images/ишака.png", name: "Ишака" },
      { src: "images/Kneazle1.png", name: "Книзл" },
      { src: "images/Kneazle2.png", name: "Книзл" },
      { src: "images/Kneazle3.png", name: "Книзл" },
      { src: "images/Kneazle4.png", name: "Книзл" },
      { src: "images/Kneazle5.png", name: "Книзл" },
      { src: "images/нюхль.png", name: "Нюхль" },
      { src: "images/Niffle1.png", name: "Нюхль" },
      { src: "images/Niffle2.png", name: "Нюхль" },
      { src: "images/Niffle3.png", name: "Нюхль" },
      { src: "images/Niffle4.png", name: "Нюхль" },
      { src: "images/пушишки.png", name: "Клубкопухи" },
      { src: "images/клубкопухикарликовые.png", name: "Клубкопухи (карликовые)" },
      { src: "images/шлеппи1.png", name: "Шлеппи (белый)" },
      { src: "images/шлеппи2.png", name: "Шлеппи (рыжий)" },
      { src: "images/шлеппи3.png", name: "Шлеппи (голубой)" },
    ],
  },
  {
    title: "Птицы",
    items: [
      { src: "images/галка.png", name: "Галка" },
      { src: "images/галчонок.png", name: "Галчонок" },
      { src: "images/гоголь.png", name: "Гоголь" },
      { src: "images/голубь.png", name: "Голубь" },
      { src: "images/какаду.png", name: "Какаду" },
      { src: "images/кряква.png", name: "Кряква" },
      { src: "images/неразлучники.png", name: "Неразлучники" },
      { src: "images/chaka.png", name: "Чайка" },
    ],
  },
  {
    title: "Млекопитающие",
    items: [
      { src: "images/еж.png", name: "Еж" },
      { src: "images/хомяк.png", name: "Хомяк" },
      { src: "images/мышь иглистая.png", name: "Мышь иглистая" },
      { src: "images/утконос.png", name: "Утконос" },
      { src: "images/утконос2.png", name: "Утконос" },
      { src: "images/кошка.png", name: "Кошка" },
    ],
  },
  {
    title: "Собаки",
    items: [
      { src: "images/доберман.png", name: "Доберман" },
      { src: "images/лабрик.png", name: "Лабрик" },
      { src: "images/чихуа.png", name: "Чихуа" },
      { src: "images/чихи.png", name: "Чихи" },
      { src: "images/yandextaxi.png", name: "Такса" },
      { src: "images/jack.png", name: "Джек-рассел-терьер" },
      { src: "images/french.png", name: "Французский бульдог" },
      { src: "images/spaniel.png", name: "Спаниель" },
      { src: "images/dalma.png", name: "Далматин" },
      { src: "images/bult.png", name: "Бультерьер" },
    ],
  },
  {
    title: "Ферма",
    items: [
      { src: "images/жеребенок.png", name: "Жеребенок" },
      { src: "images/козленок.png", name: "Козленок" },
      { src: "images/лама.png", name: "Лама" },
      { src: "images/поросенок.png", name: "Поросенок" },
      { src: "images/теленок.png", name: "Теленок" },
      { src: "images/ягненок.png", name: "Ягненок" },
    ],
  },
  {
    title: "Тропический виварий",
    items: [
      { src: "images/геккон.png", name: "Геккон" },
      { src: "images/ящерица.png", name: "Ящерица" },
      { src: "images/bluegecc.png", name: "Геккон (голубой)" },
      { src: "images/greengecc.png", name: "Геккон (зелёный)" },
      { src: "images/orangegecc.png", name: "Геккон (оранжевый)" },
      { src: "images/pinkgecc.png", name: "Геккон (розовый)" },
      { src: "images/blackeub.png", name: "Эублефар (чёрный)" },
      { src: "images/purpleeub.png", name: "Эублефар (фиолетовый)" },
      { src: "images/yelloweub.png", name: "Эублефар (жёлтый)" },
      { src: "images/черепаха.png", name: "Черепаха" },
      { src: "images/петушок.png", name: "Петушок" },
      { src: "images/рыбка клоун.png", name: "Рыбка-клоун" },
      { src: "images/рыбка хирург.png", name: "Рыбка-хирург" },
    ],
  },
  {
    title: "Аксессуары",
    items: [
      { src: "images/cage.png", name: "Клетка" },
      { src: "images/cathouse.png", name: "Кошачий домик" },
      { src: "images/catpillow.png", name: "Лежанка для кошки" },
      { src: "images/catpillow2.png", name: "Лежанка для кошки" },
      { src: "images/hamsterhouse.png", name: "Домик для хомяка" },
    ],
  },
  {
    title: "Ветпаспорт и аптечки",
    items: [
      { src: "images/petpassport.png", name: "Ветпаспорт" },
      { src: "images/snidgetapt.png", name: "Аптечка (снидгет)" },
      { src: "images/dromarogapt.png", name: "Аптечка (дромарог)" },
    ],
  },
  {
    title: "Зоны",
    items: [
      { src: "images/forest.png", name: "Лес" },
      { src: "images/meadow.png", name: "Луг" },
      { src: "images/boloto.png", name: "Болото" },
      { src: "images/sea.png", name: "Море" },
      { src: "images/coffeezone.png", name: "Кофейная зона" },
      { src: "images/waitingzone.png", name: "Зона ожидания" },
      { src: "images/vetzone.png", name: "Ветеринарная зона" },
      { src: "images/vetzone2.png", name: "Ветеринарная зона" },
    ],
  },
  {
    title: "Варианты подписей",
    items: [
      { src: "images/вариант1.png", name: "Вариант 1" },
      { src: "images/вариант2.png", name: "Вариант 2" },
      { src: "images/вариант3.png", name: "Вариант 3" },
      { src: "images/вариант 4.png", name: "Вариант 4" },
      { src: "images/вариант2222234445556.png", name: "Вариант 5" },
      { src: "images/variant1.png", name: "Вариант 6" },
      { src: "images/hepartofthefamilyvar.png", name: "Вариант 7" },
      { src: "images/вывеска22.png", name: "Вывеска" },
      { src: "images/вывеска22244.png", name: "Вывеска" },
      { src: "images/вывеска222343.png", name: "Вывеска" },
    ],
  },
];
 


