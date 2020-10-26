// Create a data feed in JSON format with the structure that best suits the content for the voting boxes and populate the initial content from it.
export const initialState = [
  {
    alreadyVoted: false,
    bgImg: 'kanye.png',
    category: 'Entertainment',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    isVoteDownSelected: false,
    isVoteUpSelected: true,
    startedOn: '23/09/2020',
    title: 'Kanye West',
    votesDown: 36,
    votesUp: 64,
  },
  {
    alreadyVoted: true,
    bgImg: 'mark.png',
    category: 'Business',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    isVoteDownSelected: false,
    isVoteUpSelected: true,
    startedOn: '22/09/2020',
    title: 'Mark Zuckerberg',
    votesDown: 64,
    votesUp: 36,
  },
  {
    alreadyVoted: false,
    bgImg: 'cristina.png',
    category: 'Politics',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    isVoteDownSelected: false,
    isVoteUpSelected: true,
    startedOn: '23/09/2020',
    title: 'Cristina Fernández de Kirchner',
    votesDown: 64,
    votesUp: 36,
  },
  {
    alreadyVoted: false,
    bgImg: 'malala.png',
    category: 'Entertainment',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    isVoteDownSelected: false,
    isVoteUpSelected: true,
    startedOn: '23/09/2020',
    title: 'Malala Yousafzai',
    votesDown: 36,
    votesUp: 64,
  },
];

export const getInitialState = () => {
  // Think on a way to persist the current votes so if the page is refreshed the data is not lost.
  const stringifiedState = localStorage.getItem('stringifiedState');
  return (stringifiedState && JSON.parse(stringifiedState)) || initialState;
}