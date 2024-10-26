import { useCallback, useEffect, useRef, useState } from "react";

/**
 * PasswordGenerator Component
 *
 * This component generates a random password based on user-defined criteria:
 * - Length of the password (between 5 and 20 characters)
 * - Option to include numbers
 * - Option to include symbols
 *
 * Features:
 * - A display for the generated password
 * - A button to copy the password to the clipboard
 * - Real-time feedback when the password is copied
 */

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const passRef = useRef(null);
  const [passCopy, setPassCopy] = useState(false);
  const [length, setLength] = useState(5);
  const [hasNum, setHasNum] = useState(false);
  const [hasSym, setHasSym] = useState(false);

  const copyPassword = useCallback(() => {
    passRef.current?.select();
    navigator.clipboard.writeText(password);
    setPassCopy(true);
  }, [password]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (hasSym) str += "!@#$%^&*()";
    if (hasNum) str += "1234567890";

    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * str.length);
      pass += str[random];
    }

    setPassword(pass);
  }, [length, hasNum, hasSym]);

  useEffect(() => {
    generatePassword();
  }, [length, hasNum, hasSym, generatePassword]);

  useEffect(() => {
    setPassCopy(false);
  }, [password]);

  return (
    <div className="h-[80vh] pt-10 flex-1">
      <h1 className="font-bold text-center lg:text-3xl text-xl">
        Password Generator
      </h1>

      <div className="flex justify-center items-center lg:w-[60%] m-auto h-[40vh] bg-gray-400 lg:mt-5 mt-10 p-4 rounded-xl bg-opacity-20">
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
                <p className="absolute text-red-600 mt-2 w-full italic rounded-sm">
                  *Copied
                </p>
              )}
            </button>
          </div>

          <div className="lg:flex w-full justify-center gap-2 mt-10">
            <input
              type="range"
              className="w-[300px] m-auto"
              min={5}
              max={20}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <h1 className="w-[200px] my-2">Length: {length}</h1>

            <input
              id="numbers"
              type="checkbox"
              onChange={(e) => setHasNum(e.target.checked)}
              checked={hasNum}
            />
            <label htmlFor="numbers" className="w-[100px] p-2">
              Numbers
            </label>

            <input
              id="symbols"
              type="checkbox"
              onChange={(e) => setHasSym(e.target.checked)}
              checked={hasSym}
            />
            <label htmlFor="symbols" className="w-[100px] p-2">
              Symbols
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
