import Image from "next/image";
import Link from "next/link";

const ITEMS = [
  {
    id: "currency",
    label: "خودروهای سواری",
    image: "/images/storiesContainer/8.png",
  },
  { id: "warehouse", label: "کشنده", image: "/images/storiesContainer/7.png" },
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
];

export const StoriesContainer = ({ items = ITEMS }) => {
  return (
    <section className="mx-auto">
      <ul className="flex gap-3">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={"#"}>
              <span>
                <Image
                  height={88}
                  width={80}
                  src={item.image}
                  alt="story-container"
                  loading="lazy"
                  className="object-contain"
                />
              </span>
              <div className="text-center text-xs text-neutral-900">
                {item.label}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
