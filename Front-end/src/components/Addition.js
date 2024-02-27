import { useRouter } from "next/navigation";
import { useAuth } from "./providers/AuthProvider";

export const Addition = () => {
  const { signOut } = useAuth();

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
      <p
        className="text-white hover:text-red-500"
        onClick={() => {
          signOut();
        }}
      >
        Log Out
      </p>
    </div>
  );
};
