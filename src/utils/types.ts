type User = {
  _id: string;
  fullName: string;
  username: string;
  profilePic: string;
};

type LoginCredentials = {
  username: string;
  password: string;
};

type SignupInputsType = {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
};
