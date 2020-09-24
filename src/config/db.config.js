module.exports = {
  HOST: "ec2-3-226-231-4.compute-1.amazonaws.com",
  USER: "vtfrgwfsqbvhvh",
  PASSWORD: "14aeae52f877d78a0f0267d98a9fba095f3fe608e25075cb77ef44b8420428e2",
  DB: "d15mhmu4v87qvd",
  dialect: "postgres",
  dialectOptions: {
    ssl: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
