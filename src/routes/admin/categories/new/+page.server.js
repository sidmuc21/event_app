import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export const actions = {
	createCategory: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		const connection = await createConnection();
		const [result] = await connection.execute('INSERT INTO categories (name) VALUES (?)', [
			formData.get('name')
		]);
		if (result.affectedRows) {
			redirect(303, '/admin/categories');
		}
	}
};
