<script lang="ts">
    import { Chessground } from "@lichess-org/chessground";
    import { onMount } from "svelte";

    import "$lib/assets/Chessground/chessground.css";
    import "$lib/assets/Chessground/theme.css";

    let {board="blue", pieces="merida"} = $props();
    let chessDiv: HTMLElement;
    const config = {};

    onMount(() => {
        const ground = $state(Chessground(chessDiv!, config));
        // TODO: preserve the state through page refreshing
    });
</script>

<div bind:this={chessDiv} class="{board} {pieces}"></div>
