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

export const useAssignGift = () => {
    const number = Math.floor(Math.random() * diwaliGifts.length);
    return diwaliGifts[number];
}
