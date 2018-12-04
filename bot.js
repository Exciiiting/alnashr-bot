
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
  let words = [`**
  أيُها المُنهك,قد تكُون الحياة غير مُنصِفة مَعك 
وفي كُل مرة تُحاول النهُوض فيها تُسقِطكَ أرضاً 
لا تجزع وكُن قوياً إجمع شُتاتك وقِف مُستقيماً إصبر 
قد يأتي مساءً يمحِي وجع الأمس وفرحاً يُنسيك مُر الأيام 
طابَ مسائك وطابت أوجاعُ  | تنورنا يبعدي قلبي.  
*Welcome to* **Fast**
   https://discord.gg/EGn6JAg **`,`**
  ي جميل , تعال ابغى اسممع صوتك .:candle::black_heart:.
  رابط:https://discord.gg/EGn6JAg
-  مابقول طب بحضني , بس تعال وارضيك ياعين ابوي .  ؟ :heartbeat:.

  LINK : https://discord.gg/EGn6JAg ** `,`**
    :hearts:️:paperclips:.
  :heart_eyes: :heart: 
  م أبغى ابثرك لكن خلك لطيف وامش ياخي . ؟  :musical_score::sparkles:
                                 [ https://discord.gg/EGn6JAg ] 
  وههذي لك ي جمميل ؟ ...**`,`** أسعد الله اوقاتك بكل خير .. حياك الله بسيرفرنا .. :sunflower: ** https://discord.gg/EGn6JAg `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})
    
    client.login(process.env.BOT_TOKEN);
