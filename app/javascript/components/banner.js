import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["A bartender is just a pharmacist with a limited inventory…", "I drink only to make my friends seem interesting", "Whiskey is, by far, the most popular of all remedies that will not cure a cold", "The problem with the world is that everyone is a few drinks behind…"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
