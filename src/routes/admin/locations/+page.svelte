<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	import { slide } from 'svelte/transition';

	let { data, form } = $props();
</script>

<header>
	<h1>ADMIN DASHBOARD - LOCATIONS</h1>

	<a href="/admin/locations/new">CREATE A NEW LOCATION</a>
</header>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

<div class="container">
	{#each data.locations as location (location.id)}
		<div class="box" transition:slide>
			<p>{location.id} - {location.name}</p>
			<form action="?/deleteLocation" method="POST" use:enhance>
				<input type="hidden" name="id" value={location.id} />
				<button type="submit">Delete</button>
			</form>
		</div>
	{/each}
</div>
