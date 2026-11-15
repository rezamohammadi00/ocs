export const COPY = {
  heroTabs: [
    {
      id: "customs",
      tab: "امور گمرکی",
      subtitle: "ترخیص سریع و دقیق کالا",
      title: ["ترخیص کالا", "بدون دردسر"],
      tags: ["ترخیص", "کارشناسی", "اسناد"],
      description:
        "انجام امور گمرکی، تنظیم اسناد و ترخیص کالا با نظارت کارشناسان",
      image: "/images/slider/1.png",
      href: "/services/customs",
    },
    {
      id: "car",
      tab: "خودرو",
      subtitle: "خودروهای صفر و کارکرده موجود",
      title: ["قیمت روز به دلار،", "پلاک ارس و ماکو"],
      tags: ["خرید", "سفارش خاص", "حمل و نقل", "ترانزیت"],
      description:
        "خرید از موجودی یا سفارش خودروی خاص از دبی؛ پیش‌فاکتور، قرارداد، ترخیص و تحویل",
      image: "/images/slider/2.png",
      href: "/services/cars",
    },
    {
      id: "truck",
      tab: "کشنده",
      subtitle: "کشنده و ماشین‌آلات سنگین",
      title: ["خرید و حمل", "کشنده"],
      tags: ["خرید", "حمل", "ترخیص"],
      description: "تامین کشنده نو و کارکرده، حمل و ترخیص تا تحویل در مقصد",
      image: "/images/slider/3.png",
      href: "/services/trucks",
    },
    {
      id: "freight",
      tab: "حمل بین‌الملل",
      subtitle: "حمل زمینی، دریایی و ریلی",
      title: ["حمل بین‌المللی", "از مبدا تا مقصد"],
      tags: ["چین", "ترانزیت", "بارگیری"],
      description: "حمل کانتینری و فله با پیگیری مرحله‌به‌مرحله بار",
      image: "/images/slider/1.png",
      href: "/services/freight",
    },
  ],
  stories: [
    {
      id: "currency",
      label: "خودروهای سواری",
      image: "/images/storiesContainer/8.png",
    },
    {
      id: "warehouse",
      label: "کشنده",
      image: "/images/storiesContainer/7.png",
    },
    {
      id: "transit",
      label: "بازرسی مبدا",
      image: "/images/storiesContainer/6.png",
    },
    { id: "china", label: "بارگیری", image: "/images/storiesContainer/5.png" },
    {
      id: "loading",
      label: "حمل از چین",
      image: "/images/storiesContainer/4.png",
    },
    {
      id: "inspection",
      label: "ترانزیت",
      image: "/images/storiesContainer/3.png",
    },
    { id: "trucks", label: "انبار", image: "/images/storiesContainer/2.png" },
    {
      id: "cars",
      label: "تامین ارز",
      image: "/images/storiesContainer/1.png",
    },
    {
      id: "customs",
      label: "ترخیص کالا",
      image: "/images/storiesContainer/9.png",
    },
  ],
} as const;
