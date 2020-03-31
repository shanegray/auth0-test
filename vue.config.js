module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api": {
        target: "https://europe-west2-gradys-fire-door-dev.cloudfunctions.net"
      }
    }
  }
};
