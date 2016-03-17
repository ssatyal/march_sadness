var whll = [
  ['Jim Caldwell',
  'Looks like the nervous armored car driver transporting his largest and last delivery, suspicious his new partner might be up to something. Jay Cutler is his new partner.',
  'http://i.imgur.com/lf9MJYM.jpg'],

  ['Jay Cutler',
  'Looks like the guy trying to break into a house on an alarm company commercial.',
  'http://i.imgur.com/9g1bKdR.jpg'],

  ['Tom Thibodeau',
  'Looks like the guy in an antacid commercial uncomfortably eating a chili dog while pulling at his collar for relief.',
  'http://i.imgur.com/xYNkGVV.jpg'],

  ['Wade Phillips',
  'Looks like the Bank Security guard who gives up his gun after robbers get a jump on him by putting a banana to his neck.',
  'http://i.imgur.com/QqVKb4m.jpg'],

  ['Paul Finebaum',
  'Looks like the human version of the NCAA rule book.',
  'http://i.imgur.com/RA6pj6R.jpg'],

  ['Jim Caldwell',
  'Looks like the guy answering the door at 3 am who instantly realizes the policeman there is going to give him life-changing bad news.',
  'http://i.imgur.com/yovQAgV.jpg'],

  ['Pete Carroll',
  'Face looks like a mask a bank robber would wear.',
  'http://i.imgur.com/85Zvuu2.jpg'],

  ['Bartolo Colon',
  'Looks like the last Mohican, who ate the second to last Mohican.',
  'http://i.imgur.com/A39m9ss.jpg'],

  ['Joe Torre',
  'Looks like the guy who enters the sauna wearing a gold chain and takes off his towel in the middle of the sauna while walking towards the open bench across from you, and sits down next to Wade Phillips.',
  'http://i.imgur.com/7gcolQT.jpg'],

  ['Wade Phillips',
  "Looks like a guy who can't figure out how the critters are getting under the fence.",
  'http://i.imgur.com/RNQ4L8V.jpg'],

  ['Steve Kerr',
  'Looks like the guy who starts practicing his golf swing mid-conversation.',
  'http://i.imgur.com/AtbwRzh.jpg'],

  ['Greg Olsen',
  'Looks like He-Man if he moved to Portland and opened a store that sells artisanal jams.',
  'http://i.imgur.com/jc7nUcq.jpg'],

  ['Jay Gruden',
  'Looks like a flashy local realtor whose photo on the bus stop seat keeps getting defaced with horns and a mustache.',
  'http://i.imgur.com/PrwsoEA.jpg'],

  ['Lane Kiffin',
  'Is the boater who throttles up in a no wake zone because he sees Jim Tomsula fishing with a Snoopy pole in a row boat.',
  'http://i.imgur.com/vd42VWZ.jpg'],

  ['Brian Dawkins',
  'Looks like the guy at church who points to the sky with his eyes closed biting his lip and crying.',
  'http://i.imgur.com/CP7VWdKm.jpg'],

  ['Matthew Stafford ',
  'Looks like your friend\'s friend who uses your bathroom, comes out fifteen minutes later and asks, "Do you have a plunger?"',
  'http://i.imgur.com/qH4EntP.jpg'],

  ['Ty Lawson',
  'Looks like the DirecTV installer who shows up to your house an hour late and claims he has the wrong equipment and has to reschedule.',
  'http://i.imgur.com/IFjg3sJ.jpg'],

  ['Russell Wilson ',
  'Looks like a dolphin trainer.',
  'http://i.imgur.com/HGVnHIQ.jpg'],

  ['Wade Phillips',
  'Looks like someone you would find on a bottle of BBQ Sauce.',
  'http://i.imgur.com/N2V2qs0.jpg'],

  ['Roy Williams',
  'Looks like the curator of a small-town historical society who patiently gazes out the window for potential visitors all day, sighs, then flips the sign to "CLOSED."',
  'http://i.imgur.com/xZgZ7K2.jpg'],

  ['Dana Holgorsen',
  'Looks like that guy your Dad punched at Steak N\' Shake when you were a kid.',
  'http://i.imgur.com/UO7jF00.jpg'],

  ['Barry Melrose',
  'Looks like a former gladiator who won his freedom and now runs a gladiator ring of his own in a backwater town.',
  'http://i.imgur.com/VR3F614.jpg'],

  ['Kurt Warner',
  'Looks like the man emerging from the pool in the "after" portion of the Rogaine ads.',
  'http://i.imgur.com/nwyJ7w0m.jpg'],

  ['Steve Kerr',
  'Looks like the new young pastor at a church that slowly wins over the old people who don\'t like change.',
  'http://i.imgur.com/mDDUhz6m.jpg'],

  ['Jeff Fisher',
  'Looks like a guy in a Lynyrd Skynyrd shirt shotgunning a beer on the infield of a NASCAR track.',
  'http://i.imgur.com/En7rkhgl.jpg'],

  ['Chris Kaman',
  'Looks like the butler of a haunted mansion.',
  'http://i.imgur.com/iNSgNw4l.jpg'],

  ['Ned Yost',
  'Looks like every white person\'s aunt.',
  'http://i.imgur.com/QuEvRATl.jpg'],

  ['Charlie Strong',
  'Looks like his name is Charlie Strong.',
  'http://i.imgur.com/M6LZCC6l.jpg'],

  ['Roger Goodell',
  'Looks like the pastor in a town that has banned dancing.',
  'http://i.imgur.com/XqtsPcMl.jpg'],

  ['Billy Donovan',
  'Looks like a vampire who woke up in the wrong century.',
  'http://i.imgur.com/8Zchmt0l.jpg'],

  ['Jim Harbaugh',
  'Looks like the guy who yells at his wife in front of everyone when they lose at Pictionary on game night.',
  'http://i.imgur.com/7rpS86Sl.jpg'],
  ['Romeo Crennel',
  'Looks like he just watched his neighbor\'s dog get eaten by an alligator.',
  'http://i.imgur.com/ew7tvcyl.jpg'],
  ['Jeff Van Gundy',
  'Looks like a nervous scientist in a Sci-Fi movie who, after a series of awkward exchanges with the hero, says "I don\'t get out much."',
  'http://i.imgur.com/9WvujN2l.jpg']
  // ['',
  // '',
  // '']
  // ['',
  // '',
  // '']
  // ['',
  // '',
  // '']
  // ['',
  // '',
  // '']
  // ['',
  // '',
  // '']
  // ['',
  // '',
  // '']
  // ['',
  // '',
  // '']


];

var image = $('img');
var name = $('#name');
var text = $('#lookslike');
randomize = function() {
  var randomNum = Math.floor(Math.random() * whll.length);
  var guy = whll[randomNum];
  $('img').replaceWith('<img src='+whll[randomNum][2]+'>');
  $('#name').replaceWith('<div id="name">'+guy[0]+'</div>');
  $('#lookslike').replaceWith('<div id="lookslike">'+guy[1]+'</div>');};
randomize();
$('#clicky').click(randomize);
