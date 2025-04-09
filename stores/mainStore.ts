import { defineStore } from "pinia";

type NavLink = {
  id: number;
  name: string;
  to: string;
};

type SocialLinks = {
  id: number;
  icon: string;
  name: string;
  href: string;
  src: string;
};

type Addresses = {
  lat: number;
  lng: number;
};

interface GeneralState {
  navLinks: NavLink[];
  socialLinks: SocialLinks[];
  addresses: Addresses[]
}

export const useGeneralStore = defineStore("general", {
  state: (): GeneralState => ({
    navLinks: [
      { id: 1, name: "Главная", to: "/" },
      { id: 2, name: "О нас", to: "/about" },
      { id: 3, name: "Контакты", to: "/contacts" },
    ],
    socialLinks: [
      { id: 1, icon: 'icon-telegram', name: 'Telegram', href: '#', src: 'telegram.svg' },
      { id: 2, icon: 'icon-vk', name: 'VK', href: '#', src: 'vk.svg' },
      { id: 3, icon: 'icon-whatsapp', name: 'WhatsApp', href: '#', src: 'whatsapp.svg' },
    ],
    addresses: [
      { lat: 55.751244, lng: 37.618423 }, 
      { lat: 55.760186, lng: 37.618711 }, 
      { lat: 55.758472, lng: 37.601088 }, 
    ]
  }),
});
