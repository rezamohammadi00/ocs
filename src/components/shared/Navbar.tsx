import Image from "next/image";
import Link from "next/link";
import { CallOutgoing, Home3, LoginCurve } from "iconsax-reactjs";
//Global Imports
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const navShape = `relative isolate h-16
    before:absolute before:inset-0 before:-z-10
    before:rounded-2xl before:bg-white before:content-['']
    before:skew-x-[11.4deg]
    before:shadow-[0_10px_15px_rgb(15_23_42/0.1),0_4px_6px_rgb(15_23_42/0.05)]`;

export const Navbar = () => {
  return (
    <div className="w-full h-28 flex justify-center items-center">
      <Container>
        <nav className={navShape}>
          <div className="flex items-center justify-between w-full h-full px-6">
            {/* RIGHT*/}
            <div className="flex gap-4 items-center">
              {/* LOGO */}
              <Link href={ROUTES.home}>
                <Image
                  src="/images/Logo.png"
                  alt="logo"
                  width={93}
                  height={24}
                  className="hidden md:block"
                />
              </Link>
              <Link href={ROUTES.home}>
                <Button
                  variant="secondary"
                  light
                  appearance="text"
                  startIcon={<Home3 size="16" />}
                >
                  خانه
                </Button>
              </Link>
            </div>
            {/* LEFT */}
            <div className="flex gap-4 items-center">
              <Button
                variant="primary"
                light
                appearance="text"
                startIcon={<CallOutgoing size="16" />}
              >
                مشاوره
              </Button>
              <Button
                variant="secondary"
                light
                appearance="outlined"
                startIcon={<LoginCurve size="16" />}
              >
                ورود | ثبت نام
              </Button>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};
