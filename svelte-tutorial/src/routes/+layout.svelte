<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '../components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="navbar">
<Navbar />
</div>

<div class="body">
{@render children()}
</div>

<style>
	/* TODO: position specifically a NavBar div, not the nav element inside a component */
	.navbar {
	position: sticky; /* fixed absolute */
	top: 0;
	width: 100%;
	z-index: 1000;
	}

	/* .body {
		position: absolute;
  		top: 1;
	} */
</style>
