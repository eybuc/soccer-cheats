import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function createPageUrl(pageName) {
  const pageMap = {
    'Home': '/',
    'Cheat1': '/cheat1',
    'Cheat2': '/cheat2',
    'Cheat3': '/cheat3',
    'Cheat4': '/cheat4',
    'Cheat5': '/cheat5',
    'Cheat6': '/cheat6',
    'Cheat7': '/cheat7',
    'Cheat8': '/cheat8',
    'Cheat9': '/cheat9',
    'Cheat10': '/cheat10'
  };
  
  return pageMap[pageName] || '/';
}
