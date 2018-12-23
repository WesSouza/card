import curlCard from './curl-card';

const options = {
  information: {
    name: 'Wes Souza',
    headline: 'Senior Web Developer @ Work & Co',
    website: 'https://wesley.so',
    github: 'WesleydeSouza',
    instagram: 'wesleydesouza',
    npm: 'wesleydesouza',
    twitter: 'WesleydeSouza',
  },
};

const card = curlCard(options);
card.listen();
