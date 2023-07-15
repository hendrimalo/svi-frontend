require('dotenv').config();

const { URL_ARTICLE } = process.env;
const apiAdapter = require('../../utils/axiosAdapter');

const api = apiAdapter(URL_ARTICLE);
module.exports = {
  get: async (req, res) => {
    try {
      const { page } = req.params;

      const resApi = await api.get('articles/', {
        params: {
          page,
          limit: 10,
        },
      });

      return res.render('index', { articles: resApi.data.data });
    } catch (error) {
      console.log(error.response.data);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.id;

      const url = `articles/${id}`;
      const res = await api.get(url);

      return res.render('');
    } catch (error) {
      console.log(error.response.data);
    }
  },
  getCreate: async (req, res) => {
    try {
      return res.render('post-create');
    } catch (error) {
      console.log(error.response.data);
    }
  },
  add: async (req, res) => {
    try {
      const {
        title, content, category, status,
      } = req.body;

      const resApi = await api.post('articles/', {
        title,
        content,
        category,
        status,
      });
      res.redirect('/1');
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const {
        id, title, content, category, status,
      } = req.body;

      const url = `articles/${id}`;
      const res = await api.put(url, {
        title,
        content,
        category,
        status,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const url = `articles/${id}`;
      const resApi = await api.delete(url);

      res.redirect('/1');
    } catch (error) {
      console.log(error.response.data);
    }
  },
};
