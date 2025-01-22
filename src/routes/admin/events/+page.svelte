<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data } = $props();
</script>

<h1>ADMIN DASHBOARD - EVENTS</h1>

<a href="/admin/events/new">CREATE A NEW EVENT</a>
<div class="container">
	{#each data.events as event (event.id)}
		<div class="box" transition:slide>
			<p>{event.id} - {event.title} - {event.location_name}</p>

			<form action="?/deleteEvent" method="POST" use:enhance>
				<input type="hidden" name="id" value={event.id} />
				<button type="submit">Delete</button>
			</form>
		</div>
	{/each}
</div>

<style>
	.box {
		border: 1px solid rgb(154, 179, 202);
		padding: 1rem;
		margin: 1rem 0;
	}
</style>
