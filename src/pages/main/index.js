import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    this.setState({ products: response.data.docs });
  };

  render() {
    return (
      <div className="list-name">
        {this.state.products.map((product) => (
          <h1>{product.title}</h1>
        ))}
      </div>
    );
  }
}
