import {Howl} from "howler";

import {sounds} from "./url";

export const loadingSound = new Howl({
    src: [sounds.loadingSound],
    volume: 0.8,
    preload: true,
});