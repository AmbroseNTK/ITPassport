import * as QuestionAction from '../actions/question.action';
import Question from '../models/question.model';
import { list } from 'tar';

export type Action = QuestionAction.All;

const defaultQuestion = {
    list: {},
    selection: {}
}

function generateQuestions(list: {}, categories: Array<string>, quantity: number) {
    let selection = []
    let majorList = Object.keys(list);
    for (let i = 0; i < categories.length; i++) {
        let cat = categories[i].split(".");
        let major = parseInt(cat[0]);
        let minor = parseInt(cat[1]);
        let minorObj = list[majorList[major]]
        let minorList = Object.keys(minorObj);
        let minorSelected = minorObj[minorList[minor]];
        let keys = Object.keys(minorSelected);
        for (let i = 0; i < keys.length; i++) {
            selection.push(minorSelected[keys[i]]);
        }
    }
    selection = selection.sort(() => Math.random() - 0.5);
    selection = selection.slice(0, quantity);
    return selection;
}

export function questionReducer(state: Question = defaultQuestion, action: Action) {
    switch (action.type) {
        case QuestionAction.FETCH_SUCCESS:
            return { ...state, list: action.payload.list };
        case QuestionAction.GENERATE:
            return { ...state, selection: generateQuestions(state.list, action.payload.categories, action.payload.quantity) };
        default:
            return state;
    }
}