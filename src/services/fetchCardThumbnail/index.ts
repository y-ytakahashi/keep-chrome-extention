import axios from 'axios';

// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
const fetchThumbnailImage = (url: string) => {
  axios
    .get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then((response: any) => {
      console.log(response);
    });
};

export default fetchThumbnailImage;

// fetch(url)
//   .then((res) => res.text())
//   .then((text) => {
//     const el = new DOMParser().parseFromString(text, 'text/html');
//     const headEls = el.head.children;
//     Array.from(headEls).map((v) => {
//       const prop = v.getAttribute('property');
//       if (!prop) return;
//       console.log(prop, v.getAttribute('content'));
//     });
//   });
