import React, {Component} from 'react';
import {connect} from 'react-redux'
import ProjectApi from '../utils/ProjectApi'
import {Link} from 'react-router'

const DumbComponent = ({item, pathname}) => (
    <div>
        <Link to={`${pathname}/${item.id}`}>{item.name}{item.phone}</Link>
    </div>
)

class Topic extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.api.getUsers()
    }

    render() {
        const {pathname} = this.props
        const getUserDataMap = this.props.users.map((item) => {
            return (
                <div>
                    <DumbComponent item={item} pathname={pathname}/>
                </div>
            )
        })
        return (
            <div>
                This is Topic component
                <h3>{pathname.topicId}</h3>
                {getUserDataMap}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {users: state.users.data}
}

const mapDispatchToProps = (dispatch) => {
    return {api: new ProjectApi(dispatch)};
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic)
