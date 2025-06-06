const quotes = [
  {
    "content": "What you do today can improve all your tomorrows.",
    "author": "Ralph Marston"
  },
  {
    "content": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "author": "Zig Ziglar"
  },
  {
    "content": "Intelligence without ambition is a bird without wings.",
    "author": "Salvador Dali"
  },
  {
    "content": "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
    "author": "Epictetus"
  },
  {
    "content": "We may encounter many defeats but we must not be defeated.",
    "author": "May Angelou"
  },
  {
    "content": "Problems are not stop signs, they are guidelines.",
    "author": "Robert H. Schuller"
  },
  {
    "content": "Be kind whenever possible. It is always possible.",
    "author": "Dalai Lama"
  },
  {
    "content": "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    "author": "Ayn Rand"
  },
  {
    "content": "A somebody was once a nobody who wanted to and did.",
    "author": "John Burroughs"
  },
  {
    "content": "Life is 10% what happens to us and 90% how we react to it.",
    "author": "Dennis P. Kimbro"
  },
  {
    "content": "Even if you’re on the right track, you’ll get run over if you just sit there.",
    "author": "Will Rogers"
  },
  {
    "content": "Luck is a dividend of sweat. The more you sweat, the luckier you get.",
    "author": "Ray Kroc"
  },
  {
    "content": "Courage is the first of human qualities because it is the quality which guarantees all others.",
    "author": "Winston Churchill"
  },
  {
    "content": "The great thing in this world is not so much where you stand, as in what direction you are moving.",
    "author": "Oliver Wendell Holmes"
  },
  {
    "content": "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
    "author": "Carl Bard"
  },
  {
    "content": "Speak less than you know; have more than you show.",
    "author": "William Shakespeare"
  },
  {
    "content": "Education costs money. But then so does ignorance.",
    "author": "Sir Claus Moser"
  },
  {
    "content": "The journey of a thousand miles begins with one step.",
    "author": "Lao Tzu"
  },
  {
    "content": "Do not let what you cannot do interfere with what you can do.",
    "author": "John Wooden"
  },
  {
    "content": "Defeat is not bitter unless you swallow it.",
    "author": "Joe Clark"
  },
  {
    "content": "An obstacle is often a stepping stone.",
    "author": "Prescott"
  },
  {
    "content": "Don’t worry about failures, worry about the chances you miss when you don’t even try.",
    "author": "Jack Canfield"
  },
  {
    "content": "Live each day as if your life had just begun.",
    "author": "Johann Wolfgang Von Goethe"
  },
  {
    "content": "The secret to getting ahead is getting started.",
    "author": "Mark Twain"
  },
  {
    "content": "The will to win, the desire to succeed, the urge to reach your full potential, these are the keys that will unlock the door to personal excellence.",
    "author": "Confucius"
  },
  {
    "content": "Set your goals high and don’t stop until you get there.",
    "author": "Bo Jackson"
  },
  {
    "content": "The world is full of magical things patiently waiting for our wits to grow sharper.",
    "author": "Bertrand Russell"
  },
  {
    "content": "Let us make our future now, and let us make our dreams tomorrow’s reality.",
    "author": "Malala Yousafzai"
  },
  {
    "content": "All you need is the plan, the road map, and the courage to press on to your destination.",
    "author": "Earl Nightingale"
  },
  {
    "content": "The glow of one warm thought is to me worth more than money.",
    "author": "Thomas Jefferson"
  },
  {
    "content": "The power of imagination makes us infinite.",
    "author": "John Muir"
  },
  {
    "content": "Try to be a rainbow in someone’s cloud.",
    "author": "Maya Angelou"
  },
  {
    "content": "I dwell in possibility.",
    "author": "Emily Dickinson"
  },
  {
    "content": "A No. 2 pencil and a dream can take you anywhere.",
    "author": "Joyce Meyer"
  },
  {
    "content": "In a gentle way, you can shake the world.",
    "author": "Mahatma Gandhi"
  },
  {
    "content": "Follow your bliss and the universe will open doors where there were only walls.",
    "author": "Joseph Campbell"
  },
  {
    "content": "Each day provides its own gifts.",
    "author": "Marcus Aurelius"
  },
  {
    "content": "Creativity is intelligence having fun.",
    "author": "Albert Einstein"
  },
  {
    "content": "People who are crazy enough to think they can change the world, are the ones who do.",
    "author": "Rob Siltanen"
  },
  {
    "content": "Imagine your life is perfect in every respect; what would it look like?",
    "author": "Brian Tracy"
  },
  {
    "content": "The way to get started is to quit talking and begin doing.",
    "author": "Walt Disney"
  },
  {
    "content": "It is always the simple that produces the marvelous.",
    "author": "Amelia Barr"
  },
  {
    "content": "Our greatest glory is not in never falling, but in rising every time we fall.",
    "author": "Confucius"
  },
  {
    "content": "Everything you’ve ever wanted is on the other side of fear.",
    "author": "George Addair"
  },
  {
    "content": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "author": "Winston Churchill"
  },
  {
    "content": "Hardships often prepare ordinary people for an extraordinary destiny.",
    "author": "C.S. Lewis"
  },
  {
    "content": "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
    "author": "Roy T. Bennett"
  },
  {
    "content": "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
    "author": "Nelson Mandela"
  },
  {
    "content": "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
    "author": "Paulo Coelho"
  },
  {
    "content": "It’s not whether you get knocked down. It’s whether you get up.",
    "author": "Vince Lombardi"
  },
  {
    "content": "Your true success in life begins only when you make the commitment to become excellent at what you do.",
    "author": "Brian Tracy"
  },
  {
    "content": "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.",
    "author": "Wayne Dyer"
  },
  {
    "content": "Your mental and physical health come first. Everything else is secondary.",
    "author": "Zat Rana"
  },
  {
    "content": "Less is almost always more. Simplicity is almost always the answer.",
    "author": "Zat Rana"
  },
  {
    "content": "You have to be lucky to be successful, but luck can be engineered.",
    "author": "Zat Rana"
  },
  {
    "content": "It all starts and ends in the mind. The most crucial skill is how you think.",
    "author": "Zat Rana"
  },
  {
    "content": "People suck. But if you’re kind, you’ll get the best out of even the worst.",
    "author": "Zat Rana"
  },
  {
    "content": "Perfection only exists in the mind. It’s not real. Imagine, create, improve.",
    "author": "Zat Rana"
  },
  {
    "content": "The world doesn’t need more noise. Don’t complain. Set an example.",
    "author": "Zat Rana"
  },
  {
    "content": "Struggle is a part of life. Learning to struggle well is a reward in itself.",
    "author": "Zat Rana"
  },
  {
    "content": "Your attention is the most important asset you have. Be deliberate with it.",
    "author": "Zat Rana"
  },
  {
    "content": "The goal of an ideal partner isn’t to complete you. It’s to augment you.",
    "author": "Zat Rana"
  },
  {
    "content": "Who you let into your life is a vital decision. Don’t leave it up to chance.",
    "author": "Zat Rana"
  },
  {
    "content": "The purpose of life isn’t to do or to accomplish. It’s to merely experience.",
    "author": "Zat Rana"
  },
  {
    "content": "Everything is approximate. Don’t aim to be right. Aim to be less wrong.",
    "author": "Zat Rana"
  },
  {
    "content": "It’s better to not have an opinion than to blindly follow someone else’s.",
    "author": "Zat Rana"
  },
  {
    "content": "For the world to put you down, it first needs you to give it permission.",
    "author": "Zat Rana"
  },
  {
    "content": "The more things you care about, the less meaningful caring becomes.",
    "author": "Zat Rana"
  },
  {
    "content": "Be kind to yourself in the face of failures. They really don’t define you.",
    "author": "Zat Rana"
  },
  {
    "content": "Don’t take too much pride in your accomplishments. They’re not all yours.",
    "author": "Zat Rana"
  },
  {
    "content": "Life is short. Don’t tolerate bullsh*t. Don’t wait until it’s too late.",
    "author": "Zat Rana"
  },
  {
    "content": "It’s true that some people have more innate talent. But talent isn’t enough.",
    "author": "Zat Rana"
  },
  {
    "content": "There is no such thing as fairness, and dwelling on it creates despair.",
    "author": "Zat Rana"
  },
  {
    "content": "If you want to achieve greatness stop asking for permission.",
    "author": "Anonymous"
  },
  {
    "content": "Things work out best for those who make the best of how things work out.",
    "author": "John Wooden"
  },
  {
    "content": "To live a creative life, we must lose our fear of being wrong.",
    "author": "Anonymous"
  },
  {
    "content": "If you are not willing to risk the usual you will have to settle for the ordinary.",
    "author": "Jim Rohn"
  },
  {
    "content": "Trust because you are willing to accept the risk, not because it’s safe or certain.",
    "author": "Anonymous"
  },
  {
    "content": "All our dreams can come true if we have the courage to pursue them.",
    "author": "Walt Disney"
  },
  {
    "content": "Good things come to people who wait, but better things come to those who go out and get them.",
    "author": "Anonymous"
  },
  {
    "content": "If you do what you always did, you will get what you always got.",
    "author": "Anonymous"
  },
  {
    "content": "Success is walking from failure to failure with no loss of enthusiasm.",
    "author": "Winston Churchill"
  },
  {
    "content": "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
    "author": "Proverb"
  },
  {
    "content": "Successful entrepreneurs are givers and not takers of positive energy.",
    "author": "Anonymous"
  },
  {
    "content": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "author": "Dr. Seuss"
  },
  {
    "content": "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.",
    "author": "Vaibhav Shah"
  },
  {
    "content": "Don’t be afraid to give up the good to go for the great.",
    "author": "John D. Rockefeller"
  },
  {
    "content": "The distance between insanity and genius is measured only by success.",
    "author": "Bruce Feirstein"
  },
  {
    "content": "Don’t raise your voice, improve your argument.",
    "author": "Anonymous"
  },
  {
    "content": "What seems to us as bitter trials are often blessings in disguise.",
    "author": "Oscar Wilde"
  },
  {
    "content": "Do one thing every day that scares you.",
    "author": "Eleanor Roosevelt"
  },
  {
    "content": "What’s the point of being alive if you don’t at least try to do something remarkable.",
    "author": "Anonymous"
  },
  {
    "content": "Life is not about finding yourself. Life is about creating yourself.",
    "author": "Lolly Daskal"
  },
  {
    "content": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "author": "Ralph Waldo Emerson"
  },
  {
    "content": "It is never too late to be what you might have been.",
    "author": "George Eliot"
  },
  {
    "content": "Innovation distinguishes between a leader and a follower.",
    "author": "Steve Jobs"
  },
  {
    "content": "In three words I can sum up everything I've learned about life: it goes on.",
    "author": "Robert Frost"
  },
  {
    "content": "It does not matter how slowly you go, so long as you do not stop.",
    "author": "Confucius"
  },
  {
    "content": "We are still masters of our fate. We are still captains of our souls.",
    "author": "Winston Churchill"
  },
  {
    "content": "The best way out is always through.",
    "author": "Robert Frost"
  },
  {
    "content": "Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us.",
    "author": "Samuel Smiles"
  },
  {
    "content": "Enthusiasm is the energy and force that builds literal momentum of the human soul and mind.",
    "author": "Bryant McGill"
  },
  {
    "content": "Sometimes thinking too much can destroy your momentum.",
    "author": "Tom Watson"
  },
  {
    "content": "Work spares us from three evils: boredom, vice, and need.",
    "author": "Voltaire"
  },
  {
    "content": "Fortune favors the brave.",
    "author": "Publius Terence"
  },
  {
    "content": "Strong lives are motivated by dynamic purposes.",
    "author": "Kenneth Hildebrand"
  },
  {
    "content": "Either write something worth reading or do something worth writing.",
    "author": "Benjamin Franklin"
  },
  {
    "content": "If the wind will not serve, take to the oars.",
    "author": "Latin Proverb"
  },
  {
    "content": "There are no traffic jams along the extra mile.",
    "author": "Roger Staubach"
  },
  {
    "content": "Too many of us are not living our dreams because we are living our fears.",
    "author": "Les Brown"
  },
  {
    "content": "Challenges are what make life interested and overcoming them is what makes life meaningful.",
    "author": "Joshua J. Marine"
  },
  {
    "content": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    "author": "Leonardo da Vinci"
  },
  {
    "content": "Start where you are. Use what you have. Do what you can.",
    "author": "Arthur Ashe"
  },
  {
    "content": "Happiness is not something ready made. It comes from your own actions.",
    "author": "Dalai Lama"
  },
  {
    "content": "If you do what you’ve always done, you’ll get what you’ve always gotten.",
    "author": "Tony Robbins"
  },
  {
    "content": "If you are offered a seat on a rocket ship, don’t ask what seat! Just get on.",
    "author": "Sheryl Sandberg"
  },
  {
    "content": "The question isn’t who is going to let me; it’s who is going to stop me.",
    "author": "Ayn Rand"
  },
  {
    "content": "Always work hard. Intensity clarifies. It creates not only momentum, but also the pressure you need to feel either friction, or fulfillment.",
    "author": "Marcus Buckingham"
  },
  {
    "content": "We are what we repeatedly do. Excellence, therefore, is not an act but a habit.",
    "author": "Aristotle"
  },
  {
    "content": "Take calculated risks. That is quite different from being rash.",
    "author": "George S. Patton"
  },
  {
    "content": "In every difficult situation is potential value. Believe this, then begin looking for it.",
    "author": "Norman Vincent Peale"
  },
  {
    "content": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    "author": "Henry Ford"
  },
  {
    "content": "Accept responsibly for your life. Know that it is you who will get you where you want to go, no one else.",
    "author": "Les Brown"
  },
  {
    "content": "You cannot plough a field by turning it over in your mind.",
    "author": "Anonymous"
  },
  {
    "content": "The world is wide, and I will not waste my life in friction when it could be turned into momentum.",
    "author": "Frances E. Willard"
  },
  {
    "content": "Believe with all of your heat that you will do what you were made to do.",
    "author": "Orison Swett Marden"
  },
  {
    "content": "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "author": "William B. Sprague"
  },
  {
    "content": "If you have the guts to keep making mistakes, your wisdom and intelligence leap forward with huge momentum.",
    "author": "Holly Near"
  },
  {
    "content": "Good things come to those who wait but greater things come to those who get off their ass and do anything to make it happen.",
    "author": "Anonymous"
  },
  {
    "content": "Ask and it will be given to you; search and you will find; knock and the door will be opened for you.",
    "author": "Jesus"
  },
  {
    "content": "People often say that motivation doesn’t last. Well, neither does bathing and that is why we recommend it daily.",
    "author": "Zig Ziglar"
  },
  {
    "content": "I can, therefore I am.",
    "author": "Simone Weil"
  },
  {
    "content": "I’ve found that luck is quite predictable. If you want more luck, take more chances. Be more active. Show up more often.",
    "author": "Brian Tracy"
  },
  {
    "content": "You need to overcome the tug of people against you as you reach for high goals.",
    "author": "George S. Patton"
  },
  {
    "content": "To know oneself, one should assert oneself.",
    "author": "Albert Camus"
  },
  {
    "content": "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    "author": "Mark Caine"
  },
  {
    "content": "The most effective way to do it, is to do it.",
    "author": "Amelia Earhart"
  },
  {
    "content": "Begin to be now what you will be hereafter.",
    "author": "William James"
  },
  {
    "content": "Leap, and the net will appear.",
    "author": "John Burroughs"
  },
  {
    "content": "Do your work with your whole heart, and you will succeed – there’s so little competition.",
    "author": "Elbert Hubbard"
  },
  {
    "content": "A goal is a dream with a deadline.",
    "author": "Napoleon Hill"
  },
  {
    "content": "Things do not happen. Things are made to happen.",
    "author": "John F. Kennedy"
  },
  {
    "content": "Quality is not an act, it is a habit.",
    "author": "Aristotle"
  },
  {
    "content": "The secret of getting ahead is getting started.",
    "author": "Mark Twain"
  },
  {
    "content": "By failing to prepare, you are preparing to fail.",
    "author": "Benjamin Franklin"
  },
  {
    "content": "Either you run the day or the day runs you.",
    "author": "Jim Rohn"
  },
  {
    "content": "Once you choose hope, anything's possible.",
    "author": "Christopher Reeve"
  },
  {
    "content": "Try not to become a person of success, but rather try to become a person of value.",
    "author": "Albert Einstein"
  },
  {
    "content": "Success is walking from failure to failure with no loss of enthusiasm.",
    "author": "Winston Churchill"
  },
  {
    "content": "Someone is sitting in the shade today because someone planted a tree a long time ago.",
    "author": "Warren Buffett"
  },
  {
    "content": "Don't cry because it's over, smile because it happened.",
    "author": "Dr. Seuss"
  },
  {
    "content": "Life is short, and it is here to be lived.",
    "author": "Kate Winslet"
  },
  {
    "content": "You can't connect the dots looking forward; you can only connect them looking backward...This approach has never let me down, and it has made all the difference in my life.",
    "author": "Steve Jobs"
  },
  {
    "content": "Everything you can imagine is real.",
    "author": "Pablo Picasso"
  },
  {
    "content": "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
    "author": "Jim Rohn"
  },
  {
    "content": "Rarely have I seen a situation where doing less than the other guy is a good strategy.",
    "author": "Jimmy Spithill"
  },
  {
    "content": "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    "author": "Barack Obama"
  },
  {
    "content": "If you love what you do and are willing to do what it takes, it's within your reach.",
    "author": "Steve Wozniak"
  },
  {
    "content": "In my experience, there is only one motivation, and that is desire. No reasons or principle contain it or stand against it.",
    "author": "Jane Smiley"
  },
  {
    "content": "Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it.",
    "author": "Charles F. Kettering"
  },
  {
    "content": "The successful warrior is the average man, with laser-like focus.",
    "author": "Bruce Lee"
  },
  {
    "content": "In the midst of movement and chaos, keep stillness inside of you.",
    "author": "Deepak Chopra"
  },
  {
    "content": "Success does not consist in never making mistakes but in never making the same one a second time.",
    "author": "George Bernard Shaw"
  },
  {
    "content": "I don't want to get to the end of my life and find that I lived just the length of it. I want to have lived the width of it as well.",
    "author": "Diane Ackerman"
  },
  {
    "content": "As we look ahead into the next century, leaders will be those who empower others.",
    "author": "Bill Gates"
  },
  {
    "content": "The only place where success comes before work is in the dictionary.",
    "author": "Vidal Sassoon"
  },
  {
    "content": "It’s not what you look at that matters, it’s what you see.",
    "author": "Anonymous"
  },
  {
    "content": "The road to success and the road to failure are almost exactly the same.",
    "author": "Colin R. Davis"
  },
  {
    "content": "Success is liking yourself, liking what you do, and liking how you do it.",
    "author": "Maya Angelou"
  },
  {
    "content": "A real entrepreneur is somebody who has no safety net underneath them.",
    "author": "Henry Kravis"
  },
  {
    "content": "The function of leadership is to produce more leaders, not more followers.",
    "author": "Ralph Nader"
  },
  {
    "content": "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    "author": "Mark Twain"
  },
  {
    "content": "If you genuinely want something, don’t wait for it — teach yourself to be impatient.",
    "author": "Gurbaksh Chahal"
  },
  {
    "content": "Don’t let the fear of losing be greater than the excitement of winning.",
    "author": "Robert Kiyosaki"
  },
  {
    "content": "Motivation is what gets you started. Habit is what keeps you going.",
    "author": "Jim Ryun"
  },
  {
    "content": "People rarely succeed unless they have fun in what they are doing.",
    "author": "Dale Carnegie"
  },
  {
    "content": "Little minds are tamed and subdued by misfortune; but great minds rise above it.",
    "author": "Washington Irving"
  },
  {
    "content": "Knowledge is being aware of what you can do. Wisdom is knowing when not to do it.",
    "author": "Anonymous"
  },
  {
    "content": "You can do anything, but not everything.",
    "author": "Anonymous"
  },
  {
    "content": "Success is most often achieved by those who don't know that failure is inevitable.",
    "author": "Coco Chanel"
  },
  {
    "content": "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
    "author": "Ray Goforth"
  },
  {
    "content": "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    "author": "Albert Einstein"
  },
  {
    "content": "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success.",
    "author": "Swami Vivekananda"
  },
  {
    "content": "You only live once, but if you do it right, once is enough.",
    "author": "Mae West"
  },
  {
    "content": "Opportunities don't happen. You create them.",
    "author": "Chris Grosser"
  },
  {
    "content": "You miss 100 percent of the shots you don't take.",
    "author": "Wayne Gretzky"
  },
  {
    "content": "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    "author": "Dolly Parton"
  },
  {
    "content": "The longer I live, the more beautiful life becomes.",
    "author": "Frank Lloyd Wright"
  },
  {
    "content": "Success is the sum of small efforts, repeated day-in and day-out.",
    "author": "Robert Collier"
  },
  {
    "content": "Things work out best for those who make the best of how things work out.",
    "author": "John Wooden"
  },
  {
    "content": "A dream doesn't become reality through magic; it takes sweat, determination, and hard work.",
    "author": "Colin Powell"
  },
  {
    "content": "If you always do what interests you, at least one person is pleased.",
    "author": "Katharine Hepburn"
  },
  {
    "content": "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor...Explore. Dream. Discover.",
    "author": "Mark Twain"
  },
  {
    "content": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "author": "Steve Jobs"
  },
  {
    "content": "Don't be afraid to give up the good to go for the great.",
    "author": "John D. Rockefeller"
  },
  {
    "content": "Only put off until tomorrow what you are willing to die having left undone.",
    "author": "Pablo Picasso"
  },
  {
    "content": "Though no one can go back and make a brand-new start, anyone can start from now and make a brand-new ending.",
    "author": "Carl Bard"
  },
  {
    "content": "We become what we think about most of the time, and that's the strangest secret.",
    "author": "Earl Nightingale"
  },
  {
    "content": "The biggest risk is not taking any risk...In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    "author": "Mark Zuckerberg"
  },
  {
    "content": "Don't worry about failure; you only have to be right once.",
    "author": "Drew Houston"
  },
  {
    "content": "Nothing great was ever achieved without enthusiasm.",
    "author": "Ralph Waldo Emerson"
  },
  {
    "content": "Keep your face to the sunshine and you can never see the shadow.",
    "author": "Helen Keller"
  },
  {
    "content": "The only place where success comes before work is in the dictionary.",
    "author": "Vidal Sassoon"
  },
  {
    "content": "The more you praise and celebrate your life, the more there is in life to celebrate.",
    "author": "Oprah Winfrey"
  },
  {
    "content": "All progress takes place outside the comfort zone.",
    "author": "Michael John Bobak"
  },
  {
    "content": "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    "author": "Mark Caine"
  },
  {
    "content": "I avoid looking forward or backward, and try to keep looking upward.",
    "author": "Charlotte Bronte"
  },
  {
    "content": "One of the greatest diseases is to be nobody to anybody.",
    "author": "Mother Teresa"
  },
  {
    "content": "Your time is limited, so don’t waste it living someone else’s life.",
    "author": "Steve Jobs"
  },
  {
    "content": "Setting goals is the first step in turning the invisible into visible.",
    "author": "Tony Robbins"
  },
  {
    "content": "The most difficult thing is the decision to act, the rest is merely tenacity.",
    "author": "Emelia Earhart"
  },
  {
    "content": "Courage is grace under pressure.",
    "author": "Ernest Hemingway"
  },
  {
    "content": "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    "author": "Jim Rohn"
  },
  {
    "content": "There is no easy walk to freedom anywhere, and many of us will have to pass through the valley of the shadow of death again and again before we reach the mountaintop of our desires.",
    "author": "Nelson Mandela"
  },
  {
    "content": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    "author": "Charles Darwin"
  },
  {
    "content": "The best and most beautiful things in the world cannot be seen or even touched -- they must be felt with the heart.",
    "author": "Helen Keller"
  },
  {
    "content": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "author": "Eleanor Roosevelt"
  },
  {
    "content": "The best revenge is massive success.",
    "author": "Frank Sinatra"
  },
  {
    "content": "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    "author": "David Brinkley"
  },
  {
    "content": "May you live every day of your life.",
    "author": "Jonathan Swift"
  },
  {
    "content": "The difference between winning and losing is most often not quitting.",
    "author": "Walt Disney"
  },
  {
    "content": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "author": "Mahatma Gandhi"
  },
  {
    "content": "I have not failed. I've just found 10,000 ways that won't work.",
    "author": "Thomas Edison"
  },
  {
    "content": "When you cease to dream you cease to live.",
    "author": "Malcolm Forbes"
  },
  {
    "content": "No one can make you feel inferior without your consent.",
    "author": "Eleanor Roosevelt"
  },
  {
    "content": "Failure is another steppingstone to greatness.",
    "author": "Oprah Winfrey"
  },
  {
    "content": "Identity is a prison you can never escape, but the way to redeem your past is not to run from it, but to try to understand it, and use it as a foundation to grow.",
    "author": "Jay-Z"
  },
  {
    "content": "When I dare to be powerful - to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    "author": "Audre Lorde"
  },
  {
    "content": "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    "author": "Dale Carnegie"
  },
  {
    "content": "If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you!",
    "author": "T. Harv Eker"
  },
  {
    "content": "If you don’t design your own life plan, chances are you’ll fall into someone else’s plan. And guess what they have planned for you? Not much.",
    "author": "Jim Rohn"
  },
  {
    "content": "The number one reason people fail in life is because they listen to their friends, family, and neighbors.",
    "author": "Napoleon Hill"
  },
  {
    "content": "There is no chance, no destiny, no fate, that can hinder or control the firm resolve of a determined soul.",
    "author": "Ella Wheeler Wilcox"
  },
  {
    "content": "You must expect great things of yourself before you can do them.",
    "author": "Michael Jordan"
  },
  {
    "content": "Our greatest fear should not be of failure but of succeeding at things in life that don’t really matter.",
    "author": "Francis Chan"
  },
  {
    "content": "In my experience, there is only one motivation, and that is desire. No reasons or principle contain it or stand against it.",
    "author": "Jane Smiley"
  },
  {
    "content": "I don’t want to get to the end of my life and find that I lived just the length of it. I want to have lived the width of it as well.",
    "author": "Diane Ackerman"
  },
  {
    "content": "Success is...knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.",
    "author": "John C. Maxwell"
  },
  {
    "content": "Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.",
    "author": "Wayne Dyer"
  },
  {
    "content": "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.",
    "author": "George Lorimer"
  },
  {
    "content": "To be successful you must accept all challenges that come your way. You can’t just accept the ones you like.",
    "author": "Mike Gafka"
  },
  {
    "content": "Real difficulties can be overcome; it is only the imaginary ones that are unconquerable.",
    "author": "Theodore N. Vail"
  },
  {
    "content": "Failure is the condiment that gives success its flavor.",
    "author": "Truman Capote"
  },
  {
    "content": "Don’t let what you cannot do interfere with what you can do.",
    "author": "John R. Wooden"
  },
  {
    "content": "It is better to fail in originality than to succeed in imitation.",
    "author": "Herman Melville"
  },
  {
    "content": "Fortune sides with him who dares.",
    "author": "Virgil"
  },
  {
    "content": "You may have to fight a battle more than once to win it.",
    "author": "Margaret Thatcher"
  },
  {
    "content": "It's not the size of the dog in the fight, but the size of the fight in the dog",
    "author": "Archie Griffen"
  },
  {
    "content": "Nothing lasts forever. Not even your troubles.",
    "author": "Arnold H. Glasgow"
  },
  {
    "content": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    "author": "Albert Einstein"
  },
  {
    "content": "Where hope grows, miracles blossom.",
    "author": "Elna Rae"
  },
  {
    "content": "To accomplish great things, we must not only act, but also dream, not only plan, but also believe.",
    "author": "Anatole France"
  },
  {
    "content": "You measure the size of the accomplishment by the obstacles you had to overcome to reach your goals.",
    "author": "Booker T. Washington"
  },
  {
    "content": "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    "author": "Dale Carnegie"
  },
  {
    "content": "Take chances, make mistakes. That's how you grow. Pain nourishes your courage. You have to fail in order to practice being brave",
    "author": "Mary Tyler Moore"
  },
  {
    "content": "Being strong means rejoicing in who you are, complete with imperfections",
    "author": "Margaret Woodhouse"
  },
  {
    "content": "A life spent making mistakes is not only more honorable but more useful than a life spent doing nothing",
    "author": "George Bernard Shaw"
  },
  {
    "content": "If you don’t go after what you want, you’ll never have it. If you don’t ask, the answer is always no. If you don’t step forward, you’re always in the same place",
    "author": "Nora Roberts"
  },
  {
    "content": "It took me a long time not to judge myself through someone else's eyes",
    "author": "Sally Field"
  },
  {
    "content": "Make the most of yourself, for that is all there is of you",
    "author": "Ralph Waldo Emerson"
  },
  {
    "content": "Awards become corroded, friends gather no dust",
    "author": "Jesse Owens"
  },
  {
    "content": "Hope never abandons you, you abandon it",
    "author": "George Weinberg"
  },
  {
    "content": "Nothing splendid has ever been achieved except by those who dared believe that something inside of them was superior to circumstance",
    "author": "Bruce Barton"
  },
  {
    "content": "I quit being afraid when my first venture failed and the sky didn't fall down",
    "author": "Allen H. Neuharth"
  },
  {
    "content": "Life is 10% of what happens to me and 90% of how I react to it",
    "author": "John Maxwell"
  },
  {
    "content": "Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much may be done if we are always doing.",
    "author": "Thomas Jefferson"
  },
  {
    "content": "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway",
    "author": "Mary Kay Ash"
  },
  {
    "content": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "author": "Marilyn Monroe"
  },
  {
    "content": "A room without books is like a body without a soul.",
    "author": "Marcus Tullius Cicero"
  },
  {
    "content": "Be the change that you wish to see in the world.",
    "author": "Mahatma Gandhi"
  },
  {
    "content": "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend.",
    "author": "Albert Camus" 
  },
  {
    "content": "Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.",
    "author": "Nathaniel Hawthorne" 
  },
  {
    "content": "Sometimes you can't see yourself clearly until you see yourself through the eyes of others.",
    "author": "Ellen DeGeneres" 
  },
  {
    "content": "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
    "author": "Henry Ford" 
  },
  {
    "content": "If you're going through hell, keep going.",
    "author": "Winston Churchill" 
  },
  {
    "content": "To me, business isn't about wearing suits or pleasing stockholders. It's about being true to yourself, your ideas and focusing on the essentials.",
    "author": "Richard Branson" 
  },
  {
    "content": "In order to be irreplaceable one must always be different.",
    "author": "Coco Chanel" 
  },
  {
    "content": "If you're not stubborn, you'll give up on experiments too soon. And if you're not flexible, you'll pound your head against the wall and you won't see a different solution to a problem you're trying to solve.",
    "author": "Jeff Bezos" 
  },
  {
    "content": "If you can't explain it simply, you don't understand it well enough.",
    "author": "Albert Einstein" 
  },
  {
    "content": "You can't please everyone, and you can't make everyone like you.",
    "author": "Katie Couric" 
  },
  {
    "content": "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
    "author": "Neil Armstrong" 
  },
  {
    "content": "The two most important days in your life are the day you are born and the day you find out why.",
    "author": "Mark Twain" 
  },
  {
    "content": "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.",
    "author": "Audrey Hepburn" 
  },
  {
    "content": "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.",
    "author": "Thomas J. Watson" 
  },
  {
    "content": "If your actions inspire others to dream more, learn more, do more, and become more, you are a leader.",
    "author": "John Quincy Adams" 
  },
  {
    "content": "You may only succeed if you desire succeeding; you may only fail if you do not mind failing.",
    "author": "Philippos" 
  },
  {
    "content": "I find that the harder I work, the more luck I seem to have.",
    "author": "Thomas Jefferson" 
  },
  {
    "content": "It often requires more courage to dare to do right than to fear to do wrong.",
    "author": "Abraham Lincoln" 
  },
  {
    "content": "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing.",
    "author": "Martha Stewart" 
  },
  {
    "content": "Success does not consist in never making mistakes but in never making the same one a second time.",
    "author": "George Bernard Shaw" 
  },
  {
    "content": "Knowledge is being aware of what you can do. Wisdom is knowing when not to do it.",
    "author": "Anonymous" 
  },
  {
    "content": "You can do anything, but not everything.",
    "author": "Anonymous" 
  },
  {
    "content": "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
    "author": "Ray Goforth" 
  },
  {
    "content": "Things work out best for those who make the best of how things work out.",
    "author": "John Wooden" 
  },
  {
    "content": "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    "author": "Jim Rohn" 
  },
  {
    "content": "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    "author": "Albert Einstein" 
  },
  {
    "content": "Opportunities don't happen. You create them.",
    "author": "Chris Grosser" 
  },
  {
    "content": "There is no easy walk to freedom anywhere, and many of us will have to pass through the valley of the shadow of death again and again before we reach the mountaintop of our desires.",
    "author": "Nelson Mandela" 
  },
  {
    "content": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    "author": "Charles Darwin" 
  },
  {
    "content": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "author": "Eleanor Roosevelt" 
  },
  {
    "content": "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    "author": "David Brinkley" 
  },
  {
    "content": "No one can make you feel inferior without your consent.",
    "author": "Eleanor Roosevelt" 
  },
  {
    "content": "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    "author": "Mary Kay Ash" 
  },
  {
    "content": "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    "author": "Dr. Seuss" 
  },
  {
    "content": "Keep your eyes on the stars and your feet on the ground.",
    "author": "Theodore Roosevelt" 
  },
  {
    "content": "The only person you should try to be better than is the person you were yesterday.",
    "author": "Anonymous" 
  },
  {
    "content": "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
    "author": "Harvey Fierstein" 
  },
  {
    "content": "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
    "author": "Sador, Children of Húrin" 
  },
  {
    "content": "Life's too mysterious to take too serious.",
    "author": "Mary Engelbreit" 
  },
  {
    "content": "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
    "author": "Albert Einstein" 
  },
  {
    "content": "There isn't a way things should be. There's just what happens, and what we do.",
    "author": "Terry Pratchett, A Hat Full of Sky" 
  },
  {
    "content": "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
    "author": "Rocky Balboa, Rocky" 
  },
  {
    "content": "If you want to go fast, go alone. If you want to go far, go together.",
    "author": "African proverb" 
  },
  {
    "content": "Believe you can and you're halfway there.",
    "author": "T. Roosevelt" 
  },
  {
    "content": "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
    "author": "Jose Luis Borges" 
  },
  {
    "content": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "author": "Ralph Waldo Emerson"
  }
]

module.exports = {
  quotes
}