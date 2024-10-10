const channels = [
  {
    name: "PowerfulJRE",
    description: "The Joe Rogan Experience podcast",
    videos: [
      {
        title: "Joe Rogan Experience #1480 - Kevin Hart",
        duration: 121,
      },
      {
        title: "Joe Rogan Experience #1470 - Elon Musk",
        duration: 120,
      },
      {
        title: "Joe Rogan Experience #1477 - Tony Hawk",
        duration: 102,
      },
      {
        title: "Joe Rogan Experience #1413 - Bill Maher",
        duration: 118,
      },
      {
        title: "Joe Rogan Experience #1208 - Jordan Peterson",
        duration: 175,
      },
    ],
  },
  {
    name: "LEMMiNO",
    description:
      "Documentaries and list videos narrated by a 20-something Swedish guy.",
    videos: [
      {
        title: "The Universal S",
        duration: 19,
      },

      {
        title: "Cicada 3301: An Internet Mystery",
        duration: 18,
      },
      {
        title: "The Search For D.B. Cooper",
        duration: 29,
      },
      {
        title: "The Mandela Effect: A Critical Analysis",
        duration: 16,
      },
    ],
  },
  {
    name: "CGP Grey",
    description: "What ever I finds interesting.",
    videos: [
      {
        title: "The Trouble With Tumbleweed",
        duration: 7,
      },

      {
        title: "Lockdown Productivity: Spaceship You",
        duration: 11,
      },
      {
        title: "The Fable of the Dragon-Tyrant",
        duration: 13,
      },
      {
        title: "The Rules for Rulers",
        duration: 18,
      },
      {
        title: "The Simple Solution to Traffic",
        duration: 4,
      },
      {
        title: "You Are Two",
        duration: 5,
      },
    ],
  },
  {
    name: "Alternate History Hub",
    description:
      "An entire channel dedicated to the 'What If?'.  Using knowledge of geography, population and other historical facts I predict what could have happened had things gone differently in history.",
    videos: [
      {
        title: "What if Rome Never Existed? Part III",
        duration: 19,
      },

      {
        title: "What if Trump Was Never Elected President?",
        duration: 4,
      },
      {
        title: "How A Corporation Conquered A Sub-Continent",
        duration: 18,
      },
      {
        title: "What if Antarctica Was A Green Continent?",
        duration: 18,
      },
      {
        title: "Why Tyrion's Solution For Westeros Doomed Everyone",
        duration: 8,
      },
      {
        title: "What if Napoleon Never Fell?",
        duration: 10,
      },
    ],
  },
  {
    name: "Example and Ample",
    description: "Some things are better left unsaid.",
    videos: [
      {
        title: "Billie Ellish: everything i wanted",
        duration: 4,
      },
    ],
  },
];

/**************************************************************
 * totalVideosDuration(channel):
 * - receives a channel object
 * - returns the total duration of all the videos in this channel
 *
 * BONUS: use iteration method `.reduce()`
 ****************************************************************/
function totalVideosDuration(channel) {
  const allVideosDuration = channel.videos.reduce((acc, video) => {
    return acc + video.duration;
  }, 0);
  return allVideosDuration;
}

/**************************************************************
 * channelWithMostContent(channels):
 * - receives an array of channel objects
 * - returns the channel with the highest total video duration
 *
 * Hint: use the `totalVideosDuration()` function
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
function channelWithMostContent(channels) {
  //   const callTotalVideosDuration = channels.map((channel) => {
  //     return totalVideosDuration(channel);
  //   });

  const sortedVideoDurtion = channels.sort(
    (a, b) => totalVideosDuration(b) - totalVideosDuration(a)
  );

  return sortedVideoDurtion[0];
}

/**************************************************************
 * longestChannelName(channels):
 * - receives an array of channel objects
 * - returns the channel with the longest name
 *
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
function longestChannelName(channels) {
  let max = channels[0].name.length;
  let result = "";
  channels.forEach((channel) => {
    const length = channel.name.length;
    if (length > max) {
      max = length;
      result = channel.name;
    }
  });

  return channels.find((channel) => channel.name === result);

  //   const longestChannelName = channels.sort(
  //     (a, b) => b.name.length - a.name.length
  //   );

  //return longestChannelName[0];
}

// Check your answers by running this file and comparing what it logs

console.log(totalVideosDuration(channels[0]));
// Should log:

// 636

console.log(channelWithMostContent(channels));
// Should log:

// {
//   name: "PowerfulJRE",
//   description: "The Joe Rogan Experience podcast",
//   videos: [
//     { title: "Joe Rogan Experience #1480 - Kevin Hart", duration: 121 },
//     { title: "Joe Rogan Experience #1470 - Elon Musk", duration: 120 },
//     { title: "Joe Rogan Experience #1477 - Tony Hawk", duration: 102 },
//     { title: "Joe Rogan Experience #1413 - Bill Maher", duration: 118 },
//     { title: "Joe Rogan Experience #1208 - Jordan Peterson", duration: 175 },
//   ],
// }

console.log(longestChannelName(channels));
// Should log:

// {
//   name: "Alternate History Hub",
//   description: "An entire channel dedicated to the 'What If?'.  Using knowledge of geography, population and other historical facts I predict what could have happened had things gone differently in history.",
//   videos: [
//     { title: "What if Rome Never Existed? Part III", duration: 19 },
//     {
//       title: "What if Trump Was Never Elected President?",
//       duration: 4,
//     },
//     {
//       title: "How A Corporation Conquered A Sub-Continent",
//       duration: 18,
//     },
//     {
//       title: "What if Antarctica Was A Green Continent?",
//       duration: 18,
//     },
//     {
//       title: "Why Tyrion's Solution For Westeros Doomed Everyone",
//       duration: 8,
//     },
//     { title: "What if Napoleon Never Fell?", duration: 10 },
//   ],
// }
