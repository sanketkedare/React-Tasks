// myHooks.js
const diwaliGifts = [
    "Sweets Box",
    "Dry Fruits Hamper",
    "Decorative Diyas",
    "Candles Set",
    "Silver Coin",
    "Gift Voucher",
    "Traditional Dress",
    "Lakshmi Ganesh Idols",
    "Chocolate Box",
    "Customized Greeting Card",
    "Home Decor Items",
    "Aromatic Incense Sticks",
    "Ethnic Jewelry",
    "Spiritual Book",
    "Personalized Photo Frame"
  ];
  
  /**
   * useAssignGift custom hook
   * 
   * This hook randomly selects a gift from the predefined list of Diwali gifts.
   * It is called when assigning gifts to ensure a random selection each time.
   */
  export const useAssignGift = () => {
    const number = Math.floor(Math.random() * diwaliGifts.length);
    return diwaliGifts[number];
  };
  