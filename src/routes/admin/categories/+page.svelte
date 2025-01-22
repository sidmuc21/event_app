<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	import { slide } from 'svelte/transition';

	let { data, form } = $props();
</script>

<header>
	<h1>ADMIN DASHBOARD - CATEGORIES</h1>

	<a href="/admin/categories/new">CREATE A NEW CATEGORY</a>
</header>
{#if form && !form.success}
	<Warning message={form.message} />
{/if}

<div class="container">
	{#each data.categories as category (category.id)}
		<div class="box" transition:slide>
			<p>{category.id} - {category.name}</p>
			<form action="?/deleteCategory" method="POST" use:enhance>
				<input type="hidden" name="id" value={category.id} />
				<button type="submit">Delete</button>
				
			</form>
		</div>
	{/each}
</div>
