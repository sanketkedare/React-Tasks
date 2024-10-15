
const useGenrateId = () =>
{
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()1234567890";

    for (let i = 0; i < 16; i++) {
      const random = Math.floor(Math.random() * str.length);
      let char = str[random];
      pass += char;
    }

    return pass;

}
 
export default useGenrateId;