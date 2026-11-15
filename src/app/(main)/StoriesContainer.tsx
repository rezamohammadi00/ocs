import Image from "next/image";
import Link from "next/link";
//Global
import { COPY } from "@/lib/copy";
import { Container } from "@/components/ui/Container";

export const StoriesContainer = () => {
  return (
    <section className="w-full">
      <Container>
        <ul className="flex gap-3 justify-center">
          {COPY.stories.map((item) => (
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
      </Container>
    </section>
  );
};
