// Цей об'єкт надає зручний інтерфейс для отримання різних складових посилання, таких як протокол, домен, порт, шлях та параметри запиту.

// async function parseLinks(links) {

//   const results = [];
  
//   for (const link of links) {
//     try {
//       const url = new URL(link);
//       results.push({
//         protocol: url.protocol,
//         hostname: url.hostname,
//         port: url.port,
//         path: url.pathname,
//         search: url.search,
//         hash: url.hash
//       });
//     } catch (err) {
//       console.error(`Failed to parse link ${link}: ${err}`);
//     }
//   }
  
//   return results;
// }
// Цей код приймає масив посилань і повертає масив об'єктів, кожен з яких містить складові посилання. Якщо парсинг будь-якого посилання викликає помилку, код продовжить виконання для інших посилань, але повідомить про помилку у консоль.


// Щоб отримати пояснення складників посилання, можна використовувати наступний код:

// const url = new URL('https://socialism.com.ua/ua/servicedescription/71-stvorennya-parserv-bud-yako-skladnost.html');


// console.log(`Protocol: ${url.protocol}`);
// console.log(`Hostname: ${url.hostname}`);
// console.log(`Port: ${url.port}`);
// console.log(`Path: ${url.pathname}`);
// console.log(`Search: ${url.search}`);
// console.log(`Hash: ${url.hash}`);


const express = require('express');
const { URL } = require('url');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/parseLinks', (req, res) => {
  const links = req.body.links;
  const results = [];

  for (const link of links) {
    try {
      const url = new URL(link);
      results.push({
        protocol: url.protocol,
        hostname: url.hostname,
        port: url.port,
        path: url.pathname,
        search: url.search,
        hash: url.hash,
      });
    } catch (err) {
      console.error(`Failed to parse link ${link}: ${err}`);
    }
  }

  res.json(results);
});

app.get('/parseLink/:link', (req, res) => {
  const link = req.params.link;
  const url = new URL(link);

  res.json({
    protocol: url.protocol,
    hostname: url.hostname,
    port: url.port,
    path: url.pathname,
    search: url.search,
    hash: url.hash,
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


