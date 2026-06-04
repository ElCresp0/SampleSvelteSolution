<script lang="ts">
import { Chessground } from '@lichess-org/chessground';
import { onMount } from 'svelte';
// import '/chessground.css';

// styles copied from [chessground-examples](https://github.com/lichess-org/chessground-examples/tree/master/assets)
import '$lib/assets/chessground.css';
import '$lib/assets/theme.css';

let chessDiv: HTMLElement;
// let ground;
const config = {};
// const ground = $state(Chessground((HTMLElement) chessDiv, config));

onMount (() => {
    const ground = $state(Chessground(chessDiv!, config));
})

</script>

<div bind:this={chessDiv}>

</div>