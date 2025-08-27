import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { BookOpen, Star, Shield, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const cheats = [
    { id: 1, title: "נְגִיעַת הַמַּפְתֵּח", icon: "🔑" },
    { id: 2, title: "תִּמְסֹר וְתֵעָלֵם ", icon: "👻" },
    { id: 3, title: "חֹק הַמַּגְנֵטִים", icon: "🧲" },
    { id: 4, title: "מַבָּט הַיַּנְשׁוּף", icon: "🦉" },
    { id: 5, title: "הַקִּיר הָאֱנוֹשִׁי ", icon: "🧱" },
    { id: 6, title: "צִ'יט הַקֶּלַע", icon: "🏹" },
    { id: 7, title: "גַּנָּב הַזְּמַן", icon: "⏱️" },
    { id: 8, title: "הַמְּרַגֵּל הַשָּׁקֵט", icon: "🕵️" },
    { id: 9, title: "צִ'יט הַבָּרָק ", icon: "⚡" },
    { id: 10, title: "כַּפְתּוֹר הַמַּחַק", icon: "🔄" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-yellow-400" dir="rtl">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center py-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/he/thumb/7/75/Netanyalogo.png/250px-Netanyalogo.png"
                alt="מכבי נתניה לוגו"
                className="w-32 h-32 mx-auto object-contain"
              />
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
            סֵפֶר הַצִּ'טִים הַסּוֹדִי -
                          טרום ג'
            </h1>
            <div className="text-yellow-300 text-2xl font-medium mb-4">
              מאת:ג'וני
            </div>
            <div className="text-gray-200 text-lg mb-8">
            (לְעֵינֵי שַׂחְקָנֵי הַקְּבוּצָה בִּלְבַד!)
            </div>
            
            <div className="flex justify-center items-center gap-4 mb-8">
              <Shield className="w-8 h-8 text-yellow-400" />
              <div className="text-white text-xl font-medium">מכבי נתניה</div>
              <Shield className="w-8 h-8 text-yellow-400" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* הקדמה */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="mb-12 bg-gray-800/90 backdrop-blur-sm shadow-2xl border border-yellow-500/20 text-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-yellow-400">הַקְדָּמָה</h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-300 leading-8">
                <p>
                 בְּכָל מִשְׂחָק וִידֵאוֹ יֵשׁ צִ'יטִים – קוֹדִים סוֹדִיִּים שֶׁנּוֹתְנִים לָכֶם כּוֹחוֹת-עַל.
                  <br />
                  גַּם בְּכַדּוּרֶגֶל.                </p>
                
                <p>
                אֵלּוּ לֹא צִ'יטִים שֶׁל רַמָּאוּת. אֵלּוּ צִ'יטִים שֶׁל הָרֹאשׁ.
                <br />סוֹדוֹת קְטַנִּים שֶׁהוֹפְכִים שַׂחְקָן טוֹב לְשַׂחְקָן מְעוּלֶה.

                </p>
                
                <p>
                בַּדַּפִּים הַבָּאִים, נְגַלֶּה אֶת הַצִ'יטִים הַחֲשׁוּבִים בְּיוֹתֵר.

                  <br />בְּכָל שָׁבוּעַ נִלְמַד צִ'יט חָדָשׁ, וְנִתֵּן לָכֶם מְשִׂימָה לָאִמּוּן.
                </p>
                
                <p className="font-semibold text-yellow-300">
                הַמַּטָּרָה שֶׁלָּכֶם: לִהְיוֹת לֹא רַק הַקְּבוּצָה שֶׁרָצָה הֲכִי מַהֵר, אֶלָּא הַקְּבוּצָה שֶׁחוֹשֶׁבֶת הֲכִי מַהֵר.
                </p>
                
                <p className="text-xl font-bold text-white">
                מוּכָנִים לְשַׁדְרֵג אֶת הַמִּשְׂחָק שֶׁלָּכֶם?
                </p>
                
                <p className="text-2xl font-bold text-center text-yellow-400">
                  יאללה נתניה! 🔥
                </p>
                
                <p className="text-right text-gray-400 font-medium">
                הַמַּאֲמֵן
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* רשימת צ'יטים */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            10 הַצִּ'טִים הַסּוֹדִיִּים
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cheats.map((cheat, index) => (
              <motion.div
                key={cheat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link to={createPageUrl(`Cheat${cheat.id}`)}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gray-800/90 backdrop-blur-sm border border-yellow-500/20 cursor-pointer text-white hover:bg-gray-700">
                    <CardContent className="p-6 text-center">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {cheat.icon}
                      </div>
                      <div className="text-yellow-400 font-bold text-xl mb-2">
                        צ'יט #{cheat.id}
                      </div>
                      <div className="text-gray-300 font-medium">
                        {cheat.title}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* סיום */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="mt-12 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-2xl border-0">
            <CardContent className="p-8 text-center">
              <Target className="w-16 h-16 text-black mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-black mb-4">
              קָדִימָה לַמִּגְרָשׁ!
              </h3>
              <p className="text-gray-800 text-xl">
              עַכְשָׁו, הַכֵּלִים בַּיָּדַיִם שֶׁלָּכֶם. כְּכָל שֶׁתִּשְׁתַּמְּשׁוּ בָּהֶם יוֹתֵר, כָּךְ תִּהְיוּ שַׂחְקָנִים טוֹבִים יוֹתֵר.              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
