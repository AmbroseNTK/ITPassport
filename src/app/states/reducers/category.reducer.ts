import * as CategoryAction from '../actions/category.action';
import { Category } from '../models/category.model';

export type Action = CategoryAction.All;

const defaultCategory = {
    cat: {}
}

export function categoryReducer(state: Category = defaultCategory, action: Action) {
    switch (action.type) {
        case CategoryAction.FETCH_SUCCESS:
            return { ...state, cat: action.payload.cat };
        default:
            return state;
    }
}