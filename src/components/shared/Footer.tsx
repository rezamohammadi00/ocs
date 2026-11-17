import Image from "next/image";
import Link from "next/link";
import {
  CallCalling,
  Instagram,
  Location,
  Send2,
  Sms,
  Whatsapp,
} from "iconsax-reactjs";
//Global Imports
import { ROUTES } from "@/lib/routes";
import { COPY } from "@/lib/copy";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { TinyLine } from "@/components/TinyLine";

const shadowShape = `rounded-t-[18px] relative isolate h-10 w-full overflow-hidden
    before:absolute before:inset-x-0 before:top-[17.1px] before:-z-10 before:h-12
    before:rounded-tl-[6px] before:rounded-tr-xl before:bg-(--neutral-app-950) before:content-['']
    before:-skew-y-[1.32deg]`;

const contactIcons = {
  email: Sms,
  phone: CallCalling,
  address: Location,
} as const;

const socialIcons = {
  telegram: Send2,
  whatsapp: Whatsapp,
  instagram: Instagram,
} as const;

export const Footer = () => {
  const { footer } = COPY;

  return (
    <section>
      <div className={cn(shadowShape)}></div>
      <div className="min-h-138 bg-(--neutral-app-950) pt-5">
        <Container>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <Link href={ROUTES.home}>
                <Image
                  src="/images/LogoFooter.png"
                  alt={footer.logoAlt}
                  width={151}
                  height={40}
                />
              </Link>
              <p className="text-(--neutral-app-50) text-2xl font-bold mt-3">
                {footer.companyName}
              </p>
              <p className="text-(--neutral-app-300) text-base mt-2.5">
                {footer.companyDescription}
              </p>
            </div>
            <div className="flex flex-col ">
              <p className="text-(--neutral-app-50) text-2xl font-bold mb-2">
                {footer.newsletter.title}
              </p>
              <TinyLine />
              <div className="flex gap-2 items-center mt-5 relative">
                <div className="relative">
                  <Sms className="absolute right-[16.5px] top-1/2 -translate-y-1/2 size-5 text-(--neutral-app-50) pointer-events-none" />
                  <input
                    type="text"
                    className="py-3.5 px-[44.5px] bg-(--neutral-app-900) w-76 rounded-sm text-(--neutral-app-300) border-[.5px] border-(--neutral-app-600) text-base"
                    placeholder={footer.newsletter.placeholder}
                  />
                </div>
                <Button variant="primary" size="icon-lg">
                  <Send2 />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-10 mt-10 py-4 pr-12 rounded-2xl bg-(--neutral-app-900)">
            {footer.links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-(--neutral-app-300) text-base"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-between">
            <div className="flex gap-9.5">
              {footer.contacts.map((item) => {
                const Icon = contactIcons[item.id];
                return (
                  <div key={item.id} className="flex items-center gap-4">
                    <span className="text-[12px] text-(--neutral-app-300)">
                      {item.name}
                    </span>
                    <span className="text-base text-(--neutral-app-50)">
                      {item.value}
                    </span>
                    <span className="flex items-center">
                      <Icon className="size-5 text-(--action-primary-light-text)" />
                      <span className="text-(--neutral-app-600) text-3xl mr-4 rotate-12">
                        |
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-2">
              {footer.socials.map((item) => {
                const Icon = socialIcons[item.id];
                return (
                  <Button
                    key={item.id}
                    variant="secondary"
                    size="icon-lg"
                    appearance="outlined"
                  >
                    <Link href={item.href}>
                      <Icon className="text-(--neutral-app-50)" />
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <span className="text-8xl font-poppins font-medium bg-linear-to-t from-(--neutral-app-600) from-0% to-(--neutral-app-950) to-100% bg-clip-text text-transparent">
              {footer.brandWatermark}
            </span>
          </div>

          <div className="flex justify-between mt-10">
            <div className="flex gap-2 items-center">
              <TinyLine />
              <span className="text-(--saffron-500) text-base">{footer.tagline}</span>
            </div>
            <span className="text-(--neutral-app-300) text-base">
              {footer.copyright}
            </span>
          </div>
        </Container>
      </div>
    </section>
  );
};
