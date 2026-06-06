<script lang="ts">
    import { Chessground } from "@lichess-org/chessground";
    import { onMount } from "svelte";
    // import '/chessground.css';

    // styles copied from [chessground-examples](https://github.com/lichess-org/chessground-examples/tree/master/assets)
    // and [chessground](https://github.com/lichess-org/chessground/blob/master/assets)
    import "$lib/assets/Chessground/chessground.css";
    import "$lib/assets/Chessground/theme.css";
    import "$lib/assets/Chessground/chessground.cburnett.css";
    import "$lib/assets/Chessground/chessground.brown.css";

    let { chessboardClass = "brown" } = $props();

    let chessDiv: HTMLElement;
    // let ground;
    const config = {};

    onMount(() => {
        // const ground = $state(Chessground(chessDiv!, config));
        const ground = Chessground(chessDiv!, config);
        // TODO: preserve the state through page refreshing
    });
</script>

<div bind:this={chessDiv} class={chessboardClass}></div>
