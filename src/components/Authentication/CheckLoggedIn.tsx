import { PATH } from "constants/path";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppSelector } from "store/global-store";

const CheckLoggedIn = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (currentUser) {
      router.query?.redirect ? router.push(`${router.query.redirect}`) : router.push(PATH.home);
    }
  }, [currentUser, router]);
  return <>{children}</>;
};

export default CheckLoggedIn;
