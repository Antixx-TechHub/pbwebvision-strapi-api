module.exports = ({ env }) => ({
  // ...
  upload: {
    // Update your cloudinary credentials here
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "do....",
        api_key: "6465...........",
        api_secret: "T.........................",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
