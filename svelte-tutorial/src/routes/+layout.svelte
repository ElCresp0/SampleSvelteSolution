<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '../components/Navbar.svelte';

	let { children } = $props();
	let navbarPages = [
		{ address: "/generic-subpage", title: "Generic Subpage" },
		{ address: "/chessboard", title: "Chessboard" },
		{ address: "/about", title: "About" },
	]
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar pages={navbarPages}/>

<div class="body">
{@render children()}
</div>
