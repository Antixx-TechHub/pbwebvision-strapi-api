module.exports = ({ env }) => ({
  // Update your postgres credentials here
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-85.railway.app"),
      port: env.int("DATABASE_PORT", 7126),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "QltyiCxKXjTeuljPOURj"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
