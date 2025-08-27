import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Smartphone, Shield } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const isHomePage = location.pathname === createPageUrl('Home') || location.pathname === '/';

  useEffect(() => {
    const title = "ספר הצ'יטים הסודי - ביתר טוברוק";
    const description = "ספר הצ'יטים הסודי של ביתר טוברוק - לעיני שחקני הקבוצה בלבד!";
    const imageUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/17dd819a4_download.png"; // Logo Beitar Tubruk

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
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/17dd819a4_download.png" alt="לוגו ביתר טוברוק" className="w-10 h-auto" />
                <div>
                  <div className="font-bold text-xl">ספר הצ'יטים הסודי</div>
                  <div className="text-sm text-gray-400">ביתר טוברוק</div>
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
            BEITAR TUBRUK
          </div>
          <div className="text-gray-400 text-sm">
            ספר הצ'יטים הסודי - לעיני שחקני ביתר טוברוק בלבד
          </div>
        </footer>
      )}
    </div>
  );
}
