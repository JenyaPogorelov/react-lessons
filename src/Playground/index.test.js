import Playground from "./index";
import {render} from "@testing-library/react";
import store from "../store";
import {Provider} from "react-redux";

describe('test blocks', () => {

    it('block', () => {
        const component = render(
            <Provider store={store}>
                <Playground />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });

});