import React from 'react';
import CheatTemplate from '../components/CheatTemplate';

export default function Cheat6() {
  const cheatData = {
    number: 6,
    title: "צִ'יט הַקֶּלַע",
    icon: "🏹",
    problem: "הַקְּבוּצָה שֶׁלָּנוּ תּוֹקֶפֶת מִצַּד יָמִין. כָּל הַשַּׂחְקָנִים שֶׁלָּנוּ וְשֶׁל הַיָּרִיב שָׁם. נוֹצָר פְּקָק עֲנָק",
    secretCode: " תִּמְשֹׁךְ אֶת כָּל הַיְּרִיבִים לְצַד אֶחָד, וְאָז תְּשַׁגֵּר אֶת הַכַּדּוּר לַצַּד הַשֵּׁנִי הָרֵיק",
    explanation: `כְּמוֹ בְּקֶלַע (רוגטקה), אַתָּה קֹדֶם "מוֹתֵחַ" אֶת הַהֲגָנָה לְצַד אֶחָד, וְאָז "יוֹרֶה" אֶת הַכַּדּוּר לַצַּד הַשֵּׁנִי הַפָּנוּי בִּמְסִירָה אֲרֻכָּה. 
    בְּרֶגַע אֶחָד, כָּל הַהֲגָנָה שֶׁלָּהֶם צְרִיכָה לָרוּץ בְּפָּנִיקָה לַצַּד הַשֵּׁנִי, וְהֵם כְּבָר לֹא מְאֻרְגָּנִים.`,
    mission: "אִם אַתָּה בַּצַּד הֶעָמוּס, חַפֵּשׂ אֶת הֶחָבֵר שֶׁבַּצַּד הַפָּנוּי. אִם אַתָּה בַּצַּד הַפָּנוּי, הֱיֵה מַטָּרָה בְּרוּרָה וְקוֹלָנִית"
  };

  return <CheatTemplate {...cheatData} />;
}
