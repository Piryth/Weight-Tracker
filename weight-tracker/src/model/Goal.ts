import Profile from "./Profile";
import {GoalTypes} from "./GoalTypes";

export class Goal {
    private _targetWeight: number;
    private _targetBodyFat: number;
    private _targetBodyMuscle: number;
    private _nbOfWeeks: number;
    private _remainingWeeks: number;

    private _goalType: GoalTypes;

    private _profile: Profile;


    constructor(targetWeight: number,
                targetBodyFat: number,
                targetBodyMuscle: number,
                nbOfWeeks: number,
                remainingWeeks: number,
                profile: Profile,
                goalType: GoalTypes) {
        this._targetWeight = targetWeight;
        this._targetBodyFat = targetBodyFat;
        this._targetBodyMuscle = targetBodyMuscle;
        this._nbOfWeeks = nbOfWeeks;
        this._remainingWeeks = remainingWeeks;
        this._profile = profile;
        this._goalType = goalType;
    }
}