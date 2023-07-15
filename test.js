require('dotenv').config();

const { URL_ARTICLE } = process.env;
const apiAdapter = require('./utils/axiosAdapter');

const api = apiAdapter(URL_ARTICLE);

async function deleted() {
  try {
    const res = await api.get('/articles', {
      params: {
        page: 1,
        limit: 10,
      },
    });
    console.log(res.data);
    return res;
  } catch (error) {
    console.log(error.response.data);
  }
}
deleted()