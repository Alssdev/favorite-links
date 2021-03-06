const { Router } = require('express');
const router = Router();

const db = require('../database');

const { isLoggedIn } = require('../lib/auth');

router.get('/add', isLoggedIn, (req, res) => {
	res.render('links/add');
});

router.post('/add', isLoggedIn, async (req, res) => {
	const { title, url, description } = req.body;
	const newLink = { title, url, description, user_id: req.user.id };

	try {
		await db.query('INSERT INTO links SET ?', [newLink]);
		req.flash('success', 'Su link se ha guardado correctamente.');
		res.redirect('/links');
	} catch (error) {
		// handle error
	}
});

router.get('/', isLoggedIn, async (req, res) => {
	try {
		const links = await db.query(
			'SELECT * FROM links WHERE user_id = ?',
			req.user.id
		);
		res.render('links/list', { links });
	} catch (error) {
		console.error(error);
	}
});

router.get('/delete/:id', isLoggedIn, async (req, res) => {
	const { id } = req.params;

	try {
		await db.query('DELETE FROM links WHERE ID = ?', id);
		req.flash('success', 'Su link se ha eliminado correctamente.');
		res.redirect('/links');
	} catch (error) {
		// handle error
	}
});

router.get('/edit/:id', isLoggedIn, async (req, res) => {
	const { id } = req.params;

	try {
		const links = await db.query('SELECT * FROM links WHERE id = ?', id);
		res.render('links/edit', { link: links[0] });
	} catch (error) {
		// handle error
	}
});

router.post('/edit/:id', isLoggedIn, async (req, res) => {
	const { id } = req.params;
	const { title, url, description } = req.body;
	const updatedLink = { title, url, description, user_id: req.user.id };

	try {
		await db.query('UPDATE links SET ? WHERE id = ?', [updatedLink, id]);
		req.flash('success', 'Su link se ha actualizado correctamente');
		res.redirect('/links');
	} catch (error) {
		// handle error
	}
});

module.exports = router;
