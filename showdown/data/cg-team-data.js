"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var cg_team_data_exports = {};
__export(cg_team_data_exports, {
  ABILITY_MOVE_BONUSES: () => ABILITY_MOVE_BONUSES,
  ABILITY_MOVE_TYPE_BONUSES: () => ABILITY_MOVE_TYPE_BONUSES,
  HARDCODED_MOVE_WEIGHTS: () => HARDCODED_MOVE_WEIGHTS,
  MOVE_PAIRINGS: () => MOVE_PAIRINGS,
  SPEED_BASED_MOVES: () => SPEED_BASED_MOVES,
  WEIGHT_BASED_MOVES: () => WEIGHT_BASED_MOVES
});
module.exports = __toCommonJS(cg_team_data_exports);
const MOVE_PAIRINGS = {
  rest: "sleeptalk",
  sleeptalk: "rest"
};
const ABILITY_MOVE_BONUSES = {
  drought: { sunnyday: 0.2, solarbeam: 2 }
};
const ABILITY_MOVE_TYPE_BONUSES = {
  darkaura: { Dark: 1.33 },
  fairyaura: { Fairy: 1.33 },
  // -ate moves
  pixilate: { Normal: 1.5 * 1.2 },
  refrigerate: { Normal: 1.5 * 1.2 },
  aerilate: { Normal: 1.5 * 1.2 },
  normalize: { Normal: 1.2 },
  // weather
  drizzle: { Water: 1.4, Fire: 0.6 },
  drought: { Fire: 1.4, Water: 0.6 }
};
const HARDCODED_MOVE_WEIGHTS = {
  // Fails unless user is asleep
  snore: 0,
  // Hard to use
  lastresort: 0.1,
  dreameater: 0.1,
  // Useless without Berry + sucks even then
  belch: 0.2,
  // Power increases in conditions within our control
  acrobatics: 1.75,
  // not 2 because of the opportunity cost of forgoing an item
  facade: 1.5,
  // not 2 because we forgo an item AND get badly poisoned
  // Power increases in conditions out of our control that may occur
  avalanche: 1.2,
  hex: 1.2,
  // screens
  lightscreen: 3,
  reflect: 3,
  auroraveil: 3,
  // TODO: make sure AVeil always gets Snow?
  // hazard removal
  defog: 2,
  rapidspin: 1.2,
  // mess with the opponent
  taunt: 2,
  disable: 2,
  encore: 3,
  // healing moves
  // TODO: should healing moves be more common on bulkier pokemon?
  // 25%
  junglehealing: 3,
  lifedew: 3,
  // 50%
  milkdrink: 5,
  moonlight: 5,
  morningsun: 5,
  recover: 5,
  roost: 5,
  shoreup: 5,
  slackoff: 5,
  softboiled: 5,
  synthesis: 5,
  // delayed/consequence
  rest: 3,
  // has sleeptalk potential
  wish: 2,
  // requires terrain
  steelroller: 0.1
};
const WEIGHT_BASED_MOVES = ["heatcrash", "heavyslam", "lowkick", "grassknot"];
const SPEED_BASED_MOVES = ["gyroball", "electroball"];
//# sourceMappingURL=cg-team-data.js.map
