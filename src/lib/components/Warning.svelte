<script>
	const { message } = $props();
</script>

<div>
	<p class="warning">{message}</p>
</div>

<style>
	.warning {
		color: rgb(255, 255, 255);
		font-family: 'Turret Road', sans-serif;
		font-weight: 400;
		font-size: 25px;
	}
</style>
