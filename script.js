document.addEventListener("DOMContentLoaded", () => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let horoscope = {
    Acquarius: {
      Sunday:
        "As Mars, warrior planet of the cosmos prepares to move into his final month in Aquarius, he is drawing on the support he has had for some time, from playful and adventurous forces. Mars is able to take both those energies on board and own them himself. This is likely to see more fuel being added to a passion for adventure, as well as to your romantic and creative passions. If it excites you, dare to throw yourself into it with hot headed enthusiasm.",
      Monday:
        "Today's adventurous New Moon comes just as this professional year is reaching a point where everything is coming together. With both the Moon and Mercury leaving your sector of adventure, travel, learning and discovery and returning to your career sector tomorrow, they're working to make today's adventurous energy count. Despite the fact that Jupiter moves into his final month in your career sector today, it is from tomorrow that things become more serious.",
      Tuesday:
        "While having Jupiter in your career sector for the last year has put a serious amount of focus on your professional game, there is a dramatic change today. Even Venus' return last month and her retrograde turn over the weekend hasn't created any urgency. Yet as the Moon and Mercury return, just a day after Jupiter moved into his final month, all of a sudden you're intuitively and intellectually engaged. It is time to bring things home and that includes your professional year and your personal and professional goals and ambitions in general.",
      Wednesday:
        "Aquarius Horoscope Professionally, with your personal and professional goals and ambitions or just a sense of competitiveness in general, you're at a point where you're now able to get down to business. With your heart and head in the game, your finger on the pulse and ear to the ground and opportunities opening up in front of you, you're now able to start walking the talk. Yet across the board, while there is plenty of confidence and motivation, there is little if any urgency.",
      Thursday:
        "While the Moon returned to your career sector two days ago and in that time has aligned with both Venus and Mercury, its final hours are arguably the most important. While Venus and Mercury have returned to bring things home, they will be on the job for several more months. It is the Moon's alignment with Jupiter here, for the last time until 2029, that brings you to the very heart of what you're striving for. Not just on the career front, but with all your personal and professional goals and ambitions.",
      Friday:
        "While the Moon left your career sector yesterday and this has wrapped up an intense few professional days, the fundamental forces in play are just getting started. As social and serendipitous lunar vibes encourage you to take your professional hat off over the weekend, this might be easier said than done. Yet in saying that, with your next chance to take your professional hat off over the weekend not coming until early 2019, figuring out a solution is a priority.",
      Saturday:
        "You not only have social and serendipitous lunar vibes in play today, but a mix of romance, passion and adventure is urging you to embrace the weekend spirit. Even the professional gods, who have assembled to bring you into the most important weeks of your professional year, can see the benefits of taking time out. You won't lose your professional edge if you take time out and you may find that a break will do you good, ultimately improving your productivity and creativity.",
    },
    Pisces: {
      Sunday:
        "This is an important day for having both your money and professional hats on, but in both cases in a way that is more about observing. The Sun is still in your financial sector, but for now is more focused on throwing the solar spotlight on your financial needs and priorities. The Sun is normally focused on 'what is' and on reality checks, but today this is going deeper, allowing you to look beyond the money. At the same time, the Moon is fuelling your professional instincts and imagination, in a way that is giving you a taste of things to come.",
      Monday:
        "A New Moon is a coming together of the Sun and Moon. With the solar and lunar cycles in sync, this is always a time for new beginnings, with a surge of solar and lunar power giving anything new or that you're willing to commit to, some real momentum. This is especially so on the financial front, but also when it comes to anything that you're passionate about. It helps that you have your eyes open and head out of the sand, but also a mix of intuition and logic, imagination and intelligence to draw on.",
      Tuesday:
        "Pisces Horoscope This is a day where two fairly ordinary events coincide to create a much greater impact than they could separately. It is not just that the Moon and Mercury return to your sector of adventure, travel, learning and discovery within hours of each other today, but where they're off to next. The Moon will be in your career sector by the weekend and Mercury within three weeks. With Jupiter taking the same step early next month, support for all things adventurous comes just as you're preparing for a major professional shift.",
      Wednesday:
        "Today's adventurous lunar vibes are proving a multi purpose advantage. On one hand, these adventurous lunar vibes, which roll around once every four weeks are always good for body, mind and soul. On the other hand, they are proving the perfect distraction, especially with life only getting busier. Yet this is also a chance to tap into the very powerful forces in play on the adventurous front, which are refusing to be side lined. There is a call to not only have a bucket list but to start ticking things off that list.",
      Thursday:
        "There is a growing sense of change in the air and this will only grow stronger over the coming days. With a major new professional surge just four weeks away and a chance to start lining up coming up over the coming days, today's adventurous lunar vibes are begging for your attention. As the Moon aligns with lucky Jupiter for the last time in your sector of adventure, travel, learning and discovery until 2029, this can't be ignored. No matter how busy you are, pay attention to what a sense of wanderlust, curiosity and adventure is telling you.",
      Friday:
        "Pisces Horoscope In three weeks and six days' time Jupiter, the planet of luck and expansion will return to your career sector, kicking off your biggest professional surge in over a decade. This will tap into the hard work of the last three years, bringing you to a point in your professional life that everything until now is leading up to and everything from then will lead on from. As the Moon makes its last visit before Jupiter returns, it is more important than ever to listen to your professional instincts and imagination, without over thinking things.",
      Saturday:
        "Pisces Horoscope For now, even though the Moon is making an important visit to your career sector, the last before Jupiter returns, this is being balanced by powerful forces in an adventurous part of your chart. They are a lot stronger than the Moon, so while you may have your professional hat on, the weekend spirit is stronger. However, that won't always be the case, with a need to make work/life balance a priority, while you still can.",
    },
    Aries: {
      Sunday:
        "While this is a day when you're likely to be wearing many hats, including your money and professional hats, adventurous lunar vibes could put things in perspective. If nothing else, a sense of wanderlust, curiosity and adventure will help to keep things in perspective. Yet as the Moon wraps up its last visit to an adventurous part of your chart before lucky Jupiter returns, there are clues to the kind of energy that will define the last two months of 2018 and the whole of 2019.",
      Monday:
        "A New Moon is always an opportunity for a fresh start and today this is being expressed on a number of fronts. The three most important areas this is triggering is on the personal, relationship and financial fronts. A New Moon as Jupiter moves into his final month in your financial sector, is the perfect chance to take your financial power back. Yet at the halfway point in your solar year and at a time when the focus is on your relationships, this is a chance to commit to your relationships and also to your own personal truth.",
      Tuesday:
        "The Moon and Mercury have a big impact on both the relationship and financial fronts today. Not only will they spend their final hours in your relationship sector closely aligned, but they will also end the day aligned in your financial sector. With powerful forces already in play on both fronts and remaining in play, you're able to put the Moon and Mercury's combined intuitive and intellectually savvy edge to work on both fronts. Start the day committed to ensuring the communication lines are open.",
      Wednesday:
        "Your financial situation and money matters have a lot of cogs that all have to work in harmony and until now, only a few have been operational. Today the most important cogs, those that sharpen your financial instincts and give you a smart head for money kick in, with financial tension able to kick start the whole machinery. If it feels like you've been waiting for something before you can start taking your financial power back, you have. Yet a time of waiting is over and a time of action has begun.",
      Thursday:
        "Just two days after Mercury, the planet of communication left your relationship sector, ending a roller coaster ride for you and your relationships, things take a turn for the better today. Any personal and/or relationship tension just a few days ago came from a clash between your personal and relationship needs. Today, as Juno turns retrograde in your communication sector there is a chance to give the past and unsaid words a voice, while friendly lunar vibes help restore your own confidence.",
      Friday:
        "Aries Horoscope There is something about today's adventurous lunar vibes that are both exciting and mean business. The Moon returns to an adventurous part of your chart once every four weeks, creating a brief window when you're able to embrace a sense of wanderlust, curiosity and adventure. These lunar vibes are fleeting but have returned in time to encourage you to embrace the weekend spirit. Yet with this is a sense of anticipation, as you start to suspect that this is a taste of things to come.",
      Saturday:
        "Everything about the Moon's last visit to your sector of adventure, travel, learning and discovery before lucky Jupiter returns, is a taste of things to come. This includes a sense of wanderlust, curiosity and adventure, but also any complications you might face. As today's adventurous lunar vibes set out to make this weekend as adventurous and exciting as possible, this will make any barriers or obstacles more obvious. Pay attention, because you can't change what you can't see.",
    },
    Taurus: {
      Sunday:
        "At a point in the year when life will only get busier and especially on the professional front, today's adventurous lunar vibes arrive with perfect timing. Mars, warrior planet of the cosmos is about to move into his final month in your career sector and with the Sun still in your work sector, the professional momentum continues to build. Yet today's adventurous lunar vibes refused to be ignored and may even trigger a sense of rebellion. Life can't be all work and no play.",
      Monday:
        "A New Moon is a chance to push the reset button and today's New Moon does just that. This is especially so when it comes to your job, where you give service or whatever it is that keeps you busy. This might be the motivation to clear out the garage, apply for a new job or to start a new health or exercise regime. If you have procrastinated in the past, this is the perfect chance to put that behind you. Just because you started something but didn't finish it in the past, has no bearing on the wave today's New Moon can create.",
      Tuesday:
        "The Moon is the fastest body in the solar system, moving from one area of your chart to the next every few days. Yet what makes the Moon's departure from your work sector and return to your relationship sector today significant, is that Mercury is doing the same. The Moon might make this transition every four weeks, but Mercury only makes it once a year. You start the day with an intuitive and intellectually savvy edge when it comes to work and job matters, but end the day with a chance to give your emotional responses and relationships a voice.",
      Wednesday:
        "Don't be alarmed if you're feeling under pressure today or feel that this is a sign that something has gone wrong. What you're starting to experience is your own needs fighting back, at a point in the year when that is not normally the case. Around the time of your birthday you're more likely to ask 'what about me' or feel strongly that your needs matter. But at a point in the year when it is often all about others and less about you, that voice that asks 'what about me', is refusing to be silenced.",
      Thursday:
        "On one hand, the Moon's alignment with Jupiter in your relationship sector today is no different than their other alignments, every four weeks over the past 12 months. Yet what makes today different, is that this is their last alignment here until 2029. This comes just as Jupiter moves into his final four weeks in your relationship sector and with Venus and Mercury, the planets of love and communication on board, this is giving your relationships the nudge they need.",
      Friday:
        "The money gods are not out in full force today, but at what is not typically an active point in your financial year. As Juno spends her first full day in retrograde motion in your income sector, the Moon is making its last visit to your financial sector before lucky Jupiter returns. Both want your attention and their opposition could create some financial tension. Yet with support on both fronts, it won't take much to turn this into motivation. This will help energise an already potent team of forces in play across the income, work and career fronts.",
      Saturday:
        "As the Sun moves into his final 10 days in your work sector, there is a need to keep your work hat on over the weekend, but not with the degree of urgency you would expect. With a need to also keep your money and relationship hats on, it would be a problem if work and job matters tried to demand too much attention. Instead, with so much still unfolding, it is more about keeping your eyes, mind and your options open.",
    },
    Gemini: {
      Sunday:
        "Gemini Horoscope At a point in the year when a balance between work and play is not only important but essential, even the professional gods are getting on board. As Venus and Mercury draw closer towards their first alignment in your work sector in 10 years, they are not just bringing heart and mind together, but the past, present and future. Venus wants you to follow your heart and Mercury to keep your head in the game, but in a way that has them working together. When both are in harmony, anything is possible.",
      Monday:
        "Two very different energies vie for your attention today, forcing you to confront a need for balance, especially between work and play. As Jupiter moves into his final month in your work sector, he kicks off what could be the busiest month of the year. Yet today's playful New Moon knows that life can't be all work and no play. In reality, there is no conflict, for the right balance between work and play will enrich every aspect of your life, especially professionally.",
      Tuesday:
        "With the Moon starting the day in a playful part of your chart, but ending the day in your work sector, a balance between work and play was always going to be important. Even more so with Mercury also doing the same and with other powerful forces, already and remaining in play on both fronts. It is their return to your work sector that gives you an intuitive and intellectually savvy edge, just a day after Jupiter moved into his final month. This allows you to work smarter, while also trusting your gut.",
      Wednesday:
        "Gemini Horoscope Jupiter's final month in your work sector was always destined to be busy, but the real game changer is that you now have heart, head and emotions engaged. Apart from the Sun, who is still 12 days away, you have all the resources needed to start making things happen. Yet with the Moon and Mercury working for what you're able to do now, Venus looking back at untapped potential and Jupiter building for the future, you have multiple options. You're able to exploit the past, present and future.",
      Thursday:
        "Just 12 days after she returns to Gemini, Juno turns retrograde today and begins her 12 day trek back out again. This is the first planetary activity in Gemini since the Sun left in June, but it is one that is as much about you as it is about your relationships. With Jupiter just four weeks away from your relationship sector, Juno is the perfect planet to look at a balance between your personal and relationship needs. For as the queen of commitment and especially commitment to your relationships, Juno knows what you want from your relationships and what they need from you.",
      Friday:
        "As much as a clash between the Moon and Juno might create some personal and/or relationship tension today, the timing couldn't be better. When the Moon is involved emotional responses will be amplified and everything exaggerated. Yet as the Moon makes its last visit to your relationship sector before Jupiter returns, an opposition with Juno in Gemini, will put your personal and relationship needs into conflict. This won't be put to the test again, with a chance to gain some valuable insight.",
      Saturday:
        "The Moon has not only stormed through a lot of very active areas of your chart over the last seven days but into and out of opposition with a number of planets. In that time you've had to deal with work/life balance tension, work tension and job pressure and just yesterday, personal and/or relationship tension. Yet in all cases, there was a common theme and that was of balance. Whether it is a balance between your home and professional lives, between your personal and relationship needs or knowing when to keep your work hat on and when to take it off, it is all about balance.",
    },
    Cancer: {
      Sunday:
        "Cancer Horoscope The Moon wraps up an important visit to your work sector today, one that brings a taste of things to come. On the job front, but also when it comes to your health, how you manage your time and even where you're able to be of service, take your time when it comes to processing the valuable clues, hunches and insights of the last few days. Everything that the Moon touched on over the last few days, lucky Jupiter is set to expand over the course of the next 14 months. Including how busy life is set to become.",
      Monday:
        "As a Moon ruled Sign, you were born in tune with the lunar cycles and able to tap into Moon intuitive and emotional edge. This is what gives you your infamous sixth sense and empathy. And this is why today's New Moon is likely to have a stronger effect on you than it will on others. If life has gone off kilter, your routine has been disrupted or wherever you feel things have become unaligned, this is a chance to push the reset button.",
      Tuesday:
        "Just four days after Venus turned retrograde in a fun, playful, romantic and creatively charged part of your chart and a day after Jupiter moved into his final month, support arrives. Within the space of just a few hours, the Moon and Mercury not only return, but quickly align. This will see playful and romantically charged lunar vibes kick in, just as Mercury returns to give your heart a voice and to put heart and mind on the same page.",
      Wednesday:
        "With the final two months of the year not only destined to be the busiest, but with that busy phase continuing right through 2019, work/life balance is everything. While any work/life balance tension yesterday has dialled back, today's playful lunar vibes offer a chance to approach this from a different angle. Yesterday the Moon put your home and professional lives in conflict, but today's playful lunar vibes suggest a balance between work and play.",
      Thursday:
        "Just two days ago it was the Moon exacerbating any work/life balance issues and today there is a chance to use this to your advantage. The Moon not only begins the day in a playful part of your chart and ends the day in your work sector, but its time in each is critically important. The Moon's last alignment with Jupiter in a fun, playful, romantic and creatively charged part of your chart until 2029 can't be ignored. You can't have a balance between work and play, without the right work/life balance.",
      Friday:
        "While there might be some pushback as the Moon makes its monthly visit to your work sector, this is more a timely reminder of a need to pace yourself. The Moon has returned for what should be the ordinary visit it makes once every four weeks, in order to sharpen your instincts and to give you an intuitive read on work and job matters. Instead, with lucky Jupiter just four weeks away and Mercury even closer, this is vitally important information.",
      Saturday:
        "Cancer Horoscope When Jupiter returns to your work sector early next month, he will kick off a period of job growth and a busy surge that will continue for the rest of this year, the whole of 2019 and into the early months of 2020. With the Moon making its last visit until then, you have access to some valuable clues, hunches and insights that will help you start lining up in front of new doors before they open. Yet knowing it won't be as easy to take your work hat off in future, pay attention to any insight into how to better manage your time.",
    },
    Leo: {
      Sunday:
        "With Mercury, the planet of communication been and gone from your communication sector and after a New Moon six days ago, not just how you communicate has been up for review, but why. You have the mechanics sorted and you know how to keep the communication lines open, but now the focus is on what needs you can apply this to. What you have now is a chance to step back and redefine your communication priorities, across all aspects of your life.",
      Monday:
        "Having a New Moon in your communication sector during Mercury, planet of communication's last full day here is a match made in heaven. This was always going to be a good day for new talks, discussions and for initiating all forms of communication. And in his last full day here, Mercury was already on a mission to ensure the communication lines are open. All your communications will benefit from this, but especially on the relationship front.",
      Tuesday:
        "Leo Horoscope There is a shift or a balance of power transfer from today, that is putting a lot more focus on home and family matters. Jupiter moved into his final month in your home and family sector yesterday and Venus turned retrograde here over the weekend. Yet even that wasn't enough to create the shift that can be felt today. It takes the Moon and Mercury returning, within the space of just a few hours to shift your head, intuition and imagination here as well.",
      Wednesday:
        "Leo Horoscope As more and more planets turn their attention to home and family matters, work/life balance becomes an issue. The focus will always shift onto home and family matters at this time of year, but there are two big differences this year. The first is just how much focus is going onto home and family matters, which is extraordinary. The second is that this is not usually an active point of your professional year. As your home and professional lives clash, it is all about finding the right balance.",
      Thursday:
        "On one hand, an alignment between the Moon and Jupiter in your home and family sector today is a very ordinary event. After all, they have aligned here every four weeks since Jupiter returned last October. Yet there last alignment here until 2029, brings one last chance to get to the heart of where you feel driven and where there is the potential for expansion and opportunity. This comes just as Jupiter moves into his final four weeks and as you have the support for anything you put heart and mind to.",
      Friday:
        "This has been a roller coaster ride of a week, with the Moon fuelling a lot of emotional responses and along the way, creating some tension. At the start of the week, it was work tension and job pressure and over the last few days work/life balance tension. In both cases, this was a call for balance, with today's playful lunar vibes offering the perfect solution. The Moon is spending the weekend here and this is just what the doctor has ordered. A lot of life's tensions can be resolved with the right balance between work and play.",
      Saturday:
        "Even the professional gods are happy to step back today and are even actively encouraging you to keep your work hat off. With the Moon returning for an important visit to your work sector tomorrow and with important developments on the job and career fronts over the coming weeks, the more you can step back the better. Today's playful lunar vibes not only provide the perfect distraction but are a taste of things to come.",
    },
    Virgo: {
      Sunday:
        "Virgo Horoscope The Moon's final hours in your home and family sector today serve two purposes. The first is what the Moon's return every four weeks can do, which is give you an emotional and intuitive read on home and family matters, paying attention to things that might otherwise fly under your radar. The second is a taste of things to come, with the Moon wrapping up its last visit before lucky Jupiter returns. To that end, let your imagination border on wishful thinking.",
      Monday:
        "The Moon's departure from Virgo yesterday, has left you with more than an intuitive edge and valuable clues, hunches and insights to process. While your birthday month ended last month, having come full circle from last month's New Moon, the Moon brought a chance to regroup. This is the point in your new solar year where you're a lot more sure of who you are and where you're going. More so than when your birthday month ended, 16 days ago.",
      Tuesday:
        "Virgo Horoscope A week that began with the Moon not only in Virgo but in opposition with forces on the relationship front, experiences a dramatic turnaround today. While the Moon has since moved on and any personal and/or relationship tension has dialled back, this turns from a challenge into an opportunity today. It is no longer just a lack of pressure, but a rise in support. As the Moon and Mercury return to your communication sector, all of a sudden you're able to find your voice.",
      Wednesday:
        "There are some extraordinary conditions in play on the communication front and includes all its different formats. If you're a writer or communication is part of your professional life, then you'll have a lot more strings to your bow. On the relationship front, you'll find it easier to connect, able to give your heart, relationships, the past and unsaid words a voice. Heart, mind, emotional and intuitive responses are all connected in an articulate, smart and intellectually savvy way today.",
      Thursday:
        "Virgo Horoscope The Moon's final hours in your communication sector are always an important time for wearing your heart on your sleeve. The week began with the Moon in Virgo, putting pressure on your relationships. While any relationship tension or strong emotional responses have long since eased back, the Moon is giving you access to a pool of communication resources just waiting to be tapped into. It is not just the Moon giving you a voice, but the planets of love and communication as well.",
      Friday:
        "Virgo Horoscope The Moon returns to your home and family sector every four weeks, giving you an intuitive and imaginative read and connection to home and family matters. Yet with Jupiter now just under four weeks away and with your most important year for home, family and/or property matters just around the corner, this makes it more important than ever to pay attention. This includes paying attention to any work/life balance issues, for Jupiter will demand the right balance.",
      Saturday:
        "Virgo Horoscope With the Sun moving into his final 10 days in your income sector and Juno her final 10 days in your career sector, there should be an urgent need to keep your money and professional hats on. Yet on neither front is there any urgency and if there is any, it will be from Mars, as he fires things up on the job front. Instead, it is a more objective take on both income and career matters that will allow you to work smarter over the coming weeks.",
    },
    Libra: {
      Sunday:
        "Libra Horoscope You have reached an interesting point in your birthday month, one not usually reached. Six days on from a New Moon in Libra, with both Venus and Mercury gone and the Sun about to move into his final week, you should be focused on the mechanics of your game plan and resolutions for the coming year. Instead, with Venus on her way back for a rare double dip visit, you have a chance to reconsider your options, open to realising that even more is possible.",
      Monday:
        "This is a day that needs to be fully embraced, choosing to own this as your own and as a chance to take your power back. Regardless of when your actual birthday falls, a New Moon in Libra today brings you to the most empowered point in your birthday month. As the Sun and Moon align, so too do the solar and lunar cycles, making this a powerful day for drawing a new line in the sand. This is the day to commit to your new solar year, the future and the journey ahead.",
      Tuesday:
        "Libra Horoscope At the same time that the Moon is wrapping up yesterday's New Moon in Libra, the Sun moves into the final two weeks of your birthday month. With both the Moon and Mercury leaving Libra today and the Sun in 14 days' time, this should be the point where you're tying up loose ends. This should be a time for nailing down the finer details of your game plan and resolutions for the coming year. Yet with Venus in retrograde motion and on her way back to Libra, your options are still wide open.",
      Wednesday:
        "Libra Horoscope The Moon and Mercury's departure from Libra yesterday, brought the New Moon a day earlier to a close, but not your birthday month. As they left this appears to have taken away any urgency. While this has left you with an intuitive and intellectually savvy edge and the resources to throw yourself into this new solar year, there is no longer a time frame. Even with the Sun now in his last two weeks in Libra, there is a growing sense that you haven't even begun to explore all your options.",
      Thursday:
        "This has been a fairly serious week so far, from a New Moon in Libra to the work tension and job pressure earlier in the week and then some personal and/or relationship tension midweek. The launch of a new solar year is serious business, but any tension has been more about balance. Whether that be a balance between your personal and relationship needs or knowing when to keep your work hat on and when to take it off. There is a sense of romance, passion and adventure in the air today which should put things in perspective.",
      Friday:
        "With Mercury, planet of communication having left Libra three days ago, having the Moon move through your communication sector couldn't come with better timing. Especially with no planetary activity on the communication front, no communication gods on the field and the Moon having just pushed some buttons on the relationship front a few days ago. Yet while the Moon brings a chance to give your emotional responses a voice, this brings your first real sense of the additional support on the way.",
      Saturday:
        "As you move into the final 10 days of your birthday month, there should be a lot more urgency, especially after a New Moon earlier in the week. This is the point in any birthday month where you're able to commit to your new solar year, the future and the journey ahead. At the same time, Mercury's departure a day later should have brought you to a point where you were ready to commit to your game plan and resolutions for the coming year. Yet with Venus on her way back for a rare double dip visit, there are still wildcards to be played.",
    },
    Scorpio: {
      Sunday:
        "Having Venus and Mercury in Scorpio at the same time is definitely an advantage and while not rare, the last time this happened was in 2014. As your birthday month and new solar year draw closer and especially with Jupiter in his final weeks in Scorpio, this is a chance to put heart and mind on the same page. Yet it has been 10 years since Venus and Mercury actually aligned here, which they are in the process of doing. Heart and mind aren't just on the same page, they're merging as one.",
      Monday:
        "Today's New Moon brings you to both an important point in the month long wind down of your old solar year and the year itself. With your birthday month and new solar year just 15 days away, this is the point where it usually becomes less about looking back and more about looking forward. I say usually because as Jupiter moves into his final month in Scorpio, you're not just looking, but moving forward. Yet with Venus in retrograde motion in Scorpio, you will continue to look back.",
      Tuesday:
        "While your birthday month and new solar year are still two weeks away, the Moon and Mercury's return to Scorpio today shifts even more focus onto the future. Your old solar year might have another 14 days to run and Venus might be in retrograde motion in Scorpio, but more and more new doors are opening. With Jupiter in his final month in Scorpio, there is no slowing down the march forward. What the Moon and Mercury bring is the intuitive and intellectually savvy edge that can help weave past, present and future together.",
      Wednesday:
        "Scorpio Horoscope The Moon's last visit to Scorpio before the Sun returns is always an important chance to regroup. The Moon will always return just after a New Moon, which is the trigger to start lining up for the new doors about to open. Yet while your birthday month and new solar year are still two weeks away, it is not just the Moon in Scorpio today but Mercury, Venus and Jupiter. With heart, mind, intuition, imagination and even lucky Jupiter engaged, this is a chance to get a jump on your new solar year before it begins.",
      Thursday:
        "Since Jupiter's return to Scorpio last October, the Moon's alignment every four weeks has been a critical resource for staying on track. Yet they not only align here today as Jupiter moves into his final four weeks but for the last time in Scorpio until 2029. With Venus in her early days in retrograde motion in Scorpio, Mercury having returned two days ago and the Sun just 12 days away, it is time to bring things home. Pay attention to all your emotional, intuitive and imaginative responses, especially those that feel more like wishful thinking.",
      Friday:
        "The Moon's departure from Scorpio yesterday, has left you with your instincts sharp and an intuitive edge, as Jupiter moved into his final four weeks here. This was also the Moon's first visit to Scorpio since Venus returned retrograde a week ago and since Mercury returned earlier in the week. You've not only got heart and mind on the same page, but you've got access to the past, present and future, as well as the big picture and the details. This allows you to make informed and empowered choices.",
      Saturday:
        "While your birthday month and new solar year are still 10 days away, with so many planets already in Scorpio, this has begun in all but name. Yet until the Sun returns the solar spotlight is not yet revealing all your options, making it important to keep your options open. Also important is the winding down of your old solar year and over the weekend in particular, is permission to take time out in order to reflect and to hear yourself think.",
    },
    Sagittarius: {
      Sunday:
        "The Moon returns to Sagittarius every four weeks and every time is an important chance to regroup and to check in, connecting with your inner voice. In the Moon's final hours it is important to have your finger on the pulse and ear to the ground, without over thinking things. Yet as the Moon makes its last visit before lucky Jupiter's return, every moment that you're connected to your instincts and your inner voice is important. Don't waste a moment.",
      Monday:
        "Sagittarius Horoscope There is a push to make today as socially connected and engaged as possible, just a day before a time of reflection is set to deepen. In his last full day in a social and serendipitous part of your chart, Mercury is making the most of today's New Moon to ensure the communication lines are open. This is a day for connecting, for serendipitous moments and/or encounters or for just finding yourself in the right place at the right time. For now, there are places to go and people to see.",
      Tuesday:
        "Sagittarius Horoscope Don't be surprised if you all of a sudden feel the need to put out the 'do not disturb' sign, log out of all your devices and go off grid. It is a combination of the Moon and Mercury's departure from a socially charged part of your chart and return to a nostalgic and reflective part, that not so much creates, but accentuates the shift. In reality, you've needed time to hear yourself think for some time now. The difference now is that it is more obvious and harder to ignore.",
      Wednesday:
        "You may find it hard to focus today, which might create a logistical challenge, but is not a problem. With the Moon not only moving through a nostalgic and reflective part of your chart but aligning with a host of planets here, your thoughts, imagination and intuition will be working overtime. It is when you don't schedule time to hear yourself think or to escape into your daydreams, that you will find it hard to focus. Very few of us are able to spend the day navel gazing, so schedule time when you can.",
      Thursday:
        "After just 12 days in your relationship sector Juno, queen of commitment and especially commitment to your relationships turns retrograde today and begins her trek back out. This is just a short 24 day visit, half spent in direct motion and the second half in retrograde motion. Yet this is a short and valuable crash course in establishing what you want from your relationships and what they need from you. And the timing couldn't be better, with Mars on a mission to smash through communication barriers.",
      Friday:
        "The Moon might return to Sagittarius every four weeks, but having the Moon fuelling your emotional, intuitive and imaginative responses today is a lot more important than this time. As the Moon's last visit before Jupiter returns early next month and with the enormity of the implications from that, the gods are using this as their last chance to deliver valuable clues, hunches and insights. You're not only four weeks away from an expansive year, but the start of a new 12 year Jupiter cycle of expansion.",
      Saturday:
        "Sagittarius Horoscope While the Moon is making its last visit to Sagittarius before Mercury and Jupiter return and this is a chance to start lining up for what lies ahead, this is still an ordinary monthly visit. This makes today equally important for simply listening to your instincts and for letting your emotional, intuitive and imaginative responses run their course. Your sixth sense is always sharper when the Moon is in Sagittarius, making it important to trust your gut.",
    },
    Capricorn: {
      Sunday:
        "Capricorn Horoscope At what is an important point of the year on a number of fronts and especially professionally, socially and financially, the Moon's return to Capricorn was always going to be important. The Moon returns with an intuitive and imaginative edge that can sharpen your sixth sense and provide a clearer connection to your inner voice. Yet as the Moon's first visit since Pluto's direct turn in Capricorn two weeks ago, this is also a valuable chance to regroup.",
      Monday:
        "Capricorn Horoscope Just having the Moon in your career sector during Mercury's last full day here is a huge advantage. This brings Mercury's intellectually savvy edge together with the Moon's professional instincts and imagination. Yet with the Sun and Moon aligned to create a New Moon, this creates an auspicious day for new beginnings. You've got the solar spotlight on your professional game, a mix of intuition and logic, imagination and intelligence to draw on and a tailwind at your back.",
      Tuesday:
        "Capricorn Horoscope While the Sun won't leave your career sector for another two weeks, as the Moon and Mercury leave today, this wraps up yesterday's New Moon and dials back the focus. While they will leave you with your professional instincts and imagination fuelled, an intellectually savvy edge and the momentum yesterday's New Moon has created, gone is any urgency. Instead, there is a chance to pull back and let things settle. In the meantime, the Moon and Mercury put their weight behind a more social and serendipitous agenda.",
      Wednesday:
        "Even though Pluto turned direct in Capricorn 10 days ago and you're able to look to the future, this is still more about window shopping. There is no pressure to move forward, make bold moves or initiate change, though this is what you can now sense you're moving towards. What you have is time to explore your options. This is the first time in six months when both planets in Capricorn have been in direct motion, giving you time to look to the future without having to commit to anything just yet.",
      Thursday:
        "The Moon's final hours in a social and serendipitous part of your chart are always makes it important to trust your gut and to let fate take the wheel. Even more so with the laws of attraction and synchronicity in effect and the element luck in play, at a time when there is the potential for serendipitous new connections and to reconnect with the past. This is a day for expecting the unexpected and for being ready to trust your gut. Fate might put you in the right place at the right time, but you've also got the support to seize the moment.",
      Friday:
        "Capricorn Horoscope The Moon moves through a nostalgic and reflective part of your chart once every four weeks and this is always a valuable chance to pull over into the slow lane. The Moon will spend the weekend here, giving you permission to take time out to reflect and to hear yourself think. If this has been a busy year, then chances are you're more in need of this than you realise. Listen to your body and wherever you can, give yourself permission to spend time navel gazing.",
      Saturday:
        "Capricorn Horoscope At the same time that the Sun moves into his final 10 days in your career sector, Juno moves into her final 10 days in your work sector. While the Sun is looking to the future and Juno to the past, together with Mars in your income sector there is collective support between income, work and career forces. While the Moon is encouraging you to take time out in order to hear yourself think, this can also be a chance to reflect on your professional options.",
    },
  };
  // To store input elements
  let day = document.getElementById("day");
  let month = document.getElementById("month");
  let displayArea = document.getElementById("horoscope");
  let button = document.getElementById("find");
  let reset = document.getElementById("reset");

  let todaysDay = () => {
    let todaysDate = new Date();
    return days[todaysDate.getDay()];
  };

  let getZodiac = () => {
    let zodiacDay = day.value;
    let zodiacMonth = month.value;

    switch (zodiacMonth) {
      case "January":
        return zodiacDay >= 20 ? "Acquarius" : "Capricorn";
      case "February":
        return zodiacDay >= 19 ? "Pisces" : "Acquarius";
      case "March":
        return zodiacDay >= 21 ? "Aries" : "Pisces";
      case "April":
        return zodiacDay >= 20 ? "Taurus" : "Aries";
      case "May":
        return zodiacDay >= 21 ? "Gemini" : "Taurus";
      case "June":
        return zodiacDay >= 21 ? "Cancer" : "Gemini";
      case "July":
        return zodiacDay >= 23 ? "Leo" : "Cancer";
      case "August":
        return zodiacDay >= 23 ? "Virgo" : "Leo";
      case "September":
        return zodiacDay >= 23 ? "Libra" : "Virgo";
      case "October":
        return zodiacDay >= 23 ? "Scorpio" : "Libra";
      case "November":
        return zodiacDay >= 22 ? "Sagittarius" : "Scorpio";
      case "December":
        return zodiacDay >= 22 ? "Capricorn" : "Sagittarius";
    }
  };

  button.addEventListener("click", (event) => {
    event.preventDefault();
    let zodiacSign = getZodiac();
    let horoscopeDay = todaysDay();
    displayArea.innerHTML = horoscope[zodiacSign][horoscopeDay];
    reset.style.display = "block";
  });

  reset.addEventListener("click", () => {
    displayArea.innerHTML = "";
    reset.style.display = "none";
  });
});