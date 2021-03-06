document.querySelector('#button').addEventListener('click', getZodiac)
document.querySelector('#button').addEventListener('click', removeTitle)

function getZodiac(){
  let month = document.querySelector('#monthChoice').value
  let day = document.querySelector('#day').value
 
    
  // Capricorn - Dec 22 - Jan 19
  if(month == 12 && day >= 22 && day <= 31 || month == 1 && day >= 1 &&day <= 19){
    document.querySelector('.text').innerText = "Smart, hardworking, and fully in control of their destiny, Capricorn signs will always get what they set their mind to, in both personal and professional life—no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also know how they wish other people would behave."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./imgs/capicorn.jpg'>"
    document.querySelector('h1').innerText = 'YOU ARE A CAPICORN'
  }
  //Aquarius - Jan 20 - Feb 18
  else if(month == 1 && day >= 20 && day <= 31 || month == 2 && day >= 1 && day <= 18){
    document.querySelector('.text').innerText = "Independent and enigmatical, Aquarians are unique. There is no one quite like an Aquarius, and because each is so incredibly individual, it can be tough to describe them as a group. Aquarians don't like labels, and may shy away from any adjective—even the good ones you might bestow upon them. Aquarians believe in the nature of change and evolution, and even though they're a fixed sign, they may not necessarily believe they are the \'same' people they were when they were born."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./imgs/aquarius.jpg'>"
    document.querySelector('h1').innerText = 'YOU ARE A AQUARIUS'
  }
  //Pisces - Feb 19 - Mar 20
  else if(month == 2 && day >= 19 && day <= 28 || month == 3 && day >= 1 && day <= 20){
    document.querySelector('.text').innerText = "Smart, creative, and deeply intuitive, Pisces can be close to psychic. Pisces feel things deeply, and have incredibly strong gut reactions. A Pisces \'knows' things from deep within, and can often judge whether a person or situation is good or bad. That doesn't mean a Pisces ignores the logical part of their brain, though. Deeply intelligent, Pisces have a profound respect for the power of the human mind. Is it a surprise that Albert Einstein was a Pisces?"
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./imgs/pisces.jpg'>"
    document.querySelector('h1').innerText = 'YOU ARE A PISCES'
  }
  // Aries - Mar 21 - Apr 19
  else if(month == 3 && day >= 21 && day <= 31 || month == 4 && day >= 1 && day <= 19){
    document.querySelector('.text').innerText = "The first sign of the Zodiac, Aries are the trailblazers. Passionate and independent, Aries will never do something just because everyone else is doing it—a Ram needs to be 100 percent committed to the task at hand. Competitive to the max, the best way to motivate an Aries is to turn something into a contest. Aries will put everything they have (and then some) into winning. Loyal, smart, and impulsive, they always have multiple projects on their mind, and won't be satisfied until their work, social life, and personal lives line up exactly with the dream life they've envisioned."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./imgs/aries.jpg'>"
    document.querySelector('h1').innerText = 'YOU ARE A ARIES'
  }
  //Taurus - Apr 20 - May 20
  else if(month == 4 && day >= 20 && day <= 30 || month == 5 && day >= 1 && day <= 20){
    document.querySelector('.text').innerText = "Smart, ambitious, and trustworthy, Taurus is the anchor of the Zodiac. Amazing friends, colleagues, and partners, Taureans value honesty above all else and are proud that their personal relationships tend to be drama free. Bulls get the reputation of being stubborn, but they're not always stuck in their ways. This searching sign is willing to see another point of view, but they won't flip-flop on an opinion just to make someone else happy. They will shift their thinking only if they truly have a change of heart."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./imgs/taurus.jpg'>"
    document.querySelector('h1').innerText = 'YOU ARE A TAURUS'
  }
  //Gemini - May 21 - June 21
  else if(month == 5 && day >= 21 && day <= 31 || month == 6 && day >= 1 && day <= 21){
    document.querySelector('.text').innerText = "Smart, passionate, and dynamic, Gemini is characterized by the Twins, Castor and Pollux, and is known for having two different sides they can display to the world. Expert communicators, Gemini is the chameleon of the Zodiac, adept at blending into different groups based on the vibe and energy they perceive. While they're also amazing at showcasing surface traits, the Gemini well runs deep, which is why the Twins are one of the Zodiac's most emotionally intelligent signs."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./imgs/gemini.jpg'>"
    document.querySelector('h1').innerText = 'YOU ARE A GEMINI'
  }
  //Cancer - June 22 - July 22
  else if(month == 6 && day >= 22 && day <= 30 || month == 7 && day >= 1 && day <= 22){
    document.querySelector('.text').innerText = "Emotional, intuitive, and practically psychic; ruled by the moon and characterized by the crab, Cancer has so much going on in its watery depths. Cancer signs may seem prickly and standoffish at first meeting, once they make the decision to become friends with someone, that person has a friend for life."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./imgs/cancer.jpg'>"
    document.querySelector('h1').innerText = 'YOU ARE A CANCER'
  }
  // July 23 - Aug 22
  else if(month == 7 && day >= 23 && day <= 31 || month == 8 && day >= 1 && day <= 22){
    document.querySelector('.text').innerText = "Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the Zodiac, ready to blaze a trail, vanquish injustice, and make a name for themselves along the way. Blessed with high self-esteem, Lions know that they possess enviable traits—and they're proud of them. They don't believe in false modesty and will be the first to praise themselves for a job well done. But Leo isn't self-aggrandizing or unwilling to roll up those sleeves and do the work: this sign knows that in order to be respected and admired, he or she needs to put in the effort worthy of a leader."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./imgs/leo.jpg'>"
    document.querySelector('h1').innerText = 'YOU ARE A LEO'
  }
  // Aug 23 - Sept 22
  else if(month == 8 && day >= 23 && day <= 31 || month == 9 && day >= 1 && day <= 22){
    document.querySelector('.text').innerText = "Smart, sophisticated, and kind, Virgo gets the job done without complaining. Virgos are amazing friends, always there to lend a hand and also lend advice. Practical Virgos are incredibly adept at big picture thinking, and planning out their life, their vacations, and what they're going to do today isn't a drag it makes them feel in control and secure."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./imgs/virgo.jpg'>"
    document.querySelector('h1').innerText = 'YOU ARE A VIRGO'
  }
  // Sept 23 - Oct 23
  else if(month == 9 && day >= 23 && day <= 30 || month == 10 && day >= 1 && day <= 23){
    document.querySelector('.text').innerText = "Intelligent, kind, and always willing to put others before themselves, Libras value harmony in all forms. Ruled by Venus, the planet of beauty, Libra adores a life that looks good. As the master of compromise and diplomacy, Libra is adept at seeing all points of view, and excels at crafting compromises and effecting mediation between others. This sign has a rich inner life yet loves other people, and they're always happiest with a large group of friends, family, and coworkers on whom they can count."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./imgs/libra.jpg'>"
    document.querySelector('h1').innerText = 'YOU ARE A LIBRA'
  }
  // Oct 24 - Nov 21
  else if(month == 10 && day >= 24 && day <= 31 || month == 11 && day >= 1 && day <= 21){
    document.querySelector('.text').innerText = "Passionate, independent, and unafraid to blaze their own trail no matter what others think, Scorpio signs make a statement wherever they go. They love debates, aren't afraid of controversy, and won't back down from a debate. They also hate people who aren't genuine, and are all about being authentic—even if authentic isn't pretty."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./imgs/scorpio.jpg'>"
    document.querySelector('h1').innerText = 'YOU ARE A SCORPIO'
  }
  // Nov 22 - Dec 21
  else if(month == 11 && day >= 22 && day <= 30 || month == 12 && day >= 1 && day <= 21){
    document.querySelector('.text').innerText = "Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. Sagittarius isn’t afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what other people think. Sagittarius is a born adventurer, and loves solo travel and exploration. Sagittarius also loves exploring the inner workings of their minds, and love stretching their horizons through a good book or movie."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./imgs/sagittarius.jpg'>"
    document.querySelector('h1').innerText = 'YOU ARE A SAGGITTARIUS'
  }
  else {
      document.querySelector('p').innerText = 'Enter Your Birthday'
  }
}

function removeTitle(){
  document.querySelector('h4').style.display = 'none'
  document.querySelector('.text').style.display = 'block'
  document.querySelector('.horoscope').style.display = 'block'
}