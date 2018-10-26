/*
 * Copyright (C) 2012-2017  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


import {_, pgettext, interpolate} from "translate";
import {LearningHubSection} from './LearningHubSection';
import {DummyPage} from './LearningPage';
import {Capture} from './Capture';
import {Defend} from './Defend';
import {Territory} from './Territory';
import {EndingTheGame} from './EndingTheGame';


export class TheBoard extends LearningHubSection {
    static section():string { return "the-board"; }
    static title():string { return pgettext("Tutorial section on the board", "The board!"); }
    static subtext():string { return pgettext("Tutorial section on the board", "Corners, sides, middle"); }
}
export class Ladders extends LearningHubSection {
    static section():string { return "ladders"; }
    static title():string { return pgettext("Tutorial section on ladders", "Ladders!"); }
    static subtext():string { return pgettext("Tutorial section on ladders", ""); }
}
export class Snapback extends LearningHubSection {
    static section():string { return "snapback"; }
    static title():string { return pgettext("Tutorial section on snapback", "Snapback!"); }
    static subtext():string { return pgettext("Tutorial section on snapback", "Sacrificing stones to come back and capture a group"); }
}
export class FalseEyes extends LearningHubSection {
    static section():string { return "false-eyes"; }
    static title():string { return pgettext("Tutorial section on false eyes", "False Eyes"); }
    static subtext():string { return pgettext("Tutorial section on false eyes", "Some eyes aren't really eyes"); }
}
export class CuttingStones extends LearningHubSection {
    static section():string { return "cutting-stones"; }
    static title():string { return pgettext("Tutorial section on cutting stones", "Cutting Stones"); }
    static subtext():string { return pgettext("Tutorial section on cutting stones", ""); }
}
export class JumpingStones extends LearningHubSection {
    static section():string { return "jumping-stones"; }
    static title():string { return pgettext("Tutorial section on jumping stones", "Jumping Stones"); }
    static subtext():string { return pgettext("Tutorial section on jumping stones", ""); }
}

export class Semeai extends LearningHubSection {
    static section():string { return "semeai"; }
    static title():string { return pgettext("Tutorial section on semeai", "Semeai"); }
    static subtext():string { return pgettext("Tutorial section on semeai", "Attacking eachother"); }
}
export class CountingLiberties extends LearningHubSection {
    static section():string { return "counting-liberties"; }
    static title():string { return pgettext("Tutorial section on counting liberties", "Counting Liberties"); }
    static subtext():string { return pgettext("Tutorial section on counting liberties", "Known when you can win a battle"); }
}
export class Seki extends LearningHubSection {
    static section():string { return "seki"; }
    static title():string { return pgettext("Tutorial section on seki", "Seki"); }
    static subtext():string { return pgettext("Tutorial section on seki", "Mutual life"); }
}
export class KoBattles extends LearningHubSection {
    static section():string { return "ko-battles"; }
    static title():string { return pgettext("Tutorial section on ko battles", "Ko Battles!"); }
    static subtext():string { return pgettext("Tutorial section on ko battles", "Exploiting the Ko rule"); }
}

export class WhatIsGo extends LearningHubSection {
    static section():string { return "what-is-go"; }
    static title():string { return pgettext("Tutorial section on what is go", "What is Go?"); }
    static subtext():string { return pgettext("Tutorial section on what is go", ""); }
}
export class SportOfGoAndGoAsArt extends LearningHubSection {
    static section():string { return "sport-of-go-and-go-as-art"; }
    static title():string { return pgettext("Tutorial section on the sport of Go", "Sport of Go"); }
    static subtext():string { return pgettext("Tutorial section on the sport of Go", "Go as Art"); }
}
export class BenefitsOfLearningGo extends LearningHubSection {
    static section():string { return "benefits-of-learning-go"; }
    static title():string { return pgettext("Tutorial section on beneifts to learning go", "Benefits of learning Go"); }
    static subtext():string { return pgettext("Tutorial section on beneifts to learning go", "It's more than just a game!"); }
}
export class BasicMannersOfGo extends LearningHubSection {
    static section():string { return "basic-manners-of-go"; }
    static title():string { return pgettext("Tutorial section on the manners in the game", "Basic manners of Go"); }
    static subtext():string { return pgettext("Tutorial section on the manners in the game", "Be polite, it's Go!"); }
}
export class Terminology extends LearningHubSection {
    static section():string { return "terminology"; }
    static title():string { return pgettext("Tutorial section on terminology", "Terminology"); }
    static subtext():string { return pgettext("Tutorial section on terminology", "Say what now?"); }
}


export let sections = [
    [pgettext("Learning hub section title", "Fundamentals"),
        [Capture, Defend, Territory, EndingTheGame]],
    [pgettext("Learning hub section title", "Intermediate"),
        [TheBoard, Ladders, Snapback, FalseEyes, CuttingStones, JumpingStones]],
    [pgettext("Learning hub section title", "Advanced"),
        [Semeai, CountingLiberties, Seki, KoBattles ]],
    /*
    [pgettext("Learning hub section title", "About The Game"),
        [WhatIsGo, SportOfGoAndGoAsArt, BenefitsOfLearningGo, BasicMannersOfGo, Terminology]],
    */
];

export let allsections:Array<typeof LearningHubSection> = [];
for (let S of sections) {
    allsections = allsections.concat(S[1]);
}

