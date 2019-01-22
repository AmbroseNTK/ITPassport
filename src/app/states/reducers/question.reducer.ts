import * as QuestionAction from '../actions/question.action';
import Question from '../models/question.model';

export type Action = QuestionAction.All;

const defaultQuestion = {
    list: {}
}

export function questionReducer(state: Question = defaultQuestion, action: Action) {
    switch (action.type) {
        case QuestionAction.FETCH_SUCCESS:
            return { ...state, list: action.payload.list };
    }
}