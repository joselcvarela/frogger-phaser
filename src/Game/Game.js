import Phaser, { Game } from 'phaser'
import './Game.css'

export default class extends Game {
    constructor() {
        super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO);
    }
}
