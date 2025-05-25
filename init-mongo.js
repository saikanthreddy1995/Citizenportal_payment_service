db.createUser({
  user: "mongo_user",
  pwd: "mongo_pass123",
  roles: [{ role: "readWrite", db: "payments" }]
});
