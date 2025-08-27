import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Smartphone, Shield } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const isHomePage = location.pathname === createPageUrl('Home') || location.pathname === '/';

  useEffect(() => {
    const title = "ספר הצ'יטים הסודי -  מכבי נתניה ";
    const description = "ספר הצ'יטים הסודי של מכבי נתניה   - לעיני שחקני הקבוצה בלבד!";
    const imageUrl = "https://upload.wikimedia.org/wikipedia/he/thumb/7/75/Netanyalogo.png/250px-Netanyalogo.png"; // Maccabi Netanya Logo

    // Update page title
    document.title = title;

    // Update meta tags for sharing
    const metaTags = {
      'description': description,
      'og:title': title,
      'og:description': description,
      'og:image': imageUrl,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': imageUrl,
    };

    Object.keys(metaTags).forEach(key => {
      let element = document.querySelector(`meta[name="${key}"], meta[property="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (key.startsWith('og:')) {
            element.setAttribute('property', key);
        } else {
            element.setAttribute('name', key);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', metaTags[key]);
    });
    
    // Update favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = imageUrl;

  }, []);

  return (
    <div className="min-h-screen" dir="rtl">
      {!isHomePage && (
        <header className="bg-black/95 backdrop-blur-sm border-b border-yellow-500/50 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link 
                to={createPageUrl('Home')} 
                className="flex items-center gap-3 text-white hover:text-yellow-300 transition-colors"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/he/thumb/7/75/Netanyalogo.png/250px-Netanyalogo.png"
                  alt="מכבי נתניה לוגו"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <div className="font-bold text-xl">ספר הצ'יטים הסודי</div>
                  <div className="text-sm text-gray-400"> מכבי נתניה - טרום ג' </div>
                </div>
              </Link>
              
              <div className="flex items-center gap-2 text-gray-400">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm">לשחקנים בלבד</span>
              </div>
            </div>
          </div>
        </header>
      )}

      <main className="flex-1">
        {children}
      </main>
      
      {!isHomePage && (
        <footer className="bg-black text-center py-8 border-t border-yellow-500/20">
          <div className="text-yellow-400 font-bold text-lg mb-2">
            מכבי נתניה - טרום ג'
          </div>
          <div className="text-gray-400 text-sm">
            ספר הצ'יטים הסודי - לעיני שחקני מכבי נתניה בלבד
          </div>
        </footer>
      )}
    </div>
  );
}
