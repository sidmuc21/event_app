import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export async function load({locals}) {

	if(!locals.user || locals.user.role !== 'admin'){
		redirect(302, '/login');
	}

	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM categories');

	return {
		categories: rows
	};
}

export const actions = {
	deleteCategory: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		const connection = await createConnection();
		try {
			const [result] = await connection.execute('DELETE FROM categories WHERE id = ?', [id]);
		} catch {
			return {
				success: false,
				message: 'Deletion not possible!'
			};
		}
	}
};
