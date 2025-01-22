<script>
	import { flip } from 'svelte/animate';
	let { data } = $props();

	let filteredEvents = $state(data.events);
	let selectedCategory = $state('all');

	function filterEvents() {
		if (selectedCategory === 'all') {
			filteredEvents = data.events;
		} else {
			filteredEvents = data.events.filter((e) => e.category_id === selectedCategory.id);
		}
	}
</script>

<div>
	{#if data.user}

	<p>Welcome, {data.user.username}</p>
	<form action="/logout?/logout" method="POST">
		<button class="logout" type="submit">Logout</button>
		</form>
		<form action="/delete?/delete" method="POST">
			<button class="logout" type="submit">Delete Account</button>
			</form>
	{:else}


	<p>
		You have not logged in.</p> 
	<p>
		<a class="logres" href="/login">LOGIN</a>
		or
		<a class="logres" href="/register">REGISTER</a>
	</p>
	{/if}
</div>

<h1>MY EVENT APP</h1>
<p>Here are the current events</p>

<main class="">
	<select name="" id="" bind:value={selectedCategory} onchange={filterEvents}>
		<option value="all">All</option>
		{#each data.categories as category}
			<option value={category}>{category.name}</option>
		{/each}
	</select>

	<div class="event">
		{#each filteredEvents as event (event.id)}
			<div class="box" animate:flip>
				<p>{event.id} - {event.title}</p>
			</div>
		{/each}
	</div>
</main>
