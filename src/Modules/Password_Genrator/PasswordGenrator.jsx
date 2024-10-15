import React, { useCallback, useEffect, useRef, useState } from "react";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";

const PasswordGenrator = () => {
  const [password, setPassword] = useState("");
  const passRef = useRef(null);

  const [passCopy, setPassCopy] = useState(false);

  const [length, setLength] = useState(5);
  const [hasNum, setHasNum] = useState(false);
  const [hasSym, setHasSym] = useState(false);

  const copyPassword = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setPassCopy(true);
  }, [password]);

  const genratePassword = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (hasSym) str += "!@#$%^&*()";
    if (hasNum) str += "1234567890";

    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * str.length);

      let char = str[random];
      pass += char;
    }

    setPassword(pass);
  }, [length, hasNum, hasSym, setPassword]);

  useEffect(() => {
    genratePassword();
  }, [length, hasNum, hasSym, genratePassword]);

  useEffect(() => {
    setPassCopy(false);
  }, [password]);

  return (
    <div className="h-[80vh] pt-10 ">


      <h1 className="font-bold text-center text-3xl">Password Genrator</h1>

      <div className="flex justify-center items-center w-[60%] m-auto h-[40vh] bg-gray-400 mt-5 p-4 rounded-xl bg-opacity-20">
        <div className="w-full">
          <div className="w-full flex justify-center">
            <input
              type="text"
              className="w-[80%] h-10 p-4 border border-black text-black"
              readOnly
              value={password}
              ref={passRef}
            />
            <button
              onClick={copyPassword}
              className="relative h-10 w-[100px] bg-sky-500 text-black font-semibold rounded-r-xl border border-black"
            >
              Copy
              {passCopy && (
                <p className="absolute text-red-600 mt-2 w-full italic rounded-sm ">
                  *Copied
                </p>
              )}
            </button>
          </div>
          <div className="flex w-full justify-center gap-2 mt-10">
            <input
              type="range"
              className="w-[300px]"
              min={5}
              max={20}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <h1 className="w-[200px]">Length : {length}</h1>

            <input
              id="numbers"
              type="checkbox"
              onChange={(e) => setHasNum(e.target.checked)}
              checked={hasNum}
            />
            <label htmlFor="numbers" className="w-[100px]">
              Numbers
            </label>

            <input
              id="numbers"
              type="checkbox"
              onChange={(e) => setHasSym(e.target.checked)}
              checked={hasSym}
            />
            <label htmlFor="numbers" className="w-[100px]">
              Symbols
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenrator;
