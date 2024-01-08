import Link from "next/link";
import { useRouter } from "next/navigation";

export const Addition = () => {
  const router = useRouter();
  return (
    <div className="w-fit border-2 bg-blue-600 flex flex-col z-10 pr-32 pl-5 py-3 gap-3 rounded-xl">
      <p
        className="text-white hover:text-cyan-500"
        onClick={() => {
          router.push("/profile");
        }}
      >
        Profile
      </p>
      <Link href="/login">
        <p className="text-white hover:text-red-500">Log Out</p>
      </Link>
    </div>
  );
};
