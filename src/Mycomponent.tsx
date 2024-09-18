import React, { Component } from 'react';
import './interfaces/index';
import PropTypes from 'prop-types';

// const MyComponent: React.FC<PersonHasChildren> = (props) => {
//     const { name = '기본 이름', favoriteNumber, children } = props;
//     return (
//         <div>
//             안녕하세요, 제 이름은 {name}입니다. children 값은 {children}입니다.
//             <br />
//             제가 좋아하는 숫자는 {favoriteNumber}입니다.
//         </div>
//     );
// };
// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired,
//     children: PropTypes.node,
// };

class MyComponent extends Component<PersonHasChildren> {
    static defaultProps = {
        name: '기본 이름',
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
        children: PropTypes.node,
    };
    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. children 값은 {children}
                입니다. <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}

export default MyComponent;
