class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  createUser(user) {
    if (!user.userId || !user.email || !user.password) {
      throw new Error("User ID, email, and password are required");
    }

    this.userRepository.save(user);
    return user;
  }

  getUserById(userId) {
    const user = this.userRepository.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  getAllUsers() {
    return this.userRepository.findAll();
  }

  deleteUser(userId) {
    const user = this.getUserById(userId);
    this.userRepository.delete(userId);
    return user;
  }
}

module.exports = UserService;