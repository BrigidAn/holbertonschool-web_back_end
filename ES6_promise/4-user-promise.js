// Returns a resolved promise with user object
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}