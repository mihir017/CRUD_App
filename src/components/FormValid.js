const email_valid =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const FormValid = ({ name, email, comment }) => {
  let error = {};

  if (!name) {
    error.errName = "Please Fill the name field.";
  } else if (name > 5) {
    error.name = "Name must be less than 5 character.";
  }
  if (!email) {
    error.errEmail = "Please Fill the Email field.";
  } else if (!email_valid.test(email)) {
    error.errEmail = "Email is not valid";
  }
  if (!comment) {
    error.errComment = "Please Fill the Comment field.";
  }

  return error;
};
