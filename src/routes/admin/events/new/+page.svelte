<script>
	let { data } = $props();
</script>

<h1>CREATE A NEW EVENT</h1>

<form method="POST" action="?/createEvent">
	<label for="title">TITLE</label>
	<input type="text" placeholder="Title" name="title" />

	<label for="description">DESCRIPTION</label>
	<textarea placeholder="Description" name="description"></textarea>

	<label for="url">URL</label>
	<input type="text" placeholder="Url" name="url" />

	<label for="startDate">START DATE</label>
	<input type="date" placeholder="Startdate" name="startDate" />

	<label for="endDate">END DATE</label>
	<input type="date" placeholder="Enddate" name="endDate" />

	<label for="startTime">START TIME</label>
	<input type="time" placeholder="Starttime" name="startTime" />

	<label for="location">LOCATION</label>
	<select name="locationId">
		{#each data.locations as location (location.id)}
			<option value={location.id}>{location.name}</option>
		{/each}
	</select>

	<label for="category">CATEGORY</label>
	<select name="categoryId">
		{#each data.categories as category (category.id)}
			<option value={category.id}>{category.name}</option>
		{/each}
	</select>
	<button type="submit">Create Event</button>
</form>
