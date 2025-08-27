import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from './ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { ArrowLeft, ArrowRight, Home, AlertTriangle, Lock, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CheatTemplate({
  number,
  title,
  icon,
  problem,
  secretCode,
  explanation,
  mission
}) {
  const navigate = useNavigate();

  const getNavigationButtons = () => {
    const prevCheat = number > 1 ? number - 1 : null;
    const nextCheat = number < 10 ? number + 1 : null;

    return (
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
        <div className="w-full sm:w-auto">
          {prevCheat && (
            <Link to={createPageUrl(`Cheat${prevCheat}`)} className="w-full">
              <Button variant="outline" className="gap-2 w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                <ArrowRight className="w-4 h-4" />
                צ'יט #{prevCheat}
              </Button>
            </Link>
          )}
        </div>

        <Link to={createPageUrl('Home')} className="w-full sm:w-auto">
          <Button variant="outline" className="gap-2 w-full border-gray-400 text-gray-300 hover:bg-gray-300 hover:text-black">
            <Home className="w-4 h-4" />
            עמוד ראשי
          </Button>
        </Link>

        <div className="w-full sm:w-auto">
          {nextCheat && (
            <Link to={createPageUrl(`Cheat${nextCheat}`)} className="w-full">
              <Button variant="outline" className="gap-2 w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                צ'יט #{nextCheat}
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-yellow-400" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="https://upload.wikimedia.org/wikipedia/he/thumb/7/75/Netanyalogo.png/250px-Netanyalogo.png"
              alt="מכבי נתניה לוגו"
              className="mx-auto h-24 w-auto object-contain"
            />
          </div>
          
          <div className="text-8xl mb-4">{icon}</div>
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 bg-yellow-400 text-black font-bold">
            צ'יט #{number}
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
          <div className="text-yellow-300 text-xl">
           מכבי נתניה - סֵפֶר הַצִ'יטִים הַסּוֹדִי

          </div>
        </motion.div>

        {/* הבעיה */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="mb-8 bg-gray-800 border border-red-500/50 shadow-xl text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-red-400">
                <AlertTriangle className="w-6 h-6" />
                הַבְּעָיָה
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 leading-8">{problem}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* הקוד הסודי */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="mb-8 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-black">
                <Lock className="w-6 h-6" />
                הַקּוֹד הַסּוֹדִי (הַצִ'יט)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-black leading-8">{secretCode}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* ההסבר */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="mb-8 bg-gray-800/90 backdrop-blur-sm shadow-xl border border-yellow-500/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-yellow-400">
                <Lightbulb className="w-6 h-6" />
                הַהֶסְבֵּר
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-8 whitespace-pre-line">
                {explanation}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* המשימה */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="mb-8 bg-gray-800 border border-green-500/50 shadow-xl text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-green-400">
                <Target className="w-6 h-6" />
                הַמְּשִׂימָה שֶׁלְּךָ בָּאִמּוּן                </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 leading-8">{mission}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* ניווט */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {getNavigationButtons()}
        </motion.div>
      </div>
    </div>
  );
}
