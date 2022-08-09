import * as ActionTypes from '../../actions/layout.actions';

export interface LayoutStateInt {
  isSidebarOpen: boolean;
  isMobile: boolean;

  count: number;
}

export const initialState: LayoutStateInt = {
  isSidebarOpen: false,
  isMobile: false,
  count: 0,
};

export function layoutReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDEBAR: {
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    }
    case ActionTypes.ISMOBLIE: {
      return { ...state, isMobile: action.payload };
    }

    case ActionTypes.INCREASE.type: {
      return { ...state, count: state.count + action.payload };
    }

    case ActionTypes.DECREASE.type: {
      return { ...state, count: state.count - action.payload };
    }
    default: {
      return state;
    }
  }
}
