import React from 'react';
import CheatTemplate from '../components/CheatTemplate';

export default function Cheat5() {
  const cheatData = {
    number: 5,
    title: "הַקִּיר הָאֱנוֹשִׁי",
    icon: "🧱",
    problem: "שַׂחְקָן מְקַבֵּל כַּדּוּר, וּמִיָּד יָרִיב סוֹגֵר עָלָיו. הוּא בְּלַחַץ, מְנַסֶּה לְכַדְרֵר, וּבְדֶרֶךְ כְּלָל מְאַבֵּד אֶת הַכַּדּוּר",
    secretCode: "הֶחָבֵר הֲכִי קָרוֹב אֵלֶיךָ הוּא לֹא סְתָם חָבֵר, הוּא קִיר. תִּשְׁתַּמֵּשׁ בּוֹ",
    explanation: `דַּמְיֵן שֶׁאַתָּה זוֹרֵק כַּדּוּר עַל קִיר. הַכַּדּוּר חוֹזֵר אֵלֶיךָ מִיָּד.
     בְּכַדּוּרֶגֶל, כְּשֶׁאַתָּה בְּצָרָה, הַדֶּרֶךְ הֲכִי חֲכָמָה לָצֵאת מִמֶּנָּה הִיא לִמְסֹר לַשַּׂחְקָן הֲכִי קָרוֹב אֵלֶיךָ וּמִיָּד לָרוּץ לְשֶׁטַח פָּנוּי כְּדֵי לְקַבֵּל אֶת הַכַּדּוּר בַּחֲזָרָה.
         זֶה מַפְתִּיעַ, מָהִיר, וּמְבַלְבֵּל אֶת הַהֲגָנָה.
         

`,
    mission: "חַפֵּשׂ הִזְדַּמְּנוּיּוֹת לְבַצֵּעַ 'קִיר אֱנוֹשִׁי'. בִּמְקוֹם לְהִכָּנֵס בַּשּׁוֹמֵר שֶׁלְּךָ, תִּשְׁתַּמֵּשׁ בֶּחָבֵר שֶׁלְּךָ"
  };

  return <CheatTemplate {...cheatData} />;
}
