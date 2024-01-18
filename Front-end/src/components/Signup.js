"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthProvider, useAuth } from "./providers/AuthProvider";

export const Signup = () => {
  const [isHidden, setIsHidden] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // const [name, setName] = useState("");
  // const [repass, setRepass] = useState("");

  const router = useRouter();

  const { signUp } = useAuth();

  // function isName(name) {
  //   if (name.length > 5) {
  //     return true;
  //   } else return "insert name";
  // }

  // function emailValidation(email) {
  //   let atChar = 0;
  //   let dotChar = 0;
  //   let spaceChar = 0;
  //   for (let i = 0; i < email.length; i++) {
  //     if (email.charCodeAt(i) == 64) {
  //       atChar++;
  //     }
  //     if (email.charCodeAt(i) == 46) {
  //       dotChar++;
  //     }
  //     if (email.charCodeAt(i) == 40) {
  //       spaceChar++;
  //     }
  //   }
  //   if (email.length == 0) {
  //     return "insert email";
  //   }
  //   if (email.length < 5) {
  //     return "5aas ih bich";
  //   }
  //   if (atChar != 1) {
  //     return "must be atchar";
  //   }
  //   if (dotChar != 1) {
  //     return "must be dotchar";
  //   }
  //   if (spaceChar > 0) {
  //     return "not space";
  //   } else return true;
  // }

  // function passwordValid(password) {
  //   let num = 0;
  //   let capNum = 0;
  //   let specialCharacter = 0;

  //   for (let i = 0; i < password.length; i++) {
  //     if (password.charCodeAt(i) > 47 && password.charCodeAt(i) < 58) {
  //       num++;
  //     }
  //     if (password.charCodeAt(i) > 64 && password.charCodeAt(i) < 91) {
  //       capNum++;
  //     }
  //     if (password.charCodeAt(i) > 33 && password.charCodeAt(i) < 47) {
  //       specialCharacter++;
  //     }
  //     if (password.charCodeAt(i) > 57 && password.charCodeAt(i) < 65) {
  //       specialCharacter++;
  //     }
  //   }
  //   if (password.length == 0) {
  //     return "insert password";
  //   }
  //   if (password.length < 8) {
  //     return "Password length should be min 8 character";
  //   }
  //   if (num < 0) {
  //     return "Password should include number";
  //   }
  //   if (capNum == 0) {
  //     return "Password should include CAPITAL letter";
  //   }
  //   if (specialCharacter == 0) {
  //     return "Password should include special character";
  //   } else return true;
  // }
  // function isRepasswordSimilar(password, repassword) {
  //   if (password === repassword) {
  //     return true;
  //   } else return "Re-entered password not similar";
  // }

  // function signUpValidation(Name, Email, Password, Repassword) {}

  return (
    <div className="w-full h-screen flex bg-white max-w-[1800px] m-auto">
      <div className="md:w-2/4 w-full flex flex-col justify-center items-center gap-12 bg-white">
        <div className="gap-9 flex flex-col md:pl-20">
          <div className="flex justify-center gap-2">
            <img src="vector.png" className="w-5 h-5 mt-1"></img>
            <p className="font-bold text-2xl">Geld</p>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <p className="font-bold text-[24px]">Create Geld account</p>
            <p className="text-slate-700 text-[16px]">
              Sign up below to create your Wallet account
            </p>
          </div>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            signUp(email, password);
            // signUpValidation();
            // setName(isName(event.target.Name.value));
            // setEmail(emailValidation(event.target.Email.value));
            // setPassword(passwordValid(event.target.Password.value));
            // setRepass(isRepasswordSimilar(event.target.Repassword.value));
          }}
          className="flex flex-col md:w-80 gap-4 relative"
        >
          <input
            type="text"
            name="Name"
            placeholder="  Name"
            className="border-2 p-3 rounded-lg bg-slate-100 w-[410px]"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <p className="absolute bottom-[78%] ml-7 italic opacity-50 text-red-500">
            {name}
          </p>
          <input
            type="text"
            name="Email"
            placeholder="  Email"
            className="border-2 p-3 rounded-lg bg-slate-100 w-[410px]"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <p className="absolute bottom-[57%] ml-7 italic opacity-50 text-red-500">
            {email}
          </p>
          <input
            type={isHidden ? "password" : "text"}
            name="Password"
            placeholder="  Password"
            className="border-2 p-3 rounded-lg bg-slate-100 w-[410px]"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="absolute bottom-[37%] ml-7 italic opacity-50 text-red-500">
            {password}
          </p>
          <div className="absolute ml-[355px] mt-36">
            <button
              onClick={() => {
                setIsHidden(!isHidden);
              }}
              className="text-[15px]"
            >
              {isHidden ? "Show" : "Hide"}
            </button>
          </div>
          <input
            type={isHidden ? "password" : "text"}
            name="Repassword"
            placeholder="  Re-Password"
            className="border-2 p-3 rounded-lg bg-slate-100 w-[410px]"
          />
          <p className="absolute bottom-[15%] ml-7 italic opacity-50 text-red-500"></p>
          <button
            type="submit"
            className="bg-[#0166FF] text-white py-3 rounded-[20px] w-[410px] text-xl"
            onClick={(e) => {
              router.push("/step1");
              e.preventDefault();
              signUp(email, password, name);
            }}
          >
            Sign up
          </button>
        </form>
        <div className="flex gap-2 md:pl-20">
          <p className="text-[16px]">Already have account?</p>
          <p
            className="text-[#0166FF] text-[16px]"
            onClick={() => {
              router.push("./login");
            }}
          >
            Log in
          </p>
        </div>
      </div>
      <div className="w-2/4 md:flex hidden bg-[#0166FF]"></div>
    </div>
  );
};
