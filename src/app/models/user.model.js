module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          user: String,
          password: String,
          email: String
        },
        { timestamps: true }
      )
    );
    
    return User;
  };