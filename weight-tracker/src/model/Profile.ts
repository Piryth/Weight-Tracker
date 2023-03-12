import {GoalTypes} from "./GoalTypes";
import {Goal} from "./Goal";

export default class Profile {

    private _pseudo: string;
    private _weight: number;
    private _bodyFat: number;
    private _goal: Goal;

    constructor(pseudo: string, weight: number, bodyFat: number, goal: Goal) {
        this._pseudo = pseudo;
        this._weight = weight;
        this._bodyFat = bodyFat;
        this._goal = goal;
    }


    get pseudo(): string {
        return this._pseudo;
    }

    set pseudo(value: string) {
        this._pseudo = value;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }

    get bodyFat(): number {
        return this._bodyFat;
    }

    set bodyFat(value: number) {
        this._bodyFat = value;
    }


    get goal(): Goal {
        return this._goal;
    }

    set goal(value: Goal) {
        this._goal = value;
    }
}