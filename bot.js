
const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

let d5loa = [];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("Omar.");
});


client.on("guildMemberAdd", member => {

       if(member.guild.id === 'ايدي السيرفر الي بدك تنشره') {
           d5loa.push(member.user.id)
      }

    if(d5loa.includes(member.user.id)) return;


    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [` **
  مساء الخير.
مساء مليئ بجميع الناس الجميلة
التى تجعل من حياتنا أجمل.
حياكم الله جميعاً في روماتنا الصوتية.
وجودك جنة ، وبساتين من وَرد. 
رابط : https://discord.gg/EGn6JAg **`,`**

مسائك ورد وعنبر مسائك مدري اعتبر نفسك 
قريت كلام يرد الروح وتعال سولف معنا :cherries:؟.
https://discord.gg/EGn6JAg **`,` **
تجمعنا الصدف .. 
و يقارب بيننا اللحن و العزف .. 
نلتقي غرباء و نصبح بمرور الايام اصدقاء** `,`**
حياك تنورنا يا جميل ناقصنا وجودك:dove::hearts:️..
https://discord.gg/EGn6JAg
**`,`**

بعض الاشخاص يبحثون عن مكان جميل 
 والبعض يجعل المكان جميلا:black_heart: . 

حياكم بروماتنا الصوتية :hearts:️:sparkles: .
 Welcome To Black.
- https://discord.gg/EGn6JAg

 **`,`** أيُها المُنهك,قد تكُون الحياة غير مُنصِفة مَعك 
 وفي كُل مرة تُحاول النهُوض فيها تُسقِطكَ أرضاً 
 لا تجزع وكُن قوياً إجمع شُتاتك وقِف مُستقيماً إصبر 
 قد يأتي مساءً يمحِي وجع الأمس وفرحاً يُنسيك مُر الأيام 
 طابَ مسائك وطابت أوجاعُ  | تنورنا يبعدي قلبي.
 https://discord.gg/EGn6JAg **
  `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})
    
 





 
 
 
 
client.login(process.env.BOT_TOKEN);
