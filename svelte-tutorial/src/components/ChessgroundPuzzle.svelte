<script lang="ts">
    import { Chessground } from "@lichess-org/chessground";
    import { Chess, type Square } from "chess.js";
    import { onMount } from "svelte";
	import type { Key } from "@lichess-org/chessground/types";
    import { Puzzle } from "../utils/Puzzle";

    import "$lib/assets/Chessground/chessground.css";
    import "$lib/assets/Chessground/theme.css";
	import type { Config } from "@lichess-org/chessground/config";
	import { Move } from "../utils/Move";
	import type { Api } from "@lichess-org/chessground/api";


    function userMove(from: Key, to: Key):void {
        console.debug(`move ${from} -> ${to}`)
        let move = new Move(<Square>from, <Square>to, chess.turn());
        console.debug(move, puzzle.moves[currentMove]);
        if (puzzle.moves[currentMove].isEqual(move) === false) {
            console.debug("Inorrect move!");
            ground.cancelMove();
            ground.set({
                "fen": chess.fen(),
                "turnColor": (chess.turn() === "w" ? "white" : "black")
            })
        }
        else {
            console.debug("Correct move!");
            chess.move({from: from, to: to});
            currentMove++;
            if (currentMove == puzzle.moves.length) {
                console.debug("Puzzle finished!");
                // TODO: notify the parent to track progress AND/OR automatically start a new puzzle
            }
            else {
                ground.move(puzzle.moves[currentMove].from, puzzle.moves[currentMove].to);
                chess.move({from: puzzle.moves[currentMove].from, to: puzzle.moves[currentMove].to});
                currentMove++;
            }
        }
    }

    let {board="blue", pieces="merida", puzzle}: {board: string, pieces: string, puzzle: Puzzle} = $props();
    let chessDiv: HTMLElement;
    let ground: Api;
    let currentMove: number;

    let config: Config = $derived({
        "fen": puzzle.fen,
        "events": {
            "move": userMove,
        },
        "movable": {"color": (puzzle.moves[0].color === "w" ? "white" : "black")},
    });
    let chess = $derived(new Chess(puzzle.fen));
    
    $effect(() => {
        // updating the puzzle prop triggers this event
        ground = Chessground(chessDiv!, config);
        currentMove = 0;
    })

</script>

<div bind:this={chessDiv} class="{board} {pieces}"></div>
