import type { FEN } from "@lichess-org/chessground/types";
import type { Move } from "./Move";
// import assert from "assert";

export class Puzzle {
    public fen: FEN;
    public moves: Move[];

    constructor(fen: FEN, moves: Move[]) {
        this.fen = fen;
        this.moves = moves;
    }
}