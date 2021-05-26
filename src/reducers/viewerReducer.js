import { SETUP_MOL_VIEWER, SETUP_POC_BULB } from '../actions/viewerActions';
import { bulbDefaultColor } from '../components/searchpage/PocketBulb';

const initialState = {
    viewer: null,
    bulb: null,
    pdbid: null,
};

export default function viewerReducer(state = initialState, action) {
    switch (action.type) {
        case SETUP_MOL_VIEWER:
            return {
                ...state,
                viewer: action.payload.viewer,
            };
        case SETUP_POC_BULB:
            let bulb = []
            action.payload.bulb.forEach(() => {
                bulb.push(state.viewer.addShape({hidden: true, color: bulbDefaultColor, opacity: 0.8 }))
            });
            return{
                ...state,
                bulb: bulb,
                pdbid: action.payload.pdbid,
            };
        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}