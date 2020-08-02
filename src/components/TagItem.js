import React from 'react';

const TagItem = ( props ) => {
    return (
        <div>
            <p>Tag name: {props.tagData.name}</p>
        </div>
    );
}

export default TagItem;