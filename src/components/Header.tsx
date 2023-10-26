"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Header = () => {
  const [menuIsOpen, setmenuIsOpen] = React.useState(false);

  const {} = useRouter();

  const { status, data } = useSession();

  const handleLoginClick = () => signIn();

  const handleLogoutClick = () => {
    setmenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setmenuIsOpen(!menuIsOpen);

  const handleMyTripsClick = () => {};

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
      <Link href="/">
        <div className="relative h-[32px] w-[182px]">
          <Image src="/logo.png" alt="Full Stack Week" fill />
        </div>
      </Link>

      {status === "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 p-2 px-3 relative border border-solid rounded-full border-grayLighter">
          <AiOutlineMenu
            size={16}
            onClick={handleMenuClick}
            className="cursor-pointer"
          />

          <Image
            width={32}
            height={32}
            src={data.user.image!}
            alt={data.user.name!}
            className="rounded-full shadow-md"
          />
          {menuIsOpen && (
            <div className="z-50 absolute  top-14 left-0 w-full h-[100px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <Link href={"/my-trips "}>
                <button className="text-primary mb-2 pb-2 border-b border-grayLighter border-solid text-sm font-semibold">
                  Minhas viagens
                </button>
              </Link>

              <button
                className="text-primary pt-2   text-sm font-semibold"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
