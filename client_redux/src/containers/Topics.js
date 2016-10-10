import React, { Component, PropTypes } from 'react';
import {Link,Match} from 'react-router'

import Empty from '../components/Empty'
import Topic from '../containers/Topic'
import Show from '../containers/Show'

class Topics extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {pathname} = this.props
        return(
            <div>
                <ul>
                    <li><Link to={`${pathname}/rendering`}>Rendering</Link></li>
                    <li><Link to={`${pathname}/foo`}>Fooo</Link></li>
                </ul>
                <br/>
                <Match
                    exactly pattern={pathname}
                    component={Empty}>
                </Match>
                <Match pattern={`${pathname}/:topicId`} component={Topic}></Match>
            </div>
        );
    }
}


export default Topics;
