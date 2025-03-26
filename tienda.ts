export function validatePassword(password: string) {
  const minLength = 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password)

  if (password.length < minLength) {
    return {
      valid: false,
      message: "La contraseña debe tener al menos 8 caracteres",
    }
  }

  if (!hasUpperCase) {
    return {
      valid: false,
      message: "La contraseña debe contener al menos una letra mayúscula",
    }
  }

  if (!hasNumber) {
    return {
      valid: false,
      message: "La contraseña debe contener al menos un número",
    }
  }

  if (!hasSpecialChar) {
    return {
      valid: false,
      message: "La contraseña debe contener al menos un carácter especial",
    }
  }

  return {
    valid: true,
    message: "",
  }
}

