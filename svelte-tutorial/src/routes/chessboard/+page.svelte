<script lang="ts">
	import ChessgroundPuzzle from "../../components/ChessgroundPuzzle.svelte";
	import { Move } from "../../utils/Move";
	import { Puzzle } from "../../utils/Puzzle";

	let puzzle = $state(new Puzzle("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", [new Move("e2", "e4", "w"), new Move("c7", "c5", "b"), new Move("g1", "f3", "w")]));

	function nextPuzzle() {
		puzzle = new Puzzle("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", [new Move("e2", "e4", "w"), new Move("c7", "c5", "b"), new Move("g1", "h3", "w")]);
		console.debug("next puzzle");
	}

</script>

<h1>This is a chessboard</h1>

<ChessgroundPuzzle board="blue" pieces="merida" puzzle={puzzle}/>
<button onclick={nextPuzzle}>next puzzle</button>
