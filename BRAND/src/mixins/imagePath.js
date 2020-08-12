export const imagePath = {
  methods: {
    makeImagePath(product) {
      return require(`../assets/img/products/${product.img}`);
    }
  }
}
