import Image from "next/image";
import { useTheme } from "next-themes";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

const Header = ({}: Props) => {
  const { data: session, status } = useSession();

  const { resolvedTheme } = useTheme();

  return (
    <div className="grid grid-cols-3 gap-4 items-center justify-between">
      <div className="col-span-1 flex justify-start">
        <span className="material-symbols-outlined">help</span>
      </div>
      <div className="object-center col-span-1 flex justify-center items-center">
        <Image
          src={`/logo-256-${resolvedTheme}.png`}
          width={64}
          height={64}
          alt="Stack Paper"
        />
      </div>
      <div className="col-span-1 flex justify-end">
        {session ? (
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            <span className="material-symbols-outlined">logout</span>
          </a>
        ) : (
          <a
            href={`/api/auth/signin`}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            <span className="material-symbols-outlined">login</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
