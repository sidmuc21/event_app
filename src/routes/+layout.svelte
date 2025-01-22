<script>
	import '../app.css';
	let { children } = $props();
</script>

<nav>
	<a href="/">Home</a>
	<a href="/admin/events">Events</a>
	<a href="/admin/locations">Locations</a>
	<a href="/admin/categories">Categories</a>
</nav>

{@render children()}
