export const emailPasswordValidation = (password, email) => {
    console.log(email.current.value, password.current.value);
    const passwordValidation = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password.current.value)
    const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.current.value)
    if (!passwordValidation) return "Invalid password [A-Z,a-z,0-9]"
    if (!emailValidation) return "Invalid Email [A-Z,a-z,0-9,@]"
    return null
}