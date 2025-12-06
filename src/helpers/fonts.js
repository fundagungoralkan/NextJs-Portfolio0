import { Clicker_Script, Poppins, Quicksand } from 'next/font/google';


export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
  display: 'swap', // fontların hızlıca yüklenmesini sağlar
});

export const clicker = Clicker_Script({
  subsets: ['latin'],
  variable: '--font-clicker',
  weight: ['400'],
  display: 'swap', // fontların hızlıca yüklenmesini sağlar
});

export const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight: ['400', '500', '600', '700'], 
  display: 'swap', // fontların hızlıca yüklenmesini sağlar
});