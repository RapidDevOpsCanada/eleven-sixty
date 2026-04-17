export type SeedArticle = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  author: string;
  read_time: number;
  share_count: number;
};

export const SEED_ARTICLES: SeedArticle[] = [
  {
    slug: 'the-art-of-the-slow-curation',
    title: 'The Art of the Slow Curation',
    excerpt:
      'Inside the nightly ritual that transforms our deep navy room into a choreographed evening — and why we refuse to rush it.',
    body: `<p>There is a specific quality of attention that we call curation, and it cannot be hurried. Every evening at Eleven Sixty begins with the same ninety-minute ritual: lights lowered in quarter-stops, vinyl pulled from a shortlist of four records, glassware polished by hand while the kitchen plates the first amuse. None of it is performance. It is preparation for a room that will, by eight o&#39;clock, hold about forty people who arrived expecting something different from their Tuesday.</p>
<p>The phrase &quot;slow curation&quot; first appeared in our staff notebook during our second summer, when we noticed that the nights which felt most alive were also the nights we had prepared most deliberately. The pattern held. A curated night is not a planned night — a plan is a list of events, whereas a curation is a sequence of attentions. The difference is felt in the body more than the itinerary.</p>
<p>We borrow from the hospitality vocabulary of hotels, the patience of a record-shop clerk, and a stubborn belief that neighborhood rooms deserve the same care as destination ones. Our rule of thumb: nothing enters the evening that we cannot defend with a sentence. Why this playlist, why this candle, why this second Negroni variation alongside the first. The answers are almost always emotional, not technical.</p>
<p>For the guest, the work is invisible. That is the point. What they notice is that the room somehow already knew how they wanted to arrive — quieter at the bar tonight, warmer in the back corner, the second song on side B exactly when the entrée lands. What they do not notice is the forty small decisions behind each of those moments, which is how we know the curation landed.</p>
<p>We are often asked if the model scales. It does not, and that is the argument. A curated evening is a local good, produced by a small team for a small room, consumed in real time, and gone by the time the chairs go up. What remains is a neighborhood that trusts the night will be worth walking to. That trust, compounded over months, is the only metric we track.</p>`,
    category: 'Curations',
    author: 'Lena Marquez',
    read_time: 6,
    share_count: 284
  },
  {
    slug: 'five-signature-cocktails-that-define-11-60',
    title: 'Five Signature Cocktails That Define 11:60',
    excerpt:
      'A field guide to the drinks our bar team returns to, the ideas behind them, and how to order the one that will suit your evening.',
    body: `<p>Our cocktail list is short by design. Eighteen drinks, rotated four times a year, with a core of five that never leave. Those five are the ones this guide is about — not because they are our most photographed, but because they are the ones our bartenders reach for when a regular says &quot;something for tonight&quot; and nothing else.</p>
<p>The <strong>Gold Room</strong> is our most ordered drink and also our most misunderstood. It reads like a Manhattan on paper — rye, vermouth, bitters — but a barrel-aged honey syrup and a whisper of saline pull it into warmer territory. We serve it in a heavy coupe that holds the cold for longer than it should. It is the drink to order when you have not decided what kind of night you are having.</p>
<p>The <strong>Velvet Session</strong> is built around oolong tea cold-brewed for fourteen hours, combined with gin, lemon, and a house-made sesame orgeat. It is the drink that convinced our regulars we were serious about the bar program. It tastes like a long conversation.</p>
<p>The <strong>Neighborhood Spritz</strong> is our concession to apéritif hour and our favorite low-ABV option. Dry vermouth, grapefruit cordial, a splash of sparkling, a single green olive. We serve more of them between five and seven than anything else on the list. If you are arriving first and waiting, this is the drink.</p>
<p>The <strong>Deep Navy</strong> is the one people ask about. Dark rum, black walnut bitters, a cold-pressed cherry shrub, and — because our bar lead insists — a single drop of smoke extracted in the kitchen each morning. It is a dessert drink in all but name. It is also the drink most likely to end your evening in the best possible way.</p>
<p>The <strong>11:60</strong> is the house drink, and we guard the recipe. What we will say is that it is the only clear cocktail on the list, it is stirred for exactly sixty seconds, and it is garnished with a piece of fruit you will not expect. It is designed to be ordered once per visit, no more. The restraint is the point.</p>`,
    category: 'Cocktails',
    author: 'Rohan Patel',
    read_time: 5,
    share_count: 412
  },
  {
    slug: 'inside-the-velvet-sessions-inaugural-night',
    title: 'Inside the Velvet Sessions: Our Inaugural Night',
    excerpt:
      'A recap of the opening of our monthly listening series — what we got right, what surprised us, and why the format is staying.',
    body: `<p>The first Velvet Session happened on a Thursday in February, in the second half of a winter that had been unkind to the block. We had spent six weeks preparing a room that, for ninety minutes, would be devoted entirely to listening — to music, to food, to the person across the table. We did not know whether forty people would show up.</p>
<p>Fifty-two did. The overflow list became its own story. By seven-fifteen the room was at capacity and we had quietly promised a dozen regulars that we would run a second seating at nine. The kitchen adjusted. The bar adjusted. The DJ adjusted. The night became, without anyone naming it, twice what we had designed.</p>
<p>The format, for those who missed it: a curated forty-five minute vinyl set by a rotating guest, built around a theme shared in advance. Our inaugural guest chose &quot;rooms you leave reluctantly&quot; — a soul, jazz, and ambient selection that asked the room to sit with long-form tracks rather than dance to them. Between sides, our kitchen sent out small coursed plates paired to the mood, not the music.</p>
<p>What surprised us: the quiet. We had braced for the first session to feel like a party with better lighting. Instead, conversation dropped to a register we had never heard in the room before. People leaned closer. The bar slowed. Several tables stayed well past eleven, long after the set ended, simply because no one wanted to be the one to break the spell.</p>
<p>The Velvet Sessions now happen the third Thursday of every month, capped at fifty seats, with the theme announced two weeks in advance. We keep a waitlist, and we keep the format deliberately simple. It is, we think, the clearest expression of what this room is supposed to be.</p>`,
    category: 'Culture',
    author: 'Imani Okafor',
    read_time: 4,
    share_count: 198
  },
  {
    slug: 'neighborhood-rituals-what-a-local-actually-means',
    title: 'Neighborhood Rituals: What a Local Actually Means',
    excerpt:
      'The word &quot;local&quot; gets used casually. We took the question seriously and rebuilt our weeknight programming around the answer.',
    body: `<p>A neighborhood bar is not defined by its address. It is defined by the number of people who walk in, unplanned, on a Monday night. By that definition, most bars are not neighborhood bars — they are destinations that happen to sit on residential blocks. We wanted to know what the difference was, and whether we could engineer ourselves toward the former.</p>
<p>The research, such as it was, took about a year of careful watching. The patterns we noticed: regulars arrived earlier than we expected, often before six. They did not want a full evening — they wanted thirty minutes of good lighting, a drink they did not need to explain, and a greeting that used their name. They came on Monday and Tuesday more than Friday and Saturday. They came alone more often than in pairs.</p>
<p>We redesigned the early evening around this. Apéritif hour starts at five, with four low-ABV drinks and two small plates at a friendlier price. The music is quieter, the lights are warmer, and the bar is never more than two seats deep. We trained the team to greet by name when possible and to leave regulars alone when they wanted to be left alone. That second skill took longer to learn than the first.</p>
<p>What we learned: being a local is a quiet commitment, not a loud one. It is about being the same room tonight that you were last Tuesday. It is about recognizing that somebody walked three blocks in the cold to be here and that the walk matters. The rituals we built — the early hour, the named greeting, the protected seats — are our attempt to honor that walk.</p>`,
    category: 'Neighborhood',
    author: 'Marcus Halloran',
    read_time: 5,
    share_count: 156
  },
  {
    slug: 'sound-design-philosophy-why-our-playlist-changes-at-9pm',
    title: 'Sound Design Philosophy: Why Our Playlist Changes at 9pm',
    excerpt:
      'The music in a room is the emotional floorboard everyone stands on. Here is how we think about ours — and what happens at nine.',
    body: `<p>Most bars treat music as background. We treat it as architecture. The song playing when you walk in tells you what kind of evening is possible — slow, social, celebratory, focused. Get it wrong and the room pushes guests toward the exit without anyone knowing why. Get it right and they stay an hour longer than they planned.</p>
<p>Our playlists are built in three arcs. From five to seven, the music is quiet, textured, and mostly instrumental — jazz, bossa, early electronic. The goal is to make conversation easy without making it the only thing happening. From seven to nine, we introduce vocals and rhythm, matching the rising volume of a filling room. The arc is designed to feel inevitable, never abrupt.</p>
<p>At nine o&#39;clock, the room flips. The playlist moves into what we call the &quot;deep register&quot; — soul, funk, disco edits, occasional house — and the volume comes up by a measured three decibels. We do this because by nine, the early crowd has settled into a new register: they are no longer arriving, they are staying. The music shifts to match them.</p>
<p>The transition is handled by one person, live, every night. We tried automating it and hated the result. A human hand reads the room — the specific people in it, how the bar is holding, whether the back corner is laughing or whispering — and chooses the next song accordingly. It is not an algorithm. It is a conversation between the DJ and the night.</p>
<p>We think about the playlist the way a restaurant thinks about the menu: it is the single most controllable variable that shapes how guests feel. We would no more outsource it than we would outsource the cooking.</p>`,
    category: 'Culture',
    author: 'Saskia Lind',
    read_time: 5,
    share_count: 267
  },
  {
    slug: 'the-gold-accented-bar-notes-from-the-build',
    title: 'The Gold-Accented Bar: Notes From the Build',
    excerpt:
      'A year of decisions, three cabinet-maker rejections, and the single detail that held up construction for six weeks.',
    body: `<p>The bar is the first thing you see when you walk in, and it was the last thing we finalized. The delay was not accidental. We wanted the room to tell us what kind of bar it needed before we built one. It took a full year of temporary furniture and a lot of arguing before we knew.</p>
<p>The final design is ten meters of walnut, hand-rubbed, with brushed-gold inlays at the lip and the footrest. It looks simple in photographs and is, in fact, the most over-engineered element in the room. The gold inlay alone went through three cabinet-makers and six weeks of delay because we refused to accept a version that looked like decoration. We wanted it to look like a structural choice — a line the room needed, not a line the room was given.</p>
<p>The choice of walnut was ours. The choice of inlay depth — two millimeters, no more — was the fourth cabinet-maker&#39;s insistence. She was right. Deeper would have read as ornamental; shallower would have disappeared. Two millimeters catches the light only when the person standing at the bar moves, which is exactly the effect we wanted.</p>
<p>Height was another argument. We settled on forty-two inches, slightly higher than the standard, so that a guest leaning in to order is in direct eye contact with the bartender across. Small decision, felt by everyone, remarked upon by no one. That is the ideal kind.</p>
<p>The footrest, which no guest will ever photograph, is solid brass. We chose it because it develops a patina over the course of a year that tells you how much the room has been used. One year in, the brass is starting to tell the story. We do not polish it.</p>`,
    category: 'Neighborhood',
    author: 'Daniel Ó Cinnéide',
    read_time: 6,
    share_count: 143
  },
  {
    slug: 'late-night-menu-secrets',
    title: 'Late Night Menu Secrets',
    excerpt:
      'Six plates that only appear after ten, the reasoning behind each, and why the late menu is the best menu we write.',
    body: `<p>The late menu is the menu we write for ourselves. It appears at ten every night, runs for six plates, and is designed around the specific hunger of people who have already had two drinks and are not yet ready to go home. It is also the menu our kitchen looks forward to most.</p>
<p>The philosophy is straightforward: late food should be warmer, saltier, and more generous than the dinner menu. It should be eaten with hands more often than with cutlery. It should not apologize for being comforting. The early menu is composed; the late menu is honest.</p>
<p>Our signature late plate is a plate of hand-cut fries finished with whipped bone marrow and a shower of grated horseradish. It arrives at the table too hot to eat, which is the point — it buys the table two minutes of anticipation. We have sold it every single night since we opened. We have no plans to ever take it off.</p>
<p>Two other favorites: a short-rib grilled cheese on house sourdough, cut into quarters, served with a pickled-shallot condiment nobody needs explained. And a dish we call &quot;the midnight egg&quot; — a soft-yolked egg poached in brown butter, set on a disc of potato, finished with black truffle in season and burnt leek ash out of season. It is a dish for people who have decided to stay.</p>
<p>The late menu closes at one. It is the last thing the kitchen makes before they clean down, and it is almost always the food the team eats as family meal after service. We think you can taste that. We think it is why the late menu, more than any other part of the program, keeps people returning.</p>`,
    category: 'Cocktails',
    author: 'Chef Aya Vance',
    read_time: 5,
    share_count: 321
  }
];
