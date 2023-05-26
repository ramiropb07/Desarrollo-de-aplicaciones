function iniciarSesion(usuario, contrasena) {
  // Comprobación de usuario y contraseña
  if (usuario === 'admin' && contrasena === '123456') {
    return true; // Coinciden
  } else {
    return false; // No coinciden
  }
}
                                              "No se especifica el modulo, asi que pongo uno generico"