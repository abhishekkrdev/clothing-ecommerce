import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";
import "./collections-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  console.log(collections);

  return (
    <div className="collections-overview">
      {collections.map(({ id, title, items }) => {
        return <CollectionPreview key={id} title={title} items={items} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);
