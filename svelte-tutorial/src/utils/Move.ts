import type { Color, PieceSymbol, Square } from "chess.js";

export class Move {
    public from: Square
    public to: Square
    public color: Color
    public promotion?: PieceSymbol

    constructor(from: Square, to: Square, color: Color, promotion?: PieceSymbol) {
        this.from = from;
        this.to = to;
        this.color = color;
        this.promotion = promotion;
    }

    public isEqual(move: Move): boolean {
        return this.from == move.from &&
            this.to == move.to &&
            this.color == move.color &&
            this.promotion == move.promotion;
    }
}