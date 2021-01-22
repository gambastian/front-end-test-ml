import React from 'react';
import '../assets/styles/BreadCrumb.scss';

function BreadCrumb(props) {

    return (
        <div className="BreadCrumbContainer">
            <ul className="breadcrumb" >
                { props.categories !== undefined && props.categories.length > 0 &&
                    props.categories.map((cat) => <li key={cat}>{cat}</li>)
                }
            </ul>
        </div>
    );
}

export default BreadCrumb;