<script lang="ts">
    import { Chessground } from "@lichess-org/chessground";
    import { Chess } from "chess.js";
    import { onMount } from "svelte";
	import type { Key } from "@lichess-org/chessground/types";

    import "$lib/assets/Chessground/chessground.css";
    import "$lib/assets/Chessground/theme.css";


    function userMove(from: Key, to: Key):void {
        console.debug(`move ${from} -> ${to}`)
        chess.move({from: from, to: to})
    }

    let {board="blue", pieces="merida"} = $props();
    let chessDiv: HTMLElement;
    const config = {
        "events": {
            "move": userMove,
        },
    };
    const chess = new Chess();

    onMount(() => {
        const ground = Chessground(chessDiv!, config);
        // TODO: preserve the state through page refreshing
    });
</script>

<div bind:this={chessDiv} class="{board} {pieces}"></div>
