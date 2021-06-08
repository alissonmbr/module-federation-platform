const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = function override(config) {
  config.plugins.push(
    new ModuleFederationPlugin({
      name: "bundleApp", // Tem que ser o mesmo nome que definimos na plataforma
      filename: "remoteEntry.js", // Nome do script que sera carregado inicialmente pela plataforma
      exposes: {
        App: "./src/AppExport", // O nome tem que ser App como definido na plataforma
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
      },
    })
  );

  if (!config.output) {
    config.output = {};
  }
  // Importante para que o remoteEntry.js resolva automaticamente o path para carregar os demais scripts
  config.output.publicPath = "auto";
  return config;
};
