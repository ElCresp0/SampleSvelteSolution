<script lang="ts">
    import LoremIpsum from "../../components/LoremIpsum.svelte";
</script>

<h1>About nothing</h1>

<h2>This subpage shows the static NavBar position</h2>
<h2>And a simple for-each loop</h2>

{#each {length: 20} as _ }
    <LoremIpsum />
{/each}
